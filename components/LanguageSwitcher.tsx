'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher({ 
    pathname, 
    languages 
  }: { 
    pathname: string, 
    languages: string[] 
  }) {
  const currentLocale = useLocale();
  const router = useRouter();
  
  const switchLocale = (locale: string) => {
    router.replace(`/${locale}/${pathname}`);
    router.refresh();
  }

  return (
    <div className="flex justify-center gap-5 uppercase text-base">
    {languages.map(language => { return (
      <div 
        key={language} 
        className={`
          ${language === currentLocale ? 'text-gray-800' : 'text-gray-400'}
          cursor-pointer
        `}
        onClick={() => switchLocale(language)}
      >
        {language}
      </div>
    )})}
    </div>
  );
}