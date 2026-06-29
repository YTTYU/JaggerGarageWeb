import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-white">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
      <section className="section-shell relative z-10 flex min-h-screen flex-col justify-center py-20">
        <Link href="/" className="mb-10 w-fit rounded-[8px] border border-white/12 bg-white/[0.045] px-4 py-2 text-sm text-white/70 transition hover:border-ember/45 hover:text-white">
          На главную
        </Link>

        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Jagger Garage</p>
          <h1 className="text-balance text-5xl font-semibold leading-none md:text-7xl">
            История компании
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/64">
            Раздел готовится. Здесь появится история развития инженерной команды, ключевых этапов проекта P-4 и перехода от цифровой модели к серийному производству.
          </p>
        </div>
      </section>
    </main>
  );
}
