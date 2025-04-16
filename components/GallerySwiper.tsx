"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
// import { GalleryImage } from "@/constants/mockGalleryData";
import "swiper/css";
import "swiper/css/free-mode";
import { urlFor } from "@/sanity/lib/image";

export type ImageType = {
  _key: string;
  uniqueId: string;
  asset: {
    _id: string;
    url: string;
    metadata: {
      lqip: string;
      dimensions: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  alt: string;
};

interface GallerySwiperProps {
  images: ImageType[];
}
// Height variants (in Tailwind classes)
const heightVariants = [
  "h-[350px]", // Standard height
  "h-[350px]", // Taller height for every second slide
];
const radiusVariants = [
  "rounded-[32px]",
  "rounded-[100px_100px_32px_32px]",
  "rounded-[132px]",
  "rounded-[32px_100px_100px_32px]",
  "rounded-[182px_32px_32px_32px]",
  //   'rounded-tl-[80px] rounded-br-[80px]',
  //   'rounded-tr-[100px] rounded-bl-[32px]'
];

export default function GallerySwiper({ images }: GallerySwiperProps) {
  const [isSwiperReady, setSwiperReady] = useState(false);

  // Cycle through radius variants for each slide
  const getRadiusClass = (index: number) => {
    return radiusVariants[index % radiusVariants.length];
  };

  return (
    <div className="relative">
      <div className="absolute z-10 -top-10 right-1/4 size-[120px] rounded-full p-2 flex items-center justify-center bg-white">
        <div className="size-[100px] relative rounded-full flex items-center justify-center bg-accent-purple-light">
          <Image
            src="/assets/ellipse-left-shape.svg"
            className="absolute left-0"
            alt="ellipsis shape"
            width={12}
            height={44}
          />
          <p className="text-accent-purple-dark font-bold text-xl">Drag</p>
          <Image
            src="/assets/ellipse-right-shape.svg"
            className="absolute right-0"
            alt="ellipsis shape"
            width={12}
            height={44}
          />
        </div>
      </div>
      {/* Hidden preloader to warm up Swiper */}
      <div className="absolute opacity-0 h-0 overflow-hidden">
        <Swiper>
          {images.map((image) => (
            <SwiperSlide key={`preload-${image.uniqueId}`} />
          ))}
        </Swiper>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        onInit={() => setSwiperReady(true)}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4.5 },
        }}
        modules={[FreeMode]}
        className={`mt-12 lg:mt-24 relative transition-opacity duration-300 ${
          isSwiperReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.uniqueId}>
            <Image
              src={urlFor(image.asset).width(430).height(350).quality(80).url()}
              alt={image.alt || "Gallery image"}
              placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={
                image.asset.metadata?.lqip ||
                "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQFBgcI/8QAKBAAAgICAQMCBgMAAAAAAAAAAQIDBAAFEQYSIRMxBxQjMkFRUnGR/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEAf/EABsRAAMAAwEBAAAAAAAAAAAAAAABAhEhMQMS/9oADAMBAAIRAxEAPwDoXZ6ynYqu80SlkQEHj85RELQzl4yQgBJ/XjHtz1RsY9dORUhH0+Ae/wDOUf4bdWbHYR26mziriVXJDkcHtye9tFEaTC91JasWGet8w0Y8chTwThmmU5a6wALFFwP4gcYYSuWsmOWnwzzfUStmRNhakhqOeVZX5P8AmRM3T8lfYmLVXKzRTRHgk+QT7+c1GbS12aQ2EScN5AcfblfvaWGlBJPUPpdh72UDnuH6xVfU5b4MhqudHtXUejrq1d+WeNAGIPucMU0e1S7S9RkcEOV4/rDCVS1pE79Zz0//2Q=="
              }
              className={`relative object-cover cursor-grab overflow-hidden ${
                index % 2 === 0 ? heightVariants[0] : heightVariants[1] // Alternating heights
              }
                 ${getRadiusClass(index)}`}
              width={430}
              height={350}
              // priority={image.asset._id === images[0].asset._id} // Only prioritize first image
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Skeleton loader */}
      {!isSwiperReady && (
        <div className="mt-12 lg:mt-24 flex gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="aspect-square w-full rounded-lg  animate-pulse"
              style={{
                width: `${100 / 4.5}%`,
                minWidth: "200px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
