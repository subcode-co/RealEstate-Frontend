
"use client"
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { useLocale } from 'next-intl'
import { FaLocationArrow, FaPlus } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddForm from '@/components/estates/add-form'
import DealsTable from '@/components/shared/deals-table'
const page = () => {
  const locale = useLocale()
  const [open, setOpen] = React.useState(false)
  const tabstyle = "bg-gray-100 p-4 data-[state=active]:bg-main-light-green data-[state=active]:border-b data-[state=active]:border-main-green rounde-none rounded-s-lg last:rounded-none last:rounded-s-lg  "
  return (
    <main className='space-y-6'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[{ label: 'الصفقات' }]} />
        <h1 className='text-main-navy text-2xl font-bold'>الصفقات المباشرة</h1>
      </div>
      <div className='container border border-gray-300 p-10'>
        <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue="houre" >
          <div className='flex justify-between items-center'>
            {/* search */}
            <div className='relative'>
              <MdOutlineLocationOn className='absolute end-3 top-1/2 -translate-y-1/2 text-gray-500' />
              <Input placeholder='جميع المناطق' className={"!h-10 placeholder:text-xs rounded-none rounded-s-lg"} />
            </div>
            {/* tabs */}
            <TabsList className="bg-transparent !h-auto flex items-center gap-1">
              <TabsTrigger value="houre" className={tabstyle}>ساعة</TabsTrigger>
              <TabsTrigger value="day" className={tabstyle}>يوم</TabsTrigger>
              <TabsTrigger value="week" className={tabstyle}>اسبوع</TabsTrigger>
              <TabsTrigger value="month" className={tabstyle}>شهر</TabsTrigger>
              <TabsTrigger value="year" className={tabstyle}>سنة</TabsTrigger>
            </TabsList>
            {/* add */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className=' text-main-green px-4 py-2 rounded flex items-center gap-2 border border-main-green text-sm hover:bg-main-green hover:text-white transition-all duration-300 '> <FaPlus />أضافة صفقة</DialogTrigger>
              <DialogContent className={"lg:w-[80%]"}>
                <DialogHeader>
                  <DialogTitle className={"text-center text-xl font-bold"}>إضافة صفقة جديدة</DialogTitle>
                  <DialogDescription asChild>
                    <AddForm setOpen={setOpen} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          {["houre","day","week","month","year"].map((tab)=>(
            <TabsContent key={tab} value={tab}>
            <DealsTable />
          </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

export default page
