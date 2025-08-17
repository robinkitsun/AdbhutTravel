
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-secondary/50 text-foreground border-t">
      <div className="container py-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adbhut Travel And Event Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
