import Link from "next/link";

const sections = [
  ["engine", "Двигатель"],
  ["transmission", "Трансмиссия"],
  ["tracks", "Гусеничный движитель"],
  ["amphibious", "Амфибийность"],
  ["comfort", "Комфорт"],
  ["equipment", "Оборудование"],
  ["transport", "Транспортировка"],
];

export default function DetailedSpecsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-white">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
      <section className="section-shell relative z-10 py-20">
        <Link href="/" className="mb-10 inline-flex rounded-[8px] border border-white/12 bg-white/[0.045] px-4 py-2 text-sm text-white/70 transition hover:border-ember/45 hover:text-white">
          На главную
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">P-4</p>
        <h1 className="text-balance text-5xl font-semibold leading-none md:text-7xl">
          Подробные характеристики P-4
        </h1>

        <nav className="mt-10 flex flex-wrap gap-3">
          {sections.map(([id, title]) => (
            <a key={id} href={`#${id}`} className="rounded-[8px] border border-white/12 bg-white/[0.045] px-4 py-3 text-sm text-white/72 transition hover:border-ember/45 hover:text-white">
              {title}
            </a>
          ))}
        </nav>

        <div className="mt-14 grid gap-4">
          {sections.map(([id, title]) => (
            <section key={id} id={id} className="scroll-mt-24 rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-2xl md:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-steel">Раздел</p>
              <h2 className="text-3xl font-semibold">{title}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-white/62">
                Подробные данные будут добавлены после финализации технической спецификации.
              </p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
