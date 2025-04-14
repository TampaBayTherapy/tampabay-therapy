"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
// import { GalleryImage } from "@/constants/mockGalleryData";
import "swiper/css";
import "swiper/css/free-mode";

type ImageType = {
  _key: string;
  uniqueId: string;
  asset: {
    _id: string;
    url: string;
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
            <div
              className={`relative cursor-grab overflow-hidden ${
                index % 2 === 0 ? heightVariants[0] : heightVariants[1] // Alternating heights
              }
               ${getRadiusClass(index)}`}
            >
              <Image
                src={image.asset.url}
                alt={image.alt || "Gallery image"}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) calc(22.21vw - 23px), (min-width: 1040px) calc(8.64vw + 143px), (min-width: 780px) calc(40vw - 18px), (min-width: 460px) 62vw, (min-width: 400px) calc(32.5vw + 127px), calc(13.75vw + 191px)"
                priority={image.asset._id === images[0].asset._id} // Only prioritize first image
              />
            </div>
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
