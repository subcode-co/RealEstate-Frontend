import Image from 'next/image'
import React from 'react'
import { BsBookmarkDash } from "react-icons/bs";
import ryal from '@/assets/ryal.svg'
import { Link } from '@/i18n/navigation';
const StatesCard = ({withBorder=true}) => {
  return (
    <div className={`${withBorder && "border-2 border-gray-200"} bg-white rounded-lg p-4 space-y-5`}>
      {/* image and favorate */}
      <div className='h-52 rounded-xl relative overflow-hidden'>
        {/* favorate */}
        <button className='group bg-white p-2 rounded-md absolute z-10 text-main-green top-4 start-4'>
          <BsBookmarkDash size={20} className=' ' />
        </button>
        {/* space */}
        <div className='text-[.6rem] font-semibold w-fit bg-white p-2 rounded-md absolute z-10  top-4 end-4'>320<sup>m2</sup></div>
        {/* special */}
        <div className='text-xs font-semibold w-fit bg-main-green text-white p-2 rounded-t-md absolute z-10  top-1/2 -start-5  -rotate-90'>عقار مميز</div>
        <Image src='/images/state.png' fill alt='state' className='static w-full h-full object-cover rounded-xl' />
      </div>

      {/* content */}
      <div className='space-y-2'>
        <h4 className=' font-bold text-lg '>فيلا جديدة في جدة</h4>
        <p className='text-xs text-gray-400'>جدة, السعودية</p>
        {/* price */}
        <div className='flex items-center gap-1'>
          <p className='text-xl font-bold text-main-green'>670,000</p>
          <Image src={ryal} alt='ryal' width={20} height={20}  className='size-4 object-contain'/>
        </div>
      </div>
      {/* link */}
      <Link href={'/estats/1'} className='text-sm font-medium block text-center w-3/4 mx-auto  rounded-md  py-2 px-3 border-1 border-main-green text-main-green hover:bg-main-green hover:text-white transition-all duration-300'>عرض التفاصيل</Link>
    </div>
  )
}

export default StatesCard
