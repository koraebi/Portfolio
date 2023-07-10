import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function LanguageSwitcher({ 
    pathname, 
    languages 
  }: { 
    pathname: string, 
    languages: string[] 
  }) {
  const locale = useLocale();

  return (
    <div className="flex justify-center gap-5 uppercase text-base">
    {languages.map(language => { return (
      <Link 
        key={language} 
        href={`/${language}${pathname}`} 
        className={`${language === locale ? 'text-gray-800' : 'text-gray-400'}`}
      >
        {language}
      </Link>
    )})}
    </div>
  );
}