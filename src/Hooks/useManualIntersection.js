// useManualIntersection.js
import { useState, useEffect, useRef } from "react";

export const useManualIntersection = (offset = 0) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const inView =
        rect.top <= (window.innerHeight - offset) &&  
        rect.bottom >= 0 + offset; 

      setIsIntersecting(inView);
    };

    checkVisibility();

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return [ref, isIntersecting];
};
