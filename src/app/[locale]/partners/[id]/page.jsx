import EstateCard from '@/components/estates/estate-card'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image'
import React from 'react'

const SinglePartner = () => {
  return (
    <main className='space-y-8'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'عملاء نثق بهم' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>عملاء نثق بهم</h1>
      </div>

      <div className='container border p-6 flex gap-6 max-lg:flex-col'>
        <div className='lg:w-1/4 w-full h-72'>
        <Image src='/images/single-partner.png' alt='partner' width={300} height={300} className='w-full h-full lg:object-cover' />
        </div>
        <div className='lg:w-3/4 w-full space-y-8'>
          <div className="space-y-2">
            <h3 className="font-semibold text-3xl">اسم الشركة</h3>
            <p className="text-main-green ">شركة نقل</p>
          </div>
          <div className="flex items-center gap-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_4418_3359)">
                <path d="M6.94003 9.42086C6.12003 10.2009 4.83003 10.1909 4.01003 9.42086C2.89003 8.35086 1.60002 6.63086 2.07002 4.60086C2.87002 1.14086 8.08003 1.14086 8.87003 4.60086C8.99003 5.09086 9.00002 5.55086 8.94002 6.00086" stroke="#3fb38b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.07 16.6009C15.87 13.1409 21.11 13.1409 21.91 16.6009C22.38 18.6309 21.09 20.3509 19.96 21.4209C19.14 22.2009 17.84 22.1909 17.02 21.4209C15.89 20.3509 14.6 18.6309 15.07 16.6009Z" stroke="#3fb38b" strokeWidth="1.5" />
                <path d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002" stroke="#3fb38b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002" stroke="#3fb38b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.48622 5.5H5.49777" stroke="#3fb38b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.4862 17.5H18.4978" stroke="#3fb38b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4418_3359">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-xs text-black ">إسم الشارع, الحي,  المدينة</p>
          </div>
          <p className="text-xs lg:max-w-lg">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما</p>
          <SectionHeader >
            إعلانات تابهم للشريك
          </SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <EstateCard key={index} />
            ))}
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default SinglePartner
