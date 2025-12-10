import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import SectionHeader from '../shared/section-header';
import StatesCard from '../shared/state-card';
const StatesSection = ({title="عقارات مميزة",subTitle="أفضل العقارات المميزة",description="نقترح لك بعض أفضل العقارات المميزة  والموثوقة لدينا "}) => {
  const locale = useLocale();
  return (
    <section className='container  py-12 space-y-8'>
      {/* title */}
      <div className='flex items-center justify-between max-md:flex-col max-md:gap-6'>
      <div className='space-y-6'>
        <SectionHeader>
          {title}
        </SectionHeader>
        <h3 className='text-4xl font-semibold'>{subTitle}</h3>
        <p className='text-xs'>{description}</p>
        </div>
        {/* link */}
        <Link href={"/states"} className=' flex items-center gap-1 hover:gap-2 transation-all duration-300 text-main-green text-sm  w-fit'>
          <IoIosArrowDroprightCircle size={20} className='drop-shadow-xl'/>
          <span>عرض الكل</span>
        </Link>
      </div>

      {/* slider */}
      <Carousel className={"space-y-8"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
        {/* title */}
        <CarouselContent className={"p-1"}>
          {
            Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/2 basis-[90%]" >
                <StatesCard/>
              </CarouselItem>))
          }
        </CarouselContent>
        <div className='flex items-center justify-center gap-3 flex-row-reverse '>
          <CarouselPrevious className={"static translate-0 "} />
          <CarouselNext className={"static translate-0 "} />
        </div>
      </Carousel>
    </section>
  )
}

export default StatesSection
