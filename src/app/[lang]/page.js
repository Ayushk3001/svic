import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Crown,
  Cpu,
  Gauge,
  GraduationCap,
  Keyboard,
  Mail,
  MapPin,
  MonitorCog,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import InquiryForm from '@/components/InquiryForm';
import HeroFrameSequence from '@/components/HeroFrameSequence';

export default async function MainWebParadise({ params }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  const navItems = [
    { href: '#legacy', label: d.nav.about },
    { href: '#results', label: d.nav.results },
    { href: '#courses', label: d.nav.courses },
    { href: '#toppers', label: d.nav.toppers },
    { href: '#contact', label: d.nav.contact },
  ];

  const stats = [
    {
      value: '50+',
      label: d.stats.years.label,
      detail: d.stats.years.detail,
      icon: Award,
      color: 'text-amber-500',
    },
    {
      value: '25,000+',
      label: d.stats.students.label,
      detail: d.stats.students.detail,
      icon: Users,
      color: 'text-cyan-500',
    },
    {
      value: '100%',
      label: d.stats.result.label,
      detail: d.stats.result.detail,
      icon: ShieldCheck,
      color: 'text-emerald-500',
    },
    {
      value: '#1',
      label: d.stats.precision.label,
      detail: d.stats.precision.detail,
      icon: Trophy,
      color: 'text-rose-500',
    },
  ];

  const resultMetrics = [
    { value: '95+', label: d.resultMetrics.speed },
    { value: '99%', label: d.resultMetrics.accuracy },
    { value: '4x', label: d.resultMetrics.revision },
    { value: '12+', label: d.resultMetrics.mockTests },
  ];

  const excellenceTracks = [
    {
      title: d.excellenceTracks[0].title,
      text: d.excellenceTracks[0].text,
      icon: Target,
    },
    {
      title: d.excellenceTracks[1].title,
      text: d.excellenceTracks[1].text,
      icon: CheckCircle2,
    },
    {
      title: d.excellenceTracks[2].title,
      text: d.excellenceTracks[2].text,
      icon: Sparkles,
    },
  ];

  const courses = [
    {
      name: d.courses.c1,
      code: '01',
      description: d.courses.descriptions[0],
      icon: Keyboard,
      accent: 'bg-amber-500',
    },
    {
      name: d.courses.c2,
      code: '02',
      description: d.courses.descriptions[1],
      icon: Gauge,
      accent: 'bg-cyan-500',
    },
    {
      name: d.courses.c3,
      code: '03',
      description: d.courses.descriptions[2],
      icon: MonitorCog,
      accent: 'bg-emerald-500',
    },
  ];

  const futureSystems = d.futureSystems;

  const marqueeItems = d.marqueeItems;

  const academySignals = [
    {
      title: d.academySignals[0].title,
      text: d.academySignals[0].text,
      icon: Target,
    },
    {
      title: d.academySignals[1].title,
      text: d.academySignals[1].text,
      icon: BadgeCheck,
    },
    {
      title: d.academySignals[2].title,
      text: d.academySignals[2].text,
      icon: Cpu,
    },
    {
      title: d.academySignals[3].title,
      text: d.academySignals[3].text,
      icon: Zap,
    },
  ];

  const toppers = [
    {
      rank: '01',
      name: d.toppers[0].name,
      stream: d.toppers[0].stream,
      result: d.toppers[0].result,
      note: d.toppers[0].note,
    },
    {
      rank: '02',
      name: d.toppers[1].name,
      stream: d.toppers[1].stream,
      result: d.toppers[1].result,
      note: d.toppers[1].note,
    },
    {
      rank: '03',
      name: d.toppers[2].name,
      stream: d.toppers[2].stream,
      result: d.toppers[2].result,
      note: d.toppers[2].note,
    },
  ];

  const pathways = d.pathways;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f6f3ee] text-slate-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 px-4 py-3 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={d.common.logoAlt}
              width={54}
              height={54}
              className="h-10 w-10 rounded-md object-contain brightness-110 sm:h-12 sm:w-12"
              priority
            />
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">{d.common.established}</p>
              <h1 className="max-w-[145px] truncate text-xs font-extrabold tracking-tight min-[420px]:max-w-[190px] sm:max-w-none sm:text-base">
                {d.common.instituteName}
              </h1>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-amber-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919448201966"
              className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-200 sm:flex"
            >
              <Phone className="h-4 w-4" />
              {d.common.phoneCta}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="sv-hero-cinema relative min-h-[92svh] overflow-hidden bg-slate-950 px-4 pt-24 text-white sm:px-6 sm:pt-28 lg:px-10">
          <HeroFrameSequence />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.9)_48%,rgba(2,6,23,0.46)_100%)]" />
          <div className="sv-grid absolute inset-0 z-10 opacity-35" />
          <div className="sv-scanlines absolute inset-0 z-10 opacity-25" />
          <div className="sv-noise absolute inset-0 z-10 opacity-25" />

          <div className="relative z-20 mx-auto flex min-h-[calc(92svh-6rem)] max-w-7xl items-center py-10 sm:py-12">
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200 shadow-lg shadow-amber-950/20 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                <Sparkles className="h-4 w-4" />
                {d.hero.eyebrow}
              </div>
              <h2 className="sv-title-glow max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl sm:leading-[0.92] lg:text-7xl">
                {d.hero.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-xl sm:leading-8">
                {d.hero.subtitle}
              </p>

              <div className="mt-6 grid max-w-2xl grid-cols-1 gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                {d.hero.facts.map((item) => (
                  <div key={item} className="border border-white/10 bg-slate-950/45 px-3 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-slate-200 backdrop-blur sm:px-4 sm:text-xs">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-5 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-amber-400/20 transition hover:bg-amber-300 sm:px-6 sm:py-4"
                >
                  {d.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#results"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 sm:px-6 sm:py-4"
                >
                  {d.hero.secondaryCta}
                </a>
              </div>

            </div>
          </div>
        </section>

        <section className="sv-marquee overflow-hidden border-y border-white/10 bg-slate-950 py-4 text-white">
          <div className="sv-marquee-track">
            {[0, 1].map((group) => (
              <div key={group} className="sv-marquee-group">
                {marqueeItems.map((item) => (
                  <div key={`${group}-${item}`} className="flex items-center gap-6 text-xs font-black uppercase tracking-[0.3em] text-slate-300">
                    <span className="whitespace-nowrap">{item}</span>
                    <span className="h-1.5 w-1.5 shrink-0 bg-amber-300" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-start gap-4 border-t border-slate-200 px-1 py-4 first:border-t-0 sm:border-l sm:border-t-0 sm:px-4 sm:first:border-l-0">
                  <Icon className={`mt-1 h-6 w-6 shrink-0 ${stat.color}`} />
                  <div>
                    <p className="text-3xl font-black tracking-tight text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm font-bold text-slate-800">{stat.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{stat.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#070b14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/hero-animation.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-slate-950/88" />
          <div className="sv-grid absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-12">
            <div className="sv-film-frame border border-white/15 bg-slate-900/88 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-5 lg:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
                    {d.resultSystem.eyebrow}
                  </p>
                  <h3 className="mt-1 text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
                    {d.resultSystem.title}
                  </h3>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-emerald-400 text-slate-950 sm:h-14 sm:w-14">
                  <BadgeCheck className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 py-4 sm:gap-3 sm:py-5">
                {resultMetrics.map((metric) => (
                  <div key={metric.label} className="border border-white/10 bg-white/10 p-3 sm:p-4">
                    <p className="text-2xl font-black text-white sm:text-3xl">{metric.value}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4 sm:space-y-3">
                {futureSystems.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs font-semibold leading-5 text-slate-200 sm:text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 border border-amber-300/20 bg-amber-300/10 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-200 sm:text-xs">
                  {d.resultSystem.academicSignalTitle}
                </p>
                <p className="mt-2 text-xs font-semibold leading-6 text-slate-200 sm:text-sm">
                  {d.resultSystem.academicSignalText}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300 sm:text-sm sm:tracking-[0.28em]">{d.modernPresence.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:mt-4 sm:text-5xl">
                  {d.modernPresence.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                  {d.modernPresence.text}
                </p>
              </div>

              <div className="grid gap-3">
                {academySignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <div key={signal.title} className="group flex gap-3 border border-white/10 bg-white/[0.07] p-4 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10 sm:gap-4 sm:p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cyan-300 text-slate-950 sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h3 className="font-black text-white">{signal.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{signal.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="legacy" className="bg-[#f6f3ee] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-amber-400/50" />
              <div className="relative overflow-hidden bg-white p-3 shadow-2xl shadow-slate-900/10">
                <Image
                  src="/images/principal.png"
                  alt={d.common.principalAlt}
                  width={520}
                  height={680}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 p-4 text-white backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{d.legacy.leadershipEyebrow}</p>
                  <h3 className="mt-2 text-lg font-black sm:text-xl">{d.common.principalName}</h3>
                  <p className="mt-1 text-sm text-slate-300">{d.about.subtitle}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700 sm:text-sm sm:tracking-[0.28em]">{d.legacy.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {d.legacy.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
                {d.legacy.text}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {excellenceTracks.map((track) => {
                  const Icon = track.icon;
                  return (
                    <div key={track.title} className="border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                      <Icon className="h-7 w-7 text-slate-950" />
                      <h3 className="mt-4 text-base font-black text-slate-950">{track.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{track.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300 sm:text-sm sm:tracking-[0.28em]">{d.results.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                  {d.results.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                  {d.results.text}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-emerald-300/30 bg-emerald-300 p-5 text-slate-950 sm:p-6">
                  <p className="text-5xl font-black tracking-tight sm:text-6xl">100%</p>
                  <p className="mt-2 text-lg font-black">{d.results.focusTitle}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                    {d.results.focusText}
                  </p>
                </div>
                <div className="border border-white/10 bg-white/10 p-5 sm:p-6">
                  <Crown className="h-9 w-9 text-amber-300" />
                  <p className="mt-5 text-2xl font-black">{d.results.excellenceTitle}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {d.results.excellenceText}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {excellenceTracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <div key={track.title} className="border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">0{index + 1}</p>
                    <Icon className="mt-6 h-8 w-8 text-cyan-300" />
                    <h3 className="mt-5 text-xl font-black">{track.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{track.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="courses" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700 sm:text-sm sm:tracking-[0.28em]">{d.courses.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  {d.courses.title}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                {d.courses.intro}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
              {courses.map((course) => {
                const Icon = course.icon;
                return (
                  <article key={course.code} className="group border border-slate-200 bg-[#f9faf8] p-5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center text-white ${course.accent}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="font-mono text-sm font-black uppercase text-slate-400">{d.courses.courseLabel} {course.code}</p>
                    </div>
                    <h3 className="mt-6 text-xl font-black leading-tight text-slate-950 sm:mt-8 sm:text-2xl">{course.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{course.description}</p>
                    <div className="mt-8 flex items-center gap-2 text-sm font-black text-slate-950">
                      {d.courses.exploreLabel}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0f766e] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200 sm:text-sm sm:tracking-[0.28em]">{d.trainingModel.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                {d.trainingModel.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-teal-50 sm:mt-6 sm:text-lg sm:leading-8">
                {d.trainingModel.text}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {futureSystems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 border border-white/20 bg-white/10 p-4 backdrop-blur sm:gap-4 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-sm font-black text-teal-800">
                    {index + 1}
                  </div>
                  <p className="font-bold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="toppers" className="bg-[#f6f3ee] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-700 sm:text-sm sm:tracking-[0.28em]">{d.toppersSection.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {d.toppersSection.title}
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                {d.toppersSection.text}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
              {toppers.map((topper) => (
                <article key={topper.rank} className="relative overflow-hidden border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="absolute right-0 top-0 bg-slate-950 px-5 py-3 font-mono text-sm font-black text-white">
                    {d.toppersSection.rankLabel} {topper.rank}
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Star className="h-8 w-8 fill-amber-500 text-amber-500" />
                  </div>
                  <h3 className="mt-8 text-xl font-black text-slate-950 sm:text-2xl">{topper.name}</h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-rose-700">{topper.stream}</p>
                  <p className="mt-5 text-lg font-black text-slate-800">{topper.result}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{topper.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700 sm:text-sm sm:tracking-[0.28em]">{d.career.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {d.career.title}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pathways.map((pathway) => (
                <div key={pathway} className="flex gap-3 border border-slate-200 bg-[#f9faf8] p-4 sm:gap-4 sm:p-5">
                  <BriefcaseBusiness className="mt-1 h-6 w-6 shrink-0 text-cyan-700" />
                  <p className="font-bold leading-6 text-slate-800">{pathway}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">{d.contact.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                {d.contact.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                {d.contact.text}
              </p>

              <div className="mt-8 space-y-5 sm:mt-10">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-amber-300" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{d.contact.address_label}</p>
                    <p className="mt-2 leading-7 text-slate-200">{d.contact.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{d.contact.hotlineLabel}</p>
                    <a href="tel:+919448201966" className="mt-2 block text-lg font-black text-white hover:text-amber-300">
                      +91 9448201966
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{d.contact.inboxLabel}</p>
                    <a href="mailto:kpkrishnashetty@gmail.com" className="mt-2 block font-bold text-white hover:text-amber-300">
                      kpkrishnashetty@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-white p-4 text-slate-950 shadow-2xl shadow-black/25 sm:p-8">
              <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-5 sm:mb-8 sm:pb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-white">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">{d.contact.formEyebrow}</p>
                  <h3 className="text-2xl font-black">{d.contact.formTitle}</h3>
                </div>
              </div>
              <InquiryForm d={d} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 text-center text-xs font-semibold text-slate-500 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>{d.common.copyright}</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Building2 className="h-4 w-4" />
            {d.common.shortLocation}
          </div>
        </div>
      </footer>
    </div>
  );
}
