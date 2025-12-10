import React from 'react'
import ServicesCard from '../shared/services-card'

const ServicesSection = () => {
  return (
    <section className='container  py-12 overflow-hidden'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-4 '>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </section>
  )
}

export default ServicesSection
