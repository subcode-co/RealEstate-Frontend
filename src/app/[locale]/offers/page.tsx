import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import OfferCard from "@/components/shared/offer-card";
import { offersService } from "@/features/offers";
import { getSettings } from "@/lib/settings-actions";
import React from "react";
import { getTranslations } from "next-intl/server";

const OffersPage = async () => {
  const t = await getTranslations("offers_page");
  const offers = await offersService.getOffers();
  const settings = await getSettings();

  // Get WhatsApp number from settings
  const whatsappNumber =
    settings?.contactInfo?.sitePhone?.replace(/[^0-9]/g, "") || "966";

  return (
    <main className="space-y-6">
      <div className="bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container">
        <CustomBreadcrumbs items={[{ label: t("title") }]} />
        <h1 className="text-main-navy text-2xl font-bold">{t("title")}</h1>
      </div>
      <div className="container border border-gray-300 p-10">
        {offers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">{t("no_offers")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                id={offer.id}
                title={offer.name}
                description={offer.description}
                price={offer.price}
                validityDays={offer.validityDays}
                features={offer.features}
                whatsappNumber={whatsappNumber}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default OffersPage;
