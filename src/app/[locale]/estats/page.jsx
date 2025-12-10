import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import EstateFilterPanel from '@/components/estates/estates-filter'
import EstatesGrid from '@/components/estates/estates-grid'

const EstatsPage = () => {
  return (
    <main className='space-y-12'>
      {/* header */}
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[
          { label: 'العقارات' },
        ]} />
        <h1 className='text-main-navy text-2xl font-bold'>العقارات</h1>
      </div>
      <section className='container space-y-12'>
        <EstateFilterPanel />
        <EstatesGrid />
      </section>
    </main>
  )
}

export default EstatsPage
