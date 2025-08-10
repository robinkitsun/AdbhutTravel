
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 32 32" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" 
        role="presentation" 
        focusable="false" 
        {...props}
    >
        <path 
            d="M19.34.46a14.73 14.73 0 0 0-16.88 16.88 14.73 14.73 0 0 0 4.3 10.3l-4.22 4.21 10.4-4.14a14.73 14.73 0 0 0 6.4 1.6h.01a14.73 14.73 0 0 0 14.7-14.73A14.73 14.73 0 0 0 19.34.46zm6.86 21.1a8.37 8.37 0 0 1-2.37 2.37A8.37 8.37 0 0 1 17.4 26.3a8.77 8.77 0 0 1-4.7-1.3l-.3-.18-3.4 1.35.18-.3 1.17-3.25-.2-.33a8.5 8.5 0 0 1-1.35-4.62 8.5 8.5 0 0 1 8.5-8.5h.36a8.5 8.5 0 0 1 8.5 8.5v.35z" 
            fill="currentColor"
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
            "h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white transition-transform duration-300 hover:scale-110",
            showPrompt ? 'animate-in zoom-in-50 slide-in-from-bottom-2' : ''
          )}
          aria-label="Chat on WhatsApp"
        >
          <Link href="https://wa.me/919802125147" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-8 w-8" />
          </Link>
        </Button>
    </div>
  );
}
