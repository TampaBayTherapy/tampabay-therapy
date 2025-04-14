import { mockGalleryImages } from "@/constants/mockGalleryData";
import GallerySwiper from "../../GallerySwiper";
import { Container } from "../../shared/Container";
import { FadeIn } from "../../shared/FadeIn";
import SectionH2Title from "../../shared/SectionH2Title";
import PrimaryButton from "../../shared/PrimaryButton";

export default function GallerySection() {
  return (
    <section className="pb-12 lg:pb-24 bg-light-slate-bg">
      <Container>
        <FadeIn className="text-center">
          <SectionH2Title text="Have a" accentText="Look Around" />
        </FadeIn>
      </Container>
      <GallerySwiper images={mockGalleryImages} />
      <div className="w-full flex items-center justify-center mt-6">
        <PrimaryButton href="/gallery">View More</PrimaryButton>
      </div>
    </section>
  );
}
