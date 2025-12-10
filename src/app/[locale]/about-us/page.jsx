import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Image from 'next/image'
import React from 'react'

const AboutUsPage = () => {
  return (
    <main className='space-y-12'>
      {/* image */}
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[
          { label: 'من نحن' },
        ]} />
        <h1 className='text-main-navy text-2xl font-bold'>من نحن</h1>
      </div>
      {/* description */}
      <div className='container border border-main-gray p-4 space-y-8'>
        <Image src='/images/blog.jpg' alt='user-manual' width={1000} height={1000} className='w-full h-96 object-cover' />
        <div className='*:leading-8  space-y-6'>
          <h1 className='text-main-navy lg:text-4xl md:text-2xl text-xl !font-bold !leading-12'><span className='text-main-green'>حلول العقارية</span> <br />وسيط إدارة عقارك</h1>
          <p>مع تطور التكنولوجيا، ظهر مفهوم العقارات الذكية التي تعتمد على أنظمة التحكم الرقمي، إضافة إلى ازدياد الطلب على المباني المستدامة الصديقة للبيئة. كما أصبح التسويق العقاري الرقمي أداة أساسية لبيع وشراء العقارات عبر الإنترنت.</p>
          <p>مع تطور التكنولوجيا، ظهر مفهوم العقارات الذكية التي تعتمد على أنظمة التحكم الرقمي، إضافة إلى ازدياد الطلب على المباني المستدامة الصديقة للبيئة. كما أصبح التسويق العقاري الرقمي أداة أساسية لبيع وشراء العقارات عبر الإنترنت.مع تطور التكنولوجيا، ظهر مفهوم العقارات الذكية التي تعتمد على أنظمة التحكم الرقمي، إضافة إلى ازدياد الطلب على المباني المستدامة الصديقة للبيئة. </p>
          <p>تُعتبر العقارات من أهم القطاعات الاقتصادية وأكثرها تأثيرًا في حياة الأفراد والمجتمعات، فهي لا تقتصر على كونها وسيلة للسكن أو العمل فقط، بل تمثل أيضًا أداة استثمارية فعّالة ومصدرًا رئيسيًا لبناء الثروة.</p>
        </div>
      </div>
      {/* detailes */}
      <div className='container'>
        {/* part one  */}
        <div className='flex items-center justify-between gap-8 pb-10 border-b max-md:flex-col-reverse'>
          <div className='*:text-sm *:leading-6 space-y-6'>
            <h3 className='text-main-navy lg:text-3xl !text-2xl lg:max-w-xl font-bold !leading-12'><span className='text-main-green'>العقارات</span> محرك أساسي للاقتصاد والاستثمار</h3>
            <p>تُعتبر العقارات من أهم القطاعات الاقتصادية وأكثرها تأثيرًا في حياة الأفراد والمجتمعات، فهي لا تقتصر على كونها وسيلة للسكن أو العمل فقط، بل تمثل أيضًا أداة استثمارية فعّالة ومصدرًا رئيسيًا لبناء الثروة.</p>

            <p>
              تلبية الاحتياجات الأساسية: يوفر العقار المأوى للإنسان، سواء كان منزلًا للسكن أو مكتبًا للعمل.
              <br />
              تحريك عجلة الاقتصاد: قطاع العقارات مرتبط بالبناء، مواد التشييد، التمويل العقاري، والهندسة، مما يخلق فرص عمل ويساهم في الناتج المحلي.
              <br />
              الاستثمار طويل الأمد: يُنظر إلى العقار كأصل ثابت يحافظ على قيمته غالبًا مع مرور الوقت، ويُعد ملاذًا آمنًا في ظل تقلبات الأسواق المالية.

            </p>
          </div>
          <Image src='/images/about-1.png' alt='user-manual' width={1000} height={1000} className='lg:w-1/3 lg:h-96  object-contain' />
        </div>
        {/* part two  */}
        <div className='flex items-center  lg:gap-20 gap-8  max-md:flex-col'>
          <Image src='/images/about-2.png' alt='user-manual' width={1000} height={1000} className='lg:w-1/3 lg:h-96  object-contain' />
          <div className='*:text-sm *:leading-6 space-y-6'>
            <h3 className='text-main-navy lg:text-3xl !text-2xl lg:max-w-xl font-bold !leading-12'>نقاط مختصرة عن <span className='text-main-green'>الحلول العقارية</span></h3>
            <ul className='list-disc space-y-6'>
              <li>ارتفاع الأسعار في بعض المدن الكبرى مما يعيق الشباب عن التملك.
                <br />
                التقلبات الاقتصادية التي تؤثر على العرض والطلب.</li>
              <li>التمويل العقاري وصعوبة الحصول على قروض مناسبة.</li>
              <li>التمويل العقاري وصعوبة الحصول على قروض مناسبة.</li>
            </ul>
          </div>
        </div>
      </div>
    </main >
  )
}

export default AboutUsPage
