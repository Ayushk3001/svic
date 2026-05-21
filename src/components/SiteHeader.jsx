"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader({ common, navItems }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);

      const current = navItems.reduce(
        (active, item) => {
          const element = document.querySelector(item.href);
          if (!element) return active;

          const top = element.getBoundingClientRect().top;
          if (top <= 150 && top > active.top) {
            return { href: item.href, top };
          }

          return active;
        },
        { href: "#hero", top: -Infinity }
      );

      setActiveHash(current.href);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [navItems]);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0a14]/72 px-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-all duration-300 ease-out sm:px-6 lg:px-10",
        isScrolled ? "py-2 supports-[backdrop-filter]:bg-[#0a0a14]/82" : "py-3 sm:py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#hero" className="group flex min-w-0 items-center gap-3 transition duration-300 hover:opacity-95">
          <Image
            src="/images/logo.png"
            alt={common.logoAlt}
            width={54}
            height={54}
            className={cn(
              "rounded-lg object-contain brightness-110 drop-shadow-[0_0_20px_rgba(245,197,24,0.18)] transition-all duration-300",
              isScrolled ? "h-9 w-9 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-12 sm:w-12"
            )}
            priority
          />
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300 transition-colors duration-300 group-hover:text-amber-200">
              {common.established}
            </p>
            <h1 className="max-w-[145px] truncate text-xs font-extrabold tracking-tight min-[420px]:max-w-[190px] sm:max-w-none sm:text-base">
              {common.instituteName}
            </h1>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex">
          {navItems.map((item) => {
            const isActive = activeHash === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-[linear-gradient(90deg,transparent,#f5c518,#0d9488,transparent)] after:transition-transform after:duration-300 hover:text-amber-300",
                  isActive ? "text-amber-200 after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href="tel:+919448201966" />}
            nativeButton={false}
            variant="secondary"
            className="hidden h-auto items-center gap-2 rounded-full border border-amber-200/30 bg-amber-300 px-4 py-2 text-xs font-black text-slate-950 shadow-[0_0_0_rgba(245,197,24,0)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-[0_0_28px_rgba(245,197,24,0.42)] sm:flex"
          >
            <Phone className="h-4 w-4" />
            {common.phoneCta}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
