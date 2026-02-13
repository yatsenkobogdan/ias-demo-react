export default function NavCard({ title, count }: { title: string; count: string }) {
  return (
    <div className="h-[150px] w-[340px] rounded-[16px] bg-[#F3F5F8] p-5">
      <div className="flex items-center justify-between">
        <div className="text-[14px] font-semibold text-primary">
          {title.toUpperCase()}
        </div>
        <div className="text-primary">→</div>
      </div>

      <div className="mt-6 flex items-center justify-between text-[12px] text-slate-600">
        <span>КОЛИЧЕСТВО</span>
        <span className="font-semibold text-slate-800">{count}</span>
      </div>

      <div className="mt-2 h-px w-full bg-slate-200" />
    </div>
  );
}
