
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        aria-hidden="true" 
        role="img" 
        focusable="false" 
        {...props}
    >
        <path d="M16.75,13.96C17,13.96,18.29,14.64,18.58,14.78C18.87,14.92,19.1,15.02,19.16,15.16C19.22,15.3,19.22,15.89,18.98,16.18C18.74,16.47,17.92,17.1,17.27,17.56C16.62,18.02,15.76,18.24,15.12,18.24C14.48,18.24,13.65,18.1,12.4,17.54C10.83,16.84,9.56,15.81,8.48,14.59C7.39,13.36,6.66,11.88,6.58,11.79C6.5,11.7,5.73,10.64,5.73,9.52C5.73,8.4,6.41,7.77,6.65,7.53C6.89,7.29,7.19,7.29,7.41,7.29H7.78C8,7.29,8.19,7.29,8.34,7.29L8.53,7.29H8.74C8.95,7.29,9.15,7.29,9.34,7.29H9.6C9.79,7.29,9.97,7.29,10.1,7.29C10.3,7.29,10.51,7.32,10.65,7.81C10.79,8.3,11.3,9.7,11.38,9.85C11.46,9.99,11.42,10.18,11.3,10.29C11.18,10.4,11.1,10.49,10.96,10.64C10.82,10.78,10.69,10.96,10.55,11.11C10.41,11.26,10.22,11.46,10.44,11.85C10.66,12.24,11.26,13.19,12.12,14C13.2,14.98,14.11,15.32,14.5,15.5C14.69,15.59,14.91,15.55,15.06,15.39C15.21,15.23,15.8,14.6,16.04,14.31C16.28,14.02,16.53,13.97,16.75,13.96M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22C13.98,22,15.85,21.46,17.4,20.54L22,22L20.54,17.4C21.46,15.85,22,13.98,22,12C22,6.47,17.5,2,12,2Z"></path>
    </svg>
);


export function WhatsAppButton() {
  const [showPrompt, setShowPrompt] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
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
            "h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300 hover:scale-110",
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
