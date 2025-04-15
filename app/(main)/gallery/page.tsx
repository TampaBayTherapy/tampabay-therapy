

import MasonryGallery from "@/components/MasonryGallery";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";

import { fetchGalleryImages } from "@/sanity/lib/fetchGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Space Gallery | Child-Centered Play Environment",
  description: "View our welcoming play therapy space designed to help children feel safe and comfortable during sessions.",
  alternates: {
    canonical: "https://www.tampabayplaytherapy.com/gallery"
  },
  openGraph: {
    title: "Our Play Therapy Environment Gallery",
    description: "See photos of our therapeutic play space designed for child-centered interventions.",
    url: "https://www.tampabayplaytherapy.com/gallery"
  }
};


export default async function GalleryPage() {
  const imagesFromSanity = await fetchGalleryImages();
  
  return (
    <section className="pt-42 pb-12 bg-[#fdfdfd]">
      <Container>
        <Breadcrumbs />
        <FadeIn className="text-center mt-12 ">
          <SectionH2Title as="h1" text="Have a" accentText="Look Around" />
        </FadeIn>
        <FadeIn>
          {/* 
            Responsive CSS Grid 
            - 1 column for extra small
            - 2 columns for small (sm:)
            - 3 columns for medium (md:)
            - 4 columns for large (lg:)
          */}
          <MasonryGallery imagesFromSanity={imagesFromSanity}/>
        </FadeIn>
      </Container>
    </section>
  );
}
