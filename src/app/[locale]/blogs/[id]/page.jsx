import BlogSection from '@/components/home/blog-section';
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Image from 'next/image';
import React from 'react'

const SingleBlogPage = () => {


  return (
    <main className='space-y-12'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[
          { label: 'المدونة', href: '/blogs' },
          { label: 'تفاصيل المدونة' },
        ]} />
        <h1 className='text-main-navy text-2xl font-bold'>تفاصيل المدونة</h1>
      </div>
      <div className='container space-y-4  border border-gray-200 rounded-s-xl overflow-hidden'>
        <div className='relative'>
          <Image src='/images/state.png' alt='blog' width={300} height={300} className='w-full h-96 object-cover' />
          {/* author */}
          <div className='bg-white border border-gray-200 rounded-xl lg:w-[25%] lg:absolute lg:-bottom-20 lg:left-10 z-10'>
            <div className='p-4 border-b border-gray-200'>
              <h3 className='text-main-navy font-bold text-center'>كاتب المقاله</h3>
            </div>
            <div className='flex items-center gap-2 p-4'>
              <Image src='/images/state.png' alt='blog' width={300} height={300} className='w-12 h-12 object-cover rounded-lg' />
              <div>
                <h3 className='text-main-navy font-bold text-base'>محمد أحمد</h3>
                <p className='text-gray-500 text-xs'>جدة, حي النسيم</p>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-4 lg:p-14 p-8'>
          <h2 className='text-main-navy font-bold text-3xl lg:max-w-xl lg:leading-14'><span className='text-main-green'>العقارات</span> المحرك الأساسي للاقتصاد والمجتمعات</h2>
          <div >
            <div dir="rtl" className='space-y-4 text-xs ' >
              <h3 className='text-main-navy font-bold text-base'>مقدمة</h3>
              <p>
                تعد العقارات من أهم القطاعات الاقتصادية حول العالم، فهي ليست مجرد مبانٍ أو أراضٍ، بل أصول استثمارية تؤثر بشكل مباشر في حياة الأفراد والمجتمعات من خلال الاستقرار السكني، ويمكن تحقيق عوائد مالية مستقرة، كما تمثل السكن أحد أهم المتطلبات الأساسية للإنسان.
              </p>

              <h3 className='text-main-navy font-bold text-base'>تعريف العقارات</h3>
              <p>
                العقار هو أصل غير منقول يتمثل في الأراضي وما يُقام عليها من منشآت. وتشمل الأراضي الفارغة أو المزارع أو الوحدات السكنية أو التجارية أو الصناعية، وحين يُقال “العقار” يكون المقصود به كل ما لا يمكن نقله مما يمنحه قيمة مستمرة على المدى الطويل.
              </p>

              <h3 className='text-main-navy font-bold text-base'>أهمية قطاع العقارات</h3>
              <ul className='space-y-2' >
                <li>1. دعم الاقتصاد المحلي والناتج القومي الإجمالي بشكل كبير، ويوفر فرص عمل في مجالات متعددة مثل البناء والتمويل والخدمات.</li>
                <li>2. الاستثمار العقاري يعتبر من أكثر الاستثمارات أمانًا واستقرارًا للتضخم في الاقتصاد نظرًا لاستمراره النسبي.</li>
                <li>3. يساهم القطاع العقاري في تطوير البنية التحتية والخدمات والتنمية مما يرفع جودة الحياة.</li>
                <li>4. ارتفاع الطلب العقاري غالبًا ما ينعكس إيجابًا على قيمته أو عوائده أو رفع الأسعار العامة.</li>
              </ul>

              <h3 className='text-main-navy font-bold text-base'>أنواع العقارات</h3>
              <ul className='space-y-2' >
                <li>• العقارات السكنية مثل الشقق والفيلات والمنازل.</li>
                <li>• العقارات التجارية مثل المكاتب والمحال والمراكز التجارية.</li>
                <li>• العقارات الصناعية مثل المصانع والمستودعات والمناطق اللوجستية.</li>
                <li>• العقارات الزراعية مثل الأراضي والمزارع.</li>
              </ul>

              <h3 className='text-main-navy font-bold text-base '>الاتجاهات الحديثة في السوق العقاري</h3>
              <ul className='space-y-2' >
                <li>• الاتجاه نحو الاعتماد على التكنولوجيا في إدارة المباني وتوفير الطاقة.</li>
                <li>• دعم مشاريع الإسكان المستدامة والبناء مع مراعاة الحفاظ على البيئة.</li>
                <li>• الاستثمار الجماعي العقاري (Crowdfunding) الذي أتاح الفرصة للأفراد للاستثمار بمبالغ صغيرة.</li>
                <li>• الاعتماد المتزايد على المنصات الإلكترونية لتسويق العقارات وتسهيل عمليات البيع والشراء.</li>
              </ul>

              <h3 className='text-main-navy font-bold text-base'>خاتمة</h3>
              <p>
                يبقى العقار ركيزة أساسية في حياة الإنسان ليس فقط كمسكن، بل كأداة استثمارية تسهم في بناء الثروة الفردية وتعزز الاقتصاد الوطني، ومع التطور التكنولوجي والابتكار في أساليب التمويل، فإن مستقبل القطاع العقاري يتجه نحو تحولات كبيرة في المستقبل القريب.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogSection/>
    </main>
  )
}

export default SingleBlogPage
