
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { NewsletterForm } from "../shared/NewsletterForm";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-primary text-secondary-foreground border-t">
       <div className="container pt-16 pb-8">
            <div className="mb-12 text-center">
                 <Image src="/images/services/Home/Adbhut-Affilications-Cetifications.png" alt="Accreditations" width={1200} height={100} className="mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                {/* Company Info */}
                <div className="space-y-4">
                    <Logo />
                    <p className="font-bold">Adbhut Travel And Event Pvt. Ltd.</p>
                    <p className="text-muted-foreground">Our Effort Your Comfort</p>
                    <p className="text-muted-foreground text-xs">CIN: U63090HR2020PTC086874</p>
                    <div className="flex space-x-3 pt-2">
                        <Link href="https://www.facebook.com/adbhuttravelagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent"><Facebook /></Link>
                        <Link href="https://www.instagram.com/adbhut_travel_agency/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent"><Instagram /></Link>
                        <Link href="https://www.youtube.com/watch?v=IfBDSc2Lb7U" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent"><Youtube /></Link>
                        <Link href="https://www.linkedin.com/in/mohit-sharma-8517221b8/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent"><Linkedin /></Link>
                        <Link href="https://x.com/AdbhutTravel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent"><Twitter /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h3 className="font-headline font-semibold text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="text-muted-foreground hover:text-accent animated-underline">About Us</Link></li>
                        <li><Link href="/services" className="text-muted-foreground hover:text-accent animated-underline">Services</Link></li>
                        <li><Link href="/mice" className="text-muted-foreground hover:text-accent animated-underline">MICE</Link></li>
                        <li><Link href="/contact" className="text-muted-foreground hover:text-accent animated-underline">Contact Us</Link></li>
                        <li><Link href="/offers" className="text-muted-foreground hover:text-accent animated-underline">Offers</Link></li>
                    </ul>
                </div>

                 {/* Legal Links */}
                <div className="space-y-3">
                    <h3 className="font-headline font-semibold text-lg">Legal</h3>
                     <ul className="space-y-2">
                        <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-accent animated-underline">Policy & Terms of Service</Link></li>
                        <li><Link href="/cancellation-policy" className="text-muted-foreground hover:text-accent animated-underline">Refund Policy</Link></li>
                        <li><Link href="/legal" className="text-muted-foreground hover:text-accent animated-underline">Legal Information</Link></li>
                        <li><Link href="/career" className="text-muted-foreground hover:text-accent animated-underline">Careers</Link></li>
                    </ul>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-3">
                    <h3 className="font-headline font-semibold text-lg">Contact</h3>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0"/>
                            <span>SCF 61, 1st Floor, Near Anaj Mandi Gate, Pehowa, Kurukshetra, Haryana-136128</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 mt-1 text-accent flex-shrink-0"/>
                            <div>
                                <Link href="tel:18008905147" className="hover:text-accent">Toll Free: 1800 890 5147</Link><br/>
                                <Link href="tel:+919671825147" className="hover:text-accent">Mobile: +91-9671825147</Link>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 mt-1 text-accent flex-shrink-0"/>
                            <Link href="mailto:info@adbhuttravel.in" className="hover:text-accent">info@adbhuttravel.in</Link>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
       <div className="bg-secondary/50 text-foreground border-t">
           <div className="container py-4">
                <div className="text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Adbhut Travel And Event Pvt. Ltd. All Rights Reserved.</p>
                </div>
           </div>
       </div>
    </footer>
  );
}
