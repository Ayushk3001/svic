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
    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-1.5 py-1 text-[10px] font-black shadow-inner shadow-black/10 backdrop-blur">
      <div className="hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950/70 text-amber-200 ring-1 ring-white/10 min-[420px]:flex">
        <Languages className="h-3.5 w-3.5" />
      </div>
      <Switch
        checked={isKannada}
        onCheckedChange={(checked) => toggleLanguage(checked ? 'kn' : 'en')}
        size="language"
        aria-label={`Switch language to ${isKannada ? 'English' : 'Kannada'}`}
        title={`Switch language to ${isKannada ? 'English' : 'Kannada'}`}
        className="h-7 w-[4.5rem] cursor-pointer overflow-hidden rounded-full border-white/15 bg-slate-950/50 p-0.5 shadow-inner shadow-black/25 data-checked:bg-slate-950/50 data-unchecked:bg-slate-950/50"
        thumbClassName="z-10 size-6 bg-amber-300 shadow-md shadow-amber-950/25 duration-300 ease-out data-checked:translate-x-11 data-unchecked:translate-x-0 dark:data-checked:bg-amber-300 dark:data-unchecked:bg-amber-300"
      >
        <span
          className={`pointer-events-none absolute left-2.5 z-20 transition-colors duration-300 ${
            isKannada ? 'text-slate-300' : 'text-slate-950'
          }`}
        >
          EN
        </span>
        <span
          className={`pointer-events-none absolute right-2.5 z-20 transition-colors duration-300 ${
            isKannada ? 'text-slate-950' : 'text-slate-300'
          }`}
        >
          KN
        </span>
      </Switch>
    </div>
  );
}
