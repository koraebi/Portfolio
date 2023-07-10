import '../globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Koraebi',
  description: `Création de produits numériques en accord aux fondaments UX et aux principes d'ingénierie logicielle.`,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let translations;
  try {
    translations = (await import(`@/translations/fr.json`)).home;
  } catch (error) {
    redirect('/error');
  }

  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Navbar translations={translations} locale="fr"/>
        <div className={inter.className}>
          {children}
        </div>
        <Footer locale="fr"/>
      </body>
    </html>
  );
}
