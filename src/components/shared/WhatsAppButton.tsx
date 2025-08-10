
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      focusable="false"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M18.4,16.59C18.33,16.5,17,15.75,16.78,15.66C16.54,15.57,16.36,15.53,16.18,15.77C16,16,15.46,16.64,15.3,16.83C15.14,17,15,17.04,14.7,16.9C14.4,16.77,13.25,16.33,12.06,15.34C11.16,14.61,10.55,13.7,10.38,13.45C10.22,13.2,10.34,13.06,10.46,12.94C10.57,12.82,10.73,12.63,10.86,12.47C10.99,12.33,11.04,12.2,11.12,12.04C11.2,11.88,11.16,11.72,11.1,11.6C11.04,11.48,9.5,7.94,9.25,7.38C9,6.82,8.75,6.9,8.58,6.89H8.06C7.88,6.89,7.6,6.95,7.36,7.2C7.12,7.45,6.5,8.1,6.38,9.36C6.26,10.63,7.24,11.86,7.36,12.04C7.48,12.22,9.13,15.11,11.76,16.2C14.4,17.28,14.4,16.8,14.88,16.76C15.37,16.72,16.5,16.03,16.72,15.4C16.94,14.78,16.94,14.15,16.88,14.04C16.81,13.93,16.63,13.86,16.38,13.75L18.4,16.59Z"
      />
      <path
        fillRule="evenodd"
        d="M12.06,2A10.13,10.13,0,0,0,2,12.16C2,15.5,3.1,18.4,5.1,20.6L3,23l2.5-1.5A10.13,10.13,0,0,0,12.06,23A10.13,10.13,0,1,0,12.06,2ZM9.67,19.38a8.31,8.31,0,0,1-4.47-1.3L5,17.92,4.8,18l-3,1.8,1.2-2.9-.2-.3a8.38,8.38,0,0,1-1.3-4.5,8.3,8.3,0,0,1,17-2.5,8.3,8.3,0,0,1-2.5,6,8.3,8.3,0,0,1-6,2.5Z"
      />
    </svg>
);


export function WhatsAppButton() {
  const [showPrompt, setShowPrompt] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2">
       {showPrompt && (
        <div className="relative flex items-center gap-2 rounded-md bg-background p-3 shadow-lg border animate-in fade-in-50 slide-in-from-bottom-2">
            <p className="text-sm font-medium text-foreground">Talk to us on WhatsApp</p>
            <button
                onClick={() => setShowPrompt(false)}
                className="p-1 rounded-full text-muted-foreground hover:bg-muted"
                aria-label="Dismiss WhatsApp prompt"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
       )}
        <Button
          asChild
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white transition-transform duration-300 hover:scale-110 p-2",
            showPrompt ? 'animate-in zoom-in-50 slide-in-from-bottom-2' : ''
          )}
          aria-label="Chat on WhatsApp"
        >
          <Link href="https://wa.me/919802125147" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-full w-full" />
          </Link>
        </Button>
    </div>
  );
}
