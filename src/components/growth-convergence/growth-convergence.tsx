"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  Video,
  Sparkles,
  TrendingUp,
  RotateCcw,
} from "lucide-react";

export function GrowthConvergence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  // step 0: initial / hidden
  // step 1: cards appear (0ms)
  // step 2: lines start drawing upward from cards (300ms)
  // step 3: convergence at central node -> node pulse + heading reveal (2100ms)
  // step 4: bottom statement reveal + full completion (2600ms)

  const [activePillar, setActivePillar] = useState<"none" | "left" | "right">("none");

  const startAnimation = () => {
    setStep(0);
    setHasStarted(false);

    requestAnimationFrame(() => {
      setHasStarted(true);
      setStep(1);

      const t1 = setTimeout(() => setStep(2), 300);
      const t2 = setTimeout(() => setStep(3), 2100);
      const t3 = setTimeout(() => setStep(4), 2700);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    });
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setHasStarted(true);
        setStep(4);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            startAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentElem = sectionRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [hasStarted]);

  // SVG parameters
  // Path length for desktop curves is ~413px. We use 420 for complete coverage.
  const desktopPathLength = 420;
  const isDrawingDesktop = step >= 2;
  const desktopDashOffset = isDrawingDesktop ? 0 : desktopPathLength;

  // Mobile path length is ~240px. We use 250 for complete coverage.
  const mobilePathLength = 250;
  const isDrawingMobile = step >= 2;
  const mobileDashOffset = isDrawingMobile ? 0 : mobilePathLength;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070709] py-16 md:py-24 overflow-hidden border-t border-white/[0.06] select-none"
      id="growth-engine"
      aria-label="YouTooGrow Content Growth Engine"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Center Purple Atmosphere Bloom */}
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-purple-600/[0.10] rounded-full blur-[140px]" />
        {/* Left Bottom Pink Glow */}
        <div className="absolute bottom-[10%] left-[5%] w-[420px] h-[260px] bg-pink-600/[0.08] rounded-full blur-[130px]" />
        {/* Right Bottom Purple Glow */}
        <div className="absolute bottom-[10%] right-[5%] w-[420px] h-[260px] bg-purple-600/[0.08] rounded-full blur-[130px]" />
        {/* Subtle Fine Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Replay Control Button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={startAnimation}
            className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.18] text-[11px] text-[#aaa6a0] hover:text-white transition-all duration-200"
            title="Replay convergence animation"
            aria-label="Replay convergence animation"
          >
            <RotateCcw className="w-3 h-3 transition-transform duration-500 group-hover:-rotate-180 text-pink-400" />
            <span className="font-mono text-[10px] tracking-wider uppercase">Replay</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEWPORT (>= 768px)                          */}
        {/* Recreates the reference image panoramic layout                 */}
        {/* ============================================================== */}
        <div className="hidden md:block relative w-full max-w-[1160px] mx-auto min-h-[600px] lg:min-h-[640px]">
          {/* SVG Canvas for Dual Curved Glowing Paths & Floating Badges */}
          <svg
            viewBox="0 0 1200 640"
            className="w-full h-auto overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Central Sphere 3D Gradient */}
              <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="20%" stopColor="#f472b6" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#c026d3" />
                <stop offset="85%" stopColor="#7e22ce" />
                <stop offset="100%" stopColor="#3b0764" />
              </radialGradient>

              {/* Sphere Ambient Radial Glow */}
              <radialGradient id="sphereRadialGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </radialGradient>

              {/* Left Curve Gradient: Pink / Magenta */}
              <linearGradient id="leftCurveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#fb7185" />
              </linearGradient>

              {/* Right Curve Gradient: Purple / Violet */}
              <linearGradient id="rightCurveGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>

              {/* Multi-layer Glow Filters */}
              <filter id="glowWide" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="9" result="blur" />
              </filter>
              <filter id="glowCore" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
              </filter>
              <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.7" />
              </filter>
            </defs>

            {/* Ambient Background Aura behind node */}
            <circle
              cx="600"
              cy="95"
              r="110"
              fill="url(#sphereRadialGlow)"
              className={`transition-all duration-1000 ${
                step >= 3 ? "opacity-100 scale-100" : "opacity-40 scale-75"
              }`}
            />

            {/* Concentric Orbital Rings around convergence point */}
            <g className={`transition-opacity duration-1000 ${step >= 3 ? "opacity-100" : "opacity-25"}`}>
              {/* Inner ring */}
              <circle
                cx="600"
                cy="95"
                r="46"
                fill="none"
                stroke="rgba(244, 114, 182, 0.45)"
                strokeWidth="1.2"
                className="animate-[spin_40s_linear_infinite]"
                strokeDasharray="4 6"
              />
              {/* Mid ring */}
              <circle
                cx="600"
                cy="95"
                r="64"
                fill="none"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="1"
                className="animate-[spin_55s_linear_infinite_reverse]"
                strokeDasharray="3 5"
              />
              {/* Outer ring */}
              <circle
                cx="600"
                cy="95"
                r="86"
                fill="none"
                stroke="rgba(216, 70, 239, 0.16)"
                strokeWidth="0.8"
                strokeDasharray="2 6"
              />
            </g>

            {/* ========================================================== */}
            {/* LEFT CURVE (Pink / Magenta) - from Left Card to Node       */}
            {/* Start: (365, 475) -> End: (572, 98)                       */}
            {/* ========================================================== */}
            <g
              className={`transition-opacity duration-300 ${
                activePillar === "right" ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Wide Bloom Layer */}
              <path
                d="M 365 475 C 465 475, 520 250, 572 98"
                fill="none"
                stroke="url(#leftCurveGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#glowWide)"
                opacity="0.35"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Mid Glow Layer */}
              <path
                d="M 365 475 C 465 475, 520 250, 572 98"
                fill="none"
                stroke="url(#leftCurveGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glowCore)"
                opacity="0.8"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Crisp Core Stroke */}
              <path
                d="M 365 475 C 465 475, 520 250, 572 98"
                fill="none"
                stroke="#fce7f3"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
            </g>

            {/* ========================================================== */}
            {/* RIGHT CURVE (Purple / Violet) - from Right Card to Node    */}
            {/* Start: (835, 475) -> End: (628, 98)                       */}
            {/* ========================================================== */}
            <g
              className={`transition-opacity duration-300 ${
                activePillar === "left" ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Wide Bloom Layer */}
              <path
                d="M 835 475 C 735 475, 680 250, 628 98"
                fill="none"
                stroke="url(#rightCurveGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#glowWide)"
                opacity="0.35"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Mid Glow Layer */}
              <path
                d="M 835 475 C 735 475, 680 250, 628 98"
                fill="none"
                stroke="url(#rightCurveGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glowCore)"
                opacity="0.8"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Crisp Core Stroke */}
              <path
                d="M 835 475 C 735 475, 680 250, 628 98"
                fill="none"
                stroke="#f3e8ff"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
            </g>

            {/* ========================================================== */}
            {/* FLOATING PILL LABELS ALONG THE CURVES                      */}
            {/* Pure SVG transforms without conflicting CSS translateY     */}
            {/* ========================================================== */}
            {/* Left 1: STRATEGY (Near left card) */}
            <g
              transform="translate(340, 430)"
              filter="url(#badgeShadow)"
              className={`transition-opacity duration-500 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                x="0"
                y="0"
                width="84"
                height="22"
                rx="11"
                fill="#0b0b10"
                stroke="rgba(236, 72, 153, 0.4)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ec4899" />
              <text
                x="20"
                y="14.5"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                STRATEGY
              </text>
            </g>

            {/* Left 2: SEO (Mid ascent) */}
            <g
              transform="translate(415, 325)"
              filter="url(#badgeShadow)"
              className={`transition-opacity duration-500 delay-300 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                x="0"
                y="0"
                width="56"
                height="22"
                rx="11"
                fill="#0b0b10"
                stroke="rgba(236, 72, 153, 0.4)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ec4899" />
              <text
                x="20"
                y="14.5"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                SEO
              </text>
            </g>

            {/* Left 3: BRANDING (Upper curve) */}
            <g
              transform="translate(445, 195)"
              filter="url(#badgeShadow)"
              className={`transition-opacity duration-500 delay-700 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                x="0"
                y="0"
                width="84"
                height="22"
                rx="11"
                fill="#0b0b10"
                stroke="rgba(236, 72, 153, 0.45)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ec4899" />
              <text
                x="20"
                y="14.5"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                BRANDING
              </text>
            </g>

            {/* Right 1: ENGAGEMENT (Near right card) */}
            <g
              transform="translate(790, 430)"
              filter="url(#badgeShadow)"
              className={`transition-opacity duration-500 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                x="0"
                y="0"
                width="98"
                height="22"
                rx="11"
                fill="#0b0b10"
                stroke="rgba(168, 85, 247, 0.4)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#a855f7" />
              <text
                x="20"
                y="14.5"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                ENGAGEMENT
              </text>
            </g>

            {/* Right 2: DESIGN (Mid ascent) */}
            <g
              transform="translate(730, 325)"
              filter="url(#badgeShadow)"
              className={`transition-opacity duration-500 delay-300 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                x="0"
                y="0"
                width="68"
                height="22"
                rx="11"
                fill="#0b0b10"
                stroke="rgba(168, 85, 247, 0.4)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#a855f7" />
              <text
                x="20"
                y="14.5"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                DESIGN
              </text>
            </g>

            {/* Right 3: EDITING (Upper curve) */}
            <g
              transform="translate(680, 195)"
              filter="url(#badgeShadow)"
              className={`transition-opacity duration-500 delay-700 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                x="0"
                y="0"
                width="72"
                height="22"
                rx="11"
                fill="#0b0b10"
                stroke="rgba(168, 85, 247, 0.45)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#a855f7" />
              <text
                x="20"
                y="14.5"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                EDITING
              </text>
            </g>

            {/* ========================================================== */}
            {/* TOP CENTRAL CONVERGENCE NODE (Glossy 3D Sphere)           */}
            {/* ========================================================== */}
            <g
              className={`transition-all duration-700 ${
                step >= 3 ? "scale-100 opacity-100" : "scale-90 opacity-80"
              }`}
              style={{ transformOrigin: "600px 95px" }}
            >
              {/* Outer Glow Halo */}
              <circle
                cx="600"
                cy="95"
                r="38"
                fill="none"
                stroke="rgba(244, 114, 182, 0.55)"
                strokeWidth="2"
                filter="url(#glowCore)"
              />
              {/* Sphere Body */}
              <circle cx="600" cy="95" r="32" fill="url(#sphereGrad)" />
              {/* Specular Highlight Sheen */}
              <ellipse
                cx="593"
                cy="84"
                rx="14"
                ry="6"
                fill="#ffffff"
                opacity="0.55"
                transform="rotate(-15 593 84)"
              />
              {/* Mountain Summit / Digital Growth Icon inside node */}
              <g transform="translate(588, 85) scale(0.9)" fill="#ffffff" opacity="0.95">
                <path d="M12 3L2 19h20L12 3zm0 4.5l5.5 9.5h-11L12 7.5z" />
                <circle cx="19" cy="7" r="2" fill="#ffffff" />
              </g>
            </g>
          </svg>

          {/* ============================================================ */}
          {/* CENTRAL HEADING (Revealed after convergence at step 3)       */}
          {/* Nestled under the convergence node in the apex triangular void*/}
          {/* ============================================================ */}
          <div
            className={`absolute top-[175px] left-1/2 -translate-x-1/2 text-center w-full max-w-[480px] pointer-events-auto transition-all duration-800 ease-out ${
              step >= 3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            {/* Brand Identifier */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-pink-300/90 font-mono">
                YOUTOOGROW
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] mb-2">
              WE TURN CONTENT <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
                INTO GROWTH.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xs sm:text-[13px] tracking-[0.22em] font-semibold text-[#aaa6a0] uppercase">
              LET&apos;S GROW TOGETHER.
            </p>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM LEFT CARD: CONTENT STRATEGY                          */}
          {/* ============================================================ */}
          <div
            onMouseEnter={() => setActivePillar("left")}
            onMouseLeave={() => setActivePillar("none")}
            className={`absolute bottom-[20px] left-[15px] lg:left-[30px] w-[340px] lg:w-[360px] transition-all duration-700 ease-out ${
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl bg-[#0b0b10]/90 backdrop-blur-xl border border-pink-500/25 hover:border-pink-500/50 p-6 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(236,72,153,0.15)] hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.9),0_0_35px_-2px_rgba(236,72,153,0.3)] group cursor-default">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-36 h-20 bg-pink-500/[0.08] rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.25)] group-hover:scale-105 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    Content Strategy
                  </h3>
                  <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-pink-400/90 font-mono">
                    Foundational Pillar
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-[#aaa6a0] leading-relaxed">
                Smart research, SEO, content planning and branding strategies that build a strong foundation for sustainable growth.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM RIGHT CARD: CONTENT CREATION                         */}
          {/* ============================================================ */}
          <div
            onMouseEnter={() => setActivePillar("right")}
            onMouseLeave={() => setActivePillar("none")}
            className={`absolute bottom-[20px] right-[15px] lg:right-[30px] w-[340px] lg:w-[360px] transition-all duration-700 ease-out delay-150 ${
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl bg-[#0b0b10]/90 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 p-6 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(168,85,247,0.15)] hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.9),0_0_35px_-2px_rgba(168,85,247,0.3)] group cursor-default">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 left-0 w-36 h-20 bg-purple-500/[0.08] rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover:scale-105 transition-transform duration-300">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    Content Creation
                  </h3>
                  <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-purple-400/90 font-mono">
                    Execution Engine
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-[#aaa6a0] leading-relaxed">
                High-quality video editing, thumbnails, reels and creative designs that turn attention into engagement.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEWPORT (< 768px)                                      */}
        {/* Simplified vertical responsive composition                     */}
        {/* ============================================================== */}
        <div className="md:hidden flex flex-col items-center">
          {/* Mobile Top Node & Heading */}
          <div className="text-center mb-6">
            {/* Glowing Central Orb */}
            <div className="relative inline-flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-transparent blur-xl absolute" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#3b0764] via-[#7e22ce] to-[#f472b6] flex items-center justify-center shadow-[0_0_25px_rgba(216,70,239,0.5)] border border-pink-400/40">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Brand Identifier */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-pink-300/90 font-mono">
                YOUTOOGROW
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
              WE TURN CONTENT <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
                INTO GROWTH.
              </span>
            </h2>

            <p className="text-[11px] tracking-[0.2em] font-semibold text-[#aaa6a0] uppercase">
              LET&apos;S GROW TOGETHER.
            </p>
          </div>

          {/* Mobile Animated SVG Flow */}
          <div className="relative w-full max-w-[360px] h-[170px] my-2">
            <svg viewBox="0 0 360 170" className="w-full h-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="mobLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
                <linearGradient id="mobRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* Left Line */}
              <path
                d="M 45 155 C 85 155, 135 80, 172 15"
                fill="none"
                stroke="url(#mobLeftGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="drop-shadow(0 0 8px rgba(236,72,153,0.7))"
                style={{
                  strokeDasharray: mobilePathLength,
                  strokeDashoffset: mobileDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />

              {/* Right Line */}
              <path
                d="M 315 155 C 275 155, 225 80, 188 15"
                fill="none"
                stroke="url(#mobRightGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="drop-shadow(0 0 8px rgba(168,85,247,0.7))"
                style={{
                  strokeDasharray: mobilePathLength,
                  strokeDashoffset: mobileDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />

              {/* Mobile Badges - Left (Strategy, SEO, Branding) */}
              <g
                transform="translate(25, 115)"
                className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="62" height="18" rx="9" fill="#0b0b10" stroke="rgba(236,72,153,0.4)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ec4899" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">STRATEGY</text>
              </g>

              <g
                transform="translate(70, 70)"
                className={`transition-opacity duration-500 delay-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="44" height="18" rx="9" fill="#0b0b10" stroke="rgba(236,72,153,0.4)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ec4899" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">SEO</text>
              </g>

              <g
                transform="translate(95, 25)"
                className={`transition-opacity duration-500 delay-700 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="62" height="18" rx="9" fill="#0b0b10" stroke="rgba(236,72,153,0.4)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ec4899" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">BRANDING</text>
              </g>

              {/* Mobile Badges - Right (Engagement, Design, Editing) */}
              <g
                transform="translate(265, 115)"
                className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="70" height="18" rx="9" fill="#0b0b10" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#a855f7" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">ENGAGE</text>
              </g>

              <g
                transform="translate(235, 70)"
                className={`transition-opacity duration-500 delay-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="50" height="18" rx="9" fill="#0b0b10" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#a855f7" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">DESIGN</text>
              </g>

              <g
                transform="translate(200, 25)"
                className={`transition-opacity duration-500 delay-700 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="54" height="18" rx="9" fill="#0b0b10" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#a855f7" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">EDITING</text>
              </g>
            </svg>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="w-full space-y-4 mt-2">
            {/* Left Card: Content Strategy */}
            <div className="rounded-2xl bg-[#0b0b10]/90 border border-pink-500/25 p-5 shadow-[0_4px_25px_-5px_rgba(236,72,153,0.15)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Content Strategy</h3>
                  <p className="text-[10px] tracking-wider uppercase font-semibold text-pink-400/90 font-mono">
                    Foundational Pillar
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#aaa6a0] leading-relaxed">
                Smart research, SEO, content planning and branding strategies that build a strong foundation for sustainable growth.
              </p>
            </div>

            {/* Right Card: Content Creation */}
            <div className="rounded-2xl bg-[#0b0b10]/90 border border-purple-500/25 p-5 shadow-[0_4px_25px_-5px_rgba(168,85,247,0.15)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Content Creation</h3>
                  <p className="text-[10px] tracking-wider uppercase font-semibold text-purple-400/90 font-mono">
                    Execution Engine
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#aaa6a0] leading-relaxed">
                High-quality video editing, thumbnails, reels and creative designs that turn attention into engagement.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM SUPPORTING STATEMENT                                    */}
        {/* Horizontal divider rule with centered pill badge               */}
        {/* ============================================================== */}
        <div
          className={`relative mt-12 md:mt-16 pt-6 flex items-center justify-center transition-all duration-700 ease-out ${
            step >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle horizontal divider line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/[0.08]" />

          {/* Centered Pill Badge */}
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070709] border border-white/[0.1] text-[11px] sm:text-xs font-semibold tracking-[0.16em] text-[#c4c0b8] uppercase shadow-lg">
            <TrendingUp className="w-3.5 h-3.5 text-pink-400" />
            <span>ONE STRATEGY. BETTER CONTENT. REAL GROWTH.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
