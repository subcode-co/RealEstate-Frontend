import React from "react";
import SectionHeader from "../shared/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "../shared/blog-card";
import { getLocale, getTranslations } from "next-intl/server";
import { getData } from "@/lib/fetch-methods";
const BlogSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations("blog");
  let data = [];
  const response = await getData({ url: "/blogs", revalidate: 0 });
  data = response?.code == 200 ? response?.data?.data : [];

  return (
    <section className="container space-y-6 py-12">
      {/* header */}
      <SectionHeader>{t("title")}</SectionHeader>

      {/* slider */}
      <Carousel
        className={"space-y-8"}
        opts={{
          loop: true,
          direction: locale === "ar" ? "rtl" : "ltr",
          align: "start",
        }}
      >
        {/* title */}
        <div className="flex items-center justify-between">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold">{t("subtitle")}</h3>
            <p className="text-xs">{t("description")}</p>
          </div>

          <div
            className={`flex items-center gap-3 ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } w-fit`}
          >
            <CarouselPrevious className={"static translate-0 "} />
            <CarouselNext className={"static translate-0 "} />
          </div>
        </div>
        <CarouselContent className={"p-1"}>
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/4 md:basis-1/2 basis-[90%]"
            >
              <BlogCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default BlogSection;
