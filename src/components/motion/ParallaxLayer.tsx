import React from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  depthZ?: number; // translateZ offset in pixels (e.g. 15, 25, 40)
}

/**
 * ParallaxLayer
 * Places child content at an elevated Z-depth inside a parent with [transform-style:preserve-3d].
 * Creates tactile separation between background card, text, and floating badges.
 */
export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  className = '',
  depthZ = 20,
}) => {
  return (
    <div
      style={{
        transform: `translateZ(${depthZ}px)`,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};
