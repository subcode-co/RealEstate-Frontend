import React from 'react'
import SectionHeader from '../shared/section-header'
import { FaStar } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className='container space-y-6 py-12 flex items-center max-lg:flex-col max-lg:gap-6 '>
      {/* content */}
      <div className='lg:w-1/2 space-y-8'>
        <SectionHeader>من نحن</SectionHeader>
        <h3 className='lg:text-[32px]  text-3xl font-semibold lg:w-[80%] lg:leading-16 leading-12'>
          نضمن تعامل <span className='text-main-green'>موثوق</span> وحماية عالية لبياناتك
        </h3>
        <p className='text-xs leading-6 lg:w-[90%] '>شركة الحلول العقارية هي شريكك الأول لتحقيق أحلامك العقارية بكل ثقة واطمئنان. نقدم لك مجموعة متكاملة من الخدمات تشمل البيع والشراء والتأجير وإدارة الأملاك، مع حلول مبتكرة مصممة خصيصًا لتناسب احتياجاتك. بفضل خبرتنا العميقة وفريقنا المتخصص، نمنحك فرصة استثمارية آمنة وتجربة سلسة ترتقي لتطلعاتك. نحن لا نقدم لك عقارًا فحسب، بل نصنع لك مستقبلًا مليئًا بالفرص والنجاح. اختر الحلول العقارية، حيث تتحول الأفكار إلى إنجازات، والطموحات إلى واقع ملموس.</p>

      </div>
      {/* image */}
      <div className=' lg:w-1/2 w-full rounded-3xl relative  lg:h-[70vh] md:h-[30vh] h-[50vh]  bg-[url("/images/about.jpg")] bg-cover '>
        {/* rate */}
        <div className='w-[30%] text-center bg-white rounded-b-3xl  absolute top-0 end-[10%] '>
          <FaSquareCheck size={34} className='lg:size-[34px] size-[24px] text-main-green absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          <div className='space-y-4 lg:p-8 p-4 '>
            <p className='lg:text-6xl text-4xl font-bold '>4.8</p>
            <div className='flex items-center justify-center gap-1'>
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} size={20} className='text-main-green' />
              ))}
            </div>
            <div className='space-y-1'>
              <p className='whitespace-nowrap text-xs font-semibold text-gray-400'>موثوق من عملائنا</p>
              <p className=' text-xs '>500+ Reviews</p>
            </div>
          </div>
        </div>
        {/* counter */}
        <div className='flex items-center gap-6 text-center bg-white rounded-tl-4xl absolute bottom-0 start-0 lg:p-6 p-4 '>
          <div className='flex items-center gap-2 '>
            <p className='lg:text-sm text-xs  text-gray-400'>عقارات مباعة</p>
            <p className='lg:text-5xl text-3xl font-bold '>550+</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='lg:text-sm text-xs  text-gray-400'>مبيعات اليوم</p>
            <p className='lg:text-5xl text-3xl font-bold '>250+</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default AboutSection
