import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import PartnerCard from '@/components/shared/partner-card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const PartnersPage = () => {
  return (
    <main className='space-y-8'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'عملاء نثق بهم' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>عملاء نثق بهم</h1>
      </div>

      <div className='container space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {Array.from({ length: 8 }).map((_, index) => (
            <PartnerCard key={index} />
          ))}
        </div>

        {/* Static Pagination */}
        <div  className='flex items-center justify-center gap-2 mt-8'>
          <Button
            variant='outline'
            size='icon'
            className='size-8 p-0'
          >
            <ChevronRight className='h-4 w-4' />
          </Button>

          {[4,3,2,1].map((page) => (
            <Button
              key={page}

              className={`size-8 p-0  bg-white text-black border border-gray-300 hover:bg-gray-100 ${page === 1 ? ' border-main-green ' : ''}`}
            >
              {page}
            </Button>
          ))}


        </div>
      </div>
    </main>
  )
}

export default PartnersPage
