import { FadeIn } from "@/components/shared/FadeIn";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";



export default function CTASection() {
  return (
    <section className="pb-12 lg:pb-24 px-6 lg:px-12">
      <FadeIn className="relative w-full overflow-hidden flex items-center justify-center bg-[#FFD5E5] py-20 rounded-[50px] shadow-sm">
        <Image
          className="absolute inset-0 z-10"
          src="/assets/cta-pattern.svg"
          alt="bg-pattern"
          fill
        />
        <div className="absolute top-0 left-0 bottom-0 z-20 w-[300px] h-[437px]" >
          <Image src="/assets/logo-cta.png" fill sizes="254px" className="relative object-contain" alt="logo" />
        </div>
        <div className="flex flex-col items-center relative z-40 gap-6 max-w-[950px] px-4 md:px-6 text-center">
          <h2 className="text-h2">Take the First Step Toward Healing</h2>
          <p className="text-paragraph text-slate-600">
            Schedule an appointment today and take the first step toward a
            healthier mind, stronger relationships, and a more balanced,
            fulfilling life.
          </p>
          <PrimaryButton href="/contact">Schedule an Appointment</PrimaryButton>
        </div>
      </FadeIn>
    </section>
  );
}
