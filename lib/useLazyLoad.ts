import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useLazyLoad(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: "200px" // Load when 200px away from viewport
  });

  useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true);
    }
    
  }, [inView,isInView]);

  return { ref, isInView };
}