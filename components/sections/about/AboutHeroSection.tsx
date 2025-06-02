import Image from "next/image";
import Breadcrumbs from "../../shared/Breadcrumbs";
import { Container } from "../../shared/Container";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";
console.log();
export default function AboutHeroSection() {
  return (
    <section className="pt-42 pb-12 lg:pb-24 bg-[#fdfdfd]">
      <Container>
        <Breadcrumbs />
        <FadeInStagger className="w-full mt-12 flex flex-col lg:flex-row gap-10 justify-between items-center">
          <FadeIn
            direction="right"
            className="relative max-w-[540px] pt-10  overflow-hidden   rounded-[114px_114px_2px_114px]"
          >
            <div
              className="absolute inset-0 border-[2px] border-transparent rounded-[inherit]"
              style={{
                background: `linear-gradient(to bottom, transparent, #ebd98f) border-box`,
                WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              }}
            />
            <Image
              className="absolute -bottom-10 -right-10 z-10"
              src="/assets/about-page/gradient-shape-1.svg"
              alt="shape gradient"
              width={380}
              height={380}
            />
            <Image
              className="absolute top-2 -left-20 z-10"
              src="/assets/about-page/gradient-shape-2.svg"
              alt="shape gradient"
              width={480}
              height={480}
            />
            <Image
              className="absolute -top-10 -right-20 z-10"
              src="/assets/about-page/gradient-shape-3.svg"
              alt="shape gradient"
              width={480}
              height={480}
            />

            <Image
              className="absolute inset-0 object-cover z-10"
              src="/assets/about-page/about-pattern.svg"
              alt="bg-pattern"
              fill
            />
            <Image
              className="relative z-20"
              src="/assets/about-page/about-therapist.png"
              width={414}
              height={320}
              priority
              alt="therapist image"
            />
          </FadeIn>

          <FadeIn direction="left" className="space-y-6 flex-1 max-w-[900px]">
            <h1 className="text-3xl relative sm:text-4xl w-fit whitespace-nowrap md:text-5xl font-bold text-[#1b1716] flex items-center">
              Hey! I am Mary
              <Image
                className="absolute -top-[0.8em] -right-[0.6em]"
                style={{
                  width: "min(1.1em, 75px)",
                  height: "auto",
                }}
                src="/assets/about-page/about-h1-shape.svg"
                alt="fork shape"
                width={60}
                height={60}
              />
            </h1>
            {/* <ul className="space-y-6 text-paragraph list-none">
              <li className="flex gap-2">
                <span className="text-[#1b1716] font-medium mt-1">•</span>
                <div>
                  <span>I am a </span>
                  <span className="text-[#ff9b3e] font-medium">
                    Licensed Mental Health Counselor (LMHC)
                  </span>
                  <span>
                    {" "}
                    and Registered Play Therapist (RPT). Since 2012, I have
                    dedicated my career to supporting children and families
                    through various challenges.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1b1716] font-medium mt-1">•</span>
                <span>
                  Together with parents and caregivers, I aim to develop
                  tailored interventions that address each child&apos;s unique
                  needs. My approach is holistic, integrating various
                  therapeutic modalities to foster emotional growth and
                  well-being.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1b1716] font-medium mt-1">•</span>
                <div>
                  <span>
                    I have undergone training in various modalities of play
                    therapy, with a particular{" "}
                  </span>
                  <span className="text-[#d9c2ff] font-medium">focus</span>
                  <span>
                    {" "}
                    on child-centered, attachment-based, and family play therapy
                    interventions.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1b1716] font-medium mt-1">•</span>
                <div>
                  <span>As a Level 1 Theraplay practitioner, I use </span>
                  <span className="text-[#ff9b3e] font-medium">
                    interactive
                  </span>
                  <span>
                    , play-based techniques to strengthen parent-child bonds and
                    support healthy emotional development.{" "}
                  </span>
                  <a
                    href="https://theraplay.org/what-is-theraplay/"
                    className="text-[#c1eda5] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://theraplay.org/what-is-theraplay/
                  </a>
                  <span>
                    {" "}
                    Dedicated to lifelong learning, I continue to expand my
                    knowledge and skills through ongoing training and education.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1b1716] font-medium mt-1">•</span>
                <span>
                  I am also pursuing certification in Eye Movement
                  Desensitization and Reprocessing (EMDR) to further enhance my
                  ability to support children and families who have experienced
                  trauma.
                </span>
              </li>
            </ul> */}
            <p className="text-[#1b1716] max-w-3xl text-lg font-medium">
              I hold a Bachelor of Science degree from Sam Houston State University (2008) and a Master of Arts in Clinical Psychology from the University of Houston–Clear Lake (2011). I have been a practicing <span className="font-semibold text-[#c1eda5]">Licensed Mental Health Counselor (LMHC)</span>   since 2012, working with children, adolescents, and families across a variety of settings. I am a <span className="font-semibold text-[#ff9b3e]">Registered Play Therapist™ (RPT™)</span> and have held this credential since 2018, reflecting my advanced training and specialization in play-based interventions. In 2019, I became a <span className="font-semibold text-[#d9c2ff]">Theraplay® Foundational Practitioner</span>, deepening my work with attachment-based and parent-child interventions. Most recently, I completed <span className="font-semibold text-[#ff9b3e]">EMDR training</span>  in 2025 to expand my ability to support children and families in healing from trauma.
            </p>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </section>
  );
}
