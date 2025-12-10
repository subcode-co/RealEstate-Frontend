import React from 'react'
import SectionHeader from '../shared/section-header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BlogCard from '../shared/blog-card'
import { useLocale } from 'next-intl'
import ClientCard from '../shared/client-card'
import { getLocale, getTranslations } from 'next-intl/server'
import { getData } from '@/lib/fetch-methods'
const ClientReviews =async () => {
  const locale = await getLocale();
  const t = await getTranslations("client_reviews");
  let data = [];
  const response = await getData({
    url:"/testimonials"
  })
  data = response?.code==200 ? response?.data?.data?.data : [];
  
  return (
    <section className=' space-y-6 py-12'>
      {/* header */}
      <div className='container'>

      <SectionHeader>
          {t("title")}
      </SectionHeader>
      </div>

      {/* slider */}
      <Carousel className={"space-y-8"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
        {/* title */}
        <div className='flex items-center justify-between container'>
          <div className='space-y-6'>
            <h3 className='text-4xl font-semibold'>{t("subtitle")}</h3>
            <p className='text-xs'> {t("description")}</p>
          </div>
          <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : ""} w-fit`}>
            <CarouselPrevious className={"static translate-0 "} />
            <CarouselNext className={"static translate-0 "} />
          </div>
        </div>
        <CarouselContent className={"lg:w-[90%] ms-auto max-lg:container"}>
          {
            data?.map((item,index)=>(
              <CarouselItem key={index} className="lg:basis-[35%] md:basis-1/2 basis-[90%]" >
                <ClientCard item={item}/>
              </CarouselItem>
            ))
          }
        </CarouselContent>

      </Carousel>


    </section>
  )
}

export default ClientReviews
