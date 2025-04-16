"use client";
import React from "react";
import Image from "next/image";

import { useLazySwiper } from "@/lib/useLazySwiper";
import { GalleryImage } from "@/constants/mockGalleryData";



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
];

export default function GallerySwiper({ images }: {images: GalleryImage[]}) {

  const { ref, SwiperComponent, SwiperSlideComponent, modules } = useLazySwiper();

  // Cycle through radius variants for each slide
  const getRadiusClass = (index: number) => {
    return radiusVariants[index % radiusVariants.length];
  };

  return (
    <div className="relative" ref={ref}>
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
        {SwiperComponent && (
          <SwiperComponent>
            {images.map((image) => (
              <SwiperSlideComponent key={`preload-${image._id}`} />
            ))}
          </SwiperComponent>
        )}
      </div>

      {/* Main Swiper Component */}
      {SwiperComponent ? (
        <SwiperComponent
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          
          breakpoints={{
            320: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          modules={modules}
          className={`mt-12 lg:mt-24 relative transition-opacity duration-300 `}
        >
          {images.map((image, index) => (
            <SwiperSlideComponent key={image._id}>
              <Image
                src={image.asset.url}
                alt={image.asset.alt || "Gallery image"}
               
                className={`relative object-cover  cursor-grab overflow-hidden ${
                  index % 2 === 0 ? heightVariants[0] : heightVariants[1]
                } ${getRadiusClass(index)}`}
                width={430}
                height={350}
              />
            </SwiperSlideComponent>
          ))}
        </SwiperComponent>
      ) : (
        // Skeleton loader
        <div className="mt-12 lg:mt-24 flex gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="aspect-square w-full rounded-lg animate-pulse"
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