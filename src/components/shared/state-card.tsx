import Image from "next/image";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import ryal from "@/assets/ryal.svg";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const StatesCard = ({ withBorder = true, property = null }) => {
  const t = useTranslations("estate_card");

  // If no property data, show placeholder
  if (!property) {
    return (
      <div
        className={`${
          withBorder && "border-2 border-gray-200"
        } bg-white rounded-lg p-4 space-y-5`}
      >
        <div className="h-52 rounded-xl relative overflow-hidden bg-gray-200 animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  }

  const {
    id,
    slug,
    title,
    city,
    country,
    formattedPrice,
    area,
    first_image,
    isFeatured,
  } = property;

  return (
    <Link href={`/estats/${slug || id}`} className="block">
      <div
        className={`${
          withBorder && "border-2 border-gray-200"
        } bg-white rounded-lg p-4 space-y-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
      >
        {/* image and favorate */}
        <div className="h-52 rounded-xl relative overflow-hidden">
          {/* favorate */}
          <button
            onClick={(e) => e.preventDefault()}
            className="group bg-white p-2 rounded-md absolute z-10 text-main-green top-4 start-4"
          >
            <BsBookmarkDash size={20} className=" " />
          </button>
          {/* space */}
          {area && (
            <div className="text-[.6rem] font-semibold w-fit bg-white p-2 rounded-md absolute z-10  top-4 end-4">
              {area}
              <sup>{t("sqm")}</sup>
            </div>
          )}
          {/* special */}
          {isFeatured && (
            <div className="text-xs font-semibold w-fit bg-main-green text-white p-2 rounded-t-md absolute z-10  top-1/2 -start-5  -rotate-90">
              {t("featured")}
            </div>
          )}
          <Image
            src={first_image || "/images/state.png"}
            fill
            alt={title || "property"}
            className="static w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* content */}
        <div className="space-y-2">
          <h4 className=" font-bold text-lg line-clamp-1">{title}</h4>
          <p className="text-xs text-gray-400">
            {city}, {country}
          </p>
          {/* price */}
          <div className="flex items-center gap-1">
            <p className="text-xl font-bold text-main-green">
              {formattedPrice}
            </p>
            {!property.priceHidden && (
              <Image
                src={ryal}
                alt="ryal"
                width={20}
                height={20}
                className="size-4 object-contain"
              />
            )}
          </div>
        </div>
        {/* link */}
        <div className="text-sm font-medium block text-center w-3/4 mx-auto  rounded-md  py-2 px-3 border-1 border-main-green text-main-green hover:bg-main-green hover:text-white transition-all duration-300">
          {t("show_details")}
        </div>
      </div>
    </Link>
  );
};

export default StatesCard;
