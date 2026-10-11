import React, { useEffect, useRef, useState } from 'react';
import { MOTION_TOKENS } from '../../motion/motionTokens';
import { useReducedMotion } from '../../motion/useReducedMotion';

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms delay
  depth?: 'near' | 'medium' | 'deep'; // depth layer
  direction?: 'up' | 'scale' | 'depth';
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = '',
  delay = 0,
  depth = 'medium',
  direction = 'depth',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  const initialDepthZ = depth === 'near' ? -20 : depth === 'medium' ? -40 : -65;
  const initialRotateX = depth === 'deep' ? 3 : 1.5;

  const style: React.CSSProperties = prefersReduced
    ? {}
    : {
        transitionProperty: 'transform, opacity, filter',
        transitionDuration: `${MOTION_TOKENS.duration.smooth}ms`,
        transitionTimingFunction: MOTION_TOKENS.easing.emergent,
        transitionDelay: `${delay}ms`,
        transform: isVisible
          ? 'perspective(1200px) translateZ(0px) rotateX(0deg) scale(1)'
          : direction === 'depth'
          ? `perspective(1200px) translateZ(${initialDepthZ}px) rotateX(${initialRotateX}deg) scale(0.97)`
          : 'perspective(1200px) translateY(18px) scale(0.98)',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity, filter',
      };

  return (
    <div ref={cardRef} style={style} className={`relative ${className}`}>
      {children}
    </div>
  );
};
