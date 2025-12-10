"use client"
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import FilterForm from '../shared/filter-form'

const HeroSection = () => {
  const whatsappNumber = "201068389295"; // بدون علامة + 
  const message = encodeURIComponent("مرحباً، أنا مهتم بطلب استشارة خبير عقاري");
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <section className='container  pt-12 p-6  bg-main-light-gray rounded-b-[3rem]  space-y-12'>
      {/* title */}
      <div className='flex items-center justify-between  max-md:flex-col max-md:gap-6 max-md:text-center'>
        <div className=' md:w-1/2 w-full relative'>
          <Image src='/images/vector.svg' width={100} height={100} alt='vector' className='max-md:hidden absolute -bottom-[30%] end-[20%]' />
          <h1 className='lg:text-7xl md:text-5xl text-4xl  font-bold leading-[1.2]'>
            حلول عقارية <span className='text-main-green'>ميسرة</span>
          </h1>
        </div>
        <div className='md:w-1/2 w-full space-y-8  '>
          <p className='leading-8 lg:w-[85%] lg:text-base text-xs'>
            شركة الحلول العقارية هي شريكك الأول لتحقيق أحلامك العقارية بكل ثقة واطمئنان. نقدم لك مجموعة متكاملة من الخدمات تشمل البيع والشراء والتأجير وإدارة الأملاك،
          </p>
          <div className='flex   gap-8 max-md:justify-center'>
          <Link href={'/about-us'} className='block w-fit bg-white group rounded-tr-2xl'>
            <div className='  bg-main-green text-white lg:py-4 lg:px-6 p-3 rounded-tr-2xl max-lg:text-xs  font-semibold flex items-center gap-2 w-fit translate-x-3 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:gap-3 transition-all duration-500'><FaLongArrowAltRight size={20} /> عرض المــزيد</div>
          </Link>
          <button onClick={handleWhatsApp} className='block w-fit bg-main-light-green group rounded-tr-2xl'>
            <div className='  bg-main-navy text-white lg:py-4 lg:px-6 p-3 rounded-tr-2xl max-lg:text-xs  font-semibold flex items-center gap-2 w-fit translate-x-3 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:gap-3 transition-all duration-500'><FaLongArrowAltRight size={20} /> استشير خبير عقاري</div>
          </button>
          </div>
        </div>

      </div>

      {/* video */}
      <div className='flex items-center justify-between'>
        {/* video */}
        <div className="relative lg:h-[80vh] md:h-[70vh]  lg:w-[65%] w-full hover rounded-[3rem] overflow-hidden ">
          <video
            src="/images/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 p-6 h-full flex  ">
            <FilterForm />
          </div>
        </div>
        <div className='lg:h-[80vh] max-lg:hidden '>
          <Image src='/images/hero.png' width={500} height={500} alt='hero' className='w-full h-full ' />

        </div>
      </div>
    </section>
  )
}

export default HeroSection
