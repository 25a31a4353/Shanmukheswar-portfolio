/**
 * Motion Tokens & Mathematical Constants
 * Curated for Apple-level smoothness, scientific precision, and 60fps performance.
 */

export const MOTION_TOKENS = {
  // Perspective standards
  perspective: {
    hero: '1400px',
    desktop: '1200px',
    tunnel: '1000px',
    subtle: '800px',
    mobile: '600px',
  },

  // Controlled tilt limits (keeps content razor-sharp and easily readable)
  rotation: {
    cardMaxDeg: 6.5,       // subtle tilt on hover
    cardMobileMaxDeg: 0,   // disabled on touch devices
    sectionExitDeg: 2.2,   // very subtle perspective exit angle
    sectionTunnelDeg: 3.0, // depth tunnel rotation
  },

  // Z-depth steps (in pixels)
  depth: {
    recessed: -80,
    back: -40,
    base: 0,
    pop: 18,
    float: 32,
    elevated: 48,
    badgeParallax: 24,
    iconParallax: 36,
  },

  // Standard easings
  easing: {
    // Fast initial movement, smooth deceleration, soft settling
    emergent: 'cubic-bezier(0.16, 1, 0.3, 1)',
    decel: 'cubic-bezier(0.22, 1, 0.36, 1)',
    cinematic: 'cubic-bezier(0.25, 1, 0.5, 1)',
    linear: 'linear',
  },

  // Durations (in ms)
  duration: {
    fast: 180,
    normal: 320,
    smooth: 600,
    cinematic: 850,
    slow: 1100,
  },

  // Stagger delays (in ms)
  stagger: {
    micro: 40,
    card: 80,
    section: 140,
  },
} as const;

export type MotionTokens = typeof MOTION_TOKENS;
