import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Koraebi',
  description: 'Building digital products according to UX fundamentals and Software Engineering principles.',
}

export default async function RootLayout({ 
  children,
}: { 
  children: React.ReactNode,
}) {
  let translations;
  try {
    translations = (await import(`@/translations/en.json`)).default;
  } catch (error) {
    console.log(error)
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider locale="en" messages={translations}>
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
