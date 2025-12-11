"use client";
import Image from "next/image";
import { Calendar, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

const OfferCard = ({
  id,
  title,
  description,
  price,
  validityDays,
  features = [],
}) => {
  const t = useTranslations("offers_page");
  return (
    <div className="bg-white border border-main-green rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-main-navy mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-main-green text-white px-4 py-2 rounded-lg font-bold text-lg">
            {price} {t("currency")}
          </div>
        </div>

        {/* Validity */}
        {validityDays && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Calendar size={16} className="text-main-green" />
            <span>{t("valid_for", { days: validityDays })}</span>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="border-t pt-4 mt-auto">
            <h4 className="font-semibold text-main-navy mb-2 text-sm">
              {t("features")}
            </h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-main-green mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-main-green">
                  {t("other_features", { count: features.length - 3 })}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
