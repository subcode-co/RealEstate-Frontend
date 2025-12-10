import { Link } from '@/i18n/navigation'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { MdSocialDistance } from 'react-icons/md'

const DealsTable = () => {

  return (
    <div className='space-y-4 mt-8'>
      {Array.from({ length: 10 }).map((_, index) => (
        <Link key={index} href={"/deals/1"} className='grid grid-cols-5 border rounded px-4 py-6 hover:bg-gray-100 '>
          {/* title */}
          <div className='flex items-center gap-1'>
            <Image src="/images/partner.png" alt='placeholder' width={100} height={100} className='size-12 object-cover' />
            <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold '>فيلا العاشر بحي النسيم</h3>
            <p className='text-xs'>فيلا</p>
          </div>
        </div>
        {/* price */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-xs '>قيمة الصفقة</h3>
          <p className=' font-semibold flex items-center gap-1'>788,000 <Image src="/images/ryal-green.svg" alt='placeholder' width={100} height={100} className='size-3 object-cover' /></p>
        </div>
        {/* price */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-xs '>سعر المتر</h3>
          <p className=' font-semibold flex items-center gap-1'>7000 <Image src="/images/ryal-green.svg" alt='placeholder' width={100} height={100} className='size-3 object-cover' /></p>
        </div>
        {/* distance */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-xs '>مساحة العقار</h3>
          <p className=' font-semibold flex items-center gap-1'>220m2 <MdSocialDistance   className=' text-main-green' /></p>
        </div>
        {/* date */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-xs '>الوقت والتاريخ</h3>
          <p className=' font-semibold flex items-center gap-1'>25/9/2025 <Calendar  size={12}  className=' text-main-green' /></p>
        </div>
      </Link>
      ))}

    </div>
  )
}

export default DealsTable
