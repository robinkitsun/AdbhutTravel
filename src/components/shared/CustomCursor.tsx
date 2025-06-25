"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const rafId = useRef<number>();

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      let current: HTMLElement | null = target;
      let hasPointer = false;
      while (current) {
        if (window.getComputedStyle(current).getPropertyValue('cursor') === 'pointer') {
          hasPointer = true;
          break;
        }
        current = current.parentElement;
      }
      setIsPointer(hasPointer);
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.7;
      dotY += (mouseY - dotY) * 0.7;
      followerX += (dotX - followerX) * 0.2;
      followerY += (dotY - followerY) * 0.2;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      rafId.current = requestAnimationFrame(animate);
    };
    
    document.body.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      if(rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className={cn('custom-cursor-dot', { 'pointer': isPointer })}
      />
      <div
        ref={followerRef}
        className={cn('custom-cursor-follower', { 'pointer': isPointer })}
      />
    </div>
  );
}
