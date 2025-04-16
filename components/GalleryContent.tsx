import { sanityFetch } from "@/sanity/lib/live";
import { LATEST_IMAGES } from "@/sanity/lib/queries";
import GallerySwiper from "./GallerySwiper";
import PrimaryButton from "./shared/PrimaryButton";



export default async function GalleryContent() {
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