import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YouTooGrow | Premium YouTube & Instagram Growth Agency",
  description:
    "We help creators, personal brands, and businesses grow their digital presence through research-driven content strategy, cinematic editing, and end-to-end channel management.",
  keywords: [
    "YouTube Growth Agency",
    "Instagram Growth Agency",
    "Content Strategy",
    "Video Editing",
    "Channel Management",
    "YouTooGrow",
  ],
  authors: [{ name: "YouTooGrow" }],
  openGraph: {
    title: "YouTooGrow — We Turn Content Into Growth",
    description:
      "Strategic content research, creative execution, and complete YouTube & Instagram channel management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen bg-[#080808] text-[#f7f4ef] font-sans antialiased selection:bg-[#ff2626] selection:text-white">
        {children}
      </body>
    </html>
  );
}
