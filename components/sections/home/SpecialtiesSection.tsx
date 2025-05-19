import { servicesData } from "@/constants/servicesData";
import { Container } from "../../shared/Container";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";
import PrimaryButton from "../../shared/PrimaryButton";
import SectionH2Title from "../../shared/SectionH2Title";
import Image from "next/image";

export default function SpecialtiesSection() {
  return (
    <Container as="section" className="py-12 lg:py-24">
      <FadeInStagger className="  mx-auto flex flex-col items-center">
        <FadeIn className="text-center">
          <SectionH2Title text="Our Specialties &" accentText="Expertise" />
        </FadeIn>
        <FadeIn className="mt-12">
          <p className="text-paragraph text-center text-slate-600">
            Providing compassionate, specialized care for children and families
            navigating emotional, behavioral, and developmental challenges.
          </p>
        </FadeIn>
        <FadeIn className="mt-6">
          <PrimaryButton href="/contact">
            Schedule a Free Consultation
          </PrimaryButton>
        </FadeIn>

        <FadeIn className="grid gap-12  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-0 mt-12 lg:mt-24">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative group flex min-h-[400px]  mix-blend-multiply "
              style={{ backgroundColor: service.color }}
            >
              {/* Image with blend mode */}

              <Image
                src={service.src}
                alt={service.title}
                width={280}
                height={400}
                className="object-cover relative  z-20 mix-blend-multiply"
                quality={100}
              />

              {/* Color overlay */}

              {/* Text content */}
             <div className="absolute left-0 right-0 group-hover:-bottom-6 transition-all duration-500 -bottom-10 z-30 p-2 flex rounded-[12px] bg-white">
                <div
                  style={{ backgroundColor: service.color }}
                  className="rounded-[12px] flex items-center justify-center p-4 min-h-[88px] w-full"
                >
                  <h3 className="text-lg  font-bold text-gray-900">
                    {service.title}
                  </h3>
                  {/* <p>{service.text}</p> */}
                </div>
              </div> 
            </div>
          ))}
        </FadeIn>
      </FadeInStagger>
       <FadeIn className="self-center w-full flex items-center justify-center pt-12">
                    <PrimaryButton  href="/about">Read More</PrimaryButton>
                  </FadeIn>
    </Container>
  );
}
