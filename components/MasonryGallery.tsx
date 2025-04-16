"use client";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


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

export default function MasonryGallery({
  imagesFromSanity,
}: {
  imagesFromSanity: ImageType[];
}) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="columns-1  sm:columns-2 lg:columns-3 gap-4 mt-12 ">
        {imagesFromSanity.map((item: ImageType, index) => (
          <div
            key={item.uniqueId}
            className="mb-4 break-inside-avoid"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          >
            <Image
              src={urlFor(item.asset)
                .width(1000) // Constrain width only
                .quality(80)
                .url()}
              alt={item.alt}
              priority={item.uniqueId === imagesFromSanity[0].uniqueId}
              width={item.asset.metadata.dimensions.width}
              height={item.asset.metadata.dimensions.height}
              placeholder={item.asset.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={
                item.asset.metadata?.lqip ||
                "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQFBgcI/8QAKBAAAgICAQMCBgMAAAAAAAAAAQIDBAAFEQYSIRMxBxQjMkFRUnGR/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEAf/EABsRAAMAAwEBAAAAAAAAAAAAAAABAhEhMQMS/9oADAMBAAIRAxEAPwDoXZ6ynYqu80SlkQEHj85RELQzl4yQgBJ/XjHtz1RsY9dORUhH0+Ae/wDOUf4bdWbHYR26mziriVXJDkcHtye9tFEaTC91JasWGet8w0Y8chTwThmmU5a6wALFFwP4gcYYSuWsmOWnwzzfUStmRNhakhqOeVZX5P8AmRM3T8lfYmLVXKzRTRHgk+QT7+c1GbS12aQ2EScN5AcfblfvaWGlBJPUPpdh72UDnuH6xVfU5b4MhqudHtXUejrq1d+WeNAGIPucMU0e1S7S9RkcEOV4/rDCVS1pE79Zz0//2Q=="
              }
              className="w-full rounded-lg cursor-pointer"
              style={{
                height: "auto", // Critical for masonry
                aspectRatio: item.asset.metadata.dimensions.aspectRatio,
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={imagesFromSanity.map((item) => ({
          src: urlFor(item.asset).url(),
          alt: item.alt,
          width: item.asset.metadata.dimensions.width,
          height: item.asset.metadata.dimensions.height,
        }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
