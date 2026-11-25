import { NavLink } from "@/types/agency.types";

export const navigationLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#workflow" },
  { label: "Proof in Motion", href: "#proof" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Why YouTooGrow", href: "#why-us" },
];

export const footerNavigation = {
  services: [
    { label: "YouTube Growth", href: "#services" },
    { label: "Instagram Scaling", href: "#services" },
    { label: "Content Strategy & Research", href: "#services" },
    { label: "High-Retention Video Editing", href: "#services" },
    { label: "Channel Management", href: "#services" },
  ],
  company: [
    { label: "How We Work", href: "#workflow" },
    { label: "Proof in Motion", href: "#proof" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Why YouTooGrow", href: "#why-us" },
  ],
  socials: [
    { label: "YouTube", href: "https://youtube.com", target: "_blank" },
    { label: "Instagram", href: "https://instagram.com", target: "_blank" },
    { label: "LinkedIn", href: "https://linkedin.com", target: "_blank" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
