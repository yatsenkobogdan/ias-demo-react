export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2B37] py-12 text-white">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="flex justify-center gap-[80px] font-normal text-[16px]">
          <a href="#" onClick={(e) => e.preventDefault()}>
            Главная
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Каталог
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Контакты
          </a>
        </div>

        <div className="mt-6 text-[12px] text-slate-400">
          © Права защищены · Политика конфиденциальности
        </div>
      </div>
    </footer>
  );
}
