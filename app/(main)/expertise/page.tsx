import CTASection from "@/components/sections/shared/CTASection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";
import { expertiseData } from "@/constants/expertiseData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Therapeutic Approaches | Play Therapy & EMDR for Children",
  description: "Specializing in child-centered play therapy, Theraplay® interventions, and pursuing EMDR certification for trauma healing in children.",
  alternates: {
    canonical: "https://www.tampabayplaytherapy.com/expertise"
  },
  openGraph: {
    title: "My Therapeutic Expertise | Play Therapy Modalities",
    description: "Trained in multiple play therapy approaches including child-centered, attachment-based, and family play therapy interventions.",
    url: "https://www.tampabayplaytherapy.com/expertise"
  },
  keywords: ["play therapy modalities", "child-centered therapy", "Theraplay", "EMDR for children", "attachment-based therapy"]
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-42 pb-12 lg:pb-24 bg-[#fdfdfd]">
        <Container>
          <Breadcrumbs />
          <FadeIn className="text-center mt-12 ">
            <SectionH2Title as="h1" text="Our" accentText="Expertise" />
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 mt-12 lg:mt-24">
            {expertiseData.map((expertise) => (
              <FadeIn
                className="relative group min-h-[460px] pt-6 bg-[#eee] transition-colors duration-500 hover:bg-[#AFB7C1] focus:bg-[#AFB7C1] active:bg-[#AFB7C1] rounded-[32px]"
                key={expertise.id}
                tabIndex={0} // Make the card focusable
              >
                <div className="absolute inset-0 rounded-[32px]">
                  <Image
                    src={expertise.src}
                    alt={expertise.title} // Added proper alt text
                    fill
                    sizes="(min-width: 1540px) 332px, (min-width: 1280px) 307px, (min-width: 1040px) 456px, (min-width: 640px) 296px, (min-width: 400px) calc(100vw - 48px), calc(33.75vw + 204px)"
                    className="size-full rounded-[32px] object-cover"
                  />
                </div>
                <div
                  style={{ backgroundColor: expertise.color }}
                  className="rounded-[12px] absolute -bottom-8 left-1/2 transition-all duration-500 
                  group-hover:left-0 group-hover:bottom-0 group-hover:translate-x-0 
                  group-focus:left-0 group-focus:bottom-0 group-focus:translate-x-0
                  group-active:left-0 group-active:bottom-0 group-active:translate-x-0
                  text-center h-[68px] overflow-hidden 
                  group-hover:h-[170px] group-focus:h-[170px] group-active:h-[170px]
                  -translate-x-1/2 border-[6px] w-fit border-white p-4"
                >
                  <h3 className="whitespace-nowrap mb-4 font-semibold text-text-dark">
                    {expertise.title}
                  </h3>
                  <p className="opacity-0 relative translate-y-10 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    group-focus:opacity-100 group-focus:translate-y-0
                    group-active:opacity-100 group-active:translate-y-0
                    delay-500 transition-all duration-200">
                    {expertise.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </section>
      <CTASection />
    </>
  );
}