import React, { useEffect, useRef } from 'react';

/**
 * Isolated Scroll Progress Bar.
 * Directly updates DOM via transform/scaleX on scroll,
 * preventing expensive re-renders of the root App component on every frame.
 */
export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!barRef.current) return;
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      const progress = windowHeight > 0 ? Math.min(1, Math.max(0, totalScroll / windowHeight)) : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none origin-left"
      aria-hidden="true"
    >
      <div 
        ref={barRef}
        className="w-full h-full bg-sky-400 origin-left transition-transform duration-75 will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
