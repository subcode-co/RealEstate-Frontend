import Image from "next/image";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import ryal from "@/assets/ryal.svg";
import { Link } from "@/i18n/navigation";
import { TbMapPin2 } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { LuBath, LuCarFront } from "react-icons/lu";
import { MdOutlineSocialDistance } from "react-icons/md";

const EstateCard = ({ withBorder = true, property }) => {
  // If no property data, show placeholder/skeleton
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
    isDeal,
    postedAt,
    bathrooms,
    garages,
    priceHidden,
  } = property;

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA");
  };

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
              <sup>m2</sup>
            </div>
          )}
          {/* special */}
          {(isDeal || isFeatured) && (
            <div className="absolute z-10 bottom-0  left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
              {isDeal && (
                <p className="text-[10px] font-semibold w-fit bg-main-navy text-white p-2 rounded-t-md shrink-0">
                  طلب جــاد
                </p>
              )}
              {isFeatured && (
                <p className="text-[10px] font-semibold w-fit bg-main-green text-white p-2 rounded-t-md shrink-0">
                  عقار مميز
                </p>
              )}
            </div>
          )}
          <Image
            src={first_image || "/images/state.png"}
            fill
            alt={title || "property"}
            className="static w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* price and date */}
        <div className="flex items-center justify-between">
          {/* date */}
          <div className="flex items-center gap-2">
            <IoCalendarOutline size={20} className="text-main-green" />
            <p className="text-xs text-gray-400">{formatDate(postedAt)}</p>
          </div>
          {/* price */}
          <div className="flex items-center gap-1">
            <p className="text-xl font-bold text-main-green">
              {formattedPrice}
            </p>
            {!priceHidden && (
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
        {/* content */}
        <div className="space-y-2">
          <h4 className=" font-bold text-lg line-clamp-1">{title}</h4>

          {/* location */}
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-[#DDFFF3] flex items-center justify-center">
              <TbMapPin2 className="text-main-green" />
            </div>
            <p className="text-xs text-gray-400">
              {city}, {country}
            </p>
          </div>
          {/* features */}
          <div className="flex items-center gap-2">
            {/* car */}
            {garages > 0 && (
              <div className="flex items-center gap-2">
                <LuCarFront className="text-main-green" />
                <p className="text-xs text-main-navy">{garages}</p>
              </div>
            )}
            {/* bath */}
            {bathrooms > 0 && (
              <div className="flex items-center gap-2">
                <LuBath className="text-main-green" />
                <p className="text-xs text-main-navy">{bathrooms}</p>
              </div>
            )}
            {/* distance */}
            {area && (
              <div className="flex items-center gap-2">
                <MdOutlineSocialDistance className="text-main-green" />
                <p className="text-xs text-main-navy">{area} m2</p>
              </div>
            )}
          </div>
        </div>
        {/* link */}
        <div className="text-sm font-medium block text-center w-3/4 mx-auto  rounded-md  py-2 px-3 border-1 border-main-green text-main-green hover:bg-main-green hover:text-white transition-all duration-300">
          عرض التفاصيل
        </div>
      </div>
    </Link>
  );
};

export default EstateCard;
