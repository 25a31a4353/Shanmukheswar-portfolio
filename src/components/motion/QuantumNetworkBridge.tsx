import React, { useEffect, useRef } from 'react';
import { useScrollDepth } from '../../motion/useScrollDepth';
import { useReducedMotion } from '../../motion/useReducedMotion';
import { Atom, Sparkles, Network } from 'lucide-react';

interface QuantumNetworkBridgeProps {
  className?: string;
}

export const QuantumNetworkBridge: React.FC<QuantumNetworkBridgeProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, metrics] = useScrollDepth(containerRef);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initial node positions (flanked like timeline milestones on left and right)
    const nodeCount = 14;
    const baseNodes = Array.from({ length: nodeCount }).map((_, i) => {
      const isLeft = i % 2 === 0;
      const xRatio = isLeft ? 0.18 + (i % 3) * 0.08 : 0.82 - (i % 3) * 0.08;
      const yRatio = 0.12 + (i / nodeCount) * 0.76;
      return {
        initialX: xRatio,
        initialY: yRatio,
        currentX: xRatio,
        currentY: yRatio,
        size: 2.5 + (i % 3 === 0 ? 1.5 : 0),
        pulse: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const centerX = width / 2;
      const centerY = height / 2;

      // Scroll convergence factor: 0 when just entering, 1 when centered
      // metrics.progress goes from 0 to 1
      const progress = Math.min(1, Math.max(0, metrics.progress));
      const convergence = Math.sin(progress * Math.PI); // peaks at center

      // Calculate current positions of nodes: moving toward center based on convergence
      const currentNodes = baseNodes.map(node => {
        const targetX = centerX + Math.cos(node.pulse + time) * (30 + convergence * 40);
        const targetY = centerY + Math.sin(node.pulse * 0.8 + time) * (25 + convergence * 30);
        const originalX = node.initialX * width;
        const originalY = node.initialY * height;

        const x = originalX + (targetX - originalX) * convergence;
        const y = originalY + (targetY - originalY) * convergence;

        return { ...node, x, y };
      });

      // Draw subtle connecting lines between near nodes
      const maxDist = 95 + convergence * 60;
      for (let i = 0; i < currentNodes.length; i++) {
        for (let j = i + 1; j < currentNodes.length; j++) {
          const n1 = currentNodes[i];
          const n2 = currentNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (0.15 + convergence * 0.35);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw central convergence core when convergence is high
      if (convergence > 0.2) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, 14 * convergence, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.08)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX, centerY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
        ctx.shadowColor = isDark ? '#38bdf8' : '#0284c7';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // Draw nodes
      currentNodes.forEach((node, i) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : 'rgba(255, 255, 255, 0.85)';
        } else {
          ctx.fillStyle = i % 2 === 0 ? '#0284c7' : '#334155';
        }
        ctx.fill();
      });

      if (metrics.isInView) {
        animId = requestAnimationFrame(render);
      }
    };

    if (metrics.isInView) {
      animId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [metrics.isInView, metrics.progress, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className={`relative py-12 sm:py-16 overflow-hidden flex flex-col items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* Precision Network Convergence Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Engineering Transition Badge */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#0c0e15] border border-slate-200/90 dark:border-white/[0.08] shadow-xs text-xs font-mono">
          <Network className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 animate-pulse" />
          <span className="text-slate-500 dark:text-slate-400">ACHIEVEMENTS</span>
          <span className="text-slate-300 dark:text-slate-600">→</span>
          <span className="text-slate-500 dark:text-slate-400">EXPERIENCE</span>
          <span className="text-slate-300 dark:text-slate-600">→</span>
          <span className="text-sky-700 dark:text-sky-400 font-semibold">AI × QUANTUM</span>
        </div>

        <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 max-w-md">
          Converging algorithmic problem solving and cloud engineering into the quantum frontier.
        </p>
      </div>
    </div>
  );
};
