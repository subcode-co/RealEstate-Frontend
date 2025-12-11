"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createDirectDeal } from "@/actions/deals";
import { toast } from "sonner";

const schema = z.object({
  start_date: z.string().min(1, "تاريخ البداية مطلوب"),
  end_date: z.string().min(1, "تاريخ النهاية مطلوب"),
  city: z.string().min(1, "المدينة مطلوبة"),
  district: z.string().min(1, "الحي مطلوب"),
  country: z.string().min(1, "الدولة مطلوبة"),
  plan_number: z.string().min(1, "رقم المخطط مطلوب"),
  plot_number: z.string().min(1, "رقم القطعة مطلوب"),
  min_area: z.string().min(1, "الحد الأدنى للمساحة مطلوب"),
  max_area: z.string().min(1, "الحد الأعلى للمساحة مطلوب"),
  min_total_price: z.string().min(1, "الحد الأدنى للسعر الإجمالي مطلوب"),
  max_total_price: z.string().min(1, "الحد الأعلى للسعر الإجمالي مطلوب"),
  min_price_per_meter: z.string().min(1, "الحد الأدنى لسعر المتر مطلوب"),
  max_price_per_meter: z.string().min(1, "الحد الأعلى لسعر المتر مطلوب"),
  property_type_id: z.string().min(1, "نوع العقار مطلوب"),
  transaction_type: z.string().min(1, "نوع المعاملة مطلوب"),
  identity_number: z.string().min(1, "رقم الهوية مطلوب"),
});

