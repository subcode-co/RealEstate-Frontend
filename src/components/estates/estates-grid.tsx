"use client";
import React from "react";
import EstateCard from "./estate-card";
import { HiArrowPath } from "react-icons/hi2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import AddForm from "./add-form";

const EstatesGrid = ({
  properties = [],
  loading = false,
  totalResults = 0,
  pagination = {},
  onLoadMore,
  loadingMore = false,
}) => {
  const [open, setOpen] = React.useState(false);

  const { currentPage = 1, lastPage = 1 } = pagination;
  const hasMore = currentPage < lastPage;

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-xl">
          <span className="text-main-green">{totalResults}</span> نتيجة بحــث
        </h3>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="bg-main-green text-white px-4 py-2 rounded-s-lg flex items-center gap-2 hover:bg-main-navy hover:text-white">
            <FaPlus />
            أضافة عقار
          </DialogTrigger>
          <DialogContent className="lg:w-[80%] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className={"text-center text-xl font-bold"}>
                إضافة عقار جديد
              </DialogTitle>
              <DialogDescription asChild>
                <AddForm setOpen={setOpen} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {/* Loading state */}
      {loading && properties.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, index) => (
            <EstateCard key={index} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && properties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">لا توجد عقارات متاحة حالياً</p>
        </div>
      )}

      {/* Properties grid */}
      {properties.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {properties.map((property) => (
              <EstateCard key={property.id} property={property} />
            ))}
          </div>

          {/* Load More button */}
          {hasMore && (
            <div className="flex items-center justify-center">
              <button
                onClick={onLoadMore}
                disabled={loadingMore}
                className="border border-main-navy text-main-navy hover:bg-main-navy hover:text-white px-4 py-2 rounded-s-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <HiArrowPath
                  className={`size-6 text-main-green ${
                    loadingMore ? "animate-spin" : ""
                  }`}
                />
                {loadingMore ? "جاري التحميل..." : "عرض المزيد"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EstatesGrid;
