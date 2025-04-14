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
        className="object-cover"
        sizes="(min-width: 440px) 100vw, calc(-20vw + 516px)"
      />

      {/* Content */}
      <FadeInStagger className="text-white px-4 flex flex-col items-center justify-center gap-5 relative max-w-[850px]">
        <FadeIn>
          <p className="uppercase">No 1 therapy platform</p>
        </FadeIn>
        <FadeIn className="relative inline-block">
          <h1 className="text-h1 relative">
            Empowering Minds,
            <br /> Transforming Lives
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
            At Bright Minds Therapy, we provide compassionate care for all ages,
            supporting emotional well-being and personal growth.
          </p>
        </FadeIn>
        <FadeIn>
          <PrimaryButton href="/contact">Schedule an Appointment</PrimaryButton>
        </FadeIn>
      </FadeInStagger>
    </section>
  );
}
