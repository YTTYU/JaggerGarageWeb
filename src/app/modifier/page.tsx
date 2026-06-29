"use client";

import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BASE_PATH } from "@/lib/base-path";

const variants = [
  {
    id: "single",
    title: "Одиночная кабина",
    subtitle: "3 посадочных места",
    image: `${BASE_PATH}/images/modifier/single-cab.png`,
  },
  {
    id: "double",
    title: "Двойная кабина",
    subtitle: "5 посадочных мест",
    image: `${BASE_PATH}/images/modifier/double-cab.png`,
  },
  {
    id: "bus",
    title: "Автобус",
    subtitle: "пассажирская версия",
    image: `${BASE_PATH}/images/modifier/bus.png`
  },
  {
    id: "tent",
    title: "Тент",
    subtitle: "грузовая версия с тентом",
    image: `${BASE_PATH}/images/modifier/tent.png`,
  },
];

const palette = ["#111315", "#8da0b8", "#d7dde2", "#4b545c", "#74806f", "#b6a57d", "#7d2f2b"];

const trackOptions = [
  {
    id: "high",
    title: "Полотно с высоким грунтозацепом",
    image: `${BASE_PATH}/images/modifier/track-high-tread.png`,
    details: ["слабонесущие грунты", "болота", "снег", "торфяники", "максимальная тяга"],
  },
  {
    id: "low",
    title: "Полотно с низким профилем",
    image: `${BASE_PATH}/images/modifier/track-low-profile.png`,
    details: ["твёрдые грунты", "смешанная эксплуатация", "длительные перегоны", "движение по дорогам"],
  },
];

