"use client"
import { useState } from 'react'
import SectionHeader from '../shared/section-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocale } from 'next-intl';
import { MdOutlineHomeWork } from 'react-icons/md';
import FilterGrid from '../shared/filter-grid';
import Image from 'next/image';

const StateFilterSection = () => {
  const locale = useLocale();
  const [type, setType] = useState("sell");
  const activeStyle = "bg-main-green text-white"
  const tapStyle = "bg-white lg:h-24 lg:min-w-30 md:h-20 md:min-w-24 h-16 min-w-20  shadow-none data-[state=active]:text-main-green "
  return (
    <section className='container py-12 space-y-4'>
      <div className="triangle  bg-main-light-green lg:py-10 pt-12 pb-6 lg:w-[90%] mx-auto flex items-center justify-center flex-col lg:gap-6 gap-3" >
        <SectionHeader>
          شركاء النجاح
        </SectionHeader>
        <h3 className='lg:text-4xl md:text-3xl text-xl font-semibold'>إختر عقارك بكل سهولة</h3>
      </div>
      {/* layout  */}
      <div className='bg-main-light-gray lg:p-10 p-5 !pb-0 rounded-xl'>
        <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue="all" className="space-y-6 ">
          <div className='flex items-center lg:gap-8 gap-4 max-md:flex-col'>
            {/* buttons for  sell or rent  */}
            <div className='flex  flex-col gap-2 max-md:flex-row'>
              <button onClick={() => setType("sell")} className={`w-30 rounded-s-lg shadow  py-3 text-sm font-semibold ${type === "sell" ? activeStyle : "bg-white"}  `}>بيع</button>
              <button onClick={() => setType("rent")} className={`w-30 rounded-s-lg shadow  py-3 text-sm font-semibold ${type === "rent" ? activeStyle : "bg-white"}  `}>إيجار</button>
            </div>
            <TabsList className="h-full">
              <TabsTrigger value="all" className={tapStyle}>الكل</TabsTrigger>
              <TabsTrigger value="villa" className={tapStyle}>
                <div className='flex items-center gap-1'>
                  <MdOutlineHomeWork size={30} className='size-5 text-main-green' />
                  فلل
                </div>
              </TabsTrigger>
              <TabsTrigger value="apartment" className={tapStyle}>
                <div className='flex items-center gap-1'>
                  <MdOutlineHomeWork size={30} className='size-5 text-main-green' />
                  شقق
                </div>
              </TabsTrigger>
              <TabsTrigger value="land" className={tapStyle}>
                <div className='flex items-center gap-1'>
                  <MdOutlineHomeWork size={30} className='size-5 text-main-green' />
                  أبراج
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className={"m-0 p-0"} value="all"><FilterGrid/></TabsContent>
          <TabsContent className={"m-0 p-0"} value="villa"><FilterGrid/></TabsContent>
          <TabsContent className={"m-0 p-0"} value="apartment"><FilterGrid/></TabsContent>
          <TabsContent className={"m-0 p-0"} value="land"><FilterGrid/></TabsContent>
        </Tabs>
      </div>
      <Image src={'/images/banner.svg'} width={200} height={200} alt='banner' className='static w-full  object-contain rounded-e-xl' />

    </section>
  )
}

export default StateFilterSection
