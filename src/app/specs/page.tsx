import Link from "next/link";
import type { ReactNode } from "react";

const sections = [
  ["engine", "Двигатель"],
  ["transmission", "Трансмиссия"],
  ["tracks", "Гусеничный движитель"],
  ["amphibious", "Амфибийность"],
  ["comfort", "Комфорт"],
  ["equipment", "Оборудование"],
  ["transport", "Транспортировка"],
];

const summary = [
  ["Длина", "5100 мм"],
  ["Ширина", "2350 мм"],
  ["Высота", "2480 мм"],
  ["Клиренс", "480 мм"],
  ["Снаряженная масса", "3850 кг"],
  ["Грузоподъемность", "2000 кг на суше / 1500 кг на воде"],
  ["Скорость", "до 90 км/ч на суше / 6 км/ч на воде"],
  ["Запас хода", "500 км"],
];

const dimensions = [
  ["Колея", "1946 мм"],
  ["Грузовое пространство, ширина", "2150 мм"],
  ["Грузовое пространство, длина", "2920-3050 мм"],
  ["Погрузочная высота борта", "900 мм"],
  ["Высота борта", "350 мм"],
  ["Полная масса буксируемого прицепа", "3000-4000 кг"],
];

const engine = [
  ["Тип", "турбодизель"],
  ["Модель", "Cummins ISF 2.8"],
  ["Рабочий объем", "2.8 л"],
  ["Мощность", "170 л.с."],
  ["Крутящий момент", "400 Н·м"],
  ["Топливные баки", "240-286 л, два бака"],
];

const transmission = [
  ["Коробка передач", "ZF, автоматическая, 6-ступенчатая"],
  ["Главная передача", "ГАЗ-34039"],
  ["Бортовой редуктор", "ГАЗ-71"],
  ["Тормозная система", "дисковая"],
  ["Система натяжения гусениц", "гидравлическая, раздельно регулируемая"],
  ["Отбор мощности", "раздаточная коробка с возможностью механического отбора мощности"],
];

const tracks = [
  ["Тип полотна", "цельное резинокордовое, усиленное стальным тросом и композитными закладными"],
  ["Ширина полотна", "400 мм"],
  ["Протектор для твердого покрытия", "26 мм"],
  ["Протектор для слабонесущего грунта", "56 мм"],
  ["Среднее удельное давление", "0.155 кг/см² / 15.2 кПа"],
  ["Подвеска", "рычажно-балансирная, длинноходовая, пружинная, с телескопическими амортизаторами"],
];

const equipment = [
  "Воздушный компрессор с ресивером 6 бар / 20 литров.",
  "Две водооткачивающие трюмные помпы производительностью 200 л/мин.",
  "Влагозащищенная электрическая лебедка.",
  "Фаркоп под американский квадрат с занижением 2 дюйма / 50 мм.",
  "Бортовая гидросистема.",
  "Автономные дизельные отопители.",
  "Мультифункциональный прибор с GPS.",
  "Две АКБ 12 В / 120 А·ч и генератор 12 В / 120 А.",
];

const comparison = [
  ["Модель", "P-4", "ГАЗ-34039", "СТГМ-6.10", "MOROOKA MST-600VD"],
  ["Масса", "3900 кг", "4500 кг", "11500 кг", "4400 кг"],
  ["Грузоподъемность на суше", "2000 кг", "1500 кг", "2500 кг", "3800 кг"],
  ["Масса прицепа", "4000 кг", "2000 кг", "6500 кг", "нет данных"],
  ["Ширина гусеницы", "400 мм", "390 мм", "560 мм", "500 мм"],
  ["Давление на грунт", "0.115 кгс/см²", "0.214 кгс/см²", "0.3 кгс/см²", "0.16 кгс/см²"],
  ["Максимальная скорость", "90 км/ч", "60 км/ч", "не менее 60 км/ч", "11 км/ч"],
  ["Двигатель", "Cummins ISF 2.8", "Д245.12С", "ЯМЗ-238 ВМ", "Kubota V3307"],
  ["Мощность", "170 л.с.", "108.8 л.с.", "240 л.с.", "73.4 л.с."],
  ["Трансмиссия", "ZF 6AT", "механическая 5-ступ.", "механическая", "полностью гидравлическая"],
  ["Привод", "задний", "передний", "передний", "передний"],
];

