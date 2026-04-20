import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rare Plant Vendors | The Botanical Event Directory",
  description: "Discover upcoming rare plant expos, markets, and verify vendors before the show.",
};

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <nav className="navbar">
          <div className="logo-container">
            <Image src="/brand-seal.png" alt="Rare Plant Vendors Seal" width={60} height={60} className="brand-seal" />
            <span className="logo-text">RarePlantVendors</span>
          </div>
          <div className="nav-links">
            <a href="#events">Upcoming Events</a>
            <a href="#vendors">Verified Sellers</a>
            <a href="#cultivar">CultivarID</a>
            <button className="btn-primary">For Vendors</button>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Rare Plant Vendors Directory. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