export default function AddDealForm({ setOpen, onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const labelStyle = "block text-sm font-medium text-main-navy mb-2";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      start_date: "",
      end_date: "",
      city: "",
      district: "",
      country: "",
      plan_number: "",
      plot_number: "",
      min_area: "",
      max_area: "",
      min_total_price: "",
      max_total_price: "",
      min_price_per_meter: "",
      max_price_per_meter: "",
      property_type_id: "",
      transaction_type: "",
      identity_number: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Debug: Log the data being sent
    console.log("Form data being sent:", data);

    try {
      const result = await createDirectDeal(data);

      console.log("API Response:", result);

      if (result.success) {
        toast.success(result.message || "تم إضافة الصفقة بنجاح");
        setOpen(false);
        // Refetch deals list
        if (onSuccess) {
          onSuccess();
        }
      } else {
        // Show detailed error message
        toast.error(result.message || "فشل في إضافة الصفقة");
        console.error("API Error:", result);
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء إضافة الصفقة");
      console.error("Error adding deal:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rtl text-right"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* تاريخ البداية */}
        <div>
          <Label className={labelStyle}>
            تاريخ البداية<span className="text-red-500">*</span>
          </Label>
          <Input type="date" {...register("start_date")} />
          {errors.start_date && (
            <p className="text-red-500 text-sm">{errors.start_date.message}</p>
          )}
        </div>

        {/* تاريخ النهاية */}
        <div>
          <Label className={labelStyle}>
            تاريخ النهاية<span className="text-red-500">*</span>
          </Label>
          <Input type="date" {...register("end_date")} />
          {errors.end_date && (
            <p className="text-red-500 text-sm">{errors.end_date.message}</p>
          )}
        </div>

        {/* المدينة */}
        <div>
          <Label className={labelStyle}>
            المدينة<span className="text-red-500">*</span>
          </Label>
          <Input placeholder="مثلاً الرياض" {...register("city")} />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* الحي */}
        <div>
          <Label className={labelStyle}>
            الحي<span className="text-red-500">*</span>
          </Label>
          <Input placeholder="مثلاً حي الورود" {...register("district")} />
          {errors.district && (
            <p className="text-red-500 text-sm">{errors.district.message}</p>
          )}
        </div>

        {/* الدولة */}
        <div>
          <Label className={labelStyle}>
            الدولة<span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="المملكة العربية السعودية"
            {...register("country")}
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        {/* رقم المخطط */}
        <div>
          <Label className={labelStyle}>
            رقم المخطط<span className="text-red-500">*</span>
          </Label>
          <Input placeholder="مثلاً 125" {...register("plan_number")} />
          {errors.plan_number && (
            <p className="text-red-500 text-sm">{errors.plan_number.message}</p>
          )}
        </div>

        {/* رقم القطعة */}
        <div>
          <Label className={labelStyle}>
            رقم القطعة<span className="text-red-500">*</span>
          </Label>
          <Input placeholder="مثلاً 45" {...register("plot_number")} />
          {errors.plot_number && (
            <p className="text-red-500 text-sm">{errors.plot_number.message}</p>
          )}
        </div>

        {/* الحد الأدنى للمساحة */}
        <div>
          <Label className={labelStyle}>
            الحد الأدنى للمساحة (م²)<span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            placeholder="مثلاً 120"
            {...register("min_area")}
          />
          {errors.min_area && (
            <p className="text-red-500 text-sm">{errors.min_area.message}</p>
          )}
        </div>

        {/* الحد الأعلى للمساحة */}
        <div>
          <Label className={labelStyle}>
            الحد الأعلى للمساحة (م²)<span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            placeholder="مثلاً 300"
            {...register("max_area")}
          />
          {errors.max_area && (
            <p className="text-red-500 text-sm">{errors.max_area.message}</p>
          )}
        </div>

        {/* الحد الأدنى للسعر الإجمالي */}
        <div>
          <Label className={labelStyle}>
            الحد الأدنى للسعر الإجمالي<span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            placeholder="مثلاً 50000"
            {...register("min_total_price")}
          />
          {errors.min_total_price && (
            <p className="text-red-500 text-sm">
              {errors.min_total_price.message}
            </p>
          )}
        </div>

        {/* الحد الأعلى للسعر الإجمالي */}
        <div>
          <Label className={labelStyle}>
            الحد الأعلى للسعر الإجمالي<span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            placeholder="مثلاً 900000"
            {...register("max_total_price")}
          />
          {errors.max_total_price && (
            <p className="text-red-500 text-sm">
              {errors.max_total_price.message}
            </p>
          )}
        </div>

        {/* الحد الأدنى لسعر المتر */}
        <div>
          <Label className={labelStyle}>
            الحد الأدنى لسعر المتر<span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            placeholder="مثلاً 2500"
            {...register("min_price_per_meter")}
          />
          {errors.min_price_per_meter && (
            <p className="text-red-500 text-sm">
              {errors.min_price_per_meter.message}
            </p>
          )}
        </div>

        {/* الحد الأعلى لسعر المتر */}
        <div>
          <Label className={labelStyle}>
            الحد الأعلى لسعر المتر<span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            placeholder="مثلاً 4000"
            {...register("max_price_per_meter")}
          />
          {errors.max_price_per_meter && (
            <p className="text-red-500 text-sm">
              {errors.max_price_per_meter.message}
            </p>
          )}
        </div>

        {/* نوع العقار */}
        <div>
          <Label className={labelStyle}>
            نوع العقار<span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(v) => setValue("property_type_id", v)}
            dir="rtl"
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="اختر نوع العقار" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">سكني</SelectItem>
              <SelectItem value="2">تجاري</SelectItem>
              <SelectItem value="3">صناعي</SelectItem>
              <SelectItem value="4">زراعي</SelectItem>
            </SelectContent>
          </Select>
          {errors.property_type_id && (
            <p className="text-red-500 text-sm">
              {errors.property_type_id.message}
            </p>
          )}
        </div>

        {/* نوع المعاملة */}
        <div>
          <Label className={labelStyle}>
            نوع المعاملة<span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(v) => setValue("transaction_type", v)}
            dir="rtl"
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="اختر نوع المعاملة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ownership_transfer">نقل ملكية</SelectItem>
              <SelectItem value="mortgage">رهن</SelectItem>
              <SelectItem value="mortgage_release">فك رهن</SelectItem>
              <SelectItem value="division_merge">تقسيم/دمج</SelectItem>
            </SelectContent>
          </Select>
          {errors.transaction_type && (
            <p className="text-red-500 text-sm">
              {errors.transaction_type.message}
            </p>
          )}
        </div>

        {/* رقم الهوية */}
        <div>
          <Label className={labelStyle}>
            رقم الهوية<span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="مثلاً PROP-00012"
            {...register("identity_number")}
          />
          {errors.identity_number && (
            <p className="text-red-500 text-sm">
              {errors.identity_number.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() => setOpen(false)}
          disabled={isSubmitting}
        >
          إلغاء
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "جاري الإضافة..." : "إضافة الصفقة"}
        </Button>
      </div>
    </form>
  );
}
