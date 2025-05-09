// src/hooks/useInView.ts
import { useEffect } from 'react';

export function useInView(
  ref: React.RefObject<Element>,
  onEnter: () => void,
  options: IntersectionObserverInit = { threshold: 0.5 }
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onEnter();
          obs.unobserve(entry.target); // only fire once
        }
      });
    }, options);
    obs.observe(el);
    return () => { obs.disconnect(); };
  }, [ref, onEnter, JSON.stringify(options)]);
}
