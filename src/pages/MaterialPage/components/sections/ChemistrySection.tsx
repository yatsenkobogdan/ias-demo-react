import { CHEMISTRY_ROWS } from "@/mocks/chemistryTableContent";
import ChemistryTable from "../tables/ChemistryTable";
import { Icon, WarningIcon } from "@/ui/icons";

export default function ChemistrySection() {
  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-slate-900">
          Химический состав
        </h3>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs text-rose-600 hover:underline"
        >
          <span className="text-rose-600">
            <Icon icon={WarningIcon} />
          </span>
          Источник химического состава
        </a>
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden">
        <ChemistryTable rows={CHEMISTRY_ROWS} />
      </div>
    </section>
  );
}
