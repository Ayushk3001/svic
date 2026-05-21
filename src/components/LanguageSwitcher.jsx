'use client';

import { Languages } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.startsWith('/kn') ? 'kn' : 'en';

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
    <div className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.04] p-1 text-[10px] font-black shadow-inner shadow-black/10 backdrop-blur">
      <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-white/10 text-slate-300 min-[420px]:flex">
        <Languages className="h-3.5 w-3.5" />
      </div>
      {['en', 'kn'].map((lang) => {
        const isActive = currentLang === lang;

        return (
          <button
            key={lang}
            type="button"
            aria-pressed={isActive}
            onClick={() => toggleLanguage(lang)}
            className={`h-7 rounded-sm px-2.5 uppercase tracking-widest transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
              isActive
                ? 'bg-white/15 text-white ring-1 ring-white/20 shadow-sm'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
