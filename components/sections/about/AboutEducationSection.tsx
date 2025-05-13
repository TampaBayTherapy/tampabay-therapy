import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";
import { GridBackground } from "@/components/ui/grid-background";
import { educationData } from "@/constants/educationData";
import { cn } from "@/lib/utils";
// import Image from "next/image";

// interface CredentialCardProps {
//   text: string;
//   borderColor: string;
// }

// function CredentialCard({ text, borderColor }: CredentialCardProps) {
//   return (
//     <div
//       className="p-6 md:p-8 rounded-[32px] bg-[#fdfdfd] h-full shadow-sm max-w-[400px] md:max-w-[450px]"
//       style={{
//         border: `2px solid ${borderColor}`,
//         boxShadow: `-4px 0px 0px 0px ${borderColor}`,
//       }}
//     >
//       <p className="text-text-dark text-lg md:text-xl font-medium text-center">
//         {text}
//       </p>
//     </div>
//   );
// }

export default function AboutEducationSection() {
  return (
    <section className="overflow-hidden relative py-12 pb-8  lg:py-24  bg-light-blue-bg">
      <GridBackground />
      <Container className="relative">
        {/* <Image
          className=" absolute bottom-20 -left-32"
          src="/assets/green-flower-shape.svg"
          width={120}
          height={120}
          alt="flower svg shape"
        />
        <Image
          className=" absolute -right-32 -top-12"
          src="/assets/purple-flower-shape.svg"
          width={120}
          height={120}
          alt="flower svg shape"
        /> */}
        <FadeIn className="text-center">
          <SectionH2Title text="My" accentText="Education" />
        </FadeIn>

        <FadeInStagger className="relative mt-12 lg:mt-24 w-full  justify-center mx-auto    max-w-5xl ">
          <ul className="grid md:grid-cols-2 gap-10">
            {educationData.map((education, index) => (
              <FadeIn
                direction={
                  index % 2 === 0 ? "right" : "left" // Alternate between right and left
                }
                key={education.id}
                className={cn(`relative `)}
              >
                <li className="flex items-start gap-4">
                  <span className="block size-10 shrink-0 rounded-full" style={{backgroundColor:education.color}}/>
                  <p className="font-semibold text-xl lg:text-2xl">{education.text}</p>
                </li>
                {/* <CredentialCard
                text={education.text}
                borderColor={education.color}              
              /> */}
                {/* {index === 1 && (
                <Image
                  className="absolute -top-[2.6em] -right-[0.6em] rotate-6"
                  style={{
                    width: "min(3.1em, 75px)",
                    height: "auto",
                  }}
                  src="/assets/about-page/about-h1-shape.svg"
                  alt="fork shape"
                  width={60}
                  height={60}
                />
              )} */}
              </FadeIn>
            ))}
          </ul>
          {/* Master of Arts Card */}

          {/* <div className="absolute left-[5%] top-[15%] transform -rotate-6">
          <CredentialCard
            text="Master of Arts in Clinical Psychology from the University of Houston-Clear Lake"
            borderColor="#a5da84"
          />
        </div>

        
        <div className="absolute right-[5%] top-[25%] transform rotate-3">
          <CredentialCard text="Registered Play Therapist (RPT)" borderColor="#ff9b3e" />
        </div>

       
        <div className="absolute left-[10%] top-[50%] transform rotate-6">
          <CredentialCard text="Licensed Mental Health Counselor (LMHC)" borderColor="#ffde76" />
        </div>

   
        <div className="absolute right-[8%] bottom-[15%] transform -rotate-3">
          <CredentialCard
            text="Certification in Eye Movement Desensitization and Reprocessing (EMDR) (Persuing)"
            borderColor="#ffbcd6"
          />
        </div> */}
        </FadeInStagger>
      </Container>
    </section>
  );
}
