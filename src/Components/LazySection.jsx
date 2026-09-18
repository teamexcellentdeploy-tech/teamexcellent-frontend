import React, { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, fallbackHeight = "200px", rootMargin = "300px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : fallbackHeight }}>
      {isVisible ? children : null}
    </div>
  );
}
