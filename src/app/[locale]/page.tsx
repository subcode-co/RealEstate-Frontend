import AboutSection from "@/components/home/about-section";
import BlogSection from "@/components/home/blog-section";
import ClientReviews from "@/components/home/client-reviews";
import HeroSection from "@/components/home/hero-section";
import PartnerSection from "@/components/home/partner-section";
import ServicesSection from "@/components/home/services-section";
import StateFilterSection from "@/components/home/state-filter";
import StatesSection from "@/components/home/states-section";
import { homeService } from "@/features/home";
import { propertiesService } from "@/features/properties";
import { getSettings } from "@/lib/settings-actions";

interface HomeData {
  contentSections?: any[];
  coreValues?: any[];
  statistics?: any[];
  platformRating?: string;
  video?: string | null;
  [key: string]: any;
}

export default async function Home() {
  const homeData: HomeData = (await homeService.getHomeData()) || {};

  const {
    contentSections = [],
    coreValues = [],
    statistics = [],
    platformRating = "4.8",
    video = null,
  } = homeData;

  // Fetch featured properties
  const featuredProperties = await propertiesService.getFeaturedProperties();

  // Fetch settings for phone number
  const settings = await getSettings();

  return (
    <>
      <HeroSection
        video={video}
        settings={settings}
        heroContent={contentSections[0]}
      />
      <AboutSection
        sections={contentSections}
        platformRating={platformRating}
        statistics={statistics}
      />
      <ServicesSection coreValues={coreValues} />
      <StateFilterSection />
      <StatesSection properties={featuredProperties} />
      <ClientReviews />
      <BlogSection />
      <PartnerSection />
    </>
  );
}
