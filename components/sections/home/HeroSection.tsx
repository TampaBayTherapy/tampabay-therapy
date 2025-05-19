import Image from "next/image";
import PrimaryButton from "../../shared/PrimaryButton";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#FFFDF5]">
      <Image
        src="/images/tampa-hero-img.jpg"
        alt="Hero image"
        priority
        fill
        className="object-cover pointer-events-none"
        sizes="(min-width: 440px) 100vw, calc(-20vw + 516px)"
      />

      {/* Content */}
      <FadeInStagger className="text-white px-4 flex flex-col items-center justify-center gap-5 relative max-w-[850px]">
        <FadeIn className="relative inline-block">
          <h1 className="text-h1 relative">
            <span className="whitespace-nowrap">Through Connection</span>
            <br />{" "}
            <span className="whitespace-nowrap">We Can Achieve More</span>
            <Image
              className="absolute -top-[0.8em] -right-[0.6em]"
              style={{
                width: "min(1.1em, 75px)",
                height: "auto",
              }}
              src="/assets/hero-shape.svg"
              alt="Decorative shape"
              width={75}
              height={73}
            />
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="text-paragraph text-center">
            At Tampa Bay Play Therapy, we help children and families heal, grow,
            and thrive through compassionate, evidence-based play therapies.
          </p>
        </FadeIn>
        <FadeIn>
          <PrimaryButton href="/contact">Schedule an Appointment</PrimaryButton>
        </FadeIn>
      </FadeInStagger>
    </section>
  );
}
