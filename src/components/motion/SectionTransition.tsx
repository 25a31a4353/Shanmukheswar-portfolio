import React, { useRef } from 'react';
import { useScrollDepth } from '../../motion/useScrollDepth';
import { useReducedMotion, useIsMobile } from '../../motion/useReducedMotion';
import { MOTION_TOKENS } from '../../motion/motionTokens';

export type TransitionType =
  | 'hero-retreat'
  | 'perspective-reveal'
  | 'depth-tunnel'
  | 'divergent-depth'
  | 'timeline-construct'
  | 'quantum-converge'
  | 'quantum-exit'
  | 'calm-destination';

interface SectionTransitionProps {
  children: React.ReactNode;
  type: TransitionType;
  className?: string;
  id?: string;
  perspective?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  type,
  className = '',
  id,
  perspective = MOTION_TOKENS.perspective.desktop,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, metrics] = useScrollDepth(containerRef);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  // If reduced motion is requested, render without 3D transforms
  if (prefersReduced) {
    return (
      <div id={id} ref={containerRef} className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  // Derive subtle dynamic transforms based on transition type and scroll progress
  let transform = 'translateZ(0px)';
  let opacity = 1;

  const { progress, centerOffset, isInView } = metrics;

  if (isInView) {
    switch (type) {
      case 'hero-retreat': {
        // Hero: as user scrolls down, progress goes from 0.5 towards 1.0 (retreating)
        // Only active when scrolling past hero
        if (centerOffset < 0) {
          const retreatFactor = Math.min(1, Math.abs(centerOffset));
          const scale = 1 - retreatFactor * 0.05; // 1 -> 0.95
          const translateZ = -retreatFactor * (isMobile ? 25 : 75); // 0 -> -75px
          const rotateX = retreatFactor * (isMobile ? 0.6 : 1.6); // 0 -> 1.6deg
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px) rotateX(${rotateX.toFixed(2)}deg)`;
          opacity = Math.max(0.75, 1 - retreatFactor * 0.25);
        }
        break;
      }

      case 'perspective-reveal': {
        // About section: enters from depth, exits with subtle Y-axis rotation into projects
        if (centerOffset < 0) {
          // Exiting top towards Projects
          const exitFactor = Math.min(1, Math.abs(centerOffset));
          const rotateY = -exitFactor * (isMobile ? 0.8 : 2.4);
          const scale = 1 - exitFactor * 0.03;
          const translateZ = -exitFactor * (isMobile ? 15 : 45);
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) rotateY(${rotateY.toFixed(2)}deg) translateZ(${translateZ.toFixed(1)}px)`;
        } else if (centerOffset > 0) {
          // Entering bottom from Hero
          const enterFactor = Math.min(1, centerOffset);
          const scale = 0.98 + (1 - enterFactor) * 0.02;
          const translateZ = -(enterFactor * (isMobile ? 20 : 50));
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
        }
        break;
      }

      case 'depth-tunnel': {
        // Projects to Skills: tunnel depth feeling
        if (centerOffset < 0) {
          const exitFactor = Math.min(1, Math.abs(centerOffset));
          const scale = 1 - exitFactor * 0.04;
          const translateZ = -exitFactor * (isMobile ? 20 : 65);
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
          opacity = Math.max(0.8, 1 - exitFactor * 0.2);
        }
        break;
      }

      case 'divergent-depth': {
        // Skills to Achievements: subtle divergence & depth shift
        if (centerOffset < 0) {
          const exitFactor = Math.min(1, Math.abs(centerOffset));
          const scale = 1 - exitFactor * 0.03;
          const translateZ = -exitFactor * (isMobile ? 18 : 50);
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
        }
        break;
      }

      case 'timeline-construct': {
        // Achievements: entering from depth
        if (centerOffset > 0) {
          const enterFactor = Math.min(1, centerOffset);
          const scale = 0.985 + (1 - enterFactor) * 0.015;
          const translateZ = -(enterFactor * (isMobile ? 15 : 40));
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
        }
        break;
      }

      case 'quantum-exit': {
        // AI x Quantum exit into Currently Building: central object scales down, calmer background
        if (centerOffset < 0) {
          const exitFactor = Math.min(1, Math.abs(centerOffset));
          const scale = 1 - exitFactor * 0.06;
          const translateZ = -exitFactor * (isMobile ? 20 : 60);
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
          opacity = Math.max(0.85, 1 - exitFactor * 0.15);
        }
        break;
      }

      case 'calm-destination': {
        // Contact: quiet destination settling
        if (centerOffset > 0) {
          const enterFactor = Math.min(1, centerOffset);
          const scale = 0.99 + (1 - enterFactor) * 0.01;
          const translateZ = -(enterFactor * 25);
          transform = `perspective(${perspective}) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
        }
        break;
      }

      default:
        break;
    }
  }

  return (
    <div
      id={id}
      ref={containerRef}
      style={{
        transform,
        opacity,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.12s ease-out, opacity 0.2s ease-out',
        willChange: 'transform, opacity',
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};
