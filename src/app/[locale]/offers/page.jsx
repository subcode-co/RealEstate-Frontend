import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import OfferCard from '@/components/shared/offer-card'
import React from 'react'

const sampleOffers = [
  {
    id: 1,
    title: 'عرض خاص على الشقق السكنية',
    description: 'احصل على خصم يصل إلى 20% على وحداتنا السكنية المميزة مع إمكانية التقسيط على 5 سنوات',
    image: '/images/state.png',
    date: '2025-12-31'
  },
  {
    id: 2,
    title: 'تسهيلات في الدفع للمشاريع الجديدة',
    description: 'دفعة أولى 10% فقط وقسط على 8 سنوات مع إعفاء من المصاريف الإدارية',
    image: '/images/state.png',
    date: '2025-11-30'
  },
  {
    id: 3,
    title: 'عروض التشطيب الفاخر',
    description: 'تشطيب سوبر لوكس مع إكسسوارات أوروبية بأسعار تنافسية',
    image: '/images/state.png',
    date: '2025-10-15'
  },
]

const OffersPage = () => {
  return (
    <main className='space-y-6'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'العروض' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>العروض</h1>
      </div>
      <div className='container border border-gray-300 p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {sampleOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              description={offer.description}
              image={offer.image}
              date={offer.date}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default OffersPage
