
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
      role="img"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.1,0A16,16,0,0,0,5.6,26.4L0,32l5.8-5.5A16,16,0,1,0,16.1,0Zm7.5,23.2A8.4,8.4,0,0,1,21,24.8a4.4,4.4,0,0,1-1.4.9,1.2,1.2,0,0,1-.6.2,3.3,3.3,0,0,1-2.1-.9,11.5,11.5,0,0,1-4.2-3.8,11.4,11.4,0,0,1-2.6-5.6,5.7,5.7,0,0,1,1.8-4.5,1.5,1.5,0,0,1,1-.6,1,1,0,0,1,.8.1,1.5,1.5,0,0,1,.5.3,1.3,1.3,0,0,1,.4.9,4.2,4.2,0,0,1-.2,1.2.9.9,0,0,1-.4.5l-.6.9a9.6,9.6,0,0,0-1.8,3,8.3,8.3,0,0,0,3.1,6,10.6,10.6,0,0,0,5.5,2.9,3.5,3.5,0,0,0,1.3-.2.8.8,0,0,0,.7-.5,2.9,2.9,0,0,0,.4-1.4,1.2,1.2,0,0,0-.1-1l-.1-.1a.4.4,0,0,0-.5-.1h-.1A4.2,4.2,0,0,1,23.6,23.2Z"
      ></path>
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
