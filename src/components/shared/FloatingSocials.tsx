"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp, FaTwitter, FaSnapchatGhost, FaComments, FaPlus, FaTimes } from "react-icons/fa";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      icon: <FaWhatsapp className="text-green-500" />,
      link: "https://wa.me/201234567890", // غيّر الرقم
      label: "واتساب",
    },
    {
      icon: <FaTwitter className="text-sky-500" />,
      link: "https://twitter.com/",
      label: "تويتر",
    },
    {
      icon: <FaSnapchatGhost className="text-yellow-400" />,
      link: "https://snapchat.com/",
      label: "سناب شات",
    },
    {
      icon: <FaComments className="text-main-green" />,
      link: "#chatbot", // هنا ممكن تخليه يفتح الشات بوت
      label: "الشات بوت",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center gap-3">
        <AnimatePresence>
          {open &&
            socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white shadow-lg rounded-full size-14 border border-main-green/50 flex items-center justify-center hover:scale-110 transition-transform"
                title={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
        </AnimatePresence>

        {/* الزر الرئيسي */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-main-green text-white size-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {open ? <FaTimes /> : <FaPlus />}
        </button>
      </div>
    </div>
  );
}
