"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import { useForm } from "react-hook-form"
import { BsSearch } from "react-icons/bs"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { IoLocationOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const FormSchema = z.object({
  num: z.string().min(1, "هذا الحقل مطلوب"),
  room: z.string().min(1, "هذا الحقل مطلوب"),
  type: z.string().min(1, "هذا الحقل مطلوب"),
  finish: z.string().min(1, "هذا الحقل مطلوب"),
  location: z.string().min(1, "هذا الحقل مطلوب"),
  priceRange: z.array(z.number()).length(2).optional(),
})


const EstatesFilter = () => {
  const selectStyles = "border shadow-none focus-visible:ring-0 p-3 rounded-none rounded-s-lg border-gray-400 !h-12 !w-full justify-end"
  const [priceRange, setPriceRange] = useState([0, 10000])

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      num: "",
      room: "",
      type: "",
      finish: "",
      location: "",
      priceRange: [0, 10000],
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1   gap-4">
        <FormField
          control={form.control}
          name="num"
          render={({ field }) => (
            <FormItem >
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={selectStyles} iconStyle="size-6 text-main-navy">
                    <SelectValue placeholder="رقم الإعلان" className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">230990</SelectItem>
                  <SelectItem value="2">23909</SelectItem>
                  <SelectItem value="3">456700</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="room"
          render={({ field }) => (
            <FormItem >
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={selectStyles} iconStyle="size-6 text-main-navy">
                    <SelectValue placeholder="عدد الغرف" className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
                      <SelectItem key={item} value={item.toString()}>
                        {item}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem >
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={selectStyles} iconStyle="size-6 text-main-navy">
                    <SelectValue placeholder="نوع العقار" className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    ["فيلا", "شقة", "اراضي"].map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finish"
          render={({ field }) => (
            <FormItem >
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={selectStyles} iconStyle="size-6 text-main-navy">
                    <SelectValue placeholder="نوع التشطيب" className="text-main-navy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    ["لوكس", "متوسط", "بسيط"].map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem >
              <div className="relative ">
                <Input placeholder="الموقع" className="border shadow-none focus-visible:ring-0 p-3 rounded-none rounded-s-lg border-gray-400 !h-12" {...field} />
                <IoLocationOutline className="absolute size-4 end-3 top-1/2 -translate-y-1/2 text-gray-400 " />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* buttons */}
        <div className= "max-lg:order-2  bg-main-green text-white font-bold rounded-s-lg rounded-e-none  h-12 flex items-center justify-between">

          <Button type="submit" className={"bg-main-green  gap-2  transition-all duration-500 hover:bg-main-green "}>
            <FiSearch />
            بحث</Button>
          <Button type="submit" className={"bg-[#27A479]  gap-2 hover:gap-3 transition-all duration-500 hover:bg-[#27A479]  !p-1 h-11 rounded-none"}>
            <CiMicrophoneOn className="size-6" />
          </Button>
        </div>
        {/* price range slider */}
        <FormField
          control={form.control}
          name="priceRange"
          render={({ field }) => (
            <FormItem className="lg:col-span-3 md:col-span-2 col-span-1">
              <div className="bg-white border border-gray-400 rounded-s-lg p-4  flex items-center gap-4 ">
                <span className="text-gray-400">السعر</span>
                <div className="flex-1 space-y-2 ">
                  <div className="flex items-center justify-between text-xs text-main-navy font-semibold">
                    <span>{priceRange[0].toFixed(2)} </span>
                    <span>{priceRange[1].toFixed(2)} </span>
                  </div>
                  <FormControl>
                    <Slider
                      min={0}
                      max={10000}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) => {
                        setPriceRange(value)
                        field.onChange(value)
                      }}
                      className="w-full"
                    />
                  </FormControl>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 max-md:hidden">
                  {/* from  */}
                  <div className="bg-main-light-gray p-2 ">
                    من <span>{priceRange[0].toFixed(2)} </span>
                  </div>
                  {/* to */}
                  <div className="bg-main-light-gray p-2 ">
                    الي <span>{priceRange[1].toFixed(2)} </span>
                  </div>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}



const EstateFilterPanel = () => {
  return (
    <div >
      <div className="max-lg:hidden">
      <EstatesFilter />
      </div>

      <Sheet >
        <SheetTrigger className="lg:hidden bg-main-green text-white font-bold rounded-t-xl hover:bg-main-green/95 transition-all duration-500 w-full !h-12">خصص عقارك</SheetTrigger>
        <SheetContent side="bottom" >
          <div className="container py-12">
          <SheetHeader>
            <SheetTitle className={"text-center"}>خصص عقارك</SheetTitle>
            <SheetDescription className="text-center">
              ابحث عن العقار الذي تريده
            </SheetDescription>
          </SheetHeader>
          <EstatesFilter />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default EstateFilterPanel
