
"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/mice", label: "MICE" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

const morePageLinks = [
    { href: "/offers", label: "Offers" },
    { href: "/trademarks", label: "Trademarks" },
    { href: "/affiliations", label: "Affiliations" },
    { href: "https://northcabs.in", label: "Cab Booking" },
    { href: "https://visitkurukshetra.in", label: "Visit Kurukshetra" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-base transition-colors duration-300 hover:text-primary whitespace-nowrap animated-underline pb-1",
                pathname === href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={cn(
                "text-base transition-colors duration-300 hover:text-primary whitespace-nowrap animated-underline pb-1 flex items-center gap-1 group text-muted-foreground"
              )}>
                More
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {morePageLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link 
                    href={link.href} 
                    className="w-full"
                    {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center">
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
              <nav className="grid gap-2 text-lg font-medium mt-8">
                <Link href="/" className="mb-4">
                   <Logo />
                </Link>
                {navLinks.map(({ href, label }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "block px-4 py-2 rounded-md hover:text-primary hover:bg-muted transition-colors",
                        pathname === href ? "text-foreground bg-muted" : "text-muted-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="border-t pt-4 mt-2">
                     <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground">More Options</h3>
                     {morePageLinks.map((link) => (
                         <SheetClose asChild key={link.href}>
                             <Link 
                                href={link.href} 
                                className={cn("block px-4 py-2 rounded-md hover:text-primary hover:bg-muted transition-colors text-muted-foreground", pathname === link.href && "text-foreground bg-muted" )}
                                {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                             >
                                 {link.label}
                            </Link>
                         </SheetClose>
                     ))}
                </div>
                <div className="border-t pt-6 mt-4">
                    <SheetClose asChild>
                        <Button asChild className="w-full">
                            <Link href="/contact">Get Free Consultation</Link>
                        </Button>
                    </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
