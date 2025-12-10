import AboutSection from "@/components/home/about-section";
import BlogSection from "@/components/home/blog-section";
import ClientReviews from "@/components/home/client-reviews";
import HeroSection from "@/components/home/hero-section";
import PartnerSection from "@/components/home/partner-section";
import ServicesSection from "@/components/home/services-section";
import StateFilterSection from "@/components/home/state-filter";
import StatesSection from "@/components/home/states-section";

export default function Home() {

  return (
    <>
      <HeroSection/>
      <AboutSection />
      <ServicesSection />
      <StateFilterSection />
      <StatesSection/>
      <ClientReviews/>
      <BlogSection />
      <PartnerSection/>
    </>
  )
}