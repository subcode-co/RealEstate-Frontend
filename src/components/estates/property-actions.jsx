"use client";

import { FaLongArrowAltRight, FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { LuBellRing } from "react-icons/lu";

export default function PropertyActions({ property, showFooter = false }) {
  const whatsappNumber =
    property?.user?.mobile?.replace(/[^0-9]/g, "") || "201068389295";
  const message = encodeURIComponent(
    `مرحباً، أنا مهتم بشراء هذا العقار (${
      property?.title || "العقار"
    }) وأريد معرفة المزيد من التفاصيل.`
  );

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    if (property?.user?.mobile) {
      window.location.href = `tel:${property.user.mobile}`;
    }
  };

  if (showFooter) {
    // Footer Buttons (for sidebar)
    return (
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleWhatsApp}
          className="basis-1/3 bg-main-green text-white py-4 px-6 rounded-b-xl flex items-center gap-2 hover:bg-main-green/80 transition-all duration-300"
        >
          <FaWhatsapp className="size-4 text-white" /> واتساب
        </button>
        <button className="basis-1/3 bg-main-navy text-white py-4 px-6 rounded-b-xl flex items-center gap-2 hover:bg-main-navy/80 transition-all duration-300">
          <FaMessage className="size-4 text-white" />
          رساله
        </button>
        <button
          onClick={handleCall}
          className="basis-1/3 bg-main-green text-white py-4 px-6 rounded-b-xl flex items-center gap-2 hover:bg-main-green/80 transition-all duration-300"
        >
          <FaPhone className="size-4 text-white" />
          اتصل بنا
        </button>
      </div>
    );
  }

  // Header Actions
  return (
    <div className="flex flex-col gap-2 max-md:flex-row">
      <button className="w-36 h-12 border border-main-navy text-xs font-medium text-main-navy hover:bg-main-navy hover:text-white px-4 py-2 rounded-s-lg flex items-center gap-2 transition-all duration-300">
        <LuBellRing className="size-4 text-main-green" /> عرض المزيد
      </button>
      <button
        onClick={handleWhatsApp}
        className="w-36 h-12 text-xs font-medium text-white bg-main-green px-4 py-2 rounded-s-lg flex items-center gap-2 hover:gap-3 transition-all duration-300"
      >
        <FaLongArrowAltRight className="size-4" /> شراء الآن
      </button>
    </div>
  );
}
