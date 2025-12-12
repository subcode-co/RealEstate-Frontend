"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "motion/react";
import FilterForm from "../shared/filter-form";

const HeroSection = ({ video = null, settings = null }) => {
  // Get phone number from settings, fallback to hardcoded value
  const whatsappNumber =
    settings?.contactInfo?.sitePhone?.replace(/[^0-9]/g, "") || "201068389295";
  const message = encodeURIComponent(
    "مرحباً، أنا مهتم بطلب استشارة خبير عقاري"
  );
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const videoSrc = video || "/images/hero.mp4";

  return (
    <section className="container  pt-12 p-6  bg-main-light-gray rounded-b-[3rem]  space-y-12">
      {/* title */}
      <div className="flex items-center justify-center  max-md:flex-col max-md:gap-6 max-md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" md:w-1/2 w-full relative"
        >
          <Image
            src="/images/vector.svg"
            width={100}
            height={100}
            alt="vector"
            className="max-md:hidden absolute -bottom-[30%] end-[20%]"
          />
          <h1 className=" md:text-5xl text-4xl  font-bold leading-[1.2]">
            حلول عقارية <span className="text-main-green">ميسرة</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 w-full space-y-4  "
        >
          <p className=" lg:w-[85%] lg:text-base text-xs">
            شركة الحلول العقارية هي شريكك الأول لتحقيق أحلامك العقارية بكل ثقة
            واطمئنان. نقدم لك مجموعة متكاملة من الخدمات تشمل البيع والشراء
            والتأجير وإدارة الأملاك،
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex   gap-8 max-md:justify-center"
          >
            <Link
              href={"/about-us"}
              className="block w-fit bg-white group rounded-tr-2xl"
            >
              <div className="  bg-main-green text-white lg:py-4 lg:px-6 p-3 rounded-tr-2xl max-lg:text-xs  font-semibold flex items-center gap-2 w-fit translate-x-3 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:gap-3 transition-all duration-500">
                <FaLongArrowAltRight size={20} /> عرض المــزيد
              </div>
            </Link>
            <button
              onClick={handleWhatsApp}
              className="block w-fit bg-main-light-green group rounded-tr-2xl"
            >
              <div className="  bg-main-navy text-white lg:py-4 lg:px-6 p-3 rounded-tr-2xl max-lg:text-xs  font-semibold flex items-center gap-2 w-fit translate-x-3 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:gap-3 transition-all duration-500">
                <FaLongArrowAltRight size={20} /> استشير خبير عقاري
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* video */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center justify-evenly"
      >
        {/* video */}
        <div className="relative lg:h-[30vh] lg:w-[65%] w-full hover rounded-[3rem] overflow-hidden ">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 p-6 h-full flex  ">
            <FilterForm />
          </div>
        </div>
        <div className="lg:h-[30vh] max-lg:hidden ">
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            alt="hero"
            className="w-full h-full "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
