import { Container } from "@/components/shared/Container";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";
import { myApproachData } from "@/constants/myApproachData";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MyApproachSection() {
  
  return (
    <section className="py-12 lg:py-24 bg-[#fdfdfd]">
      <Container>
        <FadeIn className="text-center">
          <SectionH2Title text="My" accentText="Approach" />
        </FadeIn>
      
        <FadeInStagger className="grid gap-6 mt-12 justify-center lg:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {myApproachData.map((item) => (
            <FadeIn
              key={item.id}
              className="flex  flex-col max-w-[446px]"
            >
              {/* Card with flex-grow to push image to bottom */}
              <div
                className={cn(
                  "relative flex-grow rounded-[32px] px-6 pt-12",
                  item.id === 1
                    ? "bg-[#FFF0B0]"
                    : item.id === 2
                    ? "bg-[#C1EDA5]"
                    : "bg-[#D9C2FF]"
                )}
              >
                {/* SVG Shapes */}
        {item.shapes?.map((shape, i) => (
          <div key={i} className={shape.className}>
            <Image
              src={shape.src}
              alt=""
              width={100} // Default size, overridden by className
              height={100}
              className="w-full h-full"
            />
          </div>
        ))}
                {/* Card content */}
                <div className="relative h-full flex flex-col">
                  <h3 className="text-text-dark text-2xl md:text-3xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-[30px] text-gray-500 ">
                    {item.text}
                  </p>

                  {/* Image container - grows to fill remaining space */}
                  <div
                    className={cn(
                      "mt-auto relative w-full  h-[200px] md:h-[250px]",
                      item.id === 1
                        ? "translate-x-20"
                        : item.id === 3
                        ? "translate-x-10"
                        : ""
                    )}
                  >
                    <Image
                      src={item.src}
                      alt={`image-${item.title}`}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
