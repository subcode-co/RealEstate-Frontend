import AboutSection from "@/components/home/about-section";
import BlogSection from "@/components/home/blog-section";
import ClientReviews from "@/components/home/client-reviews";
import HeroSection from "@/components/home/hero-section";
import PartnerSection from "@/components/home/partner-section";
import ServicesSection from "@/components/home/services-section";
import StateFilterSection from "@/components/home/state-filter";
import StatesSection from "@/components/home/states-section";
import { getData } from "@/lib/fetch-methods";
import { getSettings } from "@/lib/settings-actions";

export default async function Home() {
  let homeData = {};
  const response = await getData({ url: "/home" });
  homeData =
    response?.code === 200 && response?.data?.success
      ? response?.data?.data
      : {};

  const {
    contentSections = [],
    coreValues = [],
    statistics = [],
    platformRating = "4.8",
    video = null,
  } = homeData;

  // Fetch featured properties
  let featuredProperties = [];
  try {
    const featuredResponse = await getData({
      url: "/properties/featured",
      revalidate: 60,
    });
    if (featuredResponse?.code === 200 && featuredResponse?.data?.success) {
      featuredProperties = featuredResponse.data.data || [];
    }
  } catch (error) {
    console.error("Error fetching featured properties:", error);
    // Fallback to empty array on error
    featuredProperties = [];
  }

  // Fetch settings for phone number
  const settings = await getSettings();

  return (
    <>
      <HeroSection video={video} settings={settings} />
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
