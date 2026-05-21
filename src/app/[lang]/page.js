import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Crown,
  Cpu,
  Gauge,
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
import HeroFrameSequence from '@/components/HeroFrameSequence';
import AnimatedStatValue from '@/components/AnimatedStatValue';
import SiteHeader from '@/components/SiteHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
      accent: 'from-amber-300 to-yellow-500',
      glow: 'rgba(245, 197, 24, 0.34)',
      tag: d.hero.facts[2],
    },
    {
      name: d.courses.c2,
      code: '02',
      description: d.courses.descriptions[1],
      icon: Gauge,
      accent: 'from-cyan-300 to-teal-500',
      glow: 'rgba(13, 148, 136, 0.34)',
      tag: d.career.eyebrow,
    },
    {
      name: d.courses.c3,
      code: '03',
      description: d.courses.descriptions[2],
      icon: MonitorCog,
      accent: 'from-emerald-300 to-teal-600',
      glow: 'rgba(16, 185, 129, 0.34)',
      tag: d.trainingModel.eyebrow,
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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0a0a14] text-white">
      <SiteHeader common={d.common} navItems={navItems} />

      <main>
        <section id="hero" className="sv-hero-cinema relative min-h-[100svh] overflow-hidden bg-[#0a0a14] px-4 pt-28 text-white sm:px-6 sm:pt-32 lg:px-10">
          <HeroFrameSequence />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,10,20,0.99)_0%,rgba(10,10,20,0.92)_46%,rgba(10,10,20,0.46)_100%)]" />
          <div className="sv-grid absolute inset-0 z-10 opacity-35" />
          <div className="sv-scanlines absolute inset-0 z-10 opacity-25" />
          <div className="sv-noise absolute inset-0 z-10 opacity-25" />

          <div className="relative z-20 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl items-center py-10 sm:py-12">
            <div className="sv-hero-copy max-w-4xl">
              <div className="sv-gradient-pill mb-5 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-100 shadow-lg shadow-amber-950/20 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                <Sparkles className="h-4 w-4" />
                {d.hero.eyebrow}
              </div>
              <h2 className="sv-title-glow max-w-4xl font-serif text-4xl font-extrabold leading-[1.02] tracking-[0.015em] text-white sm:text-6xl sm:leading-[0.98] lg:text-7xl">
                {d.hero.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-xl sm:leading-8">
                {d.hero.subtitle}
              </p>

              <div className="mt-6 flex max-w-3xl flex-wrap gap-2 sm:mt-7 sm:gap-3">
                {d.hero.facts.map((item) => (
                  <Card key={item} className="sv-gradient-pill rounded-full py-0 text-slate-100 ring-0 backdrop-blur">
                    <CardContent className="flex min-h-10 items-center gap-2 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] sm:px-4 sm:text-xs">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.65)]" />
                      <span className="whitespace-nowrap">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button
                  render={<a href="tel:+919448201966" />}
                  nativeButton={false}
                  className="sv-pulse-ring inline-flex h-auto items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-[0_0_34px_rgba(245,197,24,0.32)] sm:px-6 sm:py-4"
                >
                  {d.hero.cta}
                  <Phone className="h-4 w-4" />
                </Button>
                <Button
                  render={<a href="#results" />}
                  nativeButton={false}
                  variant="outline"
                  className="sv-ghost-border inline-flex h-auto items-center justify-center gap-2 rounded-full border-white/16 bg-white/[0.06] px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white sm:px-6 sm:py-4"
                >
                  {d.hero.secondaryCta}
                  <ArrowRight className="h-4 w-4 transition group-hover/button:translate-x-1" />
                </Button>
              </div>

            </div>
          </div>
          <a
            href="#results"
            aria-label="Scroll to results"
            className="sv-scroll-indicator absolute bottom-6 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-amber-200 shadow-[0_0_24px_rgba(245,197,24,0.12)] backdrop-blur transition hover:border-amber-200/40 hover:bg-white/[0.1]"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
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

        <section className="relative z-20 border-y border-white/10 bg-[#0a0a14] px-4 py-8 sm:px-6 lg:px-10">
          <div className="sv-glass-card mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-2xl p-2 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="sv-fade-up rounded-xl border-0 border-t border-white/10 bg-transparent py-4 ring-0 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0">
                  <CardContent className="flex flex-col items-center px-3 py-3 text-center sm:px-5">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white/12 to-white/[0.03] ring-1 ring-white/10">
                      <Icon className={`h-5 w-5 shrink-0 ${stat.color}`} />
                    </div>
                    <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                      <AnimatedStatValue value={stat.value} />
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-100">{stat.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{stat.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/hero-animation.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-[#0a0a14]/90" />
          <div className="sv-grid absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-12">
            <Card className="sv-dashboard-card sv-film-frame relative rounded-2xl border border-white/15 bg-white/[0.055] py-0 text-white ring-0 backdrop-blur-xl">
              <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
                    {d.resultSystem.eyebrow}
                  </p>
                  <h3 className="mt-1 text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
                    {d.resultSystem.title}
                  </h3>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-300 to-teal-500 text-slate-950 shadow-[0_0_28px_rgba(13,148,136,0.28)] sm:h-14 sm:w-14">
                  <BadgeCheck className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 py-4 sm:gap-3 sm:py-5">
                {resultMetrics.map((metric) => (
                  <Card key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.07] py-0 text-white ring-0">
                    <CardContent className="p-3 sm:p-4">
                      <p className="text-2xl font-black text-white sm:text-3xl">{metric.value}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">{metric.label}</p>
                    </CardContent>
                  </Card>
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

              <Card className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 py-0 text-white ring-0">
                <CardContent className="p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-200 sm:text-xs">
                  {d.resultSystem.academicSignalTitle}
                </p>
                <p className="mt-2 text-xs font-semibold leading-6 text-slate-200 sm:text-sm">
                  {d.resultSystem.academicSignalText}
                </p>
                </CardContent>
              </Card>
              </CardContent>
            </Card>

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
                {academySignals.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <Card key={signal.title} className="sv-slide-right group rounded-2xl border border-white/10 bg-white/[0.055] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.085] hover:shadow-[0_22px_70px_rgba(13,148,136,0.12)]" style={{ '--sv-delay': `${index * 90}ms` }}>
                      <CardContent className="flex gap-3 p-4 sm:gap-4 sm:p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-teal-500 text-slate-950 shadow-[0_0_24px_rgba(13,148,136,0.22)] sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="font-black text-white">{signal.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{signal.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="legacy" className="bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="sv-fade-up relative">
              <div className="absolute -inset-2 rounded-[1.4rem] bg-gradient-to-br from-amber-300/70 via-yellow-500/30 to-teal-500/50 opacity-80 blur-[1px]" />
              <Card className="relative rounded-[1.25rem] border border-amber-200/25 bg-white/[0.04] py-0 shadow-[0_32px_100px_rgba(0,0,0,0.38)] ring-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_120px_rgba(245,197,24,0.12)]">
                <CardContent className="p-3">
                <Image
                  src="/images/principal.png"
                  alt={d.common.principalAlt}
                  width={520}
                  height={680}
                  className="aspect-[4/5] w-full rounded-[1rem] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#0a0a14]/82 p-4 text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{d.legacy.leadershipEyebrow}</p>
                  <h3 className="mt-2 text-lg font-black sm:text-xl">{d.common.principalName}</h3>
                  <p className="mt-1 text-sm text-slate-300">{d.about.subtitle}</p>
                </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">{d.legacy.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                {d.legacy.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                {d.legacy.text}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {excellenceTracks.map((track, index) => {
                  const Icon = track.icon;
                  return (
                    <Card key={track.title} className="sv-fade-up rounded-2xl border border-white/10 bg-white/[0.045] py-0 text-white shadow-sm ring-0 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/[0.07] hover:shadow-[0_22px_70px_rgba(245,197,24,0.1)]" style={{ '--sv-delay': `${index * 80}ms` }}>
                      <CardContent className="p-4 sm:p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-teal-500 text-slate-950">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-black text-white">{track.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-400">{track.text}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="relative overflow-hidden bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="sv-grid absolute inset-0 opacity-15" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div className="relative">
                <div className="sv-watermark absolute -left-3 -top-12 text-7xl font-black uppercase tracking-tight text-white/[0.035] sm:text-8xl lg:text-9xl">
                  50 Years
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300 sm:text-sm sm:tracking-[0.28em]">{d.results.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                  {d.results.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                  {d.results.text}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <Card className="sv-result-shimmer rounded-2xl border border-emerald-200/30 bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500 py-0 text-slate-950 shadow-[0_24px_90px_rgba(13,148,136,0.22)] ring-0">
                  <CardContent className="relative z-10 p-5 sm:p-6">
                    <p className="text-5xl font-black tracking-tight sm:text-6xl">100%</p>
                    <p className="mt-2 text-lg font-black">{d.results.focusTitle}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                      {d.results.focusText}
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border border-white/10 bg-white/[0.055] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <CardContent className="p-5 sm:p-6">
                    <Crown className="h-9 w-9 text-amber-300" />
                    <p className="mt-5 text-2xl font-black">{d.results.excellenceTitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {d.results.excellenceText}
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border border-amber-300/25 bg-amber-300/10 py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/40 hover:bg-amber-300/[0.13] sm:col-span-2 xl:col-span-1">
                  <CardContent className="p-5 sm:p-6">
                    <ShieldCheck className="h-9 w-9 text-amber-300" />
                    <p className="mt-5 text-2xl font-black">{d.results.certificateTitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {d.results.certificateText}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {excellenceTracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <Card key={track.title} className="sv-fade-up rounded-2xl border border-white/10 bg-white/[0.045] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]" style={{ '--sv-delay': `${index * 90}ms` }}>
                    <CardContent className="p-5 sm:p-6">
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">0{index + 1}</p>
                      <Icon className="mt-6 h-8 w-8 text-cyan-300" />
                      <h3 className="mt-5 text-xl font-black">{track.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{track.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="courses" className="bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300 sm:text-sm sm:tracking-[0.28em]">{d.courses.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {d.courses.title}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                {d.courses.intro}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
              {courses.map((course, index) => {
                const Icon = course.icon;
                return (
                  <Card key={course.code} role="article" className="sv-course-card sv-fade-up group rounded-2xl border border-white/10 bg-white/[0.045] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-2" style={{ '--course-glow': course.glow, '--sv-delay': `${index * 100}ms` }}>
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-slate-950 shadow-[0_0_24px_var(--course-glow)] ${course.accent}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="font-mono text-sm font-black uppercase text-slate-500">{d.courses.courseLabel} {course.code}</p>
                      </div>
                      <div className="sv-chip mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-amber-200">
                        {course.tag}
                      </div>
                      <h3 className="mt-5 text-xl font-black leading-tight text-white sm:text-2xl">{course.name}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-400">{course.description}</p>
                      <div className="mt-8 flex items-center gap-2 text-sm font-black text-amber-200 transition group-hover:text-amber-100">
                        {d.courses.exploreLabel}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#071313,#0a0a14_52%,#062f2c)] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="sv-grid absolute inset-0 opacity-15" />
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-12">
            <div className="relative z-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200 sm:text-sm sm:tracking-[0.28em]">{d.trainingModel.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                {d.trainingModel.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-teal-50 sm:mt-6 sm:text-lg sm:leading-8">
                {d.trainingModel.text}
              </p>
            </div>

            <div className="relative z-10 grid gap-3 sm:grid-cols-2">
              {futureSystems.map((item, index) => (
                <Card key={item} className="sv-fade-up rounded-2xl border border-white/10 bg-white/[0.055] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-1 hover:border-teal-200/35 hover:bg-white/[0.08]" style={{ '--sv-delay': `${index * 60}ms` }}>
                  <CardContent className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 to-teal-400 text-sm font-black text-slate-950">
                      {index + 1}
                    </div>
                    <p className="font-bold leading-6">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="toppers" className="bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">{d.toppersSection.eyebrow}</p>
              <h2 className="sv-gradient-text mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                {d.toppersSection.title}
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-400">
                {d.toppersSection.text}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
              {toppers.map((topper, index) => (
                <Card
                  key={topper.rank}
                  role="article"
                  className={`sv-fade-up relative rounded-2xl border border-white/10 bg-white/[0.045] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.07] ${
                    index === 0 ? 'sv-rank-gold' : index === 1 ? 'sv-rank-silver' : 'sv-rank-bronze'
                  }`}
                  style={{ '--sv-delay': `${index * 100}ms` }}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#0a0a14] px-5 py-3 font-mono text-sm font-black text-white ring-1 ring-white/10">
                      {d.toppersSection.rankLabel} {topper.rank}
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/12 text-amber-200 ring-1 ring-amber-200/20">
                      <Star className="sv-sparkle-star h-8 w-8 fill-amber-300 text-amber-300" />
                    </div>
                    <h3 className="mt-8 text-xl font-black text-white sm:text-2xl">{topper.name}</h3>
                    <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-amber-300">{topper.stream}</p>
                    <p className="mt-5 text-lg font-black text-slate-100">{topper.result}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{topper.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">{d.career.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                {d.career.title}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pathways.map((pathway, index) => (
                <Card key={pathway} className="sv-fade-up rounded-2xl border border-white/10 bg-white/[0.045] py-0 text-white ring-0 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]" style={{ '--sv-delay': `${index * 75}ms` }}>
                  <CardContent className="flex gap-3 p-4 sm:gap-4 sm:p-5">
                    <BriefcaseBusiness className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                    <p className="font-bold leading-6 text-slate-200">{pathway}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sv-cta-spotlight bg-[#0a0a14] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-start xl:gap-14">
            <div className="sv-fade-up">
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
                    <a href="tel:+919448201966" className="mt-2 block text-lg font-black text-white transition hover:text-amber-300">
                      +91 9448201966
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{d.contact.inboxLabel}</p>
                    <a href="mailto:kpkrishnashetty@gmail.com" className="mt-2 block font-bold text-white transition hover:text-amber-300">
                      kpkrishnashetty@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="sv-glass-card w-full rounded-2xl py-0 text-white ring-0">
              <CardContent className="p-5 sm:p-6 lg:p-7">
                <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-teal-500 text-slate-950">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-300 sm:text-xs">{d.contact.callEyebrow}</p>
                    <h3 className="text-xl font-black sm:text-2xl">{d.contact.callTitle}</h3>
                  </div>
                </div>
                <p className="text-sm font-semibold leading-6 text-slate-300">
                  {d.contact.callText}
                </p>
                <Button
                  render={<a href="tel:+919448201966" />}
                  nativeButton={false}
                  className="mt-6 h-auto w-full rounded-full bg-amber-300 px-5 py-4 text-sm font-black text-slate-950 shadow-[0_0_26px_rgba(245,197,24,0.2)] transition hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-[0_0_38px_rgba(245,197,24,0.38)]"
                >
                  <Phone className="h-4 w-4" />
                  {d.contact.callButton}
                </Button>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{d.contact.callNoteLabel}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                    {d.contact.callNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="sv-footer-divider bg-[#0a0a14] px-4 py-8 text-center text-[11px] font-semibold text-slate-600 sm:px-6 lg:px-10">
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
