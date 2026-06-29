"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Mail, Menu, Phone, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { CursorField } from "@/components/CursorField";
import { LenisProvider } from "@/components/LenisProvider";
import { P41Scene } from "@/components/P41Scene";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BASE_PATH } from "@/lib/base-path";

const nav = ["Технологии", "Характеристики", "Галерея", "О компании"];

const contacts = {
  phone: "+792132277788",
  phoneLabel: "+7 921 322-77-88",
  email: "info@jaggergarage.ru",
  vk: "https://vk.com/jagger_garage",
  youtube: "https://www.youtube.com/watch?v=ATKgAEqzKvQ&list=PLiCpP_44QZBwJO5NsC3Im6QBYj_JA2kn3&index=36",
  telegram: "https://t.me/Jagger_garage",
};

const advantages = [
  ["Создан для тяжелых условий", "Резинокордовые гусеницы", "Равномерное распределение нагрузки и низкое давление на грунт."],
  ["Скорость до 90 км/ч", "Высокая мобильность", "Быстрое перемещение между объектами без ущерба проходимости."],
  ["Амфибийность", "Вода без доработок", "Выход на воду без дополнительной подготовки."],
  ["Контейнерная транспортировка", "Три положения", "Упрощенная логистика полуприцепом, эвакуатором или контейнером."],
  ["Движение по асфальту", "Без повреждения покрытия", "Резиновые гусеницы сохраняют твердое покрытие."],
  ["Автомобильный комфорт", "Привычное управление", "Просторная кабина и эргономика для длительных смен."],
  ["Резервирование систем", "Автономная надежность", "Повышенная устойчивость жизненно важных систем."],
  ["Обслуживание из салона", "Доступ без выхода наружу", "Основные узлы доступны даже в тяжелую погоду."],
];

const advantageGroups = [
  {
    title: "Проходимость и мобильность",
    items: [
      {
        title: "Резинокордовые гусеницы",
        text: "Бесшумность работы, отсутствие ограничений по типу поверхности, отсутствие обмерзания и большой срок эксплуатации.",
      },
      {
        title: "Скорость до 90 км/ч",
        text: "Высокая мобильность между объектами без ущерба проходимости. Скорость на воде — до 6 км/ч.",
      },
      {
        title: "Амфибийность",
        text: "P-4 может выходить на воду без дополнительной подготовки. Геометрия кузова рассчитана для уверенного движения по воде, а поднятые борта позволяют выходить на берег практически в любом подходящем месте.",
      },
      {
        title: "Автомобильный комфорт",
        text: "Привычные органы управления, просторная кабина и эргономика для длительных смен.",
      },
    ],
  },
  {
    title: "Эксплуатация и адаптация",
    items: [
      {
        title: "Движение по асфальту",
        text: "Резиновые гусеницы сохраняют твёрдое покрытие и позволяют работать без ограничений по типу поверхности.",
      },
      {
        title: "Контейнерная транспортировка",
        text: "Упрощённая логистика полуприцепом, эвакуатором или морским контейнером.",
      },
      {
        title: "Дополнительное оборудование",
        text: "Модульная конструкция P-4 позволяет устанавливать КМУ, вышки, сварочные модули, навесное и гидравлическое оборудование, снегоочистительный вал, аутригеры и буровые установки.",
      },
      {
        title: "Обслуживание из салона",
        text: "Основные узлы доступны без выхода наружу, в том числе при тяжелой погоде и автономной эксплуатации.",
      },
    ],
  },
];

const engineering = [
  ["Cummins ISF 2.8", "170 л.с.", "400 Н·м", "Турбодизель с запасом тяги для тяжелого грунта."],
  ["Автоматическая коробка ZF", "6 передач", "ZF 6AT", "Автомобильный уровень плавности и предсказуемого управления."],
  ["Длинноходная подвеска", "Плавность хода", "Стабильность", "Контроль кузова на снегу, колее, грязи и лесных дорогах."],
  ["Гидравлическое натяжение", "Ресурс гусениц", "Надежность", "Поддержание оптимальной работы движителя в экспедициях."],
];

const engineeringCards = [
  ["Cummins ISF 2.8", "170 л.с.", "400 Н·м", "Турбодизель с запасом тяги для тяжелого грунта."],
  ["Трансмиссия", "АКПП / МКПП", "Отбор мощности", "P-4 может оснащаться как автоматической, так и механической коробкой передач. Машина также оборудована раздаточной коробкой с возможностью механического отбора мощности."],
  ["Длинноходная подвеска", "Плавность хода", "Стабильность", "Контроль кузова на снегу, колее, грязи и лесных дорогах."],
  ["Гидравлическое натяжение", "Ресурс гусениц", "Надежность", "Поддержание оптимальной работы движителя в экспедициях."],
];

