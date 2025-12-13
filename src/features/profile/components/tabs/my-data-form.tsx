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

const MyDataForm = ({ isEditing = false }: { isEditing?: boolean }) => {
  const t = useTranslations("Profile");
  const { control } = useFormContext(); // Access parent form context

  return (
    <div className="space-y-6 py-6 fade-in">
      {/* Name */}
      {/* Name */}
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-main-navy font-bold text-base block text-right mb-2">
              {t("name_label")}
            </FormLabel>
            <FormControl>
              <Input
                placeholder={t("name_placeholder")}
                className="h-14 bg-[#F9FAFB] border-gray-100 focus:border-main-green focus:ring-main-green/20 rounded-xl text-right px-4 text-base disabled:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-50"
                disabled={!isEditing}
                {...field}
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      {/* Email */}
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-main-navy font-bold text-base block text-right mb-2">
              {t("email_label")}
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder={t("email_placeholder")}
                className="h-14 bg-[#F9FAFB] border-gray-100 focus:border-main-green focus:ring-main-green/20 rounded-xl text-right px-4 text-base disabled:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-50"
                disabled={!isEditing}
                {...field}
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      {/* Phone */}
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-main-navy font-bold text-base block text-right mb-2">
              {t("phone_label")}
            </FormLabel>
            <FormControl>
              <div dir="ltr">
                <PhoneInput
                  defaultCountry="sa"
                  value={field.value}
                  onChange={(phone) => field.onChange(phone)}
                  inputClassName="!h-14 !w-full !bg-[#F9FAFB] !border-gray-100 !focus:border-main-green !rounded-xl !text-base disabled:!opacity-90"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-14 !bg-[#F9FAFB] !border-gray-100 !rounded-xl",
                  }}
                  className={`!w-full ${
                    !isEditing ? "opacity-90 pointer-events-none" : ""
                  }`}
                  disabled={!isEditing}
                />
              </div>
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default MyDataForm;
