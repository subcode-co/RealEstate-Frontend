"use client";

import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const MyDataForm = () => {
  const t = useTranslations("Profile");
  const { control } = useFormContext(); // Access parent form context

  return (
    <div className="space-y-6 py-6 fade-in">
      {/* Name */}
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("name_label")}</FormLabel>
            <FormControl>
              <Input
                placeholder={t("name_placeholder")}
                className="h-12 bg-gray-50 border-gray-200"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Email */}
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("email_label")}</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder={t("email_placeholder")}
                className="h-12 bg-gray-50 border-gray-200"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Phone */}
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("phone_label")}</FormLabel>
            <FormControl>
              <PhoneInput
                defaultCountry="sa"
                value={field.value}
                onChange={(phone) => field.onChange(phone)}
                inputClassName="!h-12 !w-full !bg-gray-50 !border-gray-200"
                className="!w-full"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default MyDataForm;
