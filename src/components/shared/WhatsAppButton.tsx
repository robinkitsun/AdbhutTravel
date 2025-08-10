
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      aria-hidden="true"
      role="img"
      focusable="false"
      {...props}
    >
        <path fill="#25D366" d="M43.6,8.3C38.8,3.5,31.7,1,24,1C11.3,1,1,11.3,1,24c0,4.2,1.1,8.3,3.2,11.9l-3.6,10.6l11-3.2c3.4,1.9,7.3,3,11.4,3h0.1c12.7,0,23-10.3,23-23C46.1,16.3,46,12.1,43.6,8.3z"/>
        <path fill="#fff" d="M35.6,29.9c-0.2-0.5-1.1-0.8-2.3-1.4c-1.2-0.6-7-3.4-8.1-3.8c-1.1-0.4-1.9-0.6-2.7,0.6c-0.8,1.2-3.1,3.8-3.8,4.6c-0.7,0.8-1.4,0.9-2.6,0.3c-1.2-0.6-5.1-1.9-9.6-6c-3.5-3.1-5.9-7-6.6-8.1c-0.7-1.2-0.1-1.8,0.5-2.4c0.6-0.6,1.2-1.4,1.8-2.1c0.6-0.7,0.8-1.2,1.2-2c0.4-0.8,0.2-1.5-0.1-2.1c-0.3-0.6-2.7-6.5-3.7-8.9c-0.9-2.3-1.9-1.9-2.6-1.9c-0.6,0-1.4,0-2.1,0s-1.9,0.3-2.9,1.4c-1,1.1-3.8,3.7-3.8,9c0,5.3,3.9,10.4,4.4,11.1c0.5,0.7,7.7,12.5,18.8,17.4c2.6,1.2,4.9,1.8,6.8,2.3c3.2,0.8,5.8,0.5,7.5-1c2-1.8,5.8-6,6.6-7.1c0.8-1.1,1.6-2,1.4-2.6C37.4,31.3,36.2,30.8,35.6,29.9z"/>
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
