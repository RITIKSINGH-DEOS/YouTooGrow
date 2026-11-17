"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass,
  Video,
  TrendingUp,
} from "lucide-react";

export function GrowthConvergence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  // step 0: initial / hidden
  // step 1: cards appear (0ms)
  // step 2: lines start drawing upward from cards (300ms)
  // step 3: convergence at BOOK A CALL button -> button glow pulse (2100ms)
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
  // Path length for desktop curves is ~425px. We use 435 for complete coverage.
  const desktopPathLength = 435;
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
      id="contact"
      aria-label="YouTooGrow Content Growth Engine"
    >
      {/* Background Ambience & Lighting - Brand Red & White Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Center Red Atmosphere Bloom */}
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-[#ff2626]/[0.08] rounded-full blur-[140px]" />
        {/* Left Bottom Vivid Red Glow */}
        <div className="absolute bottom-[10%] left-[5%] w-[420px] h-[260px] bg-[#ff2626]/[0.06] rounded-full blur-[130px]" />
        {/* Right Bottom Crimson Glow */}
        <div className="absolute bottom-[10%] right-[5%] w-[420px] h-[260px] bg-[#d90808]/[0.06] rounded-full blur-[130px]" />
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
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEWPORT (>= 768px)                          */}
        {/* Convergence of lines directly into BOOK A CALL button          */}
        {/* ============================================================== */}
        <div className="hidden md:block relative w-full max-w-[1160px] mx-auto min-h-[600px] lg:min-h-[640px]">
          {/* ============================================================ */}
          {/* TOP CENTRAL CONVERGENCE ACTION: BOOK A CALL BUTTON          */}
          {/* Replaces the circular node at the convergence peak           */}
          {/* ============================================================ */}
          <div className="absolute top-[72px] left-1/2 -translate-x-1/2 z-20">
            <Link
              href="mailto:contact@youtoogrow.com?subject=Strategy%20Call%20Application%20-%20YouTooGrow"
              className={`group relative inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-[#ff2626] hover:bg-[#d90808] text-white font-extrabold tracking-widest text-sm uppercase transition-all duration-300 shadow-[0_0_35px_rgba(255,38,38,0.55)] hover:shadow-[0_0_60px_rgba(255,38,38,0.85)] hover:scale-105 active:scale-95 cursor-pointer select-none ${
                step >= 3 ? "scale-100 opacity-100" : "scale-95 opacity-85"
              }`}
            >
              {/* Subtle top specular sheen */}
              <div className="absolute inset-x-5 top-1 h-px bg-white/40 rounded-full" />
              <span>BOOK A CALL</span>
            </Link>
          </div>

          {/* SVG Canvas for Dual Curved Glowing Paths & Floating Badges */}
          <svg
            viewBox="0 0 1200 640"
            className="w-full h-auto overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Sphere Ambient Radial Glow */}
              <radialGradient id="sphereRadialGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff2626" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#d90808" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ff2626" stopOpacity="0" />
              </radialGradient>

              {/* Left Curve Gradient: Vivid Red */}
              <linearGradient id="leftCurveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff2626" />
                <stop offset="50%" stopColor="#ff4d4d" />
                <stop offset="100%" stopColor="#ffa3a3" />
              </linearGradient>

              {/* Right Curve Gradient: Crimson / Ruby Red */}
              <linearGradient id="rightCurveGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#e11d48" />
                <stop offset="50%" stopColor="#ff3355" />
                <stop offset="100%" stopColor="#ffa3b0" />
              </linearGradient>

              {/* Multi-layer Glow Filters */}
              <filter id="glowWide" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="9" result="blur" />
              </filter>
              <filter id="glowCore" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
              </filter>
              <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.75" />
              </filter>
            </defs>

            {/* Ambient Background Aura behind button */}
            <circle
              cx="600"
              cy="96"
              r="120"
              fill="url(#sphereRadialGlow)"
              className={`transition-all duration-1000 ${
                step >= 3 ? "opacity-100 scale-100" : "opacity-40 scale-75"
              }`}
            />

            {/* Concentric Orbital Rings around convergence peak */}
            <g className={`transition-opacity duration-1000 ${step >= 3 ? "opacity-100" : "opacity-25"}`}>
              {/* Inner ring */}
              <circle
                cx="600"
                cy="96"
                r="70"
                fill="none"
                stroke="rgba(255, 38, 38, 0.45)"
                strokeWidth="1.2"
                className="animate-[spin_40s_linear_infinite]"
                strokeDasharray="4 6"
              />
              {/* Mid ring */}
              <circle
                cx="600"
                cy="96"
                r="95"
                fill="none"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1"
                className="animate-[spin_55s_linear_infinite_reverse]"
                strokeDasharray="3 5"
              />
              {/* Outer ring */}
              <circle
                cx="600"
                cy="96"
                r="120"
                fill="none"
                stroke="rgba(255, 38, 38, 0.16)"
                strokeWidth="0.8"
                strokeDasharray="2 6"
              />
            </g>

            {/* ========================================================== */}
            {/* LEFT CURVE (Vivid Red) - from Left Card to BOOK A CALL     */}
            {/* Start: (365, 475) -> End: (500, 96)                       */}
            {/* ========================================================== */}
            <g
              className={`transition-opacity duration-300 ${
                activePillar === "right" ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Wide Bloom Layer */}
              <path
                d="M 365 475 C 455 475, 480 240, 500 96"
                fill="none"
                stroke="url(#leftCurveGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#glowWide)"
                opacity="0.38"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Mid Glow Layer */}
              <path
                d="M 365 475 C 455 475, 480 240, 500 96"
                fill="none"
                stroke="url(#leftCurveGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glowCore)"
                opacity="0.85"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Crisp Core Stroke (White Core) */}
              <path
                d="M 365 475 C 455 475, 480 240, 500 96"
                fill="none"
                stroke="#fff5f5"
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
            {/* RIGHT CURVE (Crimson Red) - from Right Card to BOOK A CALL */}
            {/* Start: (835, 475) -> End: (700, 96)                       */}
            {/* ========================================================== */}
            <g
              className={`transition-opacity duration-300 ${
                activePillar === "left" ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Wide Bloom Layer */}
              <path
                d="M 835 475 C 745 475, 720 240, 700 96"
                fill="none"
                stroke="url(#rightCurveGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#glowWide)"
                opacity="0.38"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Mid Glow Layer */}
              <path
                d="M 835 475 C 745 475, 720 240, 700 96"
                fill="none"
                stroke="url(#rightCurveGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glowCore)"
                opacity="0.85"
                style={{
                  strokeDasharray: desktopPathLength,
                  strokeDashoffset: desktopDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />
              {/* Crisp Core Stroke (White Core) */}
              <path
                d="M 835 475 C 745 475, 720 240, 700 96"
                fill="none"
                stroke="#fff5f5"
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
            {/* ========================================================== */}
            {/* Left 1: STRATEGY (Near left card) */}
            <g
              transform="translate(330, 435)"
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
                stroke="rgba(255, 38, 38, 0.45)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ff2626" />
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
              transform="translate(390, 328)"
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
                stroke="rgba(255, 38, 38, 0.45)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ff2626" />
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

            {/* Left 3: BRANDING (Upper curve near button) */}
            <g
              transform="translate(420, 204)"
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
                stroke="rgba(255, 38, 38, 0.5)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ff2626" />
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
              transform="translate(800, 435)"
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
                stroke="rgba(255, 38, 38, 0.45)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ff3355" />
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
              transform="translate(755, 328)"
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
                stroke="rgba(255, 38, 38, 0.45)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ff3355" />
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

            {/* Right 3: EDITING (Upper curve near button) */}
            <g
              transform="translate(730, 204)"
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
                stroke="rgba(255, 38, 38, 0.5)"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="3" fill="#ff3355" />
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
          </svg>

          {/* ============================================================ */}
          {/* BOTTOM LEFT CARD: CONTENT STRATEGY (Vivid Red Identity)     */}
          {/* ============================================================ */}
          <div
            onMouseEnter={() => setActivePillar("left")}
            onMouseLeave={() => setActivePillar("none")}
            className={`absolute bottom-[20px] left-[15px] lg:left-[30px] w-[340px] lg:w-[360px] transition-all duration-700 ease-out ${
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl bg-[#0b0b10]/90 backdrop-blur-xl border border-[#ff2626]/30 hover:border-[#ff2626]/60 p-6 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(255,38,38,0.15)] hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.9),0_0_35px_-2px_rgba(255,38,38,0.3)] group cursor-default">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-36 h-20 bg-[#ff2626]/[0.08] rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2626]/20 to-[#ff2626]/5 border border-[#ff2626]/40 flex items-center justify-center text-[#ff2626] shadow-[0_0_15px_rgba(255,38,38,0.25)] group-hover:scale-105 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    Content Strategy
                  </h3>
                  <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#ff4d4d] font-mono">
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
          {/* BOTTOM RIGHT CARD: CONTENT CREATION (Crimson Red Identity)  */}
          {/* ============================================================ */}
          <div
            onMouseEnter={() => setActivePillar("right")}
            onMouseLeave={() => setActivePillar("none")}
            className={`absolute bottom-[20px] right-[15px] lg:right-[30px] w-[340px] lg:w-[360px] transition-all duration-700 ease-out delay-150 ${
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl bg-[#0b0b10]/90 backdrop-blur-xl border border-[#ff3355]/30 hover:border-[#ff3355]/60 p-6 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(255,51,85,0.15)] hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.9),0_0_35px_-2px_rgba(255,51,85,0.3)] group cursor-default">
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 left-0 w-36 h-20 bg-[#ff3355]/[0.08] rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff3355]/20 to-[#ff3355]/5 border border-[#ff3355]/40 flex items-center justify-center text-[#ff3355] shadow-[0_0_15px_rgba(255,51,85,0.25)] group-hover:scale-105 transition-transform duration-300">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    Content Creation
                  </h3>
                  <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#ff667f] font-mono">
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
        {/* Clean vertical layout with BOOK A CALL at the top              */}
        {/* ============================================================== */}
        <div className="md:hidden flex flex-col items-center">
          {/* Mobile Top BOOK A CALL Button (Replaces red orb) */}
          <div className="text-center mb-3">
            <Link
              href="mailto:contact@youtoogrow.com?subject=Strategy%20Call%20Application%20-%20YouTooGrow"
              className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#ff2626] hover:bg-[#d90808] text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(255,38,38,0.65)] active:scale-95 transition-all duration-200"
            >
              BOOK A CALL
            </Link>
          </div>

          {/* Mobile Animated SVG Flow */}
          <div className="relative w-full max-w-[360px] h-[170px] my-2">
            <svg viewBox="0 0 360 170" className="w-full h-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="mobLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff2626" />
                  <stop offset="100%" stopColor="#ffa3a3" />
                </linearGradient>
                <linearGradient id="mobRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#e11d48" />
                  <stop offset="100%" stopColor="#ffa3b0" />
                </linearGradient>
              </defs>

              {/* Left Line */}
              <path
                d="M 45 155 C 85 155, 125 70, 150 15"
                fill="none"
                stroke="url(#mobLeftGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="drop-shadow(0 0 8px rgba(255,38,38,0.7))"
                style={{
                  strokeDasharray: mobilePathLength,
                  strokeDashoffset: mobileDashOffset,
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
              />

              {/* Right Line */}
              <path
                d="M 315 155 C 275 155, 235 70, 210 15"
                fill="none"
                stroke="url(#mobRightGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="drop-shadow(0 0 8px rgba(225,29,72,0.7))"
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
                <rect x="0" y="0" width="62" height="18" rx="9" fill="#0b0b10" stroke="rgba(255,38,38,0.45)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ff2626" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">STRATEGY</text>
              </g>

              <g
                transform="translate(70, 70)"
                className={`transition-opacity duration-500 delay-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="44" height="18" rx="9" fill="#0b0b10" stroke="rgba(255,38,38,0.45)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ff2626" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">SEO</text>
              </g>

              <g
                transform="translate(95, 25)"
                className={`transition-opacity duration-500 delay-700 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="62" height="18" rx="9" fill="#0b0b10" stroke="rgba(255,38,38,0.5)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ff2626" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">BRANDING</text>
              </g>

              {/* Mobile Badges - Right (Engagement, Design, Editing) */}
              <g
                transform="translate(265, 115)"
                className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="70" height="18" rx="9" fill="#0b0b10" stroke="rgba(255,51,85,0.45)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ff3355" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">ENGAGE</text>
              </g>

              <g
                transform="translate(235, 70)"
                className={`transition-opacity duration-500 delay-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="50" height="18" rx="9" fill="#0b0b10" stroke="rgba(255,51,85,0.45)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ff3355" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">DESIGN</text>
              </g>

              <g
                transform="translate(200, 25)"
                className={`transition-opacity duration-500 delay-700 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="54" height="18" rx="9" fill="#0b0b10" stroke="rgba(255,51,85,0.5)" strokeWidth="1" />
                <circle cx="8" cy="9" r="2.5" fill="#ff3355" />
                <text x="16" y="12.5" fill="#ffffff" fontSize="7.5" fontWeight="700">EDITING</text>
              </g>
            </svg>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="w-full space-y-4 mt-2">
            {/* Left Card: Content Strategy */}
            <div className="rounded-2xl bg-[#0b0b10]/90 border border-[#ff2626]/30 p-5 shadow-[0_4px_25px_-5px_rgba(255,38,38,0.15)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#ff2626]/10 border border-[#ff2626]/30 flex items-center justify-center text-[#ff2626]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Content Strategy</h3>
                  <p className="text-[10px] tracking-wider uppercase font-semibold text-[#ff4d4d] font-mono">
                    Foundational Pillar
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#aaa6a0] leading-relaxed">
                Smart research, SEO, content planning and branding strategies that build a strong foundation for sustainable growth.
              </p>
            </div>

            {/* Right Card: Content Creation */}
            <div className="rounded-2xl bg-[#0b0b10]/90 border border-[#ff3355]/30 p-5 shadow-[0_4px_25px_-5px_rgba(255,51,85,0.15)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#ff3355]/10 border border-[#ff3355]/30 flex items-center justify-center text-[#ff3355]">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Content Creation</h3>
                  <p className="text-[10px] tracking-wider uppercase font-semibold text-[#ff667f] font-mono">
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
        {/* BOTTOM SUPPORTING STATEMENT / HEADLINE                         */}
        {/* Red & White Accent Palette                                    */}
        {/* ============================================================== */}
        <div
          className={`relative mt-12 md:mt-16 flex items-center justify-center transition-all duration-700 ease-out ${
            step >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle horizontal divider line passing through exact vertical center of pill */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/[0.08] pointer-events-none" />

          {/* Centered Pill Badge */}
          <Link
            href="mailto:contact@youtoogrow.com?subject=Strategy%20Call%20Application%20-%20YouTooGrow"
            className="group relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#070709] hover:bg-[#101014] border border-white/[0.12] hover:border-[#ff2626]/50 text-xs sm:text-sm font-semibold text-[#f7f4ef] shadow-lg hover:shadow-[0_0_25px_rgba(255,38,38,0.25)] transition-all duration-300"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#ff2626] shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span className="leading-none flex items-center gap-1">
              <span>Ready to become the #1 name in your</span>
              <span className="font-serif italic font-normal text-[#ff2626]">
                industry?
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
