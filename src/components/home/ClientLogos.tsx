
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

const logos = [
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/TAAI-e1754152554284.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/TAFI-e1754152541312.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/IATA-e1754152528703.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/HARYANA-TOURISM-e1754152516429.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/OTOAI-e1754152503252.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/ADTOI-e1754152489812.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/ETAA-e1754152478531.png",
  "https://www.adbhuttravel.com/wp-content/uploads/2025/07/MOT-e1754152464837.png",
];

export default function ClientLogos() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-8 bg-secondary/50">
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
            {logos.map((logoUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-8 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1 flex items-center justify-center h-20">
                  <Image
                    src={logoUrl}
                    alt={`Client logo ${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation Buttons */}
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
