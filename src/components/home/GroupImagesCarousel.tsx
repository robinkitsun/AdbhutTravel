
"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/IMG-9291-scaled.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g2.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/IMG-9915-scaled.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/3ce2ac17-ec82-47eb-949f-4acbd0fa212b.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/a80b49d0-a460-4f9f-821d-5f4addf4beca.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g4.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/52738303_542253809601039_5092883468392595456_n.jpg",
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/PHOTO-2020-07-23-14-27-13-3.jpg",
];

export default function GroupImagesCarousel() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnFocusIn: true })
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsCarouselVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = carouselRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <section className="py-12 bg-secondary/50">
      <div className="container" ref={carouselRef}>
        <Carousel
          plugins={isCarouselVisible ? [autoplayPlugin.current] : []}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.play}
          className="w-full relative"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-8">
            {images.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-8 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 flex items-center justify-center h-80 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={imageUrl}
                    alt={`Group tour image ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
                    data-ai-hint="group travel"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border">
             <ChevronLeft className="size-6 text-foreground/70" />
          </CarouselPrevious>
           <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border">
            <ChevronRight className="size-6 text-foreground/70" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