function SpecGrid({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-[8px] bg-white/[0.045] p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/38">{label}</div>
          <div className="mt-2 text-lg font-semibold leading-6 text-white">{value}</div>
        </div>
      ))}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-2xl md:p-8"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-steel">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}

export default function DetailedSpecsPage() {
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

        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-steel">P-4</p>
        <h1 className="text-balance text-5xl font-semibold leading-none md:text-7xl">
          Подробные характеристики P-4
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
          Полная техническая выжимка по платформе: массогабаритные параметры,
          силовая установка, трансмиссия, гусеничный движитель, кабина,
          амфибийность, транспортировка и сравнение с ближайшими аналогами.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3">
          {sections.map(([id, title]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-[8px] border border-white/12 bg-white/[0.045] px-4 py-3 text-sm text-white/72 transition hover:border-steel/45 hover:text-white"
            >
              {title}
            </a>
          ))}
        </nav>

        <div className="mt-14 rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-2xl md:p-8">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-steel">Ключевые данные</p>
          <SpecGrid items={summary} />
        </div>

        <div className="mt-5 grid gap-5">
          <Section id="engine" eyebrow="Силовая установка" title="Двигатель Cummins ISF 2.8">
            <SpecGrid items={engine} />
            <p className="mt-6 max-w-4xl leading-8 text-white/64">
              P-4 использует распространенный турбодизель Cummins ISF 2.8. Это
              практичный выбор для серийной техники: двигатель хорошо известен
              сервисным специалистам, распространен на коммерческом транспорте и
              упрощает снабжение запасными частями.
            </p>
          </Section>

          <Section id="transmission" eyebrow="Силовая линия" title="Трансмиссия и привод">
            <SpecGrid items={transmission} />
            <p className="mt-6 max-w-4xl leading-8 text-white/64">
              Машина может оснащаться автоматической трансмиссией ZF. Конструкция
              также предусматривает раздаточную коробку и механический отбор
              мощности для подключения дополнительного оборудования. Задний
              привод снижает натяжение свободной ветви гусеницы при движении и
              помогает добиться более равномерной эпюры давления.
            </p>
          </Section>

          <Section id="tracks" eyebrow="Ходовая часть" title="Резинокордовое полотно">
            <SpecGrid items={tracks} />
            <div className="mt-6 grid gap-4 text-base leading-8 text-white/64 lg:grid-cols-2">
              <p>
                P-4 оснащается одним из двух вариантов резинокордового полотна:
                с высоким грунтозацепом для слабонесущих грунтов, болот, снега и
                торфяников либо с низким профилем для относительно твердых
                покрытий, смешанной эксплуатации и длительных перегонов.
              </p>
              <p>
                Резинокордовое полотно отличается от шарнирного более равномерным
                распределением давления на грунт. Продольная упругость полотна,
                гидравлическое натяжение и задний привод уменьшают локальные пики
                давления и снижают вибрации, уплотняющие верхний слой слабого
                грунта.
              </p>
            </div>
          </Section>

          <Section id="amphibious" eyebrow="Кузов и вода" title="Амфибийность">
            <div className="space-y-5 leading-8 text-white/64">
              <p>
                P-4 может выходить на воду без дополнительной подготовки.
                Внутреннее пространство лодки изолировано от внешней среды, а
                геометрия кузова рассчитана на устойчивое движение по воде и
                выход на берег.
              </p>
              <p>
                Герметично запираемый откидной задний борт высотой 975 мм и
                погрузочной высотой 900 мм позволяет выходить из воды на берег с
                большим углом наклона без попадания воды в грузовой отсек.
                Одновременно борт работает как противоскользящий погрузочный
                трап со ступенями.
              </p>
              <p>
                Температурный режим в лодке поддерживается вентилятором и
                автономным отопителем. Топливные баки размещены внутри корпуса,
                что понижает центр тяжести и повышает устойчивость машины на
                воде.
              </p>
            </div>
          </Section>

          <Section id="comfort" eyebrow="Кабина" title="Комфорт и обслуживание">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[8px] bg-white/[0.045] p-5">
                <h3 className="text-xl font-semibold">Оснащение кабины</h3>
                <ul className="mt-5 space-y-3 text-white/64">
                  <li>Сиденья с амортизацией, подогревом, подлокотниками и ремнями безопасности.</li>
                  <li>Климатическая система с фильтрацией воздуха.</li>
                  <li>Автономный отопитель с независимыми топливными баками.</li>
                  <li>Подогрев ветровых стекол.</li>
                  <li>Электрорегулировка и подогрев зеркал.</li>
                  <li>Электростеклоподъемники.</li>
                  <li>ЖК-панель приборов с GPS-датчиком скорости на суше и воде.</li>
                </ul>
              </div>
              <div className="space-y-5 leading-8 text-white/64">
                <p>
                  Кабина спроектирована по автомобильной логике: высокая
                  обзорность, привычные органы управления, регулируемая рулевая
                  колонка с диапазоном 35 градусов и большое количество мест для
                  хранения, включая напольный ящик объемом 35 литров.
                </p>
                <p>
                  Дверные проемы 900 × 1300 мм упрощают посадку в зимней одежде и
                  со снаряжением. Из кабины предусмотрен проход в кузов через
                  вертикальную дверь с откидной ступенью, что удобно при
                  автономной работе и в плохую погоду.
                </p>
                <p>
                  Доступ к двигателю выполнен через люк в полу кабины 840 × 650
                  мм и проем моторного отсека 850 × 650 мм. Основные узлы можно
                  обслуживать, не покидая теплую кабину.
                </p>
              </div>
            </div>
          </Section>

          <Section id="equipment" eyebrow="Комплектация" title="Оборудование и ремонтопригодность">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <ul className="space-y-3 rounded-[8px] bg-white/[0.045] p-5 text-white/66">
                {equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="space-y-5 leading-8 text-white/64">
                <p>
                  Платформа P-4 разрабатывалась с учетом утилитарности,
                  отказоустойчивости и полевого ремонта. Узлы ходовой части
                  заменяются минимальным набором инструмента: ключами и домкратом.
                </p>
                <p>
                  Конструкция не содержит резко перегруженных элементов: нагрузки
                  распределены между большим количеством узлов. Рычаги можно
                  переставлять местами, шесть балансирных тележек и 28 катков
                  унифицированы и взаимозаменяемы.
                </p>
                <p>
                  Силовые элементы изготавливаются из стали 09Г2С, рассчитанной
                  на работу при низких температурах до -70 °C. Материал хорошо
                  сваривается, что важно для ремонта в полевых условиях.
                </p>
              </div>
            </div>
          </Section>

          <Section id="transport" eyebrow="Логистика" title="Три транспортных положения">
            <div className="grid gap-6 leading-8 text-white/64 lg:grid-cols-3">
              <div className="rounded-[8px] bg-white/[0.045] p-5">
                <h3 className="text-xl font-semibold text-white">Рабочее</h3>
                <p className="mt-4">
                  Полностью готовое положение для движения по снегу, болоту,
                  слабонесущим грунтам, дорогам и воде.
                </p>
              </div>
              <div className="rounded-[8px] bg-white/[0.045] p-5">
                <h3 className="text-xl font-semibold text-white">Транспортное</h3>
                <p className="mt-4">
                  Шасси ложится на отбойники, а высота машины составляет около
                  2460-2510 мм, что подходит большинству крытых прицепов.
                </p>
              </div>
              <div className="rounded-[8px] bg-white/[0.045] p-5">
                <h3 className="text-xl font-semibold text-white">Контейнерное</h3>
                <p className="mt-4">
                  Консоли движителей заменяются транспортными приспособлениями с
                  колесами, размещаются в кузове, а высота снижается примерно до
                  2200-2250 мм.
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl leading-8 text-white/64">
              P-4 можно перевозить полуприцепом, эвакуатором или морским
              контейнером. Перевод в транспортное положение выполняется с
              помощью домкрата и гаечного ключа.
            </p>
          </Section>

          <section className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-2xl md:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-steel">Сравнение</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Сравнительная таблица</h2>
            <div className="mt-7 overflow-x-auto">
              <table className="min-w-[920px] border-separate border-spacing-0 text-left text-sm">
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td
                          key={`${row[0]}-${cell}`}
                          className={`border-b border-white/10 px-4 py-4 align-top ${
                            index === 0
                              ? "w-56 text-white/44"
                              : index === 1
                                ? "font-semibold text-white"
                                : "text-white/62"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/40">
              Данные сравнительной таблицы перенесены из предоставленных
              материалов и используются как справочная инженерная выжимка.
            </p>
          </section>

          <section className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-2xl md:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-steel">Габариты</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Массогабаритные параметры</h2>
            <div className="mt-7">
              <SpecGrid items={dimensions} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
