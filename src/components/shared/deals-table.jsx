import { Link } from "@/i18n/navigation";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const DealsTable = ({ deals = [], isLoading = false }) => {
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

  if (!deals || deals.length === 0) {
    return (
      <div className="mt-8 text-center py-12 border rounded">
        <p className="text-gray-500">لا توجد صفقات متاحة حالياً</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-8">
      {deals.map((deal) => (
        <Link
          href={`/deals/${deal.id}`}
          key={deal.id}
          className="grid grid-cols-5 border rounded px-4 py-6 hover:shadow-md transition-shadow max-md:grid-cols-1 max-md:gap-4"
        >
          {/* Property Info */}
          <div className="flex items-center gap-1">
            <Image
              src="/images/logo.svg"
              alt={deal.propertyType}
              width={50}
              height={50}
              className="size-12"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">{deal.propertyType}</h3>
              <p className="text-xs text-gray-500">
                {deal.city} - {deal.district}
              </p>
            </div>
          </div>

          {/* Area Range */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">المساحة</p>
            <p className="text-sm font-semibold">
              {deal.minArea} - {deal.maxArea} م²
            </p>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">السعر الإجمالي</p>
            <p className="text-sm font-semibold">
              {deal.minTotalPrice.toLocaleString()} -{" "}
              {deal.maxTotalPrice.toLocaleString()} ر.س
            </p>
          </div>

          {/* Price per Meter */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">سعر المتر</p>
            <p className="text-sm font-semibold">
              {deal.minPricePerMeter.toLocaleString()} -{" "}
              {deal.maxPricePerMeter.toLocaleString()} ر.س
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">تاريخ الإنشاء</p>
            <p className="text-sm font-semibold flex items-center gap-1">
              <Calendar size={14} />
              {new Date(deal.createdAt).toLocaleDateString("ar-SA")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DealsTable;
