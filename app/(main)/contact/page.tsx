import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import { FaLocationPin, FaPhone } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Child Play Therapy Consultations",
  description: "Schedule a play therapy consultation or learn more about services for your child. Serving families in [Your Location].",
  alternates: {
    canonical: "https://www.tampabayplaytherapy.com/contact"
  },
  openGraph: {
    title: "Contact Play Therapy Specialist",
    description: "Reach out to discuss how play therapy can help your child. Offering in-person and teletherapy sessions.",
    url: "https://www.tampabayplaytherapy.com/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-42 pb-12 bg-[#fdfdfd]">
        <Container>
          <Breadcrumbs />
        </Container>
      </section>
      <section className="pb-12 lg:pb-24 px-6 lg:px-12">
        <FadeIn className="relative w-full overflow-hidden flex items-center justify-center bg-[#FFD5E5] py-20 rounded-[50px] shadow-sm">
          <Image
            className="absolute inset-0 z-10"
            src="/assets/cta-pattern.svg"
            alt="bg-pattern"
            fill
          />
          <div className="absolute top-0 left-0 bottom-0 z-20 w-[300px] h-[437px]">
            <Image
              src="/assets/logo-cta.png"
              fill
              sizes="254px"
              className="relative object-contain"
              alt="logo"
            />
          </div>
          <div className="flex flex-col items-center relative z-40 gap-6 max-w-[750px] px-4 md:px-6 text-center">
            <h1 className="text-h2">Contact Us</h1>
            <p className="text-paragraph text-slate-600">
              Reach out today to explore how we can support your child’s
              emotional growth and well-being through compassionate, play-based
              therapy
            </p>
            <div className="w-full flex-col gap-4 sm:flex-row flex items-center justify-between">
              <a
                className="font-semibold group flex flex-col items-center gap-4"
                href="tel:+123456789"
              >
                <span className="flex items-center justify-center p-3 group-hover:text-accent-blue-dark group-hover:bg-white transition-all duration-300 size-12 bg-accent-blue-dark rounded-full text-white">
                  <FaPhone className="size-6" />
                </span>
                <p className="font-semibold text-xl group-hover:text-accent-blue-dark transition-colors duration-300">
                  +123456789
                </p>
              </a>
              <a
                href="https://www.google.com/maps/place/..."
                rel="noopener noreferrer"
                target="__blank"
                className="flex group flex-col items-center max-w-[200px] gap-4"
              >
                <span className="flex items-center justify-center p-3 group-hover:text-accent-blue-dark group-hover:bg-white transition-all duration-300 size-12 bg-accent-blue-dark rounded-full text-white">
                  <FaLocationPin className="size-6" />
                </span>
                <address className="font-semibold text-xl group-hover:text-accent-blue-dark transition-colors duration-300">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </address>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
