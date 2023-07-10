import { useLocale } from 'next-intl';
import { getTranslator } from 'next-intl/server';

export default async function ErrorLayout() {
  const locale = useLocale();
  const t: any = await getTranslator(locale, 'error');

  return (
    <main className="flex flex-col p-5 mt-5 lg:px-40">
      <h1 className="font-extrabold text-center text-2xl lg:text-5xl">
        {t('comingSoon')}
      </h1>
    </main>
  );
}