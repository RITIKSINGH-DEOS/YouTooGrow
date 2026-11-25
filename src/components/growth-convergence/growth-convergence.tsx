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
  // Path length for desktop curves is ~440px. We use 450 for complete coverage.
  const desktopPathLength = 450;
  const isDrawingDesktop = step >= 2;
  const desktopDashOffset = isDrawingDesktop ? 0 : desktopPathLength;

  // Mobile path length is ~278px. We use 290 for complete coverage.
  const mobilePathLength = 290;
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
          {/* TOP CENTRAL CONVERGENCE ACTION: CIRCULAR BOOK A CALL BUTTON */}
          {/* Revealing only when curves converge at the peak (step >= 3) */}
          {/* Balanced glow: refined, cinematic, and glare-free          */}
          {/* ============================================================ */}
          <div className="absolute top-[96px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Link
              href="mailto:contact@youtoogrow.com?subject=Strategy%20Call%20Application%20-%20YouTooGrow"
              className={`group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#f83232] via-[#e61919] to-[#b30808] text-white shadow-[0_0_22px_rgba(255,38,38,0.35),0_6px_20px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,0.3),inset_0_-3px_6px_rgba(0,0,0,0.5)] hover:shadow-[0_0_32px_rgba(255,38,38,0.55),0_8px_25px_rgba(0,0,0,0.7),inset_0_2px_3px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) cursor-pointer select-none ${
                step >= 3
                  ? "scale-100 opacity-100 pointer-events-auto"
                  : "scale-50 opacity-0 pointer-events-none"
              }`}
            >
              {/* Inner decorative concentric border ring */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-white/20 pointer-events-none" />

              {/* Top subtle highlight reflection */}
              <div className="absolute top-2 w-8 sm:w-10 h-2.5 bg-white/25 rounded-full blur-[1px] pointer-events-none" />

              {/* Text: BOOK A CALL */}
              <div className="flex flex-col items-center justify-center text-center leading-[1.15] select-none z-10">
                <span className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  BOOK
                </span>
                <span className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  A CALL
                </span>
              </div>
            </Link>
          </div>

          {/* SVG Canvas for Dual Curved Glowing Paths & Floating Badges */}
          <svg
            viewBox="0 0 1200 640"
            className="w-full h-auto overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Sphere Ambient Radial Glow - Subdued & Balanced */}
              <radialGradient id="sphereRadialGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff2626" stopOpacity="0.16" />
                <stop offset="60%" stopColor="#ff2626" stopOpacity="0.04" />
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

            {/* Ambient Background Aura behind button (Balanced) */}
            <circle
              cx="600"
              cy="96"
              r="85"
              fill="url(#sphereRadialGlow)"
              className={`transition-all duration-1000 ${
                step >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            />

            {/* Concentric Orbital Rings around convergence peak */}
            <g
              className={`transition-all duration-1000 ${
                step >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              {/* Inner ring */}
              <circle
                cx="600"
                cy="96"
                r="70"
                fill="none"
                stroke="rgba(255, 38, 38, 0.28)"
                strokeWidth="1"
                className="animate-[spin_40s_linear_infinite]"
                strokeDasharray="4 6"
              />
              {/* Mid ring */}
              <circle
                cx="600"
                cy="96"
                r="95"
                fill="none"
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="0.8"
                className="animate-[spin_55s_linear_infinite_reverse]"
                strokeDasharray="3 5"
              />
              {/* Outer ring */}
              <circle
                cx="600"
                cy="96"
                r="120"
                fill="none"
                stroke="rgba(255, 38, 38, 0.10)"
                strokeWidth="0.6"
                strokeDasharray="2 6"
              />
            </g>

            {/* ========================================================== */}
            {/* LEFT CURVE (Vivid Red) - from Left Card to Circular Button */}
            {/* Start: (365, 475) -> End: (550, 96)                       */}
            {/* ========================================================== */}
            <g
              className={`transition-opacity duration-300 ${
                activePillar === "right" ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Wide Bloom Layer */}
              <path
                d="M 365 475 C 460 475, 505 240, 550 96"
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
                d="M 365 475 C 460 475, 505 240, 550 96"
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
                d="M 365 475 C 460 475, 505 240, 550 96"
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
            {/* RIGHT CURVE (Crimson Red) - from Right Card to Button      */}
            {/* Start: (835, 475) -> End: (650, 96)                       */}
            {/* ========================================================== */}
            <g
              className={`transition-opacity duration-300 ${
                activePillar === "left" ? "opacity-35" : "opacity-100"
              }`}
            >
              {/* Wide Bloom Layer */}
              <path
                d="M 835 475 C 740 475, 695 240, 650 96"
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
                d="M 835 475 C 740 475, 695 240, 650 96"
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
                d="M 835 475 C 740 475, 695 240, 650 96"
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
              transform="translate(325, 438)"
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
              transform="translate(405, 328)"
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
              transform="translate(424, 182)"
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
              transform="translate(792, 438)"
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
              transform="translate(739, 328)"
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
              transform="translate(692, 182)"
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
        {/* Tall vertical sweep with circular BOOK A CALL at top summit    */}
        {/* ============================================================== */}
        <div className="md:hidden flex flex-col items-center">
          {/* Mobile Animated SVG Flow with Circular Summit Button */}
          <div className="relative w-full max-w-[360px] h-[305px] min-[380px]:h-[325px] my-3">
            {/* Mobile Top Circular BOOK A CALL Button (reveals when step >= 3) */}
            <div className="absolute top-[17.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Link
                href="mailto:contact@youtoogrow.com?subject=Strategy%20Call%20Application%20-%20YouTooGrow"
                className={`group relative flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-gradient-to-b from-[#f83232] via-[#e61919] to-[#b30808] text-white shadow-[0_0_20px_rgba(255,38,38,0.35),0_5px_16px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.3),inset_0_-2px_5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_28px_rgba(255,38,38,0.5),0_6px_18px_rgba(0,0,0,0.7)] active:scale-95 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) cursor-pointer select-none ${
                  step >= 3
                    ? "scale-100 opacity-100 pointer-events-auto"
                    : "scale-50 opacity-0 pointer-events-none"
                }`}
              >
                <div className="absolute inset-1.5 rounded-full border border-white/20 pointer-events-none" />
                <div className="flex flex-col items-center justify-center text-center leading-[1.15] select-none">
                  <span className="text-[11px] font-black tracking-widest text-white uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    BOOK
                  </span>
                  <span className="text-[11px] font-black tracking-widest text-white uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    A CALL
                  </span>
                </div>
              </Link>
            </div>

            <svg viewBox="0 0 360 320" className="w-full h-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="mobLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff2626" />
                  <stop offset="55%" stopColor="#ff4d4d" />
                  <stop offset="100%" stopColor="#ffa3a3" />
                </linearGradient>
                <linearGradient id="mobRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#e11d48" />
                  <stop offset="55%" stopColor="#ff3355" />
                  <stop offset="100%" stopColor="#ffa3b0" />
                </linearGradient>
              </defs>

              {/* Ambient radial glow at summit (Balanced) */}
              <circle
                cx="180"
                cy="56"
                r="66"
                fill="url(#sphereRadialGlow)"
                className={`transition-all duration-1000 ${
                  step >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              />

              {/* Subtle Orbital Rings around mobile summit */}
              <g
                className={`transition-all duration-1000 ${
                  step >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <circle
                  cx="180"
                  cy="56"
                  r="58"
                  fill="none"
                  stroke="rgba(255, 38, 38, 0.24)"
                  strokeWidth="0.9"
                  strokeDasharray="3 5"
                />
                <circle
                  cx="180"
                  cy="56"
                  r="74"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="0.7"
                  strokeDasharray="2 5"
                />
              </g>

              {/* Left Curve - Tall Dramatic Sweep */}
              <g>
                <path
                  d="M 42 304 C 96 304, 118 175, 136 56"
                  fill="none"
                  stroke="url(#mobLeftGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.45"
                  filter="drop-shadow(0 0 8px rgba(255,38,38,0.6))"
                  style={{
                    strokeDasharray: mobilePathLength,
                    strokeDashoffset: mobileDashOffset,
                    transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                  }}
                />
                <path
                  d="M 42 304 C 96 304, 118 175, 136 56"
                  fill="none"
                  stroke="#fff5f5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: mobilePathLength,
                    strokeDashoffset: mobileDashOffset,
                    transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                  }}
                />
              </g>

              {/* Right Curve - Tall Dramatic Sweep */}
              <g>
                <path
                  d="M 318 304 C 264 304, 242 175, 224 56"
                  fill="none"
                  stroke="url(#mobRightGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.45"
                  filter="drop-shadow(0 0 8px rgba(225,29,72,0.6))"
                  style={{
                    strokeDasharray: mobilePathLength,
                    strokeDashoffset: mobileDashOffset,
                    transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                  }}
                />
                <path
                  d="M 318 304 C 264 304, 242 175, 224 56"
                  fill="none"
                  stroke="#fff5f5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: mobilePathLength,
                    strokeDashoffset: mobileDashOffset,
                    transition: "stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                  }}
                />
              </g>

              {/* Mobile Badges - Left (Strategy, SEO, Branding) */}
              <g
                transform="translate(4, 258)"
                className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="66" height="20" rx="10" fill="#0b0b10" stroke="rgba(255,38,38,0.45)" strokeWidth="1" />
                <circle cx="9" cy="10" r="2.5" fill="#ff2626" />
                <text x="17" y="13.5" fill="#ffffff" fontSize="8" fontWeight="700">STRATEGY</text>
              </g>

              <g
                transform="translate(49, 200)"
                className={`transition-opacity duration-500 delay-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="46" height="20" rx="10" fill="#0b0b10" stroke="rgba(255,38,38,0.45)" strokeWidth="1" />
                <circle cx="9" cy="10" r="2.5" fill="#ff2626" />
                <text x="17" y="13.5" fill="#ffffff" fontSize="8" fontWeight="700">SEO</text>
              </g>

              <g
                transform="translate(47, 125)"
                className={`transition-opacity duration-500 delay-700 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="66" height="20" rx="10" fill="#0b0b10" stroke="rgba(255,38,38,0.5)" strokeWidth="1" />
                <circle cx="9" cy="10" r="2.5" fill="#ff2626" />
                <text x="17" y="13.5" fill="#ffffff" fontSize="8" fontWeight="700">BRANDING</text>
              </g>

              {/* Mobile Badges - Right (Engagement, Design, Editing) */}
              <g
                transform="translate(290, 258)"
                className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="66" height="20" rx="10" fill="#0b0b10" stroke="rgba(255,51,85,0.45)" strokeWidth="1" />
                <circle cx="9" cy="10" r="2.5" fill="#ff3355" />
                <text x="17" y="13.5" fill="#ffffff" fontSize="8" fontWeight="700">ENGAGE</text>
              </g>

              <g
                transform="translate(265, 200)"
                className={`transition-opacity duration-500 delay-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="54" height="20" rx="10" fill="#0b0b10" stroke="rgba(255,51,85,0.45)" strokeWidth="1" />
                <circle cx="9" cy="10" r="2.5" fill="#ff3355" />
                <text x="17" y="13.5" fill="#ffffff" fontSize="8" fontWeight="700">DESIGN</text>
              </g>

              <g
                transform="translate(247, 125)"
                className={`transition-opacity duration-500 delay-700 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              >
                <rect x="0" y="0" width="56" height="20" rx="10" fill="#0b0b10" stroke="rgba(255,51,85,0.5)" strokeWidth="1" />
                <circle cx="9" cy="10" r="2.5" fill="#ff3355" />
                <text x="17" y="13.5" fill="#ffffff" fontSize="8" fontWeight="700">EDITING</text>
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
