'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.startsWith('/kn') ? 'kn' : 'en';

  const toggleLanguage = (targetLang) => {
    if (targetLang === currentLang) return;
    const newPath = currentLang === 'en'
      ? pathname.replace('/en', '/kn')
      : pathname.replace('/kn', '/en');
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 rounded-md bg-slate-900/10 p-1 text-[10px] font-semibold dark:bg-white/10 sm:text-xs">
      <button
        onClick={() => toggleLanguage('en')}
        className={`cursor-pointer rounded px-2 py-1.5 transition sm:px-3 ${currentLang === 'en' ? 'bg-amber-600 text-white shadow' : 'text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white opacity-70 hover:opacity-100'}`}
      >
        English
      </button>
      <button
        onClick={() => toggleLanguage('kn')}
        className={`cursor-pointer rounded px-2 py-1.5 transition sm:px-3 ${currentLang === 'kn' ? 'bg-amber-600 text-white shadow' : 'text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white opacity-70 hover:opacity-100'}`}
      >
        Kannada
      </button>
    </div>
  );
}
