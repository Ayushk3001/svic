import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Shree Venkateshwara Institute of Commerce | Chikkamagaluru",
  description: "Karnataka's trusted institute for Typewriting, Shorthand, Computer education, 100% result-focused training, and career-ready commerce skills since 1975.",
  openGraph: {
    title: "Shree Venkateshwara Institute of Commerce",
    description: "50+ years, 25,000+ students, and result-focused commerce skill training in Chikkamagaluru, Karnataka.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-amber-100 font-sans">
        {children}
      </body>
    </html>
  );
}
