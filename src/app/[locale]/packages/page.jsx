import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import PlanCard from '@/components/shared/plan-card';
import React from 'react'

const PackagesPage = () => {
  const plans = [
    {
      title: "الباقة الأساسية",
      price: "99 ريال",
      features: [
        "نشر 5 عقارات",
        "دعم فني خلال أوقات العمل",
        "ظهور محدود في نتائج البحث",
      ],
    },
    {
      title: "الباقة المميزة",
      price: "199 ريال",
      popular: true,
      features: [
        "نشر 15 عقار",
        "دعم فني على مدار الساعة",
        "ظهور في أعلى نتائج البحث",
        "إعلانات مميزة",
      ],
    },
    {
      title: "الباقة الذهبية",
      price: "299 ريال",
      features: [
        "عدد غير محدود من العقارات",
        "دعم فني VIP",
        "إعلانات في الصفحة الرئيسية",
        "تحليل أداء العقارات",
      ],
    },
  ];

  return (
    <main className='space-y-8'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'الباقات' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>الباقات</h1>
      </div>
      <div className='container'>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default PackagesPage
