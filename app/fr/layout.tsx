import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Koraebi',
  description: `Création de produits numériques en accord aux fondaments UX et aux principes d'ingénierie logicielle.`,
}

export default async function RootLayout({ 
    children,
  }: { 
    children: React.ReactNode,
  }) {
  let translations;
  try {
    translations = (await import(`@/translations/fr.json`)).default;
  } catch (error) {
    console.log(error)
  }

  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider locale="fr" messages={translations}>
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
