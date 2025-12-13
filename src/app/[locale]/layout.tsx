import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { getMessages, getTranslations } from "next-intl/server";
import { Alexandria } from "next/font/google";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import FloatingSocials from "@/components/shared/FloatingSocials";
import { Toaster } from "sonner";
import UserContextProvider from "@/context/user-context";
import { settingsService } from "@/features/settings";
import { getSettings } from "@/lib/settings-actions";
import Providers from "../providers";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
});

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = (await params) || "ar";
  const messages = await getMessages();

  // Fetch navbar color
  const navbarColor = await settingsService.getTopnavColor();

  // Fetch settings
  const settings = await getSettings();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`${alexandria.className} antialiased text-main-navy relative`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <UserContextProvider>
              <Toaster
                dir={locale === "ar" ? "rtl" : "ltr"}
                richColors
                position="top-right"
              />
              <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar topnavColor={navbarColor} settings={settings} />
              </div>
              <div className="mt-40 min-h-screen">{children}</div>
              <FloatingSocials />
              <Footer settings={settings} />
            </UserContextProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
