"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FiInbox, FiPhoneCall } from "react-icons/fi";
import {
  TbBookmark,
  TbFlag3,
  TbMessage2,
  TbUserPentagon,
} from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LocaleSwitcher from "./locale-switcher";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";
import { LogInIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_4418_3359)">
        <path
          d="M6.94003 9.42086C6.12003 10.2009 4.83003 10.1909 4.01003 9.42086C2.89003 8.35086 1.60002 6.63086 2.07002 4.60086C2.87002 1.14086 8.08003 1.14086 8.87003 4.60086C8.99003 5.09086 9.00002 5.55086 8.94002 6.00086"
          stroke="#3fb38b"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.07 16.6009C15.87 13.1409 21.11 13.1409 21.91 16.6009C22.38 18.6309 21.09 20.3509 19.96 21.4209C19.14 22.2009 17.84 22.1909 17.02 21.4209C15.89 20.3509 14.6 18.6309 15.07 16.6009Z"
          stroke="#3fb38b"
          strokeWidth="1.5"
        />
        <path
          d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002"
          stroke="#3fb38b"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002"
          stroke="#3fb38b"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.48622 5.5H5.49777"
          stroke="#3fb38b"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.4862 17.5H18.4978"
          stroke="#3fb38b"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_3359">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Navbar = ({ topnavColor = "#1a1a1a" }) => {
  const { user, logout } = useContext(UserContext);
  const t = useTranslations("Navbar");

  return (
    <div className="container py-4 space-y-2 bg-white">
      {/* info */}
      <div className="text-black md:text-xs  md:flex hidden items-center gap-2">
        {/* location */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] p-2 rounded shadow-md">
          <LocationIcon />
          <p>{t("address")}</p>
        </div>
        {/* phone */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] p-2 rounded shadow-md">
          <FiPhoneCall className="text-main-green" />
          <p>+966-4552-58</p>
        </div>
        {/* email */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] p-2 rounded shadow-md">
          <FiInbox className="text-main-green" />
          <p>7lol@mail.com</p>
        </div>
        {/* locale swither */}
        <LocaleSwitcher />
      </div>
      {/* nav */}
      <div
        className="px-6 py-2 rounded-t-xl flex items-center justify-between"
        style={{ backgroundColor: topnavColor }}
      >
        {/* logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={300}
            height={300}
            className="size-16 "
          />
        </Link>
        {/* links */}
        <ul className="flex items-center gap-6 text-white text-sm max-md:hidden">
          <li>
            <Link href="/" className="relative flex items-center gap-1 ">
              <HiOutlineHome className="text-main-green text-2xl" />
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/estats">{t("estates")}</Link>
          </li>
          <li>
            <Link href="/partners">{t("partners")}</Link>
          </li>

          <li>
            <Link href="/packages">{t("packages")}</Link>
          </li>
          <li>
            <Link href="/blogs">{t("blogs")}</Link>
          </li>
          <li>
            <Link href="/deals">{t("deals")}</Link>
          </li>
          <li>
            <Link href="/offers">{t("offers")}</Link>
          </li>
          <li>
            <Link href="/">{t("ads")}</Link>
          </li>
        </ul>
        {/* auth fav and cart */}
        <div className="flex items-center gap-2 max-md:hidden">
          <Link href="/wishlist">
            <TbBookmark className="text-white text-2xl hover:text-main-green" />
          </Link>
          <Link href="/notifications">
            <TbMessage2 className="text-white text-2xl hover:text-main-green" />
          </Link>
          {user ? (
            <button onClick={logout}>
              <LogInIcon className="text-white text-2xl hover:text-main-green" />
            </button>
          ) : (
            <Link href="/auth/sign-up">
              <TbUserPentagon className="text-white text-2xl hover:text-main-green" />
            </Link>
          )}
        </div>
        {/* sheet  */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <GiHamburgerMenu className="text-white text-2xl hover:text-main-green" />
          </SheetTrigger>
          <SheetContent
            className={"border-none"}
            style={{ backgroundColor: topnavColor }}
          >
            <SheetHeader>
              <SheetTitle>
                {/* logo */}
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={300}
                    height={300}
                    className="size-40 mx-auto "
                  />
                </Link>
              </SheetTitle>
              <SheetDescription asChild>
                <div className="space-y-6">
                  {/* links */}
                  <ul className="flex flex-col items-center gap-4 text-white text-sm ">
                    <li>
                      <Link
                        href="/"
                        className="relative flex items-center gap-1 "
                      >
                        <HiOutlineHome className="text-main-green text-2xl" />
                        {t("home")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/estats">{t("estates")}</Link>
                    </li>
                    <li>
                      <Link href="/partners">{t("partners")}</Link>
                    </li>
                    <li>
                      <Link href="/offers">{t("offers")}</Link>
                    </li>
                    <li>
                      <Link href="/">{t("ads")}</Link>
                    </li>
                    <li>
                      <Link href="/packages">{t("packages")}</Link>
                    </li>
                    <li>
                      <Link href="/deals">{t("deals")}</Link>
                    </li>
                    <li>
                      <Link href="/blogs">{t("blogs")}</Link>
                    </li>
                  </ul>
                  {/* auth fav and cart */}
                  <div className="flex items-center justify-center gap-4 mt-8 ">
                    <Link href="/wishlist">
                      <TbBookmark className="text-white text-2xl hover:text-main-green" />
                    </Link>
                    <Link href="/notifications">
                      <TbMessage2 className="text-white text-2xl hover:text-main-green" />
                    </Link>
                    {user ? (
                      <button onClick={logout}>
                        <LogInIcon className="text-white text-2xl hover:text-main-green" />
                      </button>
                    ) : (
                      <Link href="/auth/sign-up">
                        <TbUserPentagon className="text-white text-2xl hover:text-main-green" />
                      </Link>
                    )}
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
