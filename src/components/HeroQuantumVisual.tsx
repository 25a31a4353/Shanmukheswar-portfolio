import React, { useEffect, useRef, useState } from 'react';
import { Activity } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  orbitRadius: number;
  angle: number;
  speed: number;
  layer: number;
}

export const HeroQuantumVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [telemetry, setTelemetry] = useState({
    coherence: '99.8%',
    state: '|ψ⟩ = (|00⟩ + |11⟩)/√2',
    gates: '4 Qubits Active'
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize mathematically distributed particles
    const particleCount = 24;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const layer = (i % 3) + 1;
      const orbitRadius = 45 + layer * 42 + ((i % 4) * 6 - 9);
      const angle = (i / particleCount) * Math.PI * 2;
      const speed = (0.006 / layer) * (i % 2 === 0 ? 1 : -1);
      const radius = 2 + (i % 2 === 0 ? 1 : 0);

      particles.push({
        x: 0,
        y: 0,
        radius,
        color: '', // evaluated dynamically in render based on theme
        alpha: 0.45 + (i % 3 === 0 ? 0.35 : 0.2),
        orbitRadius,
        angle,
        speed,
        layer
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let isIntersecting = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      if (!isIntersecting) return;
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle orbital rings (Bloch sphere geometry)
      const ringRadii = [60, 105, 150];
      ringRadii.forEach((r, idx) => {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          r,
          r * (0.68 + Math.sin(time * 0.4 + idx) * 0.04),
          time * (0.04 / (idx + 1)),
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = idx === 1 
          ? (isDark ? 'rgba(56, 189, 248, 0.2)' : 'rgba(2, 132, 199, 0.25)')
          : (isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.08)');
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.restore();
      });

      // Subtle central core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
      ctx.shadowColor = isDark ? '#38bdf8' : '#0284c7';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Update & Draw Particles
      particles.forEach((p, i) => {
        p.angle += p.speed;
        const currentRadius = p.orbitRadius + Math.sin(time * 1.5 + p.layer) * 4;
        
        const px = centerX + Math.cos(p.angle) * currentRadius;
        const py = centerY + Math.sin(p.angle) * (currentRadius * 0.72);

        // Subtle proximity displacement
        const dx = mouseX - px;
        const dy = mouseY - py;
        const dist = Math.hypot(dx, dy);
        let finalX = px;
        let finalY = py;

        if (dist < 90 && dist > 0) {
          const force = (90 - dist) / 90;
          finalX -= (dx / dist) * force * 18;
          finalY -= (dy / dist) * force * 18;
        }

        p.x = finalX;
        p.y = finalY;

        ctx.beginPath();
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = i % 3 === 0 ? '#38bdf8' : 'rgba(255, 255, 255, 0.85)';
        } else {
          ctx.fillStyle = i % 3 === 0 ? '#0284c7' : '#475569';
        }
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw subtle synaptic connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 75) {
            const opacity = (1 - dist / 75) * (isDark ? 0.25 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark 
              ? `rgba(56, 189, 248, ${opacity})` 
              : `rgba(2, 132, 199, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // IntersectionObserver to pause render when hero is out of view
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    }, { threshold: 0.05 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    render();

    const interval = setInterval(() => {
      const states = [
        '|ψ⟩ = (|00⟩ + |11⟩)/√2',
        '|ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩',
        '⟨H⟩ = -1.137 Hartree',
        'QNN Loss: 0.042 (Converged)'
      ];
      setTelemetry(prev => ({
        ...prev,
        state: states[Math.floor(Math.random() * states.length)],
        coherence: (99.4 + Math.random() * 0.5).toFixed(1) + '%'
      }));
    }, 5000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center select-none"
    >
      {/* Precision Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair z-10"
        role="img"
        aria-label="Interactive Quantum AI Orbital Space Visualization"
      />

      {/* Minimal Engineering Telemetry Strip */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-xs z-20 px-3 py-1.5 sm:py-2 rounded-lg bg-white/95 dark:bg-[#0c0e15] border border-slate-200/90 dark:border-white/[0.08] shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-black/80 backdrop-blur-md flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Activity className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400">Coherence:</span>
          <span className="text-slate-900 dark:text-slate-200 font-semibold">{telemetry.coherence}</span>
        </div>
        <div className="text-slate-300 dark:text-slate-600">/</div>
        <div className="text-sky-700 dark:text-sky-300 font-medium truncate max-w-[120px] sm:max-w-[150px]">
          {telemetry.state}
        </div>
      </div>
    </div>
  );
};
