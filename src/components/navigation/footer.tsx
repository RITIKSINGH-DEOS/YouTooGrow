import Link from "next/link";
import { Youtube, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] py-12 text-[#aaa6a0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Minimalist Brand Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group mb-2">
              <span className="text-2xl font-black text-[#f7f4ef] tracking-tight">
                YouToo<span className="text-[#ff2626]">Grow</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626]"></span>
            </Link>
            <p className="text-xs text-[#6f6b67] tracking-wide uppercase font-medium">
              We Turn Content Into Growth &bull; Global Operations
            </p>
          </div>

          {/* Clean Horizontal Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-wider text-[#aaa6a0]">
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#workflow" className="hover:text-white transition-colors">
              How We Work
            </Link>
            <Link href="#proof" className="hover:text-white transition-colors">
              Proof
            </Link>
            <Link href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="#why-us" className="hover:text-white transition-colors">
              Why Us
            </Link>
            <Link
              href="#contact"
              className="text-[#ff2626] hover:text-[#d90808] transition-colors inline-flex items-center gap-1"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 text-[#ff2626]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6b67]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00b67a] animate-pulse"></span>
            <span>Accepting select creator &amp; brand partnerships for Q1</span>
          </div>

          <div className="flex items-center gap-6">
            <span>&copy; {currentYear} YouTooGrow. All rights reserved.</span>
            <Link href="#" className="hover:text-[#aaa6a0] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#aaa6a0] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
