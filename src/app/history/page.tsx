import Link from "next/link";

const history = [
  "Идея создать самый быстрый в мире гусеничный автомобиль на базе Bentley принадлежит Константину Заруцкому (известному как Академег). Для её реализации он обратился к мастерской Jagger Garage, где главным конструктором проекта стал Иван Турлаков — выпускник кафедры колесных и гусеничных машин (КГМ) СПбГПУ, с детства увлекавшийся постройкой вездеходов. Свой первый вездеход он собрал ещё в 15 лет.",
  "Главной технической сложностью проекта стали гусеницы: ни одна серийная модель не отвечала требованиям скорости и надежности. Специальные полотна изготовил завод «Композит», модернизировав свою снегоходную продукцию. Под них создали уникальное шасси, подвеску, на которую установили кузов от Bentley Continental. Так на свет появился «Ультратанк».",
  "Уже в 2019 году на испытаниях машина развила скорость 130 км/ч, превысив действующий мировой рекорд Книги Гиннесса (110 км/ч). А в конце того же года на льду Байкала был официально установлен рекорд России для гусеничной техники на ледяной трассе, составивший 125 км/ч.",
  "В процессе создания стало очевидно, что новое резинокордовое полотно перспективно, и под него решили спроектировать шасси. Так стартовал проект «П-2». Ключевой сложностью таких шасси с бортовым поворотом и длинноходной подвеской является риск схода гусеницы, поэтому полотно и подвеску необходимо было разрабатывать как единую систему.",
  "На шасси «П-2» была реализована модульная концепция, позволяющая устанавливать любой кузов. Это наглядно продемонстрировали на Петербургском международном экономическом форуме (ПМЭФ), выставив два шасси: с кузовом Bentley-рекордсмена и с кузовом «Победы».",
  "Но на этом парни не остановились и не начали продажи, а приступили к жесточайшим ходовым испытаниям, бросая вездеход в самые разные стихии, стараясь сломать её самыми ухищрёнными способами, пока на одном из выездов на лёд, проломили его и утопили шасси с кузовом Победы.",
];

const milestones = [
  ["2019", "130 км/ч на испытаниях"],
  ["125 км/ч", "официальный рекорд России на льду Байкала"],
  ["П-2", "модульное шасси под резинокордовое полотно"],
  ["P-4", "переход к утилитарной серийной платформе"],
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-white">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-20" />
      <section className="section-shell relative z-10 py-20">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-[8px] border border-white/12 bg-white/[0.045] px-4 py-2 text-sm text-white/70 transition hover:border-steel/45 hover:text-white"
        >
          На главную
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-steel">
              Jagger Garage
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-none md:text-7xl">
              История компании
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
              От рекордного гусеничного Bentley до инженерной платформы P-4,
              созданной для тяжелых условий и серийного производства.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {milestones.map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[8px] border border-white/10 bg-white/[0.045] p-4 shadow-glass backdrop-blur-2xl"
                >
                  <div className="text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-sm leading-5 text-white/56">{label}</div>
                </div>
              ))}
            </div>
          </aside>

          <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl md:p-10">
            <div className="space-y-7 text-lg leading-9 text-white/72">
              {history.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
