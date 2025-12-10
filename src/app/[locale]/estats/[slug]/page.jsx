"use client"
import React from 'react'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import { PiBathtub, PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineBed, MdOutlineMoveToInbox, MdOutlineTsunami } from 'react-icons/md';
import ryal from '@/assets/ryal.svg'
import Image from 'next/image';
import { LuBellRing } from 'react-icons/lu';
import { FaLongArrowAltRight, FaMoneyBillWave, FaPhone, FaWhatsapp } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoWifiSharp } from 'react-icons/io5';
import { TbAirConditioning } from 'react-icons/tb';
import { Gi3dStairs } from 'react-icons/gi';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLocale } from 'next-intl';
import ClientCard from '@/components/shared/client-card';
import StatesSection from '@/components/home/states-section';
import { BsBank } from 'react-icons/bs';
import { FaMessage } from 'react-icons/fa6';
const EstateSinglePage = () => {
  const locale = useLocale();
  const images = [
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
    {
      original: `/images/state.png`,
      thumbnail: `/images/state.png`,
    },
  ]
  const whatsappNumber = "201068389295"; // بدون علامة + 
  const message = encodeURIComponent("مرحباً، أنا مهتم بشراء هذا العقار  ( فيلا جديدة في جدة) وأريد معرفة المزيد من التفاصيل.");
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <main className='space-y-12'>
      {/* header */}
      <div className='bg-main-light-gray p-4 space-y-4 rounded-b-xl container'>

        <div className='flex md:items-center justify-between max-md:flex-col max-md:gap-4'>
          {/* content */}
          <div className='space-y-4'>
            <CustomBreadcrumbs items={[
              { label: 'العقارات', href: '/estats' },
              { label: 'تفاصيل العقار' },
            ]} />
            <h1 className='text-main-navy text-2xl font-bold'>منزل راقي في جدة</h1>
            <p className='text-xs text-main-navy/70'>3002 Foster Ave, , 11210,KSA</p>
            {/* calls and messages  */}
            <div className='text-xs text-main-navy flex items-center gap-2'>
              {/* calls */}
              <div className='flex items-center gap-1 bg-white  p-2 rounded-md'>
                <PiPhoneCallLight className='text-main-green' />
                <span className=' text-main-green font-bold'>50</span>
                <span>مكالمات</span>
              </div>
              {/* messages */}
              <div className='flex items-center gap-1 bg-white  p-2 rounded-md'>
                <MdOutlineMoveToInbox className='text-main-green' />
                <span className=' text-main-green font-bold'>122</span>
                <span>رسائل</span>
              </div>
            </div>
          </div>
          {/* price and actions  */}
          <div className='flex md:items-center gap-4 max-md:flex-col '>
            {/* price */}
            <div className='flex items-center gap-2'>
              <p className='lg:text-3xl  text-2xl  font-bold text-main-green'>670,000</p>
              <Image src={ryal} alt='ryal' width={20} height={20} className='lg:size-6 size-4 object-contain' />
            </div>
            {/* actions */}
            <div className='flex flex-col gap-2 max-md:flex-row'>
              <button className='w-36 h-12 border border-main-navy text-xs font-medium text-main-navy hover:bg-main-navy hover:text-white px-4 py-2 rounded-s-lg flex items-center gap-2 transition-all duration-300'> <LuBellRing className='size-4 text-main-green' /> عرض المزيد</button>
              <button onClick={handleWhatsApp} className='w-36 h-12 text-xs font-medium text-white bg-main-green px-4 py-2 rounded-s-lg flex items-center gap-2 hover:gap-3 transition-all duration-300'> <FaLongArrowAltRight className='size-4 ' /> شراء الآن</button>

            </div>
          </div>
        </div>

      </div>
      <div className='container flex  gap-4 max-lg:flex-col'>
        <div className='lg:w-1/2 w-full flex flex-col gap-4' >
          {/* image gallery */}
          <div dir='ltr'> <ImageGallery items={images} /></div>
          {/* description */}
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'>الوصف</h2>
            </div>
            {/* body */}
            <div className='p-6 ' >
              <p className='text-xs leading-6'>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              </p>
            </div>
          </div>
          {/* details */}
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'>تفاصيل العقار</h2>
            </div>
            {/* body */}
            <div className="divide-y divide-gray-300">
              {/* First Row */}
              <div className="grid grid-cols-2 p-6 border-b text-sm">
                <div className="flex items-center justify-between p-3 ">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>عدد الجراجات</span>
                  </div>
                  <span className="font-medium text-main-green">لايوجد</span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>البلكونة</span>
                  </div>
                  <span className="font-medium text-main-green">2</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="flex items-center justify-between p-3 ">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdOutlineBed className="size-5 text-main-green" />
                    <span>عدد الغرف</span>
                  </div>
                  <span className="font-medium text-main-green">4</span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <PiBathtub className="size-5 text-main-green" />
                    <span>عدد الحمامات</span>
                  </div>
                  <span className="font-medium text-main-green">2</span>
                </div>
              </div>

              {/* Third Row - Example of another property */}
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="flex items-center justify-between p-3 ">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>المساحة</span>
                  </div>
                  <span className="font-medium text-main-green">200 م²</span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>الطابق</span>
                  </div>
                  <span className="font-medium text-main-green">الثاني</span>
                </div>
              </div>
            </div>
            {/* footer */}
            <div>

            </div>

          </div>
          {/* features */}
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'>تفاصيل العقار</h2>
            </div>
            {/* body */}
            <div className='p-6 grid grid-cols-3 gap-4 gap-y-6 text-xs font-semibold' >
              <div className='flex items-center gap-2'>
                <IoIosCheckmarkCircle className='size-4 text-main-green' />
                <p>واي فاي مجاني</p>
                <IoWifiSharp className='size-4 text-main-green' />
              </div>
              <div className='flex items-center gap-2'>
                <IoIosCheckmarkCircle className='size-4 text-main-green' />
                <p>مطلة علي الطبيعة</p>
                <MdOutlineTsunami className='size-4 text-main-green' />
              </div>
              <div className='flex items-center gap-2'>
                <IoIosCheckmarkCircle className='size-4 text-main-green' />
                <p>مكيف هواء</p>
                <TbAirConditioning className='size-4 text-main-green' />
              </div>
              <div className='flex items-center gap-2'>
                <IoIosCheckmarkCircle className='size-4 text-main-green' />
                <p>شقه دوبلكس</p>
                <Gi3dStairs className='size-4 text-main-green' />
              </div>


            </div>
          </div>
          {/* location */}
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'>الموقع</h2>
            </div>
            {/* body */}
            <div className='p-6 ' >
              <iframe className="w-full h-80 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.031202291261!2d31.201493484885102!3d30.03596268188541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846c9306e97af%3A0x5315ebf6378470c0!2sRoute!5e0!3m2!1sar!2seg!4v1762763386542!5m2!1sar!2seg" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>


        </div>
        <div className='lg:w-1/2 w-full space-y-6'>
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'>تقييمات العملاء عن العقار</h2>
            </div>
            {/* body */}
            <div className='p-6' >
              {/* slider */}
              <Carousel className={"space-y-8"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
                {/* title */}
                

                <CarouselContent className={"lg:w-[98%] ms-auto max-lg:container"}>
                  {
                    Array.from({ length: 7 }).map((_, index) => (
                      <CarouselItem key={index} className=" basis-[95%]" >
                        <ClientCard />
                      </CarouselItem>))
                  }
                </CarouselContent>
                <div className=' flex items-center justify-center gap-3 flex-row-reverse '>
                  <CarouselPrevious className={"static translate-0 "} />
                  <CarouselNext className={"static translate-0 "} />
                </div>

              </Carousel>
            </div>
          </div>
          {/* payment */}
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'> طرق الدفع</h2>
            </div>
            {/* body */}
            <div className='p-6 grid grid-cols-3 gap-4 gap-y-6 text-xs font-semibold' >
              <div className='flex items-center gap-2'>
                <IoIosCheckmarkCircle className='size-4 text-main-green' />
                <p>كاش</p>
                <FaMoneyBillWave className='size-4 text-main-green' />
              </div>
              <div className='flex items-center gap-2'>
                <IoIosCheckmarkCircle className='size-4 text-main-green' />
                <p>تحويل بنكي</p>
                <BsBank className='size-4 text-main-green' />
              </div>



            </div>
          </div>
          {/* ads */}
          <div className='rounded-xl  border'>
            {/* header */}
            <div className='p-6 border-b'>
              <h2 className='font-bold'> اعلان الهيئه العامه للعقار</h2>
            </div>
            {/* body */}
            <div className='p-6 flex items-center justify-center' >
              <Image src={"/images/qr.png"} alt='qr' width={200} height={200} className='size-40'/>
            </div>
          </div>
          {/* buttons */}
          <div className=' flex items-center justify-center gap-4'>
            <button onClick={handleWhatsApp} className='basis-1/3 bg-main-green text-white py-4 px-6 rounded-b-xl flex items-center gap-2 hover:bg-main-green/80 transition-all duration-300'> <FaWhatsapp className='size-4 text-white' /> واتساب</button>
            <button className='basis-1/3 bg-main-navy text-white py-4 px-6 rounded-b-xl flex items-center gap-2 hover:bg-main-navy/80 transition-all duration-300'><FaMessage className='size-4 text-white' />رساله</button>
            <button className='basis-1/3 bg-main-green text-white py-4 px-6 rounded-b-xl flex items-center gap-2 hover:bg-main-green/80 transition-all duration-300'><FaPhone className='size-4 text-white' />اتصل بنا</button>
          </div>
        </div>
      </div>
      <div className=''>
        <StatesSection title="عقارات مشابهة" subTitle="عقارات مشابهة" description="نقترح لك بعض أفضل العقارات المميزة  والموثوقة لدينا "/>
      </div>
    </main>
  )
}

export default EstateSinglePage
