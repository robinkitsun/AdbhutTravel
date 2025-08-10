
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Presentation, Award, Users, Briefcase, Lightbulb, Map, Cog, Handshake, CalendarDays, Rocket } from "lucide-react";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef, useEffect, useState } from "react";

export default function MicePage() {
    const autoplayPlugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true, stopOnFocusIn: true }));
    const autoplayPlugin2 = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true, stopOnFocusIn: true }));
    
    const carousel1Ref = useRef<HTMLDivElement>(null);
    const carousel2Ref = useRef<HTMLDivElement>(null);

    const [isCarousel1Visible, setIsCarousel1Visible] = useState(false);
    const [isCarousel2Visible, setIsCarousel2Visible] = useState(false);
    
    useEffect(() => {
        const observerOptions = { threshold: 0.5 };

        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsCarousel1Visible(entry.isIntersecting);
            });
        }, observerOptions);

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsCarousel2Visible(entry.isIntersecting);
            });
        }, observerOptions);

        const currentCarousel1 = carousel1Ref.current;
        const currentCarousel2 = carousel2Ref.current;

        if (currentCarousel1) observer1.observe(currentCarousel1);
        if (currentCarousel2) observer2.observe(currentCarousel2);

        return () => {
            if (currentCarousel1) observer1.unobserve(currentCarousel1);
            if (currentCarousel2) observer2.unobserve(currentCarousel2);
        };
    }, []);

    const micePillars = [
        {
            icon: Users,
            title: "Meetings",
            description: "Targeted gatherings aimed at professional, academic, or special interest groups to facilitate discussion and collaboration."
        },
        {
            icon: Award,
            title: "Incentives",
            description: "Reward and motivate your team with exceptionally planned travel programs that inspire performance and loyalty."
        },
        {
            icon: Presentation,
            title: "Conferences",
            description: "Large-scale events focused on a specific theme or topic, bringing together experts and professionals to share knowledge."
        },
        {
            icon: Briefcase,
            title: "Exhibitions",
            description: "Showcase your brand and products at trade fairs and exhibitions with our comprehensive logistical support."
        }
    ];

    const miceServices = [
        {
            icon: Handshake,
            title: "Personalized Service",
            description: "MICE events require unique solutions. We offer personalized services to ensure your event is strategized, organized, and implemented to perfection."
        },
        {
            icon: Map,
            title: "Extensive Global Network",
            description: "Gain access to a vast range of hotels and services worldwide. We secure competitive rates without compromising on quality."
        },
        {
            icon: CalendarDays,
            title: "On-Site Management",
            description: "Our dedicated client managers provide professional on-site management, handling every detail so you can focus on your objectives."
        },
        {
            icon: Cog,
            title: "Logistics Management",
            description: "Let our experts manage the complexities of travel, accommodation, and event logistics for a seamless experience."
        },
        {
            icon: Rocket,
            title: "Team Building Activities",
            description: "Enhance your event with creative outdoor and team-building activities designed to foster collaboration and break the ice."
        },
        {
            icon: Lightbulb,
            title: "Creative Event Theming",
            description: "We design impressive and relevant themes for your meetings and events, backed by destination research to ensure you succeed."
        }
    ]

    const strategicImages = [
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g5.jpg", alt: "Business meeting in a modern office", dataAiHint: "business meeting" },
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g1.jpg", alt: "Corporate event presentation in a large hall", dataAiHint: "corporate presentation" },
    ];

    const incentiveImages = [
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g2.jpg", alt: "Group of colleagues on a travel incentive trip", dataAiHint: "team travel" },
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g3.jpg", alt: "Corporate group enjoying an outdoor activity", dataAiHint: "corporate activity" },
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/08/Mice-g4.jpg", alt: "Team members collaborating during a workshop", dataAiHint: "team workshop" },
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/07/Mice-Incentices-2.png", alt: "Team celebrating success on a mountain top", dataAiHint: "team success" },
        { src: "https://www.adbhuttravel.com/wp-content/uploads/2023/08/3ce2ac17-ec82-47eb-949f-4acbd0fa212b.jpg", alt: "Corporate group photo at an outdoor event", dataAiHint: "corporate group photo" },
    ];

    const metadata: Metadata = {
      title: "MICE & Corporate Travel",
      description: "Elevate your corporate events with Adbhut Travel. We provide end-to-end solutions for Meetings, Incentives, Conferences, and Exhibitions (MICE), from strategic planning to flawless execution.",
    };

  return (
    <>
      <section className="relative py-20 md:py-24 bg-secondary">
         <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ backgroundImage: "url('https://www.adbhuttravel.com/wp-content/uploads/2025/07/Mice-Hero-1.jpeg')" }}
          data-ai-hint="corporate meeting"
        ></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">MICE & Corporate Travel</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Elevating your corporate events with precision planning and flawless execution.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold">The Adbhut MICE Expertise</h2>
            <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
              MICE activities are centered on a specific theme or topic, aimed at professional, academic, or trade organizations. We specialize in bringing these events to life.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {micePillars.map((pillar) => (
                <Card key={pillar.title} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4">
                    <CardHeader className="p-2">
                        <div className="mx-auto bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <pillar.icon className="w-8 h-8 text-accent" />
                        </div>
                        <CardTitle className="font-headline text-xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2">
                        <p className="text-muted-foreground text-sm">{pillar.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Strategic Meetings & Seamless Conferences</h2>
              <p className="text-muted-foreground mb-6">
                Business growth requires more than office work; it demands global engagement. Adbhut Travel's MICE services handle the travel logistics for your VIPs and employees, allowing you to focus on productivity and prepare for your conference without a hassle.
              </p>
              <p className="text-muted-foreground">
                We offer our services across the world, from international trade fairs to conferences in the heart of India. Our vast network provides access to diverse venues and creative ideas, ensuring your meetings and conferences are both successful and memorable.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden" ref={carousel1Ref}>
               <Carousel 
                    plugins={isCarousel1Visible ? [autoplayPlugin.current] : []}
                    className="w-full relative"
                    opts={{ loop: true, align: "center", slidesToScroll: 1 }}
                    onMouseEnter={autoplayPlugin.current.stop}
                    onMouseLeave={autoplayPlugin.current.play}
                >
                    <CarouselContent className="-ml-4 md:-ml-8">
                      {strategicImages.map((img, i) => (
                        <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-10/12">
                           <div className="overflow-hidden rounded-lg">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={500}
                                className="w-full h-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                                data-ai-hint={img.dataAiHint}
                              />
                           </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                  </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden order-first md:order-last" ref={carousel2Ref}>
              <Carousel 
                plugins={isCarousel2Visible ? [autoplayPlugin2.current] : []}
                className="w-full relative" 
                opts={{ loop: true, align: "center", slidesToScroll: 1 }}
                onMouseEnter={autoplayPlugin2.current.stop}
                onMouseLeave={autoplayPlugin2.current.play}
              >
                    <CarouselContent className="-ml-4 md:-ml-8">
                      {incentiveImages.map((img, i) => (
                        <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-10/12">
                          <div className="overflow-hidden rounded-lg">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={500}
                                className="w-full h-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                                data-ai-hint={img.dataAiHint}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                  </Carousel>
            </div>
             <div className="order-last md:order-first">
              <h2 className="text-3xl font-headline font-bold mb-4">Motivational Incentive Travel Programs</h2>
              <p className="text-muted-foreground mb-6">
                In a competitive landscape, employee satisfaction is key. Reward your top performers with our expertly organized incentive tours, designed to boost motivation, promote sales, and foster loyalty. We handle the strategic planning and implementation, so you can enjoy the results.
              </p>
              <p className="text-muted-foreground">
                Our incentive tours can be combined with cultural exchanges or visits to major international trade shows, providing your team with invaluable insights and inspiration to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

       <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold">Our Comprehensive MICE Services</h2>
            <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
              We provide a full spectrum of services to ensure your corporate event is a resounding success from start to finish.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miceServices.map((service) => (
              <Card key={service.title} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 p-4">
                <CardHeader className="p-2">
                  <div className="mx-auto bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold">Let's Plan Your Next Corporate Event</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            Contact our MICE specialists today to receive a customized proposal and discover how we can elevate your next event.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Request a Proposal</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
