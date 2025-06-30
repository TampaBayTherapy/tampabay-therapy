// components/Footer.tsx

import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS } from "@/sanity/lib/queries";


import footerCards, { type FooterCard } from "@/constants/footerData";
import { Container } from "./shared/Container";
import SvgLogo from "./shared/SvgLogo";
import Image from "next/image";
import { LinkWrapper } from "./shared/FooterLinkWrapper";
import { cn } from "@/lib/utils";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";

export default async function Footer() {
  // 1) fetch your settings
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS });
  const { phoneRaw, phoneDisplay, email, addressText, mapUrl } = settings ?? {};

  // 2) grab your static cards for Social & Quick Links
  const socialCard     = footerCards.find((c) => c.title === "Social")!;
  const quickLinksCard = footerCards.find((c) => c.title === "Quick Links")!;

  // 3) build a new array, preserving order & heights
  const cards: FooterCard[] = [
    {
      title: "Call",
      color: "#C1EDA5",
      icon: "/assets/phone-icon.svg",
      semantic: "div",
      content: [
        {
          text:    phoneDisplay  ?? "Coming soon!",
          href:    phoneRaw      ? `tel:${phoneRaw}` : "#",
          type:   "phone",
        },
      ],
    },
    {
      title: "Mail",
      color: "#FFF0B0",
      icon: "/assets/mail-icon.svg",
      semantic: "div",
      content: [
        {
          text:  email        ?? "Coming soon!",
          href:  email        ? `mailto:${email}` : "#",
          type: "email",
        },
      ],
    },
    {
      title: "Address",
      color: "#FFBE81",
      icon: "/assets/address-pin-icon.svg",
      semantic: "address",
      content: [
        {
          text: addressText               ?? "Coming soon!",
          href: addressText && mapUrl    ? mapUrl              : "#",
          type: "map",
        },
      ],
    },
    socialCard,
    quickLinksCard,
  ];

  // 4) render exactly as before
  const lgHeightClasses = [
    "lg:h-[160px]", // Card 1
    "lg:h-[220px]", // Card 2
    "lg:h-[280px]", // Card 3
    "lg:h-[340px]", // Card 4
    "lg:h-[400px]", // Card 5
  ];

  return (
    <footer className="bg-footer-bg lg:pt-12">
      <Container className="relative">
        <SvgLogo className="max-w-[200px] mx-auto lg:max-w-[300px] lg:mx-0 lg:absolute lg:-top-12" />

        <FadeInStagger className="grid relative mt-4 gap-4 items-end md:grid-cols-2 lg:gap-0 lg:grid-cols-5 w-full">
          {cards.map((card, index) => {
            const cardContent = (
              <FadeIn
                key={card.title}
                className={cn(
                  "p-8 rounded-[50px] lg:rounded-[50px_50px_0px_0px] md:min-h-[200px] lg:min-h-0",
                  "relative overflow-hidden flex flex-col",
                  lgHeightClasses[index]
                )}
                style={{ backgroundColor: card.color }}
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
                        className="hover:underline break-all whitespace-normal"
                      >
                        {link.text}
                      </LinkWrapper>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            );

            switch (card.semantic) {
              case "address":
                return <address key={card.title}>{cardContent}</address>;
              case "nav":
                return (
                  <nav
                    key={card.title}
                    aria-label={`${card.title} navigation`}
                  >
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
