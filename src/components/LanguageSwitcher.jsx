'use client';

import { Check, Languages } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const languageOptions = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ', name: 'Kannada' },
];

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
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 text-[10px] font-black shadow-inner shadow-black/10 backdrop-blur sm:text-xs">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950/70 text-amber-200 ring-1 ring-white/10 sm:h-8 sm:w-8">
        <Languages className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </div>
      {languageOptions.map((option) => {
        const isActive = option.code === currentLang;

        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={isActive}
            title={`Switch to ${option.name}`}
            onClick={() => toggleLanguage(option.code)}
            className={`flex h-7 min-w-10 cursor-pointer items-center justify-center gap-1 rounded-full px-2 transition sm:h-8 sm:min-w-14 sm:px-3 ${
              isActive
                ? 'bg-amber-300 text-slate-950 shadow-lg shadow-amber-950/20'
                : 'text-slate-200 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span>{option.label}</span>
            <span className={`flex h-3.5 w-3.5 items-center justify-center ${isActive ? 'opacity-100' : 'opacity-0'}`}>
              <Check className="h-3 w-3" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
