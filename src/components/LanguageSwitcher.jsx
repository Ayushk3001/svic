'use client';

import { Languages } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Switch } from '@/components/ui/switch';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.startsWith('/kn') ? 'kn' : 'en';
  const isKannada = currentLang === 'kn';

  const toggleLanguage = (targetLang) => {
    if (targetLang === currentLang) return;

    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'kn') {
      segments[1] = targetLang;
    } else {
      segments.splice(1, 0, targetLang);
    }

    router.push(segments.join('/') || `/${targetLang}`);
  };

  return (
    <div className="sv-heavy-blur inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-1.5 py-1 text-[10px] font-black shadow-inner shadow-white/5 backdrop-blur-xl transition duration-300 hover:border-amber-200/25 hover:bg-white/[0.09]">
      <div className="hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0a0a14]/80 text-amber-200 ring-1 ring-white/10 min-[420px]:flex">
        <Languages className="h-3.5 w-3.5" />
      </div>
      <Switch
        checked={isKannada}
        onCheckedChange={(checked) => toggleLanguage(checked ? 'kn' : 'en')}
        size="language"
        aria-label={`Switch language to ${isKannada ? 'English' : 'Kannada'}`}
        title={`Switch language to ${isKannada ? 'English' : 'Kannada'}`}
        className="h-7 w-[4.6rem] cursor-pointer overflow-hidden rounded-full border-white/10 bg-[#0a0a14]/70 p-0.5 shadow-inner shadow-black/30 data-checked:bg-[#0a0a14]/70 data-unchecked:bg-[#0a0a14]/70"
        thumbClassName="z-10 size-6 bg-gradient-to-br from-amber-200 to-amber-400 shadow-[0_0_16px_rgba(245,197,24,0.28)] duration-300 ease-out data-checked:translate-x-11 data-unchecked:translate-x-0 dark:data-checked:bg-amber-300 dark:data-unchecked:bg-amber-300"
      >
        <span
          className={`pointer-events-none absolute left-2.5 z-20 transition-colors duration-300 ${
            isKannada ? 'text-slate-400' : 'text-slate-950'
          }`}
        >
          EN
        </span>
        <span
          className={`pointer-events-none absolute right-2.5 z-20 transition-colors duration-300 ${
            isKannada ? 'text-slate-950' : 'text-slate-400'
          }`}
        >
          KN
        </span>
      </Switch>
    </div>
  );
}
