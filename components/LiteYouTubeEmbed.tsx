"use client";
import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "./shared/FadeIn";

export default function YouTubeEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <FadeIn className="w-full relative mt-12 mx-auto aspect-video max-w-[900px] p-3 bg-accent-purple-dark rounded-[32px]">
      {!loaded && (
        <div className="w-full h-full relative rounded-[32px] bg-gray-200 flex items-center justify-center">
          <Image
            src="https://img.youtube.com/vi/reJpo-GaopM/maxresdefault.jpg"
            alt="Play Therapy YouTube Video Thumbnail"
            fill
            className="w-full h-full absolute inset-0 object-cover rounded-[32px]"
          />
          <div onClick={() => setLoaded(true)} className="absolute inset-0 bg-transparent z-10 rounded-[32px] cursor-pointer"/>
            <button
              onClick={() => setLoaded(true)}
              className="flex group relative z-20 cursor-pointer self-center items-center sm:self-auto gap-2 text-slate-800 font-semibold"
            >
              <span className="video-play-button">
                <span></span>
              </span>
            </button>
          
        </div>
      )}
      {loaded && (
        <iframe
          className="w-full h-full rounded-[32px]"
          src="https://www.youtube.com/embed/reJpo-GaopM?autoplay=1&rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
      {/* Your decorative images here */}
    </FadeIn>
  );
}
