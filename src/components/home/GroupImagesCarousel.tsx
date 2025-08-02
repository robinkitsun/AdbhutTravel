"use client";

import React from "react";
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
  "https://www.adbhuttravel.com/wp-content/uploads/2023/08/IMG-9915-scaled.jpg"
];

export default function GroupImagesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-12 bg-secondary/50">
      <div className="container">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
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
          
          <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-background/50 hover:bg-background/80 shadow-md border-border border flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity">
             <ChevronLeft className="size-6 text-foreground/70" />
          </CarouselPrevious>
           <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-background/50 hover:bg-background/80 shadow-md border-border border flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity">
            <ChevronRight className="size-6 text-foreground/70" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
