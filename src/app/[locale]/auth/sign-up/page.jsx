import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'
import Image from 'next/image'
import SignUpForm from '@/components/auth/sign-up-form'
import { useTranslations } from 'next-intl'
const SignUpPage = () => {
  const t = useTranslations("sign_up")
  return (
    <main className='space-y-12'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: t('title') }]} />
        <h1 className='text-main-navy text-2xl font-bold'>{t('title')}</h1>
      </div>
      <div className='container flex items-start'>
        <div className='w-[45%] max-lg:hidden'>
          <Image src='/images/auth.png' alt='sign up' width={800} height={500} className='w-[40%]  absolute fit-content'  />
          
        </div>
        <div className='lg:w-[60%] w-full'>
          <SignUpForm />
        </div>
        
      </div>
    </main>
  )
}

export default SignUpPage
