import AboutEducationSection from "@/components/sections/about/AboutEducationSection";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import MyApproachSection from "@/components/sections/about/MyApproachSection";
import CTASection from "@/components/sections/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata
 = {
  title: "About Me | Licensed Child Therapist & Play Therapy Specialist",
  description: "LMHC and RPT with Master's in Clinical Psychology. Specializing in child-centered play therapy, attachment-based interventions, and family therapy since 2012.",
  alternates: {
    canonical: "https://www.tampabayplaytherapy.com/about"
  },
  openGraph: {
    title: "About [Your Name] | Play Therapy Specialist",
    description: "Learn about my therapeutic approach and qualifications as a Licensed Mental Health Counselor and Registered Play Therapist.",
    url: "https://www.tampabayplaytherapy.com/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutEducationSection />
      <MyApproachSection />
      <CTASection />
    </>
  );
}
