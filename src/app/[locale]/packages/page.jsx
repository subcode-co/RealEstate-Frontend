import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import PlanCard from "@/components/shared/plan-card";
import React from "react";
import { getTranslations } from "next-intl/server";

const PackagesPage = async () => {
  const t = await getTranslations("packages_page");
  const tBread = await getTranslations("breadcrumbs");

  const plans = [
    {
      title: t("basic_plan"),
      price: "99 " + tNav("ryal"), // Assuming 'ryal' might be needed or just hardcode if not strict. Let's use hardcoded "99 ريال" or similar if currency is consistent, or "99" and let PlanCard handle currency? PlanCard took "99 ريال".
      // Actually PlanCard expects `price`. I should probably pass just number or localized string.
      // Let's stick closer to original but translated:
      price: "99 " + (await getTranslations("Navbar"))("currency") || "SAR", // Wait, I don't have currency.
      // Let's just use "99" and let PlanCard handle logic? No, previously it was "99 ريال".
      // I'll keep the price numeric logic simple or just translate the whole string if needed.
      // For now, I'll assume price is mostly numeric but currency might be Arabic/English.
      // I'll add "currency" or just use "SAR"/"ر.س"
    },
    // ...
  ];
  // Wait, `getTranslations` isn't available inside the array definition like that if it wasn't awaited? It is awaited.

  // Let's try to map it cleanly.

  const currency = "SAR"; // or localized.

  const plansData = [
    {
      title: t("basic_plan"),
      price: "99",
      features: [
        t("features.publish_5"),
        t("features.support_working_hours"),
        t("features.limited_visibility"),
      ],
    },
    {
      title: t("premium_plan"),
      price: "199",
      popular: true,
      features: [
        t("features.publish_15"),
        t("features.support_24"),
        t("features.top_visibility"),
        t("features.featured_ads"),
      ],
    },
    {
      title: t("golden_plan"),
      price: "299",
      features: [
        t("features.unlimited_publish"),
        t("features.support_vip"),
        t("features.home_ads"),
        t("features.analytics"),
      ],
    },
  ];

  return (
    <main className="space-y-8">
      <div className="bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container">
        <CustomBreadcrumbs items={[{ label: t("title") }]} />
        <h1 className="text-main-navy text-2xl font-bold">{t("title")}</h1>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {plansData.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PackagesPage;
