'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PageLayout from '@/layouts/PageLayout';
import picturePartDesigner from '/public/partDesigner.png';
import picturePartEngineer from '/public/partEngineer.png';

export default function Story() {
  const t: any = useTranslations('story');

  return (
    <PageLayout>
      <a href="/about" className="mb-5 lg:mb-0 w-fit">
        <button className="rounded-full bg-lightBlack p-2 px-4 text-white">
          &lt;- {t('returnButton')}
        </button>
      </a>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:p-10 lg:gap-10 place-items-center">
        <Image 
          className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-full drop-shadow-lg" 
          src={picturePartEngineer} 
          alt=""
        />
        <section className="col-span-2 ml-auto">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-left">
            {t('background')}
          </h1>
          <p className="font-light mb-2 text-center lg:text-left">
            {t('backgroundStory')}
          </p>
        </section>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"/>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:p-10 lg:gap-10 place-items-center">
        <section className="col-span-2 w-full text-center lg:text-left">
          <div>
            <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
              {t('milestones')}
            </h1>
          </div>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone1')}
          </p>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone2')}
          </p>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone3')}
          </p>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone4')}
          </p>
        </section>
        <Image 
          className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-full drop-shadow-lg" 
          src={picturePartDesigner} 
          alt=""
        />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"/>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:p-10 lg:gap-10 place-items-center">
        <Image 
          className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-full drop-shadow-lg" 
          src={picturePartEngineer} 
          alt=""
        />
        <section className="col-span-2 ml-auto text-center lg:text-left">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t('aspirations')}
          </h1>
          <p className="font-light mb-2">
            {t('aspiration1')}
          </p>
          <p className="font-light mb-2">
            {t('aspiration2')}
          </p>
          <p className="font-light">
            {t('aspiration3')}
          </p>
        </section>
      </div>
    </PageLayout>
  )
}