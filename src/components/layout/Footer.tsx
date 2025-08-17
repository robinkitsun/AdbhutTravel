
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-secondary/50 text-foreground border-t">
      <div className="container py-12">
        {isHomePage && (
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                  src="https://www.youtube.com/embed/IfBDSc2Lb7U"
                  title="ADBHUT Profile Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="mb-12">
          <div className="flex justify-center items-center">
              <Image
                src="/images/services/Home/Adbhut-Affilications-Cetifications.png"
                alt="Certifications and Affiliations"
                width={1536}
                height={113}
                className="w-full max-w-6xl h-auto object-contain"
                data-ai-hint="certifications collage"
              />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-1">
            <Link href="/">
             <Logo />
            </Link>
             <p className="font-semibold text-foreground">Adbhut Travel And Event Pvt. Ltd.</p>
            <p className="text-sm text-muted-foreground">
              Our Effort Your Comfort <br />
              CIN: U63090HR2020PTC086874
            </p>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-headline font-semibold mb-2 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">Services</Link></li>
              <li><Link href="/mice" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">MICE</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-2">
            <h3 className="font-headline font-semibold mb-2 text-lg">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground">Stay updated with our latest travel deals, destinations, and stories. No spam, just travel inspiration.</p>
            <NewsletterForm />
            <div className="flex space-x-4 mt-6">
              <Link href="https://x.com/AdbhutTravel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/adbhuttravelagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/adbhut_travel_agency/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </Link>
               <Link href="https://www.linkedin.com/in/mohit-sharma-8517221b8/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/watch?v=IfBDSc2Lb7U" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t">
            <div>
                 <h3 className="font-headline font-semibold mb-4 text-lg">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">Policy & Terms of Service</Link></li>
                  <li><Link href="/cancellation-policy" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">Refund Policy</Link></li>
                  <li><Link href="/legal" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">Legal Information</Link></li>
                  <li><Link href="/career" className="text-muted-foreground hover:text-accent inline-block transition-transform duration-300 hover:-translate-y-1">Careers</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="font-headline font-semibold mb-4 text-lg">Contact</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                     <Link href="https://maps.app.goo.gl/PQE2gRmZKpLUZY7U9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted-foreground hover:text-accent transition-transform duration-300 hover:-translate-y-1">
                        <MapPin className="h-4 w-4 mt-1 shrink-0" />
                        <span>SCF 61, 1st Floor, Near Anaj Mandi Gate, Pehowa, Kurukshetra, Haryana-136128</span>
                     </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 shrink-0" />
                    <div>
                       <Link href="tel:18008905147" className="block text-muted-foreground hover:text-accent transition-transform duration-300 hover:-translate-y-1">Toll Free: 1800 890 5147</Link>
                       <Link href="tel:+919671825147" className="block text-muted-foreground hover:text-accent transition-transform duration-300 hover:-translate-y-1">Mobile: +91-9671825147</Link>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                     <Link href="mailto:info@adbhuttravel.in" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-transform duration-300 hover:-translate-y-1">
                        <Mail className="h-4 w-4 shrink-0" />
                        <span>info@adbhuttravel.in</span>
                     </Link>
                  </li>
                </ul>
            </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adbhut Travel And Event Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
