import { Suspense } from "react";

import { Container } from "../../shared/Container";
import { FadeIn } from "../../shared/FadeIn";
import SectionH2Title from "../../shared/SectionH2Title";

import {  SanityLive } from "@/sanity/lib/live";

import GalleryContent from "@/components/GalleryContent";


// Move fetch to a separate async component


export default function GallerySection() {
  return (
    <>
      <section className="pb-12 lg:pb-24 bg-light-slate-bg">
        <Container>
          <FadeIn className="text-center">
            <SectionH2Title text="Have a" accentText="Look Around" />
          </FadeIn>
        </Container>
        <Suspense fallback={<GallerySkeleton />}>
          <GalleryContent />
        </Suspense>

        
      </section>
      <SanityLive />
    </>
  );
}

// Simple skeleton loader
function GallerySkeleton() {
  return (
    <div className="mt-12 lg:mt-24 flex gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-[350px] w-full rounded-xl bg-gray-100 animate-pulse" />
      ))}
    </div>
  );
}