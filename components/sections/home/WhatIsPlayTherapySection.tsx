import Image from "next/image";
import { Container } from "../../shared/Container";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";
import PrimaryButton from "../../shared/PrimaryButton";
import SectionH2Title from "../../shared/SectionH2Title";
import { GridBackground } from "../../ui/grid-background";

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
            <PrimaryButton href="/services">Learn More</PrimaryButton>
          </FadeIn>

          <FadeIn className="w-full relative mt-12 mx-auto aspect-video max-w-[900px] p-3 bg-accent-purple-dark rounded-[32px]">
            <iframe
              loading="lazy"
              className="w-full h-full rounded-[32px]"
              src={`https://www.youtube.com/embed/AhnFKu75mgk?autoplay=1&rel=0`}
              title="YouTube video player"
              allow=" encrypted-media"
              allowFullScreen
            />
            <Image
              className=" absolute bottom-20 -left-52"
              src="/assets/green-flower-shape.svg"
              width={120}
              height={120}
              alt="flower svg shape"
            />
            <Image
              className=" absolute -right-32 -top-32"
              src="/assets/purple-flower-shape.svg"
              width={120}
              height={120}
              alt="flower svg shape"
            />
          </FadeIn>
        </FadeInStagger>
      </Container>
    </section>
  );
}
