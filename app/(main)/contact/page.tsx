import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { FaLocationPin, FaPhone } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Child Play Therapy Consultations",
  description:
    "Schedule a play therapy consultation or learn more about services for your child. Serving families in [Your Location].",
  alternates: {
    canonical: "https://www.tampabayplaytherapy.com/contact",
  },
  openGraph: {
    title: "Contact Play Therapy Specialist",
    description:
      "Reach out to discuss how play therapy can help your child. Offering in-person and teletherapy sessions.",
    url: "https://www.tampabayplaytherapy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-42 pb-12 bg-[#fdfdfd]">
        <Container>
          <Breadcrumbs />
        </Container>
      </section>
      <section className="pb-12 lg:pb-24 px-6 lg:px-12 bg-[#fdfdfd]">
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
                href="tel:+12816865403"
              >
                <span className="flex items-center justify-center p-3 group-hover:text-accent-blue-dark group-hover:bg-white transition-all duration-300 size-12 bg-accent-blue-dark rounded-full text-white">
                  <FaPhone className="size-6" />
                </span>
                <p className="font-semibold text-xl group-hover:text-accent-blue-dark transition-colors duration-300">
                  281-686-5403
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
                  Coming soon!
                </address>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="relative mx-auto pb-12 lg:pb-24 bg-[#fdfdfd]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="502"
          height="424"
          viewBox="0 0 502 424"
          fill="none"
          className="absolute pointer-events-none "
        >
          <g opacity="0.5" filter="url(#filter0_f_2053_1710)">
            <circle cx="251" cy="173" r="67" fill="#FFBE81" />
          </g>
          <defs>
            <filter
              id="filter0_f_2053_1710"
              x="0"
              y="-78"
              width="502"
              height="502"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="92"
                result="effect1_foregroundBlur_2053_1710"
              />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="348"
          height="348"
          viewBox="0 0 348 348"
          fill="none"
          className="absolute pointer-events-none top-1/2 right-0"
        >
          <g opacity="0.5" filter="url(#filter0_f_2053_1708)">
            <circle cx="174" cy="174" r="50" fill="#C1EDA5" />
          </g>
          <defs>
            <filter
              id="filter0_f_2053_1708"
              x="0"
              y="0"
              width="348"
              height="348"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="62"
                result="effect1_foregroundBlur_2053_1708"
              />
            </filter>
          </defs>
        </svg>
        <Container className="max-w-4xl">
          <ContactForm />
        </Container>
      </section>
      <Toaster/>
    </>
  );
}
