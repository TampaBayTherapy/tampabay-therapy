import CTASection from "@/components/sections/shared/CTASection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";
import { expertiseData } from "@/constants/expertiseData";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <section className="pt-42 pb-12 lg:pb-24 bg-[#fdfdfd]">
        <Container>
          <Breadcrumbs />
          <FadeIn className="text-center mt-12 lg:mt-24">
            <SectionH2Title text="Our" accentText="Expertise" />
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-12 mt-12 lg:mt-24">
            {expertiseData.map((expertise) => (
              <FadeIn
                className="relative group min-h-[460px] pt-6 bg-[#eee] transition-colors duration-500 hover:bg-[#AFB7C1] rounded-[32px]"
                key={expertise.id}
              >
                <div className="absolute inset-0 rounded-[32px]">
                  <Image
                    src={expertise.src}
                    alt=""
                    fill
                    className="size-full rounded-[32px] object-cover"
                  />
                  {/* <div className="absolute inset-0 rounded-[32px] bg-black/20"/> */}
                </div>
                <div
                  style={{ backgroundColor: expertise.color }}
                  className="rounded-[12px] absolute -bottom-8 left-1/2 transition-all duration-500 group-hover:left-0 group-hover:bottom-0 group-hover:translate-x-0 text-center h-[68px] overflow-hidden group-hover:border-0 group-hover:h-[170px] -translate-x-1/2 border-[6px] w-fit border-white p-4"
                >
                  <h3 className="whitespace-nowrap mb-4  font-semibold text-text-dark">
                    {expertise.title}
                  </h3>
                  <p className="opacity-0 relative translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 delay-500 transition-all duration-200">
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
