import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import PlanCard from "@/components/shared/plan-card";
import React from "react";
import { getTranslations } from "next-intl/server";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/motion/animated-section";

const PackagesPage = async () => {
  const t = await getTranslations("packages_page");
  const tBread = await getTranslations("breadcrumbs");

  const plansData = [
    {
      title: t("basic_plan"),
      price: "99",
      popular: false,
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
      popular: false,
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
      <AnimatedSection>
        <div className="bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container">
          <CustomBreadcrumbs items={[{ label: t("title") }]} />
          <h1 className="text-main-navy text-2xl font-bold">{t("title")}</h1>
        </div>
      </AnimatedSection>
      <div className="container">
        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {plansData.map((plan, index) => (
              <AnimatedItem key={index} index={index}>
                <PlanCard {...plan} />
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default PackagesPage;
