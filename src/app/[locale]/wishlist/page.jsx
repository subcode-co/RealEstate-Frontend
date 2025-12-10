import EstateCard from '@/components/estates/estate-card'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'

const WishListPage = () => {
  return (
    <main className='space-y-8'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'المفضله' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>المفضله</h1>
      </div>
        {/* cards */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 7 }).map((_, index) => (
            <EstateCard key={index} />
          ))}
        </div>

    </main>
  )
}

export default WishListPage
