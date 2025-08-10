
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
      fill="currentColor"
      aria-hidden="true"
      role="img"
      focusable="false"
      {...props}
    >
        <path
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.98 2.7 15.95 3.71 17.61L2.5 21.5L6.54 20.32C8.11 21.25 9.97 21.82 12.04 21.82H12.05C17.5 21.82 21.95 17.37 21.96 11.91C21.96 9.22 20.87 6.7 18.99 4.82C17.11 2.94 14.6 2 12.04 2ZM9.83 7.3C10.02 7.3 10.2 7.3 10.33 7.3C10.53 7.3 10.74 7.33 10.88 7.82C11.02 8.31 11.53 9.71 11.61 9.86C11.69 10 11.65 10.19 11.53 10.3C11.41 10.41 11.33 10.5 11.19 10.65C11.05 10.79 10.92 10.97 10.78 11.12C10.64 11.27 10.45 11.47 10.67 11.86C10.89 12.25 11.49 13.2 12.35 14.01C13.43 14.99 14.34 15.33 14.73 15.51C14.92 15.6 15.14 15.56 15.29 15.4C15.44 15.24 16.03 14.61 16.27 14.32C16.51 14.03 16.76 13.98 17 13.98C17.24 13.98 18.53 14.65 18.82 14.79C19.11 14.93 19.35 15.03 19.4 15.17C19.45 15.31 19.45 15.9 19.21 16.19C18.97 16.48 18.15 17.11 17.5 17.57C16.85 18.03 15.99 18.25 15.35 18.25C14.71 18.25 13.88 18.11 12.63 17.55C11.06 16.85 9.79 15.82 8.71 14.6C7.62 13.37 6.89 11.89 6.81 11.8C6.73 11.71 5.96 10.65 5.96 9.53C5.96 8.41 6.64 7.78 6.88 7.54C7.12 7.3 7.42 7.3 7.64 7.3H8.01C8.23 7.3 8.42 7.3 8.57 7.3L8.76 7.3H8.97C9.18 7.3 9.38 7.3 9.57 7.3H9.83Z"
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
