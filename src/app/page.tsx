export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f7f4ef] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#101010] text-xs font-semibold uppercase tracking-wider text-[#ff2626]">
          <span className="w-2 h-2 rounded-full bg-[#ff2626] animate-pulse"></span>
          YouTooGrow Architecture Ready
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          We Turn Content Into <span className="font-serif italic font-normal text-[#ff2626]">Growth.</span>
        </h1>
        <p className="text-[#aaa6a0] text-lg">
          Project foundation and design tokens initialized. Ready for Phase 2 component assembly.
        </p>
      </div>
    </main>
  );
}
