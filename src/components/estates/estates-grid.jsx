"use client"
import React from 'react'
import EstateCard from './estate-card'
import { HiArrowPath } from 'react-icons/hi2'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaPlus } from 'react-icons/fa'
import AddForm from './add-form'
const EstatesGrid = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <div className='flex items-center justify-between'>
      <h3 className='text-xl'><span className='text-main-green'>459</span> نتيجة بحــث</h3>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className='bg-main-green text-white px-4 py-2 rounded-s-lg flex items-center gap-2 hover:bg-main-navy hover:text-white'> <FaPlus />أضافة عقار</DialogTrigger>
          <DialogContent className={"lg:w-[80%]"}>
            <DialogHeader>
              <DialogTitle className={"text-center text-xl font-bold"}>إضافة عقار جديد</DialogTitle>
              <DialogDescription asChild>
                <AddForm setOpen={setOpen} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 12 }, (_, index) => (
          <EstateCard key={index} />
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <button className='border border-main-navy text-main-navy hover:bg-main-navy hover:text-white px-4 py-2 rounded-s-lg flex items-center gap-2'> <HiArrowPath className='size-6 text-main-green' /> عرض المزيد</button>
      </div>
    </>
  )
}

export default EstatesGrid
