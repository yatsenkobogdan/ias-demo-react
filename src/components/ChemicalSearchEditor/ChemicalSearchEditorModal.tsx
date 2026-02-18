import { useMemo, useRef, useState } from "react";

import { Editor } from "ketcher-react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import "ketcher-react/dist/index.css";

import Modal from "../Modal/Modal";

type TChemicalSearchEditorModalProps = {
  open: boolean;
  onClose: () => void;
  onDone: (smiles: string) => void;
};

type TKetcherApi = {
  getMolfile: () => Promise<string>;
};

type TIndigoConvertResponse =
  | { struct?: string; result?: string; smiles?: string }
  | unknown;

function extractSmilesFromIndigoResponse(responseBody: string): string {
  try {
    const parsedResponse = JSON.parse(responseBody) as TIndigoConvertResponse;

    if (parsedResponse && typeof parsedResponse === "object") {
      const responseObject = parsedResponse as Record<string, unknown>;

      const smilesCandidate =
        responseObject.struct ?? responseObject.result ?? responseObject.smiles;

      if (typeof smilesCandidate === "string") {
        return smilesCandidate.trim();
      }

      return "";
    }

    return "";
  } catch {
    return responseBody.trim();
  }
}

export default function ChemicalSearchEditorModal({
  open,
  onClose,
  onDone,
}: TChemicalSearchEditorModalProps) {
  const ketcherApiRef = useRef<TKetcherApi | null>(null);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const structServiceProvider = useMemo(() => {
    return new StandaloneStructServiceProvider();
  }, []);

  const handleConfirm = async (): Promise<void> => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const ketcherApi = ketcherApiRef.current;

      if (!ketcherApi) {
        throw new Error("Ketcher ещё не инициализировался");
      }

      const molfile = await ketcherApi.getMolfile();

      const convertResponse = await fetch("/indigo/v2/indigo/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input_format: "chemical/x-mdl-molfile",
          output_format: "chemical/x-daylight-smiles",
          struct: molfile,
        }),
      });

      const responseBody = await convertResponse.text();

      if (!convertResponse.ok) {
        throw new Error(responseBody);
      }

      const smiles = extractSmilesFromIndigoResponse(responseBody);

      if (!smiles) {
        throw new Error("Не удалось получить SMILES");
      }

      onDone(smiles);
      onClose();
    } catch (unknownError: unknown) {
      if (unknownError instanceof Error) {
        setErrorMessage(unknownError.message);
      } else {
        setErrorMessage("Ошибка при получении SMILES");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditorError = (message: unknown): void => {
    setErrorMessage(String(message));
  };

  const handleEditorInit = (ketcherInstance: unknown): void => {
    ketcherApiRef.current = ketcherInstance as TKetcherApi;
    (window as any).ketcher = ketcherInstance;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Поиск по структуре"
      className="max-w-none w-[96vw] h-[92vh] p-0"
    >
      <div className="flex h-[calc(92vh-56px)] flex-col">
        <div className="flex-1 min-h-0">
          <Editor
            staticResourcesUrl=""
            structServiceProvider={structServiceProvider}
            errorHandler={handleEditorError}
            onInit={handleEditorInit}
          />
        </div>

        <div className="border-t border-slate-200 px-4 py-3">
          {errorMessage && (
            <div className="mb-2 text-sm text-red-600">{errorMessage}</div>
          )}

          <div className="flex w-full items-center justify-end gap-2 mb-2">
            <button
              type="button"
              className="rounded-md7 w-[200px] border border-slate-300 px-3 py-2 text-md"
              onClick={onClose}
              disabled={isLoading}
            >
              Отмена
            </button>

            <button
              type="button"
              className="rounded-md7 w-[200px] bg-primary px-3 py-2 text-md font-semibold text-white disabled:opacity-60"
              onClick={handleConfirm}
              disabled={isLoading}
            >
              {isLoading ? "Подготовка..." : "Готово"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}