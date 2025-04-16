"use client"

import { useLazySwiper } from "@/lib/useLazySwiper";

export default function TestSwiper() {
    const { ref, SwiperComponent, SwiperSlideComponent, modules, cssLoaded } = useLazySwiper();
    console.log(ref,SwiperComponent,SwiperSlideComponent,modules,cssLoaded);
    
    return (
      <div ref={ref}>
        {SwiperComponent && (
          <SwiperComponent modules={modules} freeMode={true}>
            <SwiperSlideComponent>Slide 1</SwiperSlideComponent>
            <SwiperSlideComponent>Slide 2</SwiperSlideComponent>
          </SwiperComponent>
        )}
      </div>
    );
  }