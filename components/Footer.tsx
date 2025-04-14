// import Image from "next/image";
import footerCards from "@/constants/footerData";
import { Container } from "./shared/Container";
import SvgLogo from "./shared/SvgLogo";
import Image from "next/image";
import { LinkWrapper } from "./shared/FooterLinkWrapper";
import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-footer-bg lg:pt-12">
      <Container className="relative">
        {/* <Image src="/assets/tampabay-logo-trans.png" alt="Tampa Bay Logo" width={358} height={200}/> */}

        <SvgLogo className="max-w-[200px] mx-auto lg:max-w-[300px] lg:mx-0 lg:absolute lg:-top-12" />

        <FadeInStagger className="grid relative mt-4 gap-4 items-end md:grid-cols-2  lg:gap-0 lg:grid-cols-5  w-full ">
          {footerCards.map((card, index) => {
            // Create the card content
            const lgHeightClasses = [
              "lg:h-[160px]", // Card 1
              "lg:h-[220px]", // Card 2
              "lg:h-[280px]", // Card 3
              "lg:h-[340px]", // Card 4
              "lg:h-[400px]", // Card 5
            ];

            const cardContent = (
              <FadeIn
                key={card.title}
                className={cn(
                  "p-8 rounded-[50px] lg:rounded-[50px_50px_0px_0px] md:min-h-[200px] lg:min-h-0",
                  "relative overflow-hidden flex flex-col",
                  lgHeightClasses[index], // Apply responsive height
                  // Smooth height changes
                )}
                style={{
                  backgroundColor: card.color,
                  // height:
                  //   index === 0
                  //     ? "200px"
                  //     : index === 1
                  //     ? "260px"
                  //     : index === 2
                  //     ? "320px"
                  //     : index === 3
                  //     ? "380px"
                  //     : "440px",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    className="flex-shrink-0"
                    width={30}
                    height={30}
                    src={card.icon}
                    alt={`${card.title} icon`}
                  />
                  <h4 className="font-semibold text-text-dark text-xl">
                    {card.title}
                  </h4>
                </div>

                <ul className="flex gap-4 md:block text-gray-600 flex-wrap space-y-2">
                  {card.content.map((link) => (
                    <li key={link.text}>
                      <LinkWrapper
                        href={link.href}
                        type={link.type}
                        className="hover:underline"
                      >
                        {link.text}
                      </LinkWrapper>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            );

            // Wrap with appropriate semantic element
            switch (card.semantic) {
              case "address":
                return <address key={card.title}>{cardContent}</address>;
              case "nav":
                return (
                  <nav key={card.title} aria-label={`${card.title} navigation`}>
                    {cardContent}
                  </nav>
                );
              default:
                return <div key={card.title}>{cardContent}</div>;
            }
          })}
        </FadeInStagger>
      </Container>
    </footer>
  );
}
