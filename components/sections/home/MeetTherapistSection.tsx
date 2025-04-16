import Image from "next/image";
import { Container } from "../../shared/Container";
import SectionH2Title from "../../shared/SectionH2Title";
import PrimaryButton from "../../shared/PrimaryButton";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";

export default function MeetTherapistSection() {
  return (
    <Container as="section" className="py-12 lg:py-24">
      <FadeInStagger className="w-full flex flex-col items-center gap-12 lg:gap-24 justify-center">
        <FadeIn>
          <SectionH2Title text="Meet Your" accentText="Therapist" />
        </FadeIn>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-6">
          <FadeIn
            direction="right"
            className="relative max-w-[500px] shrink-0 max-h-[500px]"
          >
            <span className="absolute size-full bg-accent-rose-light top-1 lg:top-2 -left-1 lg:-left-2 rounded-[50px]" />
            <Image
              className="rounded-[50px] z-10 relative"
              src="/images/therapist-img.jpg"
              alt="Therapist Image"
              width={500}
              height={500}
            />
            <span className="absolute size-full bg-accent-purple-light -top-1 lg:-top-2 -right-1 lg:-right-2 rounded-[50px]" />
            <span className="absolute rounded-[50px] inset-0 bg-black/20 z-20" />
          </FadeIn>

          <FadeInStagger className="flex flex-col gap-6">
            {/*#Card 1 */}
            <FadeIn
              direction="left"
              className="w-full flex flex-col items-center text-center md:items-start md:text-start md:flex-row p-6 bg-accent-rose-light gap-6 rounded-[20px]"
            >
              <div className="bg-accent-rose-dark p-4 size-24 shrink-0 rounded-[20px]  flex items-center justify-center">
                <Image
                  src="/assets/about-icon.svg"
                  width={90}
                  height={90}
                  alt="Info Icon"
                />
              </div>

              <div className="max-w-2xl">
                <div className="flex flex-col gap-6">
                  <h3 className="text-h3">About Me</h3>
                  <p className="text-paragraph">
                    I am a Licensed Mental Health Counsellor (LMHC) and
                    Registered Play Therapist (RPT) with a Master’s degree in
                    Clinical Psychology. Since 2012, I have been dedicated to
                    helping children and families navigate challenges through a
                    holistic, child-centred approach.
                  </p>
                </div>
              </div>
            </FadeIn>
            {/*#Card 2 */}
            <FadeIn
              dir="left"
              className="w-full flex flex-col items-center text-center md:items-start md:text-start md:flex-row p-4 md:p-6 bg-accent-purple-light gap-6 rounded-[20px]"
            >
              <div className="bg-accent-purple-dark p-4 rounded-[20px] size-24 shrink-0  flex items-center justify-center">
                <Image
                  src="/assets/approach-icon.svg"
                  width={120}
                  height={120}
                  alt="Approach Icon"
                />
              </div>

              <div className="max-w-2xl">
                <div className="flex flex-col gap-6">
                  <h3 className="text-h3">My Approach</h3>
                  <p className="text-paragraph">
                    Trained in various play therapy modalities, I specialize in
                    child-centred, attachment-based, and family play therapy
                    interventions. As a Level 1 Thera play practitioner, I focus
                    on fostering secure attachments through play. Currently, I
                    am pursuing EMDR certification to support trauma healing.
                  </p>
                </div>
              </div>
            </FadeIn>
            {/*#CTA */}
            <FadeIn className="self-center">
              <PrimaryButton href="/about">Read More</PrimaryButton>
            </FadeIn>
          </FadeInStagger>
        </div>
      </FadeInStagger>
    </Container>
  );
}