const specs = [
  ["Размеры", "5100 × 2350 × 2480 мм"],
  ["Масса", "3850 кг"],
  ["Грузоподъемность", "2000 кг на суше / 1500 кг на воде"],
  ["Двигатель", "Cummins ISF 2.8, 170 л.с., 400 Н·м"],
  ["Трансмиссия", "ZF 6AT"],
  ["Максимальная скорость", "90 км/ч"],
  ["Скорость на воде", "6 км/ч"],
  ["Запас хода", "500 км"],
  ["Давление на грунт", "0,155 кг/см²"],
];

const cabin = [
  "Подогрев сидений",
  "Климатическая система",
  "Отопители",
  "Электропакет",
  "Подогрев стекол",
  "GPS-панель приборов",
  "Беспроводная зарядка",
  "Обслуживание двигателя из салона",
];

const cabinFeatures = [
  "Подогрев сидений",
  "Климатическая система",
  "Отопители",
  "Электропакет",
  "Подогрев стекол",
  "GPS-панель приборов",
  "Обслуживание двигателя из салона",
  "Внутренний проход в кузов для безопасного перемещения экипажа без выхода наружу",
];

const gallery = [
  [`${BASE_PATH}/images/p41-hero.png`, "Фронтальный ракурс P-4"],
  [`${BASE_PATH}/images/p41-cabin.png`, "Кабина P-4"],
  [`${BASE_PATH}/images/p41-front.png`, "Передняя проекция"],
  [`${BASE_PATH}/images/p41-rear.png`, "Задняя проекция"],
  [`${BASE_PATH}/images/p41-front-clay.png`, "Инженерный вид спереди"],
  [`${BASE_PATH}/images/p41-rear-clay.png`, "Инженерный вид сзади"],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-[8px] border border-white/10 bg-carbon/58 px-4 shadow-glass backdrop-blur-2xl md:px-6">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-[0.18em] text-white">
          <Image src={`${BASE_PATH}/images/jagger-logo.svg`} alt="" width={28} height={28} className="invert" />
          <span className="text-xs uppercase md:text-sm">Jagger Garage</span>
        </a>

        <nav className="hide-scrollbar hidden items-center gap-1 overflow-x-auto md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="rounded-[8px] px-3 py-2 text-sm text-white/68 transition hover:bg-white/[0.08] hover:text-white">
              {item}
            </a>
          ))}
          <Link href="/modifier" className="rounded-[8px] border border-ember/35 bg-ember/10 px-3 py-2 text-sm text-white transition hover:bg-ember/18">
            Модификатор
          </Link>
        </nav>

        <a
          href={`tel:${contacts.phone}`}
          className="hidden rounded-[8px] border border-ember/35 bg-ember/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember/18 lg:inline-flex"
        >
          {contacts.phoneLabel}
        </a>

        <Button asChild variant="ghost" size="icon" className="md:hidden" aria-label="Меню">
          <a href="#contacts"><Menu size={20} /></a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.18]);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-40" />

      <div className="pointer-events-none absolute inset-0">
        <P41Scene />
      </div>

      <motion.div style={{ y, opacity }} className="section-shell pointer-events-none relative z-10 flex min-h-[100svh] flex-col items-center justify-center pt-28 text-center">
        <div className="mb-5 rounded-[8px] border border-white/12 bg-white/[0.055] px-4 py-2 text-xs uppercase tracking-[0.28em] text-ice/82 backdrop-blur-xl">
          Серийное производство высокопроходимой техники
        </div>

        <h1 className="text-balance text-[clamp(64px,12vw,172px)] font-semibold leading-none tracking-normal text-white">
          P-4
        </h1>

        <p className="mt-4 text-balance text-[clamp(24px,4vw,54px)] font-medium leading-tight text-white">
          Снегоболотоход нового поколения
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
          Для работы там, где заканчиваются дороги.
        </p>

        <div className="mt-8 flex max-w-5xl flex-wrap justify-center gap-3 text-sm text-white/76">
          {["Дизельный двигатель", "АКПП", "2000 кг полезной нагрузки", "амфибийность", "скорость до 90 км/ч"].map((item) => (
            <span key={item} className="rounded-[8px] border border-white/12 bg-carbon/44 px-4 py-2 backdrop-blur-xl">{item}</span>
          ))}
        </div>

        <div className="pointer-events-auto mt-9 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#contacts">Связаться <Send size={18} /></a>
          </Button>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/modifier">Открыть модификатор <ArrowRight size={18} /></Link>
          </Button>

          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <a href="#характеристики">Изучить характеристики <ArrowDown size={18} /></a>
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-36 bg-gradient-to-t from-carbon to-transparent" />
    </section>
  );
}

