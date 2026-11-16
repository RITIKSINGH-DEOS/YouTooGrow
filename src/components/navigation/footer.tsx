import Link from "next/link";
import { footerNavigation } from "@/data/site-navigation.data";
import { ArrowUpRight, Youtube, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#060606] pt-16 pb-12 text-[#aaa6a0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-2xl font-black text-[#f7f4ef] tracking-tight">
                YouToo<span className="text-[#ff2626]">Grow</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2626]"></span>
            </Link>

            <p className="text-sm text-[#aaa6a0] max-w-sm leading-relaxed">
              We help creators, personal brands, and businesses turn content into compounding digital growth through
              strategic research, high-retention video engineering, and hands-off channel operations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-[#ff2626]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Growth Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f7f4ef] mb-4">
              Growth Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f7f4ef] transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Framework */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f7f4ef] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f7f4ef] transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Strategy Booking */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f7f4ef] mb-4">
              Growth Strategy
            </h4>
            <p className="text-xs text-[#6f6b67] mb-4 leading-relaxed">
              Book a 30-minute discovery call to receive a free audit of your channel retention and packaging.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff2626] hover:bg-[#d90808] text-white transition-colors"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6b67]">
          <div>
            &copy; {currentYear} YouTooGrow Agency. All rights reserved. &bull; We Turn Content Into Growth.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#aaa6a0] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#aaa6a0] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
