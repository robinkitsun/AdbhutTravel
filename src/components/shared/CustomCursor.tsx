"use client";

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>();

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    // We're keeping these intermediate variables for the momentum effect
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // This creates the smooth "momentum" effect
      dotX += (mouseX - dotX) * 0.7;
      dotY += (mouseY - dotY) * 0.7;
      followerX += (dotX - followerX) * 0.2;
      followerY += (dotY - followerY) * 0.2;

      if (follower) {
          follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if(rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={followerRef}
        className="custom-cursor-follower"
      />
    </div>
  );
}
