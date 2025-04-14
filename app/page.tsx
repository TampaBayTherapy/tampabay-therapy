import FAQSection from "@/components/sections/home/FAQSection";
import GallerySection from "@/components/sections/home/GallerySection";
import HeroSection from "@/components/sections/home/HeroSection";
import MeetTherapistSection from "@/components/sections/home/MeetTherapistSection";
import CTASection from "@/components/sections/shared/CTASection";
import SpecialtiesSection from "@/components/sections/home/SpecialtiesSection";
import WhatIsPlayTherapySection from "@/components/sections/home/WhatIsPlayTherapySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MeetTherapistSection />
      <WhatIsPlayTherapySection />
      <GallerySection />
      <SpecialtiesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
