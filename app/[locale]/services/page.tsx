'use client';

import { useTranslations } from 'next-intl';
import PageLayout from '@/layouts/PageLayout';

export default function Services() {
  const t: any = useTranslations('services');

  return (
    <PageLayout>
      <h1 className="font-extrabold text-center text-2xl lg:text-5xl">
        {t('comingSoon')}
      </h1>
    </PageLayout>
  )
}