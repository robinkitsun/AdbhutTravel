"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const certificateLogos = [
  { src: 'https://placehold.co/130x40.png', alt: 'Ministry of Tourism', width: 130, height: 40, dataAiHint: "tourism ministry logo" },
  { src: 'https://placehold.co/80x40.png', alt: 'IATA', width: 80, height: 40, dataAiHint: "IATA logo" },
  { src: 'https://placehold.co/80x40.png', alt: 'TAAI', width: 80, height: 40, dataAiHint: "TAAI logo" },
  { src: 'https://placehold.co/90x40.png', alt: 'TAFI', width: 90, height: 40, dataAiHint: "TAFI logo" },
  { src: 'https://placehold.co/140x40.png', alt: 'Outbound Tour Operators Association of India', width: 140, height: 40, dataAiHint: "OTOAI logo" },
  { src: 'https://placehold.co/70x40.png', alt: 'ETAA', width: 70, height: 40, dataAiHint: "ETAA logo" },
  { src: 'https://placehold.co/90x40.png', alt: 'Association of Domestic Tour Operators of India', width: 90, height: 40, dataAiHint: "adtoi logo" },
  { src: 'https://placehold.co/130x40.png', alt: 'Haryana Tourism', width: 130, height: 40, dataAiHint: "haryana tourism logo" },
  { src: 'https://placehold.co/80x40.png', alt: 'AHK', width: 80, height: 40, dataAiHint: "AHK logo" },
];


export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-secondary/50 text-foreground border-t">
      <div className="container py-12 px-6">
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
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-6">
            {certificateLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                data-ai-hint={logo.dataAiHint}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
             <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting unforgettable travel experiences. <br />
              CIN: U63090HR2020PTC086874
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/AdbhutTravel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/adbhuttravelagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/adbhut_travel_agency/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
               <Link href="https://www.linkedin.com/in/mohit-sharma-8517221b8/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/watch?v=IfBDSc2Lb7U" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/mice" className="text-muted-foreground hover:text-primary">MICE</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/career" className="text-muted-foreground hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>SCF 61, 1st Floor, Near Anaj Mandi Gate, Pehowa, Kurukshetra, Haryana-136128</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>1800 890 5147 / +91-9671825147</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@adbhuttravel.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.749553535934!2d76.58229987455806!3d29.98569032331562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e63755b412991%3A0x19a00b8ec9ce0d88!2sAdbhut%20Travel%20And%20Event%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682586716752!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Adbhut Travel Location on Google Maps"
          ></iframe>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adbhut Travel And Event Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
