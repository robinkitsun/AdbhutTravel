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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Animate after scrolling a small amount (e.g., 50px)
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between overflow-x-hidden">
        <Link
          href="/"
          className={cn(
            "transition-transform duration-500 ease-in-out",
            !isScrolled ? "translate-x-8 scale-90" : "translate-x-0 scale-100"
          )}
        >
          <Logo />
        </Link>

        <nav
          className={cn(
            "hidden md:flex items-center font-medium transition-all duration-500 ease-in-out",
            !isScrolled ? "gap-4 scale-90 opacity-70" : "gap-16 scale-100 opacity-100"
          )}
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
          className={cn(
            "flex items-center gap-4 transition-transform duration-500 ease-in-out",
            !isScrolled ? "-translate-x-8 scale-90" : "translate-x-0 scale-100"
          )}
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
