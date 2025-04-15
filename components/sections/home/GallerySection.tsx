// import { mockGalleryImages } from "@/constants/mockGalleryData";
import GallerySwiper from "../../GallerySwiper";
import { Container } from "../../shared/Container";
import { FadeIn } from "../../shared/FadeIn";
import SectionH2Title from "../../shared/SectionH2Title";
import PrimaryButton from "../../shared/PrimaryButton";


import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { LATEST_IMAGES } from "@/sanity/lib/queries";
import { Suspense } from "react";

async function GalleryContent() {
  const { data: { images } } = await sanityFetch({ query: LATEST_IMAGES });
  return (
    <>
      <GallerySwiper images={images} />
      <div className="w-full flex items-center justify-center mt-6">
        <PrimaryButton href="/gallery">View More</PrimaryButton>
      </div>
    </>
  );
}


export default async function GallerySection() {
  
  return (
    <>
    <section className="pb-12 lg:pb-24 bg-light-slate-bg">
      <Container>
        <FadeIn className="text-center">
          <SectionH2Title text="Have a" accentText="Look Around" />
        </FadeIn>
      </Container>
      <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryContent />
      </Suspense>
    </section>
    <SanityLive/>
    </>
  );
}
