import Image from "next/image";
import { Container } from "../../shared/Container";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";
import PrimaryButton from "../../shared/PrimaryButton";
import SectionH2Title from "../../shared/SectionH2Title";
import { GridBackground } from "../../ui/grid-background";
import YouTubeEmbed from "@/components/LiteYouTubeEmbed";

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
            <PrimaryButton href="https://www.a4pt.org/page/ParentsCornerHomePag">Learn More</PrimaryButton>
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
