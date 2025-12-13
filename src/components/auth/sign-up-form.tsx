"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import {
  FaLongArrowAltRight,
  FaEye,
  FaEyeSlash,
  FaCheck,
} from "react-icons/fa";
import { Check, CheckCheckIcon, Loader2 } from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { postData } from "@/lib/fetch-methods";
import { toast } from "sonner";

const PasswordStrength = ({ password }) => {
  const locale = useLocale();
  const t = useTranslations("sign_up.password_requirements");
  const requirements = [
    {
      text: t("min_length"),
      test: (pwd) => pwd.length >= 8,
    },
    {
      text: t("has_number"),
      test: (pwd) => /\d/.test(pwd),
    },
    {
      text: t("has_special"),
      test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    },
    {
      text: t("has_uppercase"),
      test: (pwd) => /[A-Z]/.test(pwd),
    },
  ];

  return (
    <div className="w-full mt-2 space-y-2">
      <div className="space-y-1">
        {requirements.map((req, index) => {
          const isMet = password ? req.test(password) : false;
          return (
            <div key={index} className="flex items-center gap-1">
              <FaCheck
                size={10}
                className={isMet ? "text-main-green" : "text-gray-500"}
              />
              <span
                className={`text-xs  ${
                  isMet ? "text-main-green" : "text-gray-500"
                }`}
              >
                {req.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function SignUpForm() {
  const locale = useLocale();
  const t = useTranslations("sign_up");
  const tv = useTranslations("sign_up.validation");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const activeStyle =
    "bg-white text-main-green border border-main-green shadow-xl scale-105";

  const formSchema = z
    .object({
      name: z.string().min(2, {
        message: tv("name_min"),
      }),
      email: z.string().email({
        message: tv("email_invalid"),
      }),
      mobile: z.string().min(10, {
        message: tv("phone_min"),
      }),
      password: z.string().min(8, {
        message: tv("password_min"),
      }),
      password_confirmation: z.string().min(8, {
        message: tv("confirm_password"),
      }),
      role: z.enum(["seeker", "owner"], {
        message: tv("role_required"),
      }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: tv("passwords_not_match"),
      path: ["password_confirmation"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      password_confirmation: "",
      role: "seeker",
    },
  });
  const inputStyle = "!h-14 rounded-none rounded-s-lg";

  const { isSubmitting } = form.formState;
  async function onSubmit(values) {
    const response = await postData({
      url: "/register",
      data: values,
    });
    if (response?.code === 200) {
      toast.success(response?.data?.message);
      const encodedMobile = encodeURIComponent(values?.mobile);
      const encodedCode = encodeURIComponent(
        response?.data?.data?.verificationCode
      );
      router.push(
        `/auth/verfiy-otp?mobile=${encodedMobile}&code=${encodedCode}`
      );
    } else {
      toast.error(response?.data?.message || t("validation.error"));
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          dir={locale === "ar" ? "rtl" : "ltr"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="lg:p-10  p-8 border border-main-gray rounded-lg flex max-lg:flex-col items-start gap-8 w-full "
        >
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex lg:flex-col gap-1"
                  >
                    <div className="flex items-center">
                      <RadioGroupItem
                        value="seeker"
                        id="seeker"
                        className="sr-only"
                      />
                      <label
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        htmlFor="seeker"
                        className={`w-30 rounded-s-lg shadow p-3 text-sm font-semibold cursor-pointer ${
                          field.value === "seeker"
                            ? activeStyle
                            : "bg-main-light-green text-main-navy"
                        }`}
                      >
                        {t("seeker")}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem
                        value="owner"
                        id="owner"
                        className="sr-only"
                      />
                      <label
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        htmlFor="owner"
                        className={`w-30 rounded-s-lg shadow p-3 text-sm font-semibold cursor-pointer ${
                          field.value === "owner"
                            ? activeStyle
                            : "bg-main-light-green text-main-navy"
                        }`}
                      >
                        {t("owner")}
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="" />
              </FormItem>
            )}
          />

          <div className="space-y-6 shhrink-0 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">{t("full_name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("placeholder")}
                      {...field}
                      className={inputStyle}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("placeholder")}
                      {...field}
                      className={inputStyle}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">{t("phone_number")}</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      defaultCountry="sa"
                      withFlagShown
                      withFullNumber
                      inputClassName={`${inputStyle} w-full`}
                      containerClassName={`${inputStyle} w-full`}
                      inputComponent={Input}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">{t("password")}</FormLabel>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("password_placeholder")}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setPassword(e.target.value);
                      }}
                      className={`${inputStyle} pr-10`}
                    />
                    <button
                      type="button"
                      className="absolute end-3 top-1/2 -translate-y-1/2 text-main-green"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </button>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">{t("confirm_password")}</FormLabel>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder={t("password_placeholder")}
                      {...field}
                      className={`${inputStyle} pr-10`}
                    />
                    <button
                      type="button"
                      className="absolute end-3 top-1/2 -translate-y-1/2 text-main-green"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </button>
                  </div>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <PasswordStrength password={password} />
            <div className="w-full flex items-center justify-between">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="rounded-none h-12   bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs  font-semibold flex items-center gap-2 w-fit "
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <FaLongArrowAltRight size={20} />
                )}
                <p>{t("submit_button")}</p>
              </Button>
              <div className="text-main-navy text-sm flex items-center gap-1">
                <p>{t("already_have_account")}</p>
                <Link
                  href={"/auth/login"}
                  className="text-main-green font-semibold hover:underline "
                >
                  <p>{t("login")}</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default SignUpForm;
