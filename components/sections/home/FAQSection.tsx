import Image from "next/image";
import { Container } from "../../shared/Container";
import { FadeIn } from "../../shared/FadeIn";
import SectionH2Title from "../../shared/SectionH2Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_FAQ } from "@/sanity/lib/queries";

type FAQItem = {
  _id: string;
  question: string;
  answer: string;
  color: string;
};

export default async function FAQSection() {
  const { data: faqItems } = await sanityFetch({ query: ALL_FAQ });

  return (
    <Container as="section" className="py-12 lg:py-24">
      <FadeIn className="text-center">
        <SectionH2Title text="Frequently Asked" accentText="Questions" />
      </FadeIn>

      <FadeIn>
        <Accordion
          type="single"
          className="max-w-[950px] mt-12 lg:mt-24 mx-auto flex flex-col gap-6"
          collapsible
        >
          {faqItems.map((item: FAQItem) => (
            <AccordionItem
              style={{
                boxShadow: `-4px 0px 0px 0px ${item.color}`,
                borderLeft: `4px solid ${item.color}`,
              }}
              key={item._id}
              value={`item-${item._id}`}
              className="rounded-[20px] p-6 "
            >
              <AccordionTrigger className="text-lg lg:text-xl cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>

      <Image
        src="/diversity.png"
        alt="diversity logo"
        width={400}
        height={400}
        className="mx-auto mt-12"
      />
    </Container>
  );
}