export default function ModifierPage() {
  const [activeId, setActiveId] = useState(variants[0].id);
  const [activeTrackId, setActiveTrackId] = useState(trackOptions[0].id);
  const active = variants.find((variant) => variant.id === activeId) ?? variants[0];
  const activeTrack = trackOptions.find((track) => track.id === activeTrackId) ?? trackOptions[0];

  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-white">
      <div className="absolute inset-0 fine-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(141,160,184,0.22),transparent_34%),linear-gradient(180deg,rgba(5,6,7,0)_0%,#050607_78%)]" />

      <header className="relative z-10 px-4 pt-4">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-[8px] border border-white/10 bg-carbon/58 px-4 shadow-glass backdrop-blur-2xl md:px-6">
          <Link href='/' className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Jagger Garage
          </Link>
          <Button asChild variant="secondary">
            <Link href='/'>
              <ArrowLeft size={18} />
              На главную
            </Link>
          </Button>
        </div>
      </header>

      <section className="section-shell relative z-10 grid min-h-[calc(100vh-80px)] gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-20">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Модификатор P-4</p>
          <h1 className="text-balance text-5xl font-semibold leading-none md:text-7xl">
            Выберите версию кузова
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
            Конфигурация помогает быстро определить базовую компоновку машины перед запросом коммерческого предложения.
          </p>

          <div className="mt-8 grid gap-3">
            {variants.map((variant) => {
              const selected = variant.id === active.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setActiveId(variant.id)}
                  className={`flex w-full items-center justify-between rounded-[8px] border px-4 py-4 text-left transition ${
                    selected
                      ? "border-ember bg-ember/14 text-white shadow-ember"
                      : "border-white/10 bg-white/[0.045] text-white/70 hover:border-white/24 hover:bg-white/[0.075]"
                  }`}
                >
                  <span>
                    <span className="block text-lg font-semibold">{variant.title}</span>
                    <span className="mt-1 block text-sm text-white/52">{variant.subtitle}</span>
                  </span>
                  {selected ? <Check className="text-ember" size={20} /> : <ChevronRight className="text-white/42" size={20} />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative min-h-[420px] md:min-h-[560px]">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={`${active.title} P-4`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain p-6 md:p-10"
                />
              </div>
              <div className="border-t border-white/10 p-5 md:p-6">
                <h2 className="text-2xl font-semibold">{active.title}</h2>
                <p className="mt-2 text-white/58">{active.subtitle}</p>

              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Доступны любые цвета под заказ</h3>
                <p className="mt-2 text-sm text-white/54">Палитра показана как декоративный ориентир и не меняет изображение.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {palette.map((color) => (
                  <span
                    key={color}
                    className="h-9 w-9 rounded-full border border-white/20 shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-shell relative z-10 pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 shadow-glass backdrop-blur-2xl md:p-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(141,160,184,0.24),transparent_34%),linear-gradient(90deg,rgba(5,6,7,0.96)_0%,rgba(10,12,14,0.88)_48%,rgba(5,6,7,0.98)_100%)]" />
            <div className="absolute -right-[18%] -top-28 h-[520px] w-[118%] opacity-[0.42] md:-right-[10%] md:-top-36 md:h-[760px] md:w-[92%]">
              <Image
                src={`${BASE_PATH}/images/modifier/tracks-decor.png`}
                alt=""
                fill
                sizes="90vw"
                className="object-contain object-right-top [filter:contrast(1.35)_brightness(1.18)]"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.98)_0%,rgba(5,6,7,0.86)_35%,rgba(5,6,7,0.46)_68%,rgba(5,6,7,0.78)_100%),linear-gradient(180deg,rgba(5,6,7,0.06)_0%,rgba(5,6,7,0.74)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/45 to-transparent" />
          </div>

          <div className="relative max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Резинокордовое полотно</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Резинокордовое полотно</h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              P-4 оснащен одним из двух вариантов резинокордового полотна. Первый вариант — полотно с высоким грунтозацепом предназначен для работы на слабонесущих грунтах, второй — с низким профилем для работы на относительно твёрдых грунтах.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-2">
            {trackOptions.map((track) => {
              const selected = track.id === activeTrack.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setActiveTrackId(track.id)}
                  className={`group overflow-hidden rounded-[8px] border text-left transition duration-300 ${
                    selected
                      ? "border-ember bg-ember/12 shadow-ember"
                      : "border-white/10 bg-black/18 hover:border-white/24 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="relative min-h-[260px] border-b border-white/10 md:min-h-[330px]">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      className="object-contain p-5 transition duration-500 group-hover:scale-[1.03] md:p-8"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{track.title}</h3>
                      {selected ? <Check className="shrink-0 text-ember" size={22} /> : <ChevronRight className="shrink-0 text-white/38" size={22} />}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {track.details.map((item) => (
                        <span key={item} className="rounded-[8px] border border-white/10 bg-white/[0.055] px-3 py-2 text-sm text-white/64">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-ember">Инженерное сравнение</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Почему используется резинокордовое полотно
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "Обычная шарнирная гусеница",
              image: `${BASE_PATH}/images/modifier/hinged-pressure.png`,
              text: "Нагрузка концентрируется на отдельных траках, создавая локальные пики давления на грунт.",
            },
            {
              title: "Резинокордовое полотно P-4",
              image: `${BASE_PATH}/images/modifier/rubbercord-pressure.png`,
              text: "Более равномерное распределение нагрузки благодаря продольной упругости полотна и системе гидравлического натяжения.",
            },
          ].map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative min-h-[300px] border-b border-white/10 md:min-h-[420px]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-5 md:p-8" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{item.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-4">
          <CardContent>
            <div className="space-y-5 text-base leading-8 text-white/68">
              <p>Резинокордовое полотно отличается от шарнирного более равномерным распределением давления на грунт.</p>
              <p>Шарнирное полотно концентрирует нагрузку от каждого катка только на двух траках, создавая пики давления.</p>
              <p>Благодаря продольной упругости, гидравлическому натяжению и заднему приводу в конструкции P-4 достигается более равномерная эпюра распределения нагрузки.</p>
              <p>Дополнительным преимуществом является высокий демпфирующий эффект, снижающий вибрации и уменьшающий уплотнение слабонесущих грунтов.</p>
              <p>P-4 может работать на асфальте, бетоне и других твёрдых покрытиях без их повреждения.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
