"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { BsSearch } from "react-icons/bs";
import { useState } from "react"

const FormSchema = z.object({
  type: z.string().min(1, "هذا الحقل مطلوب"),
  location: z.string().min(1, "هذا الحقل مطلوب"),
  space: z.string().min(1, "هذا الحقل مطلوب"),
  price: z.string().min(1, "هذا الحقل مطلوب"),
})

export default function FilterForm() {
  const [status, setStatus] =useState("sell")
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "villa",    
      location: "",
      space: "",
      price: "",
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="w-full self-end">
      <div className="flex items-center cursor-pointer ">
        <button onClick={() => setStatus("sell")} className={`h-12 bg-[#F5F5F5] text-[#A6A6A6]  px-6 ${status === "sell" && "text-main-green bg-[#FEFEFF]"}`}>
          بيع
        </button>
        <button onClick={() => setStatus("rent")} className={`h-12 bg-[#F5F5F5] text-[#A6A6A6]  px-6 ${status === "rent" && "text-main-green bg-[#FEFEFF]"}`}>
          ايجار
        </button>
      </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#FEFEFF] p-6 flex items-center justify-between rounded-lg rounded-tr-none max-md:flex-wrap max-md:gap-4">
        {/* نوع العقار */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className={"max-md:w-1/2"}>
              <FormLabel>نوع العقار</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none shadow-none focus-visible:ring-0 p-0">
                    <SelectValue placeholder="اختر نوع العقار" className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="apartment">شقة</SelectItem>
                  <SelectItem value="villa">فيلا</SelectItem>
                  <SelectItem value="land">أرض</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* الموقع */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className={"max-md:w-1/2"}>
              <FormLabel>الموقع</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none shadow-none focus-visible:ring-0 p-0">
                    <SelectValue placeholder="اختر " className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="makka">مكة</SelectItem>
                  <SelectItem value="madenah">المدينة</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* المساحة */}
        <FormField
          control={form.control}
          name="space"
          render={({ field }) => (
            <FormItem className={"max-md:w-1/2"}>
              <FormLabel>المساحة</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none shadow-none focus-visible:ring-0 p-0">
                    <SelectValue placeholder="اختر " className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="420">420 m2</SelectItem>
                  <SelectItem value="540">540 m2</SelectItem>
                  <SelectItem value="600">600 m2</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* السعر */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className={"max-md:w-1/2"}>
              <FormLabel>السعر</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none shadow-none focus-visible:ring-0 p-0">
                    <SelectValue placeholder="اختر " className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className={"flex gap-2 items-center "} value="200-350"><Image src="/images/ryal-green.svg" alt="currency" width={10} height={10} /> 200-350 </SelectItem>
                  <SelectItem className={"flex gap-2 items-center "} value="350-500"><Image src="/images/ryal-green.svg" alt="currency" width={10} height={10} /> 350-500 </SelectItem>
                  <SelectItem className={"flex gap-2 items-center "} value="500-700"><Image src="/images/ryal-green.svg" alt="currency" width={10} height={10} /> 500-700 </SelectItem>

                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={"bg-main-green text-white font-bold rounded-s-lg rounded-e-none  md:h-14 h-10  flex items-center gap-2 hover:gap-3 transition-all duration-500 hover:bg-main-green max-md:mx-auto"}><BsSearch size={20} /> بحث</Button>
      </form>
    </Form>
      </div>
  )
}
