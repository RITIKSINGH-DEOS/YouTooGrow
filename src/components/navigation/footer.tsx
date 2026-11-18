import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] bg-[#050505] py-10 sm:py-12 text-center select-none">
      <div className="max-w-4xl mx-auto px-6 space-y-2">
        {/* Primary Line: Copyright, Agency Name & Founder Location */}
        <p className="text-xs sm:text-[13px] text-[#6f6b67] tracking-normal font-normal flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 gap-y-1">
          <span>&copy; {currentYear} YouTooGrow YouTube &amp; Instagram Growth Agency</span>
          <span className="text-[#7f7a75]">Ritik Singh, IN</span>
        </p>

        {/* Secondary Line: Legal Links */}
        <div className="flex items-center justify-center gap-2.5 text-xs text-[#524f4b]">
          <Link
            href="#contact"
            className="hover:text-[#aaa6a0] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-[#3a3835]">&middot;</span>
          <Link
            href="#contact"
            className="hover:text-[#aaa6a0] transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
