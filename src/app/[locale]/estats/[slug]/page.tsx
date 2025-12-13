import React from "react";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import { PiBathtub, PiPhoneCallLight } from "react-icons/pi";
import {
  MdOutlineBed,
  MdOutlineMoveToInbox,
  MdOutlineTsunami,
} from "react-icons/md";
import ryal from "@/assets/ryal.svg";
import Image from "next/image";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import StatesSection from "@/components/home/states-section";
import PropertyGallery from "@/components/estates/property-gallery";
import PropertyActions from "@/components/estates/property-actions";
import PropertyReviews from "@/components/estates/property-reviews";
import PropertyChat from "@/components/estates/property-chat";
import {
  getPropertyBySlug,
  getSimilarProperties,
} from "@/lib/property-actions";

export default async function EstateSinglePage({ params }) {
  // In Next.js 15, params is a Promise and must be awaited
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("property_details");

  const tBreadcrumbs = await getTranslations("breadcrumbs");

  // Fetch property data
  const propertyResponse = await getPropertyBySlug(slug);
  console.log({ propertyResponse });

  if (!propertyResponse.success || !propertyResponse.data) {
    notFound();
  }

  const property = propertyResponse.data;
  // Fetch similar properties
  const similarResponse = await getSimilarProperties(property.id);
  const similarProperties = similarResponse.success ? similarResponse.data : [];

  // Generate Google Maps URL
  const mapsUrl =
    property.latitude && property.longitude
      ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.031202291261!2d${property.longitude}!3d${property.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sar!2seg!4v1762763386542!5m2!1sar!2seg`
      : null;

  return (
    <main className="space-y-12">
      {/* header */}
      <div className="bg-main-light-gray p-4 space-y-4 rounded-b-xl container">
        <div className="flex md:items-center justify-between max-md:flex-col max-md:gap-4">
          {/* content */}
          <div className="space-y-4">
            <CustomBreadcrumbs
              items={[
                { label: tBreadcrumbs("estates"), href: "/estats" },
                { label: property.title },
              ]}
            />
            <h1 className="text-main-navy text-2xl font-bold">
              {property.title}
            </h1>
            <p className="text-xs text-main-navy/70">
              {property.district && `${property.district}, `}
              {property.city}, {property.country}
            </p>
            {/* calls and messages  */}
            <div className="text-xs text-main-navy flex items-center gap-2">
              {/* views */}
              <div className="flex items-center gap-1 bg-white p-2 rounded-md">
                <PiPhoneCallLight className="text-main-green" />
                <span className="text-main-green font-bold">
                  {property.viewsCount || 0}
                </span>
                <span>{t("views")}</span>
              </div>
            </div>
          </div>
          {/* price and actions  */}
          <div className="flex md:items-center gap-4 max-md:flex-col">
            {/* price */}
            <div className="flex items-center gap-2">
              {property.priceHidden ? (
                <p className="lg:text-xl text-lg font-bold text-main-green">
                  {property.formattedPrice}
                </p>
              ) : (
                <>
                  <p className="lg:text-3xl text-2xl font-bold text-main-green">
                    {property.formattedPrice?.replace(" ريال", "")}
                  </p>
                  <Image
                    src={ryal}
                    alt="ryal"
                    width={20}
                    height={20}
                    className="lg:size-6 size-4 object-contain"
                  />
                </>
              )}
            </div>
            {/* actions */}
            <PropertyActions property={property} />
          </div>
        </div>
      </div>

      <div className="container flex gap-4 max-lg:flex-col">
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          {/* image gallery */}
          <PropertyGallery images={property.images} />

          {/* description */}
          <div className="rounded-xl border">
            <div className="p-6 border-b">
              <h2 className="font-bold">{t("description")}</h2>
            </div>
            <div className="p-6">
              <div
                className="text-xs leading-6"
                dangerouslySetInnerHTML={{ __html: property.description }}
              />
            </div>
          </div>

          {/* details */}
          <div className="rounded-xl border">
            <div className="p-6 border-b">
              <h2 className="font-bold">{t("details_title")}</h2>
            </div>
            <div className="divide-y divide-gray-300">
              {/* First Row */}
              <div className="grid grid-cols-2 p-6 border-b text-sm">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>{t("fields.garages")}</span>
                  </div>
                  <span className="font-medium text-main-green">
                    {property.garages || t("fields.none")}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>{t("fields.balconies")}</span>
                  </div>
                  <span className="font-medium text-main-green">
                    {property.balconies || t("fields.none")}
                  </span>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdOutlineBed className="size-5 text-main-green" />
                    <span>{t("fields.rooms")}</span>
                  </div>
                  <span className="font-medium text-main-green">
                    {property.rooms}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <PiBathtub className="size-5 text-main-green" />
                    <span>{t("fields.bathrooms")}</span>
                  </div>
                  <span className="font-medium text-main-green">
                    {property.bathrooms}
                  </span>
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>{t("fields.area")}</span>
                  </div>
                  <span className="font-medium text-main-green">
                    {property.area} {t("fields.area_unit") || "m²"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TiHomeOutline className="size-5 text-main-green" />
                    <span>{t("fields.finishing_type")}</span>
                  </div>
                  <span className="font-medium text-main-green">
                    {t(`finishing_types.${property.finishingType}`) ||
                      property.finishingType}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="rounded-xl border">
              <div className="p-6 border-b">
                <h2 className="font-bold">{t("amenities_title")}</h2>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4 gap-y-6 text-xs font-semibold">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <IoIosCheckmarkCircle className="size-4 text-main-green" />
                    <p>{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* location */}
          {mapsUrl && (
            <div className="rounded-xl border">
              <div className="p-6 border-b">
                <h2 className="font-bold">{t("location_title")}</h2>
              </div>
              <div className="p-6">
                <iframe
                  className="w-full h-80 rounded"
                  src={mapsUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/2 w-full space-y-6">
          <PropertyChat
            owner={{
              name: property.user?.name || "صاحب العقار",
              location: `${property.city}, ${property.district || ""}`,
              image: "/images/saman.jpg",
            }}
            propertyId={property.id}
          />
          {/* payment */}
          <div className="rounded-xl border">
            <div className="p-6 border-b">
              <h2 className="font-bold">{t("payment_methods")}</h2>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4 gap-y-6 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <IoIosCheckmarkCircle className="size-4 text-main-green" />
                <p>{t("cash")}</p>
                <FaMoneyBillWave className="size-4 text-main-green" />
              </div>
              <div className="flex items-center gap-2">
                <IoIosCheckmarkCircle className="size-4 text-main-green" />
                <p>{t("bank_transfer")}</p>
                <BsBank className="size-4 text-main-green" />
              </div>
            </div>
          </div>

          {/* ads - KEEP STATIC */}
          <div className="rounded-xl border">
            <div className="p-6 border-b">
              <h2 className="font-bold">{t("advertisement")}</h2>
            </div>
            <div className="p-6 flex items-center justify-center">
              <Image
                src={"/images/qr.png"}
                alt="qr"
                width={200}
                height={200}
                className="size-40"
              />
            </div>
          </div>

          {/* Chat Section */}
          {/* reviews - hide if empty */}
          {property.reviews && property.reviews.length > 0 && (
            <div className="rounded-xl border">
              <div className="p-6 border-b">
                <h2 className="font-bold">
                  {t("reviews_title")}
                  {property.totalReviews > 0 && (
                    <span className="text-sm text-gray-500 mr-2 ltr:ml-2">
                      {t("reviews_subtitle", {
                        count: property.totalReviews,
                        rating: property.averageRating,
                      })}
                    </span>
                  )}
                </h2>
              </div>
              <div className="p-6">
                <PropertyReviews reviews={property.reviews} locale={locale} />
              </div>
            </div>
          )}

          {/* Contact Buttons */}
          <PropertyActions property={property} showFooter={true} />
        </div>
      </div>

      {/* Similar Properties - Only show if there are similar properties */}
      {similarProperties && similarProperties.length > 0 && (
        <div className="">
          <StatesSection properties={similarProperties} />
        </div>
      )}
    </main>
  );
}
