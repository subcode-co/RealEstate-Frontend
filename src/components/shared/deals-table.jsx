import { Link } from "@/i18n/navigation";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdSocialDistance } from "react-icons/md";

const DealsTable = ({ offers = [], isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="space-y-4 mt-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 border rounded px-4 py-6 animate-pulse"
          >
            <div className="flex items-center gap-1">
              <div className="size-12 bg-gray-200 rounded" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-gray-200 rounded w-20" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-gray-200 rounded w-20" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-gray-200 rounded w-20" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-gray-200 rounded w-20" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!offers || offers.length === 0) {
    return (
      <div className="mt-8 text-center py-12 border rounded">
        <p className="text-gray-500">لا توجد صفقات متاحة حالياً</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-8">
      {offers.map((offer) => (
        <Link
          key={offer.id}
          href={`/deals/${offer.id}`}
          className="grid grid-cols-5 border rounded px-4 py-6 hover:bg-gray-100 "
        >
          {/* title */}
          <div className="flex items-center gap-1">
            <Image
              src="/images/partner.png"
              alt={offer.name}
              width={100}
              height={100}
              className="size-12 object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold ">{offer.name}</h3>
              <p className="text-xs">{offer.description}</p>
            </div>
          </div>
          {/* price */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs ">قيمة الصفقة</h3>
            <p className=" font-semibold flex items-center gap-1">
              {offer.price}{" "}
              <Image
                src="/images/ryal-green.svg"
                alt="ryal"
                width={100}
                height={100}
                className="size-3 object-cover"
              />
            </p>
          </div>
          {/* validity days */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs ">مدة الصلاحية</h3>
            <p className=" font-semibold flex items-center gap-1">
              {offer.validityDays} يوم{" "}
              <Calendar size={12} className=" text-main-green" />
            </p>
          </div>
          {/* features count */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs ">المميزات</h3>
            <p className=" font-semibold flex items-center gap-1">
              {offer.features?.length || 0} ميزة{" "}
              <MdSocialDistance className=" text-main-green" />
            </p>
          </div>
          {/* date */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs ">تاريخ الإضافة</h3>
            <p className=" font-semibold flex items-center gap-1">
              {new Date(offer.createdAt).toLocaleDateString("ar-SA")}{" "}
              <Calendar size={12} className=" text-main-green" />
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DealsTable;
