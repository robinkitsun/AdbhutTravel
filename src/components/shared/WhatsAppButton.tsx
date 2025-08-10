
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
      <path d="M16.75 13.96c-.25-.12-1.48-.72-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.17-.29.19-.54.06-.25-.12-1.07-.39-2.04-1.26-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.1-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-1.4-3.37-1.64-3.93-.23-.55-.47-.47-.64-.48h-.5c-.17 0-.43.06-.66.31-.23.25-.88.85-1.01 2.06-.13 1.21.88 2.39 1 2.56.12.17 1.75 2.78 4.24 3.72 2.5 1.12 2.5.75 2.94.72.43-.03 1.4-.58 1.6-1.14.2-.56.2-1.04.14-1.14-.06-.11-.23-.17-.48-.29z" />
      <path d="M20.5 3.4A12.25 12.25 0 0012 0 12.27 12.27 0 001.2 17.8l-1.2 4.2 4.3-1.1A12.25 12.25 0 0012 24a12.27 12.27 0 0012.2-12.2c0-3.2-1.2-6.2-3.4-8.5zM12 22.4a10.26 10.26 0 01-5.2-1.4l-.4-.2-3.8 1 1-3.7-.3-.4A10.27 10.27 0 011.8 12c0-5.6 4.6-10.2 10.2-10.2a10.16 10.16 0 017.2 3 10.16 10.16 0 013 7.2c0 5.6-4.6 10.2-10.2 10.2z" />
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
