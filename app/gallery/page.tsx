import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import SectionH2Title from "@/components/shared/SectionH2Title";
import { mockGalleryImages } from "@/constants/mockGalleryData";
import Image from "next/image";

export default function GalleryPage() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {mockGalleryImages.map((item) => (
              <div key={item._id} className="overflow-hidden rounded-lg">
                <Image
                  src={item.asset.url}
                  alt={item.asset.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
