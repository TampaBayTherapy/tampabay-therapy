/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import useLazyLoad from "./useLazyLoad";
import "swiper/css/bundle";
import "swiper/css/free-mode";

export function useLazySwiper() {
  const { ref, isInView } = useLazyLoad();
  const [SwiperComponent, setSwiperComponent] = useState<any>(null);
  const [SwiperSlideComponent, setSwiperSlideComponent] = useState<any>(null);
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    if (isInView && !SwiperComponent) {
      import("swiper/react").then((module) => {
        setSwiperComponent(() => module.Swiper);
        setSwiperSlideComponent(() => module.SwiperSlide);
      });

      import("swiper/modules").then((module) => {
        setModules([module.FreeMode]);
      });
    }
  }, [isInView, SwiperComponent]);

  return { ref, SwiperComponent, SwiperSlideComponent, modules };
}