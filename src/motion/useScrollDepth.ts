import { useState, useEffect, useRef, RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface ScrollMetrics {
  // 0 when top enters bottom of screen, 1 when bottom leaves top of screen
  progress: number;
  // Normalized center progress: 0 when element is centered in viewport, -1 when above, +1 when below
  centerOffset: number;
  // Whether the element is currently visible in viewport
  isInView: boolean;
}

/**
 * High-performance scroll depth hook.
 * Uses requestAnimationFrame throttling and IntersectionObserver to track
 * element position only when visible, avoiding continuous layout recalculations.
 */
export function useScrollDepth<T extends HTMLElement = HTMLDivElement>(
  targetRef?: RefObject<T>
): [RefObject<T>, ScrollMetrics] {
  const internalRef = useRef<T>(null);
  const ref = targetRef || internalRef;
  const prefersReduced = useReducedMotion();

  const [metrics, setMetrics] = useState<ScrollMetrics>({
    progress: 0,
    centerOffset: 0,
    isInView: false,
  });

  const isVisibleRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      setMetrics({ progress: 0.5, centerOffset: 0, isInView: true });
      return;
    }

    const calculateMetrics = () => {
      if (!el || !isVisibleRef.current) {
        tickingRef.current = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalDistance = windowHeight + rect.height;
      const currentPosition = windowHeight - rect.top;

      const rawProgress = totalDistance > 0 ? currentPosition / totalDistance : 0;
      const progress = Math.min(1, Math.max(0, rawProgress));

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const centerOffset = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / (windowHeight / 2)));

      setMetrics({
        progress,
        centerOffset,
        isInView: true,
      });

      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!isVisibleRef.current) return;
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(calculateMetrics);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          handleScroll();
        } else {
          setMetrics(prev => (prev.isInView ? { ...prev, isInView: false } : prev));
        }
      },
      {
        rootMargin: '120px 0px 120px 0px',
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    observer.observe(el);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref, prefersReduced]);

  return [ref, metrics];
}
