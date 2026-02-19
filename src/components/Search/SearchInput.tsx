import { useState } from "react";
import clsx from "clsx";
import ChemicalSearchEditorModal from "../ChemicalSearchEditor/ChemicalSearchEditorModal";
import { ChemSearchIcon, Icon } from "@/ui/icons";
import Tooltip from "../base/Tooltip/Tooltip";

type TSearchInputProps = {
  className?: string;
};

export default function MaterialSearchInput({ className }: TSearchInputProps) {
  const [value, setValue] = useState("");
  const [ketcherOpen, setKetcherOpen] = useState(false);

  return (
    <>
      <div className={clsx("relative w-full max-w-[680px]", className)}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Поиск по материалам, элементам"
          className={clsx(
            "h-[44px] w-full rounded-md7 border border-inputBorder bg-white pl-4 pr-10 text-[15px] outline-none",
            "focus:border-slate-400"
          )}
        />

        <Tooltip content="Ввод структуры вещества" placement="bottom">
          <button
            type="button"
            aria-label="Открыть поиск по структуре"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md7 p-2 hover:bg-slate-100"
            onClick={() => setKetcherOpen(true)}
          >
            <Icon icon={ChemSearchIcon} size={18} />
          </button>
        </Tooltip>
        
      </div>

      <ChemicalSearchEditorModal
        open={ketcherOpen}
        onClose={() => setKetcherOpen(false)}
        onDone={(smiles) => setValue(smiles)}
      />
    </>
  );
}
