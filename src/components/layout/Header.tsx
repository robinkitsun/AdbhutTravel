
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="transition-transform duration-300 hover:-translate-y-1">
          <Logo />
        </Link>

        <nav
          className={cn(
            "hidden md:flex items-center text-sm font-medium transition-[gap] duration-500 ease-in-out",
            isScrolled ? "gap-10" : "gap-6"
          )}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-all duration-300 hover:text-primary hover:-translate-y-1 whitespace-nowrap",
                pathname === href ? "text-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex transition-transform duration-300 hover:-translate-y-1">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden transition-transform duration-300 hover:-translate-y-1">
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
