
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/mice", label: "MICE" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Animate over the first 80% of the viewport height (the hero section)
      const animationEndScroll = window.innerHeight * 0.8;
      const progress = Math.min(scrollY / animationEndScroll, 1);
      setAnimationProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define animation values based on scroll progress
  const startTranslatePx = 48;
  const endTranslatePx = 0;
  const currentTranslatePx = startTranslatePx * (1 - animationProgress);

  const startScaleVal = 0.9;
  const endScaleVal = 1.0;
  const currentScaleVal = startScaleVal + (endScaleVal - startScaleVal) * animationProgress;

  const startOpacityVal = 0.7;
  const endOpacityVal = 1.0;
  const currentOpacityVal = startOpacityVal + (endOpacityVal - startOpacityVal) * animationProgress;

  const startGapRem = 2; // Starts at ~gap-8
  const endGapRem = 4;   // Expands to ~gap-16 for a more pronounced effect
  const currentGapRem = startGapRem + (endGapRem - startGapRem) * animationProgress;

  const logoStyle = {
    transform: `translateX(${currentTranslatePx}px) scale(${currentScaleVal})`,
  };
  
  // Animate `gap` for more expansion, which is more performant than before due to other optimizations.
  const navStyle = {
    gap: `${currentGapRem}rem`,
    opacity: currentOpacityVal,
  };

  const consultationStyle = {
    transform: `translateX(${-currentTranslatePx}px) scale(${currentScaleVal})`,
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between overflow-x-hidden">
        <Link
          href="/"
          style={logoStyle}
        >
          <Logo />
        </Link>

        <nav
          style={navStyle}
          className="hidden md:flex items-center font-medium"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg transition-colors duration-300 hover:text-primary hover:font-bold whitespace-nowrap animated-underline pb-2",
                pathname === href ? "text-foreground font-bold" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div
          style={consultationStyle}
          className="flex items-center"
        >
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="mb-4">
                   <Logo />
                </Link>
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "hover:text-primary transition-colors",
                      pathname === href ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </Link>
                ))}
                <div className="border-t pt-6 mt-4">
                    <Button asChild className="w-full">
                        <Link href="/contact">Get Free Consultation</Link>
                    </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
