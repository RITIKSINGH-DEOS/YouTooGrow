export interface FeaturedShort {
  id: string;
  slotNumber: string;
  title: string;
  hookText: string;
  platform: "YouTube" | "Instagram";
  views: string;
  retention: string;
  category: string;
  tags: string[];
  // Paste your YouTube Shorts URL / ID or Instagram Reel link here when ready:
  videoUrl?: string;
  thumbnailUrl?: string;
}

export const featuredShorts: FeaturedShort[] = [
  {
    id: "short-1",
    slotNumber: "01",
    title: "The 3-Second Hook That Generated $45K Pipeline",
    hookText: "Contrarian SaaS breakdown with kinetic typography and audio pattern interrupts.",
    platform: "YouTube",
    views: "1.4M Views",
    retention: "88.4% Retention",
    category: "B2B SaaS / Founder",
    tags: ["5s Hook", "Kinetic Subtitles", "Audio Interrupts"],
    videoUrl: "", // Paste YouTube Short URL or ID here
    thumbnailUrl: "", // Optional preview thumbnail image
  },
  {
    id: "short-2",
    slotNumber: "02",
    title: "Vertical Retention Test: 0 to 2.1M Reach in 45 Days",
    hookText: "Fast-paced micro-documentary narrative engineered for Instagram Explore algorithm.",
    platform: "Instagram",
    views: "2.1M Reach",
    retention: "92.1% Watch Time",
    category: "Agency Growth Lab",
    tags: ["Explore Algorithm", "Rapid Pacing", "Color Grading"],
    videoUrl: "", // Paste Instagram Reel URL or embed here
    thumbnailUrl: "", // Optional preview thumbnail image
  },
  {
    id: "short-3",
    slotNumber: "03",
    title: "Revitalizing a Dead Channel with Visual Outliers",
    hookText: "Complete hook re-architecture that pulled 12x the creator's baseline channel average.",
    platform: "YouTube",
    views: "890K Views",
    retention: "84.2% Retention",
    category: "Creator Personal Brand",
    tags: ["Visual Outliers", "Retention Script", "CTR Framing"],
    videoUrl: "", // Paste YouTube Short URL or ID here
    thumbnailUrl: "", // Optional preview thumbnail image
  },
  {
    id: "short-4",
    slotNumber: "04",
    title: "High-Ticket Conversion Loop for Consultants",
    hookText: "Educational framework converting cold scroll traffic directly into booked calendar calls.",
    platform: "Instagram",
    views: "670K Views",
    retention: "86.5% Completion",
    category: "Consulting & Advisory",
    tags: ["Lead Generation", "Direct Call-to-Action", "Authority Hook"],
    videoUrl: "", // Paste Instagram Reel URL or embed here
    thumbnailUrl: "", // Optional preview thumbnail image
  },
];
