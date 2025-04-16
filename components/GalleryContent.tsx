// import { sanityFetch } from "@/sanity/lib/live";
import { LATEST_IMAGES } from "@/sanity/lib/queries";

import PrimaryButton from "./shared/PrimaryButton";
import { client } from "@/sanity/lib/client";
import dynamic from "next/dynamic";

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

const DynamicGallerySwiper = dynamic(() => import('../components/GallerySwiper'),{
  loading: () => <GallerySkeleton/>
})


export default async function GalleryContent() {
  const images = await client.fetch(LATEST_IMAGES);
console.log(images);
  return (
    <>
      {images && <DynamicGallerySwiper images={images.images}/>}
      <div className="w-full flex items-center justify-center mt-6">
        <PrimaryButton href="/gallery">View More</PrimaryButton>
      </div>
    </>
  );
}