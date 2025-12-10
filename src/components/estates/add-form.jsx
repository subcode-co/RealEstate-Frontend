"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Trash2 } from "lucide-react"

const schema = z.object({
  adType: z.string().min(1, "مطلوب"),
  description: z.string().min(1, "مطلوب"),
  rooms: z.string().min(1, "مطلوب"),
  bathrooms: z.string().min(1, "مطلوب"),
  area: z.string().min(1, "مطلوب"),
  country: z.string().min(1, "مطلوب"),
  city: z.string().min(1, "مطلوب"),
  priceMin: z.string().min(1, "مطلوب"),
  priceMax: z.string().min(1, "مطلوب"),
})

export default function AddForm({setOpen}) {
  const [photos, setPhotos] = useState([])
  const [video, setVideo] = useState(null)
const lableStyle = "block text-sm font-medium text-main-navy mb-2"
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      adType: "",
      description: "",
      rooms: "",
      bathrooms: "",
      area: "",
      country: "",
      city: "",
      priceMin: "",
      priceMax: "",
    }
  })

  const onSubmit = (data) => {
    console.log({ ...data, photos, video })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rtl text-right">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* نوع الإعلان */}
        <div>
          <Label className={lableStyle}>نوع الإعلان<span className="text-red-500">*</span></Label>
          <Select onValueChange={(v) => setValue("adType", v)} dir="rtl">
            <SelectTrigger className={"w-full"}><SelectValue placeholder="نوع العقار" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="new">عقار جديد</SelectItem>
              <SelectItem value="used">مستعمل</SelectItem>
            </SelectContent>
          </Select>
          {errors.adType && <p className="text-red-500 text-sm">{errors.adType.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>الوصف<span className="text-red-500">*</span></Label>
          <Input placeholder="الوصف هنا" {...register("description")} />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
        <div>
          <Label className={lableStyle}>عدد الغرف<span className="text-red-500">*</span></Label>
          <Input placeholder="مثلاً 3" {...register("rooms")} />
          {errors.rooms && <p className="text-red-500 text-sm">{errors.rooms.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>عدد الحمامات<span className="text-red-500">*</span></Label>
          <Input placeholder="مثلاً 2" {...register("bathrooms")} />
          {errors.bathrooms && <p className="text-red-500 text-sm">{errors.bathrooms.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>المساحة<span className="text-red-500">*</span></Label>
          <Input placeholder="مثلاً 150 م²" {...register("area")} />
          {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>الدولة<span className="text-red-500">*</span></Label>
          <Select onValueChange={(v) => setValue("country", v)} dir="rtl">
            <SelectTrigger className={"w-full"}><SelectValue placeholder="المملكة العربية السعودية" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="sa">المملكة العربية السعودية</SelectItem>
              <SelectItem value="eg">مصر</SelectItem>
            </SelectContent>
          </Select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>المدينة<span className="text-red-500">*</span></Label>
          <Input placeholder="مثلاً الرياض" {...register("city")} />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>السعر (حد أدنى)<span className="text-red-500">*</span></Label>
          <div className="flex gap-2">
            <Input type="number" step="0.01" placeholder="0" {...register("priceMin")} />
            <Select defaultValue="sar">
              <SelectTrigger className="w-24 bg-main-navy  text-white"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sar">(ر.س)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.priceMin && <p className="text-red-500 text-sm">{errors.priceMin.message}</p>}
        </div>

        <div>
          <Label className={lableStyle}>السعر (حد أعلى)<span className="text-red-500">*</span></Label>
          <div className="flex gap-2">
            <Input type="number" step="0.01" placeholder="0" {...register("priceMax")} />
            <Select defaultValue="sar">
              <SelectTrigger className="w-24 bg-main-navy  text-white"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sar">(ر.س)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.priceMax && <p className="text-red-500 text-sm">{errors.priceMax.message}</p>}
        </div>
      </div>

      <Card className="mt-6">
        <CardContent className="py-6">
          <Label className={lableStyle}>رفع صور أو فيديو الإعلان</Label>

          <div className="border-2 border-dashed rounded-lg p-12 text-center">
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  const newFiles = Array.from(e.target.files)
                  setPhotos((prev) => [...prev, ...newFiles])
                }
              }}
              className="hidden"
              id="media"
            />
            <label htmlFor="media" className="cursor-pointer inline-flex items-center gap-2 text-sm text-gray-600">
              <Upload size={18} /> رفع صور أو فيديوهات
            </label>
          </div>

          {/* عرض الصور والفيديوهات معاً */}
          {photos.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {photos.map((file, i) => {
                const isVideo = file.type.startsWith("video/")
                return (
                  <div
                    key={i}
                    className="relative border rounded-lg p-2 w-[100px] h-[100px] flex items-center justify-center bg-gray-50 "
                  >
                    {isVideo ? (
                      <video
                        src={URL.createObjectURL(file)}
                        className="object-cover w-full h-full rounded-md"
                        controls
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="object-cover w-full h-full rounded-md"
                      />
                    )}
                    <button
                      type="button"
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      onClick={() => setPhotos(photos.filter((_, idx) => idx !== i))}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-center gap-3 mt-6">
        <Button type="button" onClick={() => {setOpen(false)}}>إلغاء</Button>
        <Button type="submit">نشر</Button>
      </div>
    </form>
  )
}
