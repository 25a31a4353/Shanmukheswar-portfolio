import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from '../motion/useReducedMotion';
import { Activity, ShieldCheck, Cpu } from 'lucide-react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  radius: number;
  type: 'qubit' | 'neural' | 'gate';
  label?: string;
  phase: number;
}

export const QuantumVisual3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  const [activeState, setActiveState] = useState({
    stateVector: '|ψ⟩ = (|00⟩ + |11⟩)/√2',
    entanglement: 'Bell State (Φ⁺)',
    fidelity: '99.85%',
  });

  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mousePosRef.current.targetX = x * 0.45; // camera rotY
    mousePosRef.current.targetY = y * 0.35; // camera rotX
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePosRef.current.targetX = 0;
    mousePosRef.current.targetY = 0;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let time = 0;
    let isIntersecting = true;

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

    // Generate 3D nodes (Qubits, Neural nodes, and Logic Gates)
    const nodes: Node3D[] = [];
    const orbitRadii = [80, 130, 175];

    // Qubit orbital nodes
    orbitRadii.forEach((r, orbitIdx) => {
      const count = 4 + orbitIdx * 2;
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        const phi = (orbitIdx - 1) * 0.42; // tilt
        nodes.push({
          x: r * Math.cos(theta),
          y: r * Math.sin(theta) * Math.cos(phi) + Math.sin(phi) * 20,
          z: r * Math.sin(theta) * Math.sin(phi),
          radius: orbitIdx === 0 ? 3.5 : 2.5,
          type: orbitIdx === 0 ? 'qubit' : orbitIdx === 1 ? 'neural' : 'gate',
          label: i === 0 && orbitIdx === 0 ? '|0⟩' : i === 2 && orbitIdx === 0 ? '|1⟩' : undefined,
          phase: i + orbitIdx,
        });
      }
    });

    let currentCamX = 0;
    let currentCamY = 0;

    const render = () => {
      if (!isIntersecting) return;
      time += 0.015;

      // Soft lerp camera towards target mouse angles
      currentCamX += (mousePosRef.current.targetY - currentCamX) * 0.05;
      currentCamY += (mousePosRef.current.targetX - currentCamY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 340;
      const cameraZ = 320;

      // Gentle floating oscillation
      const floatY = Math.sin(time * 1.2) * 5;

      // Combined 3D rotation angles
      const rotY = time * 0.25 + currentCamY;
      const rotX = 0.22 + currentCamX;
      const rotZ = Math.sin(time * 0.15) * 0.08;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project a 3D point (x, y, z) into 2D canvas space
      const project = (x: number, y: number, z: number) => {
        // Rotate around Y
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // Rotate around X
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // Apply gentle floating offset
        y2 += floatY;

        const depth = z2 + cameraZ;
        const scale = depth > 10 ? fov / depth : 1;
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        return { x: projX, y: projY, z: z2, scale };
      };

      // Draw Bloch Sphere longitude and latitude orbital circles in 3D
      const sphereRadius = 55;
      const numRings = 3;

      for (let r = 0; r < numRings; r++) {
        ctx.beginPath();
        const steps = 36;
        let first = true;

        for (let s = 0; s <= steps; s++) {
          const angle = (s / steps) * Math.PI * 2;
          let px = 0;
          let py = 0;
          let pz = 0;

          if (r === 0) {
            // Equator
            px = sphereRadius * Math.cos(angle);
            pz = sphereRadius * Math.sin(angle);
          } else if (r === 1) {
            // Meridian
            py = sphereRadius * Math.cos(angle);
            pz = sphereRadius * Math.sin(angle);
          } else {
            // Tilted orbit
            px = sphereRadius * Math.cos(angle);
            py = sphereRadius * Math.sin(angle) * 0.7;
            pz = sphereRadius * Math.sin(angle) * 0.7;
          }

          const projected = project(px, py, pz);
          if (first) {
            ctx.moveTo(projected.x, projected.y);
            first = false;
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }

        ctx.strokeStyle = isDark
          ? r === 0 ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.08)'
          : r === 0 ? 'rgba(2, 132, 199, 0.4)' : 'rgba(15, 23, 42, 0.1)';
        ctx.lineWidth = r === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // Draw central glowing core
      const coreProj = project(0, 0, 0);
      const gradient = ctx.createRadialGradient(
        coreProj.x,
        coreProj.y,
        1,
        coreProj.x,
        coreProj.y,
        22 * coreProj.scale
      );
      gradient.addColorStop(0, isDark ? '#38bdf8' : '#0284c7');
      gradient.addColorStop(0.35, isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.3)');
      gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');

      ctx.beginPath();
      ctx.arc(coreProj.x, coreProj.y, 22 * coreProj.scale, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Project all nodes & sort by Z for proper depth ordering
      const projectedNodes = nodes.map(node => {
        // Orbit speed relative to distance
        const dynamicPhase = node.phase + time * (node.type === 'qubit' ? 0.4 : 0.25);
        const curX = node.x * Math.cos(dynamicPhase * 0.05) - node.z * Math.sin(dynamicPhase * 0.05);
        const curZ = node.z * Math.cos(dynamicPhase * 0.05) + node.x * Math.sin(dynamicPhase * 0.05);
        const proj = project(curX, node.y, curZ);
        return {
          ...node,
          projX: proj.x,
          projY: proj.y,
          projZ: proj.z,
          scale: proj.scale,
        };
      });

      projectedNodes.sort((a, b) => a.projZ - b.projZ);

      // Draw quantum circuit connections between nearby nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.projX - n2.projX;
          const dy = n1.projY - n2.projY;
          const dist = Math.hypot(dx, dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * (isDark ? 0.3 : 0.25);
            ctx.beginPath();
            ctx.moveTo(n1.projX, n1.projY);
            ctx.lineTo(n2.projX, n2.projY);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw individual 3D nodes
      projectedNodes.forEach(node => {
        const radius = Math.max(1, node.radius * node.scale);
        ctx.beginPath();
        ctx.arc(node.projX, node.projY, radius, 0, Math.PI * 2);

        if (node.type === 'qubit') {
          ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
        } else if (node.type === 'gate') {
          ctx.fillStyle = isDark ? '#818cf8' : '#4f46e5';
        } else {
          ctx.fillStyle = isDark ? '#f8fafc' : '#475569';
        }

        ctx.fill();

        // Node labels for fundamental states
        if (node.label && node.scale > 0.85) {
          ctx.font = '10px monospace';
          ctx.fillStyle = isDark ? '#38bdf8' : '#0369a1';
          ctx.fillText(node.label, node.projX + 6, node.projY - 4);
        }
      });

      if (!prefersReduced) {
        animId = requestAnimationFrame(render);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !prefersReduced) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    render();

    // Rotate simulated quantum states
    const interval = setInterval(() => {
      const states = [
        { stateVector: '|ψ⟩ = (|00⟩ + |11⟩)/√2', entanglement: 'Bell State (Φ⁺)', fidelity: '99.85%' },
        { stateVector: 'H|0⟩ = (|0⟩ + |1⟩)/√2', entanglement: 'Superposition (1 Qubit)', fidelity: '99.92%' },
        { stateVector: 'CNOT(H|0⟩ ⊗ |0⟩)', entanglement: 'Entangled Pair Generated', fidelity: '99.78%' },
        { stateVector: '|ψ⟩ = (|01⟩ + |10⟩)/√2', entanglement: 'Bell State (Ψ⁺)', fidelity: '99.81%' },
      ];
      setActiveState(states[Math.floor(Math.random() * states.length)]);
    }, 4500);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none"
    >
      {/* 3D Visual Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing z-10"
        role="img"
        aria-label="Interactive 3D Quantum Bloch & Neural Space Visualization"
      />

      {/* Engineering Telemetry Overlay */}
      <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-20 px-3 py-2 rounded-xl bg-white/95 dark:bg-[#0c0e15]/95 border border-slate-200/90 dark:border-white/[0.08] shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-black/70 backdrop-blur-md flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400">State:</span>
          <span className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-[110px] sm:max-w-[140px]">
            {activeState.stateVector}
          </span>
        </div>
        <div className="text-slate-300 dark:text-slate-600">/</div>
        <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
          <ShieldCheck className="w-3 h-3 shrink-0" />
          <span>{activeState.fidelity}</span>
        </div>
      </div>
    </div>
  );
};
