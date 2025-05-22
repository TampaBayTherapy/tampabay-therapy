import Image from "next/image";
import { Container } from "../../shared/Container";
import SectionH2Title from "../../shared/SectionH2Title";
import PrimaryButton from "../../shared/PrimaryButton";
import { FadeIn, FadeInStagger } from "../../shared/FadeIn";
import { MEET_THERAPIST_SECTION } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function MeetTherapistSection() {
   const { data: section } = await sanityFetch({
    query: MEET_THERAPIST_SECTION,
  })

  if (!section) return null
console.log(section);
  const { title, accentText, image, cards } = section

  const aboutCard = cards[0]
  const approachCard = cards[1]

  console.log(aboutCard,approachCard);
  return (
    <Container as="section" className="py-12 lg:py-24">
      <FadeInStagger className="w-full flex flex-col items-center gap-12 lg:gap-24 justify-center">
        <FadeIn>
          <SectionH2Title text={title} accentText={accentText} />
        </FadeIn>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-6">
          <FadeIn
            direction="right"
            className="relative  stretch aspect-square"
          >
            <span className="absolute size-full bg-accent-rose-light top-1 lg:top-2 -left-1 lg:-left-2 rounded-[50px]" />
            <Image
              className="rounded-[50px] z-10 relative"
              src={image.asset.url}
              alt={image.alt}
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
              className="w-full flex flex-col items-center text-center   p-6 bg-accent-rose-light gap-6 rounded-[20px]"
            >
              <div className="bg-accent-rose-dark p-4 size-24 shrink-0 rounded-[20px]  flex items-center justify-center">
                <Image
                  src={aboutCard.icon.asset.url}
                  width={90}
                  height={90}
                  alt={aboutCard.icon.alt}
                />
              </div>

              <div className="max-w-2xl">
                <div className="flex flex-col gap-6">
                  <h3 className="text-h3">{aboutCard.heading}</h3>
                  <p className="text-paragraph">
                   {aboutCard.content}
                  </p>
                </div>
              </div>
            </FadeIn>
            {/*#Card 2 */}
            <FadeIn
              dir="left"
              className="w-full flex flex-col items-center text-center   p-4 md:p-6 bg-accent-purple-light gap-6 rounded-[20px]"
            >
              <div className="bg-accent-purple-dark p-4 rounded-[20px] size-24 shrink-0  flex items-center justify-center">
                <Image
                  src={approachCard.icon.asset.url}
                  width={120}
                  height={120}
                  alt={approachCard.icon.alt}
                />
              </div>

              <div className="max-w-2xl">
                <div className="flex flex-col gap-6">
                  <h3 className="text-h3">{approachCard.heading}</h3>
                  <p className="text-paragraph">
                    {approachCard.content}
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
