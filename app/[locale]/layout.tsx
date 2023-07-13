import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Languages } from '@/data/common';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getTranslations(locale: string) {
  try {
    return (await import(`@/translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return Languages.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const translations = await getTranslations(locale);
  const t = createTranslator({ locale, messages: translations });

  return {
    title: 'Koraebi',
    description: t('metadata.description')
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const translations = await getTranslations(locale);

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider locale={locale} messages={translations}>
          <Navbar/>
          <div className={inter.className}>
            {children}
          </div>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
