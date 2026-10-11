import React, { useRef, useState, useCallback } from 'react';
import { MOTION_TOKENS } from '../../motion/motionTokens';
import { useReducedMotion, useIsMobile } from '../../motion/useReducedMotion';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (defaults to subtle 6deg)
  depthZ?: number; // hover Z translation in pixels (defaults to 16px)
  glareEffect?: boolean; // dynamic light sheen
  onClick?: () => void;
  id?: string;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  maxTilt = MOTION_TOKENS.rotation.cardMaxDeg,
  depthZ = MOTION_TOKENS.depth.pop,
  glareEffect = true,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  const [glareStyle, setGlareStyle] = useState<{ opacity: number; x: number; y: number }>({ opacity: 0, x: 50, y: 50 });
  const [shadowStyle, setShadowStyle] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReduced || isMobile || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position from center (-0.5 to 0.5)
      const mouseX = (e.clientX - rect.left) / width - 0.5;
      const mouseY = (e.clientY - rect.top) / height - 0.5;

      // Subtle rotation: mouse up -> rotateX positive, mouse right -> rotateY positive
      const rotateX = -mouseY * maxTilt * 2;
      const rotateY = mouseX * maxTilt * 2;

      // Dynamic shadow based on tilt angle
      const shadowX = -mouseX * 24;
      const shadowY = Math.max(8, -mouseY * 28 + 12);
      const shadowBlur = 32;
      const shadowAlpha = 0.08;

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${depthZ}px)`
      );

      setShadowStyle(
        `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px ${shadowBlur}px rgba(15, 23, 42, ${shadowAlpha}), 0 4px 12px rgba(14, 165, 233, 0.06)`
      );

      if (glareEffect) {
        const glareX = ((e.clientX - rect.left) / width) * 100;
        const glareY = ((e.clientY - rect.top) / height) * 100;
        setGlareStyle({ opacity: 0.18, x: glareX, y: glareY });
      }
    },
    [prefersReduced, isMobile, maxTilt, depthZ, glareEffect]
  );

  const handleMouseEnter = useCallback(() => {
    if (prefersReduced || isMobile) return;
    setIsHovered(true);
  }, [prefersReduced, isMobile]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Smooth reset to neutral position
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setShadowStyle('');
    setGlareStyle(prev => ({ ...prev, opacity: 0 }));
  }, []);

  if (prefersReduced || isMobile) {
    return (
      <div id={id} onClick={onClick} className={`relative transition-all duration-300 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        boxShadow: shadowStyle || undefined,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.08s ease-out, box-shadow 0.15s ease-out'
          : `transform 0.5s ${MOTION_TOKENS.easing.emergent}, box-shadow 0.5s ${MOTION_TOKENS.easing.emergent}`,
        willChange: 'transform, box-shadow',
      }}
      className={`relative group ${className}`}
    >
      {/* Dynamic Specular Sheen Layer */}
      {glareEffect && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 65%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Child Content with 3D Space */}
      <div className="w-full h-full [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
};
