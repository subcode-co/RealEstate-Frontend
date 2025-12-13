import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import PropertiesCarousel from "@/components/shared/properties-carousel";
import { partnersService } from "@/features/partners";
import { getCompanyProperties } from "@/lib/companies-actions";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SinglePartner = async ({ params }) => {
  // Await params for Next.js 15+ calls if needed, though simpler here
  const { id } = await params;
  const t = await getTranslations("breadcrumbs");

  // Fetch company details
  const company = await partnersService.getPartnerById(id);

  if (!company) {
    notFound();
  }

  // Fetch company properties
  const propertiesResponse = await getCompanyProperties(id);
  const properties = propertiesResponse.success ? propertiesResponse.data : [];

  return (
    <main className="space-y-12 min-h-screen pb-12 container mx-auto px-4">
      {/* Header */}
      <div className="bg-white p-4 pb-8 shadow-sm">
        <div className="space-y-4">
          <CustomBreadcrumbs
            items={[
              { label: t("partners"), href: "/partners" },
              { label: company.name },
            ]}
          />
          <h1 className="text-main-navy text-3xl font-bold">{company.name}</h1>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Logo Card - Takes less width, First in logical order (Right in RTL, Left in LTR) */}
        <div className="lg:col-span-4 order-1">
          <div className="bg-main-green/90 rounded-xl p-8 flex items-center justify-center aspect-square shadow-sm sticky top-24">
            <div className="relative w-full h-full">
              <Image
                src={company.logoUrl}
                alt={company.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content (Info) - Takes more width */}
        <div className="lg:col-span-8 order-2 space-y-8">
          {/* Company Name & Type */}
          <div className="text-right space-y-2">
            <h2 className="text-3xl font-bold text-main-navy">
              {company.name}
            </h2>
            <p className="text-main-green text-lg font-medium">
              {company.type}
            </p>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-gray-500">
            <svg
              className="size-5 text-main-green shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3.62 10.66C4.7 15.89 8.65 19.83 12 21.99C15.35 19.83 19.3 15.89 20.38 10.66C20.93 7.97 20.19 5.3 18.3 3.32C16.62 1.56 14.37 0.59 12 0.59C9.63 0.59 7.37 1.56 5.7 3.32C3.81 5.3 3.07 7.97 3.62 10.66Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-sm">{company.address}</span>
          </div>

          {/* Description */}
          <div className="text-gray-600 leading-relaxed text-sm">
            <Markdown rehypePlugins={[rehypeRaw]}>
              {company.description}
            </Markdown>
          </div>

          {/* Partner Ads Label */}
          <div className="pt-8">
            <div className="inline-block px-6 py-2 bg-[#F5FBF9] text-main-green font-bold rounded-lg text-sm">
              {company.name} {t("properties") || "Properties"}
            </div>
          </div>

          {/* Properties Grid */}
          {properties && properties.length > 0 ? (
            <PropertiesCarousel properties={properties} />
          ) : (
            <div className="bg-white p-8 rounded-xl text-center border border-gray-100">
              <p className="text-gray-500">
                {t("no_properties") || "No properties found for this partner."}
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="bg-main-green/90 rounded-xl p-8 flex items-center justify-center aspect-square shadow-sm sticky top-24">
            <div className="relative w-full h-full">
              <Image
                src={company.logoUrl}
                alt={company.name}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SinglePartner;
