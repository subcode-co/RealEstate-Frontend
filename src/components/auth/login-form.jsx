"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLocale, useTranslations } from "next-intl"
import { useContext, useState } from "react"
import { FaLongArrowAltRight, FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useRouter } from "@/i18n/navigation"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import { postData } from "@/lib/fetch-methods"
import { setToken } from "@/services"
import { UserContext } from "@/context/user-context"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export function LoginForm() {
  const locale = useLocale()
  const t = useTranslations('login')
  const tv = useTranslations('login.validation')
  const [showPassword, setShowPassword] = useState(false)
  const inputStyle = "!h-14 rounded-none rounded-s-lg"
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const formSchema = z.object({
    mobile: z.string().min(10, {
      message: tv("phone_min"),
    }),
    password: z.string().min(1, {
      message: tv("password_required"),
    }),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      password: "",
    },
  })

  const { isSubmitting } = form.formState
  async function onSubmit(values) {
    const res = await postData({
      url: "/login",
      data: values,
    })
    if (res?.code === 200) {
      toast.success(res?.data?.message)
      setToken(res?.data?.data?.accessToken)
      setUser(res?.data?.data?.user)
      router.push(`/`)
    }
    else {
      toast.error(res?.data?.message)
    }
  }

  return (
    <div className="lg:p-10 p-8 border border-main-gray rounded-lg ">


      <Form {...form} className="w-full">
        <form
          dir={locale === "ar" ? "rtl" : "ltr"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full "
        >
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('phone_number')}</FormLabel>
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
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('password')}</FormLabel>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t('password_placeholder')}
                    {...field}
                    className={`${inputStyle} pr-10`}
                  />
                  <button
                    type="button"
                    className="absolute end-3 top-1/2 -translate-y-1/2 text-main-green"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div>
            <Link
              href="/auth/forgot-password"
              className="text-gray-400 underline text-sm hover:text-main-green"
            >
              {t('forgot_password')}
            </Link>
          </div>

          <div className="w-full flex items-center justify-between">
            <Button
              disabled={isSubmitting}
              type="submit"
              className='rounded-none h-12 bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs font-semibold flex items-center gap-2 w-fit'
            >
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FaLongArrowAltRight size={20} />}
              <p>{t('submit_button')}</p>
            </Button>
            <div className='text-main-navy text-sm flex items-center gap-1'>
              <p>{t('no_account')}</p>
              <Link href={'/auth/sign-up'} className="text-main-green font-semibold hover:underline">
                <p>{t('create_account')}</p>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
