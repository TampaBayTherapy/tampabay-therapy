import Image from "next/image";
import { Container } from "../../shared/Container";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";

import SectionH2Title from "../../shared/SectionH2Title";
import { GridBackground } from "../../ui/grid-background";
import YouTubeEmbed from "@/components/LiteYouTubeEmbed";
import { FaArrowRight } from "react-icons/fa6";

export default function WhatIsPlayTherapySection() {
  return (
    <section className="overflow-hidden relative py-12 lg:py-24 bg-light-blue-bg">
      <GridBackground />

      <Container>
        <FadeInStagger className="max-w-[900px]  mx-auto flex flex-col items-center">
          <FadeIn>
            <SectionH2Title text="What is" accentText="Play Therapy?" />
          </FadeIn>
          <FadeIn className="mt-12">
            <p className="text-paragraph text-center text-slate-600">
              Play Therapy helps children express emotions, process experiences,
              and build essential coping skills in a safe, supportive
              environment. Using play as their natural language, children can
              explore feelings, develop problem-solving abilities, and
              strengthen emotional resilience.
            </p>
          </FadeIn>
          <FadeIn className="mt-6">
            <a
              target="__blank"
              rel="noopener noreferrer"
              href="https://www.a4pt.org/page/ParentsCornerHomePag"
              className="py-4 flex whitespace-nowrap group font-semibold transition-all duration-500 items-center gap-4 z-10 relative overflow-hidden w-fit rounded-[12px] shadow-sm px-5 bg-accent-blue-light text-text-dark hover:text-white"
            >
              Learn More
              <FaArrowRight />
              <span className="bg-accent-blue-dark absolute rounded-[12px] -z-10 size-full inset-0 scale-0 transition-all duration-500 group-hover:scale-100" />
            </a>
          </FadeIn>

          <YouTubeEmbed />
        </FadeInStagger>
      </Container>
      <Image
        className=" absolute -z-10 top-1/2 left-1/5"
        src="/assets/green-flower-shape.svg"
        width={120}
        height={120}
        alt="flower svg shape"
      />
      <Image
        className=" absolute md:right-1/5 right-0 top-2 md:top-1/4"
        src="/assets/purple-flower-shape.svg"
        width={120}
        height={120}
        alt="flower svg shape"
      />
    </section>
  );
}
