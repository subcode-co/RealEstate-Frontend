import React from "react";
import SectionHeader from "../shared/section-header";
import { FaStar } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import Image from "next/image";

const AboutSection = ({
  sections = [],
  platformRating = "4.8",
  statistics = [],
}) => {
  // Get the second section for display (index 1)
  const displaySection = sections[1] || sections[0] || {};
  const { title = "", content = "", image = null } = displaySection;

  // Get statistics
  const stat1 = statistics[0] || { number: "500+", label: "عقار مدرج" };
  const stat2 = statistics[1] || { number: "50+", label: "مبيع يومي" };

  return (
    <section className="container space-y-6 py-12 flex items-center max-lg:flex-col max-lg:gap-6 ">
      {/* content */}
      <div className="lg:w-1/2 space-y-8  self-start">
        <SectionHeader>من نحن</SectionHeader>
        <h3 className="lg:text-[32px]  text-3xl font-semibold lg:w-[80%] lg:leading-16 leading-12">
          {title || "نضمن تعامل موثوق وحماية عالية لبياناتك"}
        </h3>
        <p className="text-xs leading-6 lg:w-[90%] ">
          {content ||
            "شركة الحلول العقارية هي شريكك الأول لتحقيق أحلامك العقارية..."}
        </p>
      </div>
      {/* image */}
      <div
        className="lg:w-1/2 w-full rounded-3xl relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : 'url("/images/about.jpg")',
        }}
      >
        {/* rate */}
        <div className="w-[30%] text-center bg-white rounded-b-3xl  absolute top-0 end-[10%] ">
          <FaSquareCheck
            size={34}
            className="lg:size-[34px] size-[24px] text-main-green absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="space-y-4 lg:p-8 p-4 ">
            <p className="lg:text-6xl text-4xl font-bold ">{platformRating}</p>
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} size={20} className="text-main-green" />
              ))}
            </div>
            <div className="space-y-1">
              <p className="whitespace-nowrap text-xs font-semibold text-gray-400">
                موثوق من عملائنا
              </p>
              <p className=" text-xs ">500+ Reviews</p>
            </div>
          </div>
        </div>
        {/* counter */}
        <div className="flex items-center gap-6 text-center bg-white rounded-tl-4xl absolute bottom-0 start-0 lg:p-6 p-4 ">
          <div className="flex items-center gap-2 ">
            <p className="lg:text-sm text-xs  text-gray-400">{stat1.label}</p>
            <p className="lg:text-5xl text-3xl font-bold ">{stat1.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="lg:text-sm text-xs  text-gray-400">{stat2.label}</p>
            <p className="lg:text-5xl text-3xl font-bold ">{stat2.number}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
