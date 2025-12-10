"use client"
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from '@/i18n/navigation';
import Newsletter from './newsletter';
import { Separator } from '../ui/separator';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className='mt-12'>
      {/* upper footer */}
      <div className='bg-main-light-gray py-20'>
        <div className='container flex items-start lg:justify-between justify-center lg:gap-12 max-lg:flex-wrap gap-12'>
          {/* info and social */}
          <div className='space-y-6 max-lg:w-full lg:max-w-1/4'>
            <div className='flex items-end gap-2 w-fit max-lg:mx-auto'>
              <Image src='/images/footer-logo.svg' alt='logo' width={300} height={300} className='size-12 object-contain' />
              <h3 className='font-bold text-2xl'>{t('company_name')}</h3>
            </div>
            <p className='text-xs leading-6 max-lg:text-center'>{t('company_description')}</p>
            {/* links */}
            <div className='flex items-center gap-12 max-lg:justify-center'>
              <a href="#" className='text-main-green  '>
                <FaFacebookF size={24} className='hover:scale-110 transition-all duration-300' />
              </a>
              <a href="#" className='text-main-green  '>
                <FaYoutube size={24} className='hover:scale-110 transition-all duration-300' />
              </a>
              <a href="#" className='text-main-green  '>
                <BiLogoInstagramAlt size={28} className='hover:scale-110 transition-all duration-300' />
              </a>
            </div>
          </div>
          {/* important links */}
          <div className='flex-shrink-0'>
            <h4 className='font-bold text-lg mb-6'>{t('important_links')}</h4>
            <ul className='space-y-6'>
              <li>
                <Link href={"/about-us"} className='hover:text-main-green transition-all duration-300'>
                  {t('about_us')}
                </Link>
              </li>
              <li>
                <Link href={"/complaints"} className='hover:text-main-green transition-all duration-300'>
                  {t('complaints')}
                </Link>
              </li>
              <li>
                <Link href={"/blogs"} className='hover:text-main-green transition-all duration-300'>
                  {t('blogs')}
                </Link>
              </li>

            </ul>
          </div>
          {/* important links */}
          <div className='flex-shrink-0'>
            <h4 className='font-bold text-lg mb-6'>{t('our_services')}</h4>
            <ul className='space-y-6'>
              <li>
                <Link href={"/estats"} className='hover:text-main-green transition-all duration-300'>
                  {t('estates')}
                </Link>
              </li>
              <li>
                <Link href={"/partners"} className='hover:text-main-green transition-all duration-300'>
                  {t('partners')}
                </Link>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className='lg:w-1/3'>
            <Newsletter />
          </div>
        </div>
      </div>
      {/* lower footer */}
      <div className='container py-6 flex items-center justify-between max-md:flex-col max-md:gap-4'>

        {/* terms */}
        <div className='flex items-center gap-2'>
          <Link href={"/user-manual"} className='hover:text-main-green transition-all duration-300'>
            {t('user_manual')}
          </Link>
          <div className='w-[1px] h-4 bg-gray-400'></div>
          <Link href={"/user-manual"} className='hover:text-main-green transition-all duration-300'>
            {t('privacy_policy')}
          </Link>
        </div>
        {/* copy */}
        <p className=''>{t('all_rights_reserved')}<a href="#" className='font-bold text-main-green '>{t('company_short_name')}</a>2025 </p>
      </div>


    </footer>
  )
}

export default Footer
