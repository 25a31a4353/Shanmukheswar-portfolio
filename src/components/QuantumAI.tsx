import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

export const QuantumAI: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const stages = [
    {
      id: "stage-ai",
      title: "AI",
      subtitle: "Learning Representations",
      description: "Extracting complex feature representations, neural weights, and pattern manifolds from high-dimensional data.",
      tag: "Neural Primitives · Optimization",
      notation: "f(x; θ) = σ(Wᵀx + b)"
    },
    {
      id: "stage-intel",
      title: "Intelligence",
      subtitle: "Algorithmic Reasoning",
      description: "Synthesizing contextual decisions, heuristic search, predictive pipelines, and automated reasoning loops.",
      tag: "Agentic Systems · Decision Logic",
      notation: "argmax_a Q(s, a) · ∇θ J(θ)"
    },
    {
      id: "stage-quantum",
      title: "Quantum Computing",
      subtitle: "Fundamental Qubit Mechanics",
      description: "Leveraging superposition, unitary transformations, and quantum entanglement across exponentially vast Hilbert spaces.",
      tag: "Qiskit · Quantum Gates · Superposition",
      notation: "|ψ⟩ = α|0⟩ + β|1⟩ · U(θ)|0⟩"
    },
    {
      id: "stage-possibilities",
      title: "New Computational Possibilities",
      subtitle: "The Convergence Frontier",
      description: "Unlocking hybrid quantum-classical algorithms, secure quantum key distribution, and novel computational paradigms for future computing.",
      tag: "Quantum ML · State Spaces · Security",
      notation: "dim(H) = 2ⁿ · |Φ⁺⟩ = (|00⟩+|11⟩)/√2"
    }
  ];

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

    // Flowing particles along circuit lines
    const particles = Array.from({ length: 28 }, (_, i) => ({
      x: Math.random(),
      wireIndex: i % 3,
      speed: 0.0015 + Math.random() * 0.002,
      size: 1.5 + Math.random() * 1.5,
      alpha: 0.3 + Math.random() * 0.6
    }));

    const render = () => {
      if (!isIntersecting) return;
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const scale = Math.min(1, Math.max(0.65, width / 520));
      const neuralCenterX = Math.max(45, width * 0.20);
      const quantumCenterX = Math.min(width - 80, width * 0.70);

      // 1. Draw Quantum Circuit Rails on Right Half
      const wireCount = 3;
      const wireSpacing = height / (wireCount + 1);
      const wireLabels = ['|q₀⟩', '|q₁⟩', '|q₂⟩'];

      ctx.font = '11px JetBrains Mono, monospace';

      for (let w = 0; w < wireCount; w++) {
        const wireY = wireSpacing * (w + 1);

        // Circuit rail label
        ctx.fillStyle = '#94a3b8';
        ctx.textAlign = 'right';
        ctx.fillText(wireLabels[w], quantumCenterX - 75 * scale, wireY + 4);

        // Wire line
        ctx.beginPath();
        ctx.moveTo(quantumCenterX - 65 * scale, wireY);
        ctx.lineTo(width - 20, wireY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Gate Blocks on wires
        const gatePositions = [
          { name: 'H', x: quantumCenterX - 30 * scale },
          { name: w === 1 ? '⊕' : '●', x: quantumCenterX + 25 * scale },
          { name: 'R(θ)', x: Math.min(width - 25, quantumCenterX + 80 * scale) }
        ];

        gatePositions.forEach((gate) => {
          const isHovered = Math.hypot(mouseX - gate.x, mouseY - wireY) < 25;

          // Gate box
          ctx.beginPath();
          ctx.rect(gate.x - 11, wireY - 11, 22, 22);
          ctx.fillStyle = isHovered ? '#1e293b' : '#0c0e15';
          ctx.strokeStyle = isHovered ? '#38bdf8' : 'rgba(56, 189, 248, 0.3)';
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();

          // Gate text
          ctx.fillStyle = isHovered ? '#38bdf8' : '#e2e8f0';
          ctx.textAlign = 'center';
          ctx.fillText(gate.name, gate.x, wireY + 4);
        });

        // Vertical CNOT control-target wire between q0 and q1
        if (w === 0) {
          ctx.beginPath();
          ctx.moveTo(quantumCenterX + 25 * scale, wireY);
          ctx.lineTo(quantumCenterX + 25 * scale, wireSpacing * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // 2. Draw Neural Network Layers on Left Half
      const layerCounts = [3, 4, 3];
      const layerSpacing = 42 * scale;
      const layerXCoords = [
        neuralCenterX - layerSpacing,
        neuralCenterX,
        neuralCenterX + layerSpacing
      ];

      const neuralNodes: { x: number; y: number; layer: number }[] = [];

      layerCounts.forEach((count, lIdx) => {
        const lx = layerXCoords[lIdx];
        const step = height / (count + 1);

        for (let n = 0; n < count; n++) {
          const ly = step * (n + 1);
          neuralNodes.push({ x: lx, y: ly, layer: lIdx });
        }
      });

      // Draw Synaptic Edges between Neural Layers
      for (let i = 0; i < neuralNodes.length; i++) {
        for (let j = 0; j < neuralNodes.length; j++) {
          const n1 = neuralNodes[i];
          const n2 = neuralNodes[j];

          if (n2.layer === n1.layer + 1) {
            const isNearMouse = (
              Math.hypot(mouseX - (n1.x + n2.x) / 2, mouseY - (n1.y + n2.y) / 2) < 60
            );

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = isNearMouse
              ? 'rgba(56, 189, 248, 0.35)'
              : `rgba(255, 255, 255, ${0.04 + Math.sin(time + i + j) * 0.02})`;
            ctx.lineWidth = isNearMouse ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Convergence Pathways: Connecting AI Output to Quantum Input
      const outputNodes = neuralNodes.filter(n => n.layer === 2);
      outputNodes.forEach((n, idx) => {
        const targetWireY = wireSpacing * (idx + 1);
        const targetWireX = quantumCenterX - 65 * scale;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.bezierCurveTo(
          n.x + (targetWireX - n.x) * 0.5, n.y,
          n.x + (targetWireX - n.x) * 0.5, targetWireY,
          targetWireX, targetWireY
        );
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();
      });

      // 4. Draw Neural Nodes
      neuralNodes.forEach((node) => {
        const isHovered = Math.hypot(mouseX - node.x, mouseY - node.y) < 20;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? 5.5 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#38bdf8' : '#07090e';
        ctx.strokeStyle = isHovered ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();
      });

      // 5. Draw Streaming Information Particles
      particles.forEach((p) => {
        p.x += p.speed;
        if (p.x > 1) p.x = 0;

        // Path from neural through quantum
        const currentWireY = wireSpacing * (p.wireIndex + 1);
        const startX = neuralCenterX + layerSpacing;
        const endX = width - 25;
        const currentX = startX + p.x * (endX - startX);

        ctx.beginPath();
        ctx.arc(currentX, currentWireY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // 6. Subtle Floating Computational Notations
      const notations = [
        { text: '|ψ⟩ = α|0⟩ + β|1⟩', x: width * 0.5, y: height * 0.18 },
        { text: 'dim(H) = 2ⁿ', x: width * 0.85, y: height * 0.2 },
        { text: '∇θ L(θ)', x: width * 0.15, y: height * 0.88 },
        { text: 'QNN: U(θ)|x⟩', x: width * 0.52, y: height * 0.86 }
      ];

      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.textAlign = 'center';
      notations.forEach((item) => {
        ctx.fillText(item.text, item.x, item.y);
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // IntersectionObserver to pause loop when off-screen
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

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="quantum-ai" className="py-24 sm:py-32 relative border-t border-white/[0.05] overflow-hidden">
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[30rem] bg-sky-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            // 06 · SIGNATURE FRONTIER
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
            Where AI Meets Quantum
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Connecting machine intelligence, mathematical representations, and quantum mechanical principles into next-generation computational frameworks.
          </p>
        </div>

        {/* Core Statement Banner — Signature Identity */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0c0e15] via-[#0e121c] to-[#0c0e15] border border-sky-500/25 relative shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-400 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-sky-400 mb-1">
                Vision & Exploration
              </div>
              <blockquote className="text-lg sm:text-xl text-white font-display font-medium leading-relaxed">
                "I'm exploring how intelligent systems and emerging computational paradigms can shape the next generation of technology."
              </blockquote>
            </div>
          </div>
        </div>

        {/* The 4-Stage Conceptual Progression Flow: AI ↓ Intelligence ↓ Quantum Computing ↓ New Computational Possibilities */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[#0f131d] border-sky-500/50 shadow-lg shadow-sky-950/20'
                    : 'bg-[#0c0e15] border-white/[0.07] hover:border-white/20'
                }`}
              >
                {/* Stage Index & Indicator */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className={isActive ? 'text-sky-400 font-bold' : 'text-slate-500'}>
                    0{idx + 1}
                  </span>
                  {idx < 3 && (
                    <ArrowDown className="w-3.5 h-3.5 text-slate-600 md:-rotate-90" />
                  )}
                </div>

                {/* Stage Title */}
                <h3 className="text-sm font-bold text-white font-display">
                  {stage.title}
                </h3>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {stage.subtitle}
                </div>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {stage.description}
                </p>

                {/* Mathematical notation footer */}
                <div className="mt-3 pt-2 border-t border-white/[0.05] text-[10px] font-mono text-sky-300 truncate">
                  {stage.notation}
                </div>
              </button>
            );
          })}
        </div>

        {/* Signature Interactive Convergence Visual (Canvas + Circuit Grid) */}
        <div 
          ref={containerRef}
          className="relative w-full rounded-xl bg-[#0c0e15] border border-white/[0.08] overflow-hidden shadow-2xl p-4 sm:p-6"
        >
          {/* Header of Visual Workbench */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.07] gap-2">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-white font-semibold">Interactive Neural-Quantum Synthesis Space</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400" /> Neural Layers
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400" /> Quantum Rails
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-500 hidden sm:inline">Hover over canvas to illuminate pathways</span>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="relative w-full h-72 sm:h-80 my-2">
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-crosshair select-none"
              role="img"
              aria-label="Interactive Neural-Quantum Convergence Space Visualization"
            />
          </div>

          {/* Bottom Descriptive Caption */}
          <div className="pt-3 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <div>
              Active Concept Stage: <span className="text-white font-semibold">{stages[activeStage].title}</span> — {stages[activeStage].tag}
            </div>
            <div className="text-[11px] text-slate-500">
              Non-simulated visual representation of computational interests
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
