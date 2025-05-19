// app/expertise/page.tsx  (still a Server Component)
import CTASection from "@/components/sections/shared/CTASection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { sanityFetch } from "@/sanity/lib/live";
import { ALL_EXPERTISE } from "@/sanity/lib/queries";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Therapeutic Approaches | Play Therapy & EMDR for Children",
  description:
    "Specializing in child-centered play therapy, Theraplay® interventions, and pursuing EMDR certification for trauma healing in children.",
  alternates: { canonical: "https://www.tampabayplaytherapy.com/expertise" },
  openGraph: {
    title: "My Therapeutic Expertise | Play Therapy Modalities",
    description:
      "Trained in multiple play therapy approaches including child-centered, attachment-based, and family play therapy interventions.",
    url: "https://www.tampabayplaytherapy.com/expertise",
  },
  keywords: [
    "play therapy modalities",
    "child-centered therapy",
    "Theraplay",
    "EMDR for children",
    "attachment-based therapy",
  ],
};

type expertiseItemType = {
  _id: string;
  title: string;
  text: string;
  color: string;
  image: { asset: { url?: string } };
};

export default async function ServicesPage() {
  const { data: items } = await sanityFetch({ query: ALL_EXPERTISE });

  return (
    <>
      <section className="pt-42 pb-12 lg:pb-24 bg-[#fdfdfd]">
        <Container>
          <Breadcrumbs />
          <FadeIn className="text-center mt-12 ">
            <SectionH2Title as="h1" text="Our" accentText="Expertise" />
          </FadeIn>

          {/*
            FadeInStagger still animates each child FadeIn.
            We move the grid onto the Accordion root.
          */}
          <FadeInStagger className="mt-12 lg:mt-24">
            <Accordion
              type="single"
              collapsible
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12"
            >
              {items.map((expertise: expertiseItemType) => (
                <FadeIn
                  key={expertise._id}
                  tabIndex={0}
                  className="relative group min-h-[460px] pt-6 bg-[#eee] rounded-[32px]
                             transition-colors duration-500
                             hover:bg-[#AFB7C1] focus:bg-[#AFB7C1] active:bg-[#AFB7C1]"
                >
                  {/* background image */}
                  <div className="absolute inset-0 rounded-[32px]">
                    <Image
                      src={expertise.image?.asset?.url ?? "/expertise-fallback.png"}
                      alt={expertise.title}
                      fill
                      sizes="(min-width:1540px)332px,
                             (min-width:1280px)307px,
                             (min-width:1040px)456px,
                             (min-width:640px)296px,
                             calc(100vw-48px)"
                      className="object-cover rounded-[32px]"
                    />
                  </div>

                  {/* each item now is an AccordionItem at the bottom */}
                  <AccordionItem
                    value={expertise._id}
                    className="absolute bottom-0 left-0 right-0 z-20
                               px-4 rounded-[32px]"
                    style={{ background: expertise.color }}
                  >
                    <AccordionTrigger className="text-lg text-center font-semibold">
                      {expertise.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      {expertise.text}
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>
              ))}
            </Accordion>
          </FadeInStagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
