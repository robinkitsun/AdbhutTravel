
"use client";

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScrollToBottomButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if not at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
      setIsVisible(!isAtBottom);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToBottom}
      className={cn(
        'fixed bottom-16 left-4 z-50 rounded-full shadow-lg transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Scroll to bottom"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowDown className="h-6 w-6" />
    </Button>
  );
}