function Advantages() {
  return (
    <section id="P-4" className="relative bg-carbon py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Платформа P-4</p>
            <h2 className="text-balance max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Создан для тяжелых условий и корпоративной эксплуатации
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/62">
            Утилитарная инженерная машина для нефтегаза, геологоразведки, энергетики, лесной промышленности, строительства и служб реагирования.
          </p>
        </Reveal>

        <div className="grid gap-8">
          {advantageGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-steel">{group.title}</p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {group.items.map((item) => (
                  <Reveal key={item.title}>
                    <Card className="group min-h-[250px] overflow-hidden border-white/8 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-ember/36 hover:bg-white/[0.055]">
                      <CardContent>
                        <h3 className="mb-5 text-2xl font-semibold leading-tight text-white md:text-[28px]">{item.title}</h3>
                        <p className="leading-7 text-white/62">{item.text}</p>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademegSupport() {
  return (
    <section className="relative overflow-hidden bg-carbon py-16 md:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden border-y border-white/14 py-12 text-center md:py-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/12 blur-3xl" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ember md:text-sm">
                Совместный проект
              </p>

              <div className="mt-9 flex min-h-36 w-full max-w-md items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.045] px-8 py-8 shadow-glass backdrop-blur-2xl">
                <span
                  className="block h-28 w-56 bg-ember drop-shadow-[0_0_34px_rgba(141,160,184,0.34)]"
                  role="img"
                  aria-label="Академег"
                  style={{
                    WebkitMaskImage: `url('${BASE_PATH}/images/akademig.svg')`,
                    maskImage: `url('${BASE_PATH}/images/akademig.svg')`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              </div>

              <p className="mt-9 max-w-2xl text-balance text-lg leading-8 text-white/72 md:text-xl md:leading-9">
                Академег — автомобильный блогер и партнёр проекта P-4, принимающий участие
                в развитии, испытаниях и популяризации машины.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Engineering() {
  return (
    <section id="технологии" className="relative overflow-hidden bg-[#0a0c0d] py-24 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />

      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Технологии</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Инженерия без компромиссов</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
            P-4 спроектирован как промышленная платформа: тяговитый дизель, автоматическая трансмиссия, длинноходная подвеска и гусеничный движитель для слабонесущих грунтов.
          </p>
        </Reveal>

        <Reveal className="relative min-h-[520px] overflow-hidden rounded-[8px]">
          <Image src={`${BASE_PATH}/images/p41-hero-2.png`} alt="Снегоболотоход P-4" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/10 to-transparent" />
          <div className="hidden">
            {["Рабочее", "Транспортное", "Контейнерное"].map((item) => (
              <div key={item} className="glass rounded-[8px] px-3 py-3 text-center text-sm text-white/82">{item}</div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="section-shell mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {engineeringCards.map(([title, statA, statB, text]) => (
          <Reveal key={title}>
            <Card>
              <CardContent>
                <p className="text-sm uppercase tracking-[0.22em] text-steel">{statA}</p>
                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                <p className="mt-5 text-3xl font-semibold text-ember">{statB}</p>
                <p className="mt-5 leading-7 text-white/62">{text}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section className="bg-graphite py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Транспортировка</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Три положения для сложной логистики</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/64">
              Машина адаптируется под доставку полуприцепом, эвакуатором и морским контейнером.
            </p>
            <Button asChild className="mt-6">
              <Link href="/modifier">Выбрать модификацию <ChevronRight size={18} /></Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            [`${BASE_PATH}/images/p41-front.png`, "Рабочее", "Полный дорожный просвет и готовность к эксплуатации."],
            [`${BASE_PATH}/images/p41-rear.png`, "Транспортное", "Сниженная высота и удобная фиксация для перевозки."],
            [`${BASE_PATH}/images/p41-front-clay.png`, "Контейнерное", "Конфигурация для морского контейнера и дальней доставки."],
          ].map(([src, title, text]) => (
            <Reveal key={title}>
              <div className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image src={src} alt={title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/62">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cabin() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 md:py-36">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-white/10">
          <Image src={`${BASE_PATH}/images/p41-cabin.png`} alt="Салон P-4" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-carbon/42" />
        </Reveal>

        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Кабина</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Комфорт автомобильного уровня</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {cabinFeatures.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.045] px-4 py-3 text-white/78">
                <Check size={18} className="shrink-0 text-ember" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section id="характеристики" className="bg-[#080a0b] py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Характеристики</p>
            <h2 className="text-4xl font-semibold md:text-6xl">Технические данные</h2>
          </div>
          <Button asChild variant="secondary">
            <a href="#contacts">Запросить спецификацию <ChevronRight size={18} /></a>
          </Button>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04]">
            {specs.map(([name, value], index) => (
              <div key={name} className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 md:grid-cols-[0.55fr_1fr] md:px-8">
                <div className="flex items-center gap-3 text-white/58">
                  <span className="font-mono text-xs text-ember">{String(index + 1).padStart(2, "0")}</span>
                  {name}
                </div>
                <div className="text-xl font-medium text-white md:text-2xl">{value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleGalleryPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const element = galleryRef.current;
    if (!element || element.scrollWidth <= element.clientWidth) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: element.scrollLeft,
    };
    setIsDragging(true);
    element.setPointerCapture(event.pointerId);
  };

  const handleGalleryPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !dragRef.current.active) return;
    const element = galleryRef.current;
    if (!element) return;

    event.preventDefault();
    element.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  };

  const stopGalleryDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    dragRef.current.active = false;
    setIsDragging(false);

    const element = galleryRef.current;
    if (element?.hasPointerCapture(event.pointerId)) {
      element.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="галерея" className="bg-carbon py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mb-10">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Галерея</p>
          <h2 className="text-balance max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Полноэкранная подача промышленного продукта
          </h2>
        </Reveal>
      </div>

      <div
        ref={galleryRef}
        onPointerDown={handleGalleryPointerDown}
        onPointerMove={handleGalleryPointerMove}
        onPointerUp={stopGalleryDrag}
        onPointerCancel={stopGalleryDrag}
        className={`hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 select-none touch-pan-x ${
          isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x"
        }`}
      >
        {gallery.map(([src, alt], index) => (
          <div key={src} className="relative h-[72vh] min-h-[460px] w-[86vw] shrink-0 snap-center overflow-hidden rounded-[8px] border border-white/10 md:w-[72vw]">
            <Image src={src} alt={alt} fill sizes="90vw" draggable={false} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/18" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-ember">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-2xl font-semibold">{alt}</h3>
              </div>
              <ArrowRight className="hidden text-white/72 md:block" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompactGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollGallery = (direction: -1 | 1) => {
    const element = galleryRef.current;
    if (!element) return;

    element.scrollBy({
      left: direction * element.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const lightboxImage = lightboxIndex === null ? null : gallery[lightboxIndex];

  return (
    <section id="галерея" className="bg-carbon py-18 md:py-28">
      <div className="section-shell">
        <Reveal className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Галерея</p>
            <h2 className="text-balance max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Полноэкранная подача промышленного продукта
            </h2>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollGallery(-1)} className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.045] text-white/76 transition hover:border-ember/45 hover:text-white" aria-label="Предыдущее фото">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => scrollGallery(1)} className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.045] text-white/76 transition hover:border-ember/45 hover:text-white" aria-label="Следующее фото">
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>

        <div
          ref={galleryRef}
          className="hide-scrollbar relative z-10 flex snap-x gap-4 overflow-x-auto pb-3 touch-pan-x"
        >
          {gallery.map(([src, alt], index) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative h-[310px] w-[84vw] shrink-0 snap-start overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] text-left transition hover:border-ember/36 sm:w-[48vw] md:h-[360px] lg:w-[31.5%]"
            >
              <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 84vw" draggable={false} className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/16" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-ember">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{alt}</h3>
                </div>
                <ArrowRight className="hidden shrink-0 text-white/70 md:block" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxImage ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/86 p-4 backdrop-blur-xl" onClick={() => setLightboxIndex(null)}>
          <button type="button" onClick={() => setLightboxIndex(null)} className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/14 bg-white/[0.06] text-white transition hover:border-ember/45" aria-label="Закрыть галерею">
            <X size={22} />
          </button>
          <div className="relative h-[82vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={lightboxImage[0]} alt={lightboxImage[1]} fill sizes="100vw" className="object-contain" priority />
          </div>
        </div>
      ) : null}
    </section>
  );
}

function CompanyAndContacts() {
  return (
    <section id="о-компании" className="relative bg-graphite py-24 md:py-36">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">О компании</p>
          <h2 className="text-5xl font-semibold md:text-7xl">Jagger Garage</h2>
          <p className="mt-6 text-2xl text-white/84">Инженерная компания полного цикла.</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
            От цифровой модели до серийного производства. Каждая машина разрабатывается и производится с применением современных технологий проектирования и ориентирована на эксплуатацию в самых тяжелых условиях.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {["Нефтегаз", "Геологоразведка", "Энергетика", "МЧС", "Экспедиции", "Госструктуры"].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.045] px-4 py-3 text-white/72">{item}</div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form id="contacts" className="glass rounded-[8px] p-5 md:p-8">
            <p className="mb-2 text-sm uppercase tracking-[0.28em] text-ember">Контакты</p>
            <h3 className="text-3xl font-semibold md:text-4xl">Получить коммерческое предложение</h3>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <a href={`tel:${contacts.phone}`} className="rounded-[8px] border border-white/10 bg-black/18 px-4 py-3 text-white/78 transition hover:border-ember/45 hover:text-white">
                {contacts.phoneLabel}
              </a>
              <a href={`mailto:${contacts.email}`} className="rounded-[8px] border border-white/10 bg-black/18 px-4 py-3 text-white/78 transition hover:border-ember/45 hover:text-white">
                {contacts.email}
              </a>
              <a href={contacts.telegram} target="_blank" rel="noreferrer" className="rounded-[8px] border border-white/10 bg-black/18 px-4 py-3 text-white/78 transition hover:border-ember/45 hover:text-white">
                Telegram
              </a>
              <a href={contacts.vk} target="_blank" rel="noreferrer" className="rounded-[8px] border border-white/10 bg-black/18 px-4 py-3 text-white/78 transition hover:border-ember/45 hover:text-white">
                VK
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {["Имя", "Компания", "Телефон", "E-mail"].map((label) => (
                <label key={label} className="block">
                  <span className="mb-2 block text-sm text-white/56">{label}</span>
                  <input className="h-12 w-full rounded-[8px] border border-white/12 bg-black/22 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-ember" placeholder={label} />
                </label>
              ))}

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-white/56">Комментарий</span>
                <textarea className="min-h-32 w-full resize-none rounded-[8px] border border-white/12 bg-black/22 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-ember" placeholder="Расскажите о задаче, регионе эксплуатации и количестве машин" />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="button" size="lg">Получить коммерческое предложение <Send size={18} /></Button>
              <div className="flex gap-3 text-sm text-white/54">
                <a href={`tel:${contacts.phone}`} className="flex items-center gap-2 transition hover:text-white"><Phone size={16} /> Звонок</a>
                <a href={`mailto:${contacts.email}`} className="flex items-center gap-2 transition hover:text-white"><Mail size={16} /> E-mail</a>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function AnimatedPage() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ambient-line", {
        backgroundPositionX: "160%",
        duration: 12,
        repeat: -1,
        ease: "none",
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="min-h-screen bg-carbon text-white">
      <CursorField />
      <Header />
      <Hero />
      <Advantages />
      <Engineering />
      <Cabin />
      <Specs />
      <CompactGallery />
      <CompanyAndContacts />

      <footer className="border-t border-white/10 bg-carbon px-4 py-10 text-sm text-white/58">
        <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold text-white">Jagger Garage</p>
            <p className="mt-3 max-w-sm leading-6 text-white/48">Jagger Garage. Все права защищены</p>
            <p className="mt-2 max-w-sm leading-6 text-white/48">Информация на сайте не является публичной офертой</p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-ember">Контакты</p>
            <div className="grid gap-2">
              <a href={`tel:${contacts.phone}`} className="transition hover:text-white">{contacts.phoneLabel}</a>
              <a href={`mailto:${contacts.email}`} className="transition hover:text-white">{contacts.email}</a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-ember">Соцсети</p>
            <div className="flex flex-wrap gap-3">
              <a href={contacts.vk} target="_blank" rel="noreferrer" className="rounded-[8px] border border-white/10 px-3 py-2 transition hover:border-ember/45 hover:text-white">VK</a>
              <a href={contacts.youtube} target="_blank" rel="noreferrer" className="rounded-[8px] border border-white/10 px-3 py-2 transition hover:border-ember/45 hover:text-white">YouTube</a>
              <a href={contacts.telegram} target="_blank" rel="noreferrer" className="rounded-[8px] border border-white/10 px-3 py-2 transition hover:border-ember/45 hover:text-white">Telegram</a>
            </div>

            <Link href="/privacy" className="mt-5 inline-flex text-white/70 underline-offset-4 transition hover:text-white hover:underline">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <LenisProvider>
      <AnimatedPage />
    </LenisProvider>
  );
}
