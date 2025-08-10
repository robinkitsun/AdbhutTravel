
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Presentation, Award, Users, Briefcase, Lightbulb, Map, Cog, Handshake, CalendarDays, Rocket, CheckCircle, Quote, Building, Sprout, ShieldCheck, TrendingUp, HandCoins, UserCheck, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
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
    ];

    const whatYouGet = [
      { icon: UserCheck, text: "Dedicated Event Manager as a single point of contact" },
      { icon: HandCoins, text: "Transparent budgeting and tracking" },
      { icon: TrendingUp, text: "Detailed post-event analytics and reporting" },
      { icon: ShieldCheck, text: "Guaranteed SLAs for peace of mind" },
    ];

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

    const clientLogos = [
      { src: "https://placehold.co/150x60/f3ece7/333333?text=Client+A", alt: "Client A Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f3ece7/333333?text=Client+B", alt: "Client B Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f3ece7/333333?text=Client+C", alt: "Client C Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f3ece7/333333?text=Client+D", alt: "Client D Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f3ece7/333333?text=Client+E", alt: "Client E Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f3ece7/333333?text=Client+F", alt: "Client F Logo", dataAiHint: "corporate logo" },
    ];

    const caseStudies = [
      {
        client: "Global Pharma Inc.",
        event: "Annual Sales Conference",
        challenge: "Needed to organize a compliant, high-energy conference for 300+ sales reps across Asia while reducing logistical overhead.",
        solution: "Managed end-to-end logistics including venue negotiation in Singapore, compliant travel arrangements, and an engaging mobile event app for seamless communication.",
        outcome: "Achieved 20% savings on hotel block bookings and received a 95% attendee satisfaction score."
      },
      {
        client: "Innovatech Solutions",
        event: "Top Performers Incentive Trip",
        challenge: "Reward 50 top-performing employees with a unique, money-can't-buy experience to boost morale and retention.",
        solution: "Designed a 5-day bespoke luxury trip to Dubai, featuring a private desert safari, a yacht cruise, and exclusive dining experiences.",
        outcome: "The trip was rated as 'exceptional' by 100% of attendees, contributing to a measurable uplift in employee engagement post-trip."
      },
      {
        client: "AutoCorp Manufacturing",
        event: "Dealer & Partner Meet",
        challenge: "Launch a new product line to 500+ dealers and partners, requiring a large-scale exhibition space and flawless technical execution.",
        solution: "Secured a premier exhibition hall in Delhi, handling all stall fabrication, AV setup, and on-site registration with QR-code-based check-ins.",
        outcome: "Generated a 30% increase in partner pre-orders compared to the previous year's launch event."
      }
    ];

    const samplePackages = [
        {
          title: "Corporate Offsite in Goa",
          pax: "50-100 Persons | 2N/3D",
          price: "Starting from ₹15,000 / person",
          inclusions: ["Return Flights", "4-Star Beach Resort", "Conference Hall", "Gala Dinner", "Team Building Activities"]
        },
        {
          title: "Annual Sales Conference in Delhi",
          pax: "200-500 Persons | 1 Day",
          price: "Starting from ₹8,000 / person",
          inclusions: ["5-Star Hotel Venue", "Full-Day Catering", "AV & Tech Support", "Branding & Stage Setup", "Professional Staff"]
        },
        {
          title: "Incentive Trip to Thailand",
          pax: "20-50 Persons | 4N/5D",
          price: "Starting from ₹45,000 / person",
          inclusions: ["Return Flights", "Luxury Hotel Stay", "Private Tours & Excursions", "Exclusive Dinners", "Visa & Insurance"]
        }
    ];

    const faqItems = [
      {
        question: "What is the ideal lead time for booking a MICE event?",
        answer: "For domestic events, we recommend a lead time of at least 3-6 months. for international events, 6-12 months is ideal to ensure the best rates and venue availability. However, we can also accommodate more urgent requests."
      },
      {
        question: "Can you handle events of any size?",
        answer: "Yes, we have experience managing events of all scales, from intimate board meetings of 10 executives to large-scale conferences with over 1,000 attendees. Our network and resources allow us to scale our services to your specific needs."
      },
      {
        question: "What are your payment terms?",
        answer: "Typically, we require an advance payment to confirm bookings, with the balance due closer to the event date. We offer flexible and transparent payment schedules, which will be clearly outlined in your event proposal."
      },
      {
        question: "Do you provide on-site support during the event?",
        answer: "Absolutely. A dedicated event manager and support staff will be present on-site to ensure everything runs smoothly from start to finish. We handle all logistics so you can focus on your event's objectives."
      }
    ];

  return (
    <>
      <section className="relative py-20 md:py-24 bg-secondary">
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://www.adbhuttravel.com/wp-content/uploads/2025/07/Mice-Hero-1.jpeg')" }}
          data-ai-hint="corporate meeting"
        ></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Flawless Corporate Events That Deliver Results</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            End-to-end MICE solutions that boost participation, reduce costs, and deliver memorable experiences.
          </p>
           <div className="mt-8 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
             <div className="text-center">
                 <p className="text-2xl font-bold text-accent">10,000+</p>
                 <p className="text-sm font-medium text-muted-foreground">Happy Corporate Travelers</p>
             </div>
             <div className="text-center">
                 <p className="text-2xl font-bold text-accent">50+</p>
                 <p className="text-sm font-medium text-muted-foreground">Corporate Partners</p>
             </div>
          </div>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get a Proposal</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container">
          <h2 className="text-lg font-semibold text-center text-muted-foreground mb-6">TRUSTED BY LEADING COMPANIES</h2>
           <div className="relative">
             <div className="overflow-hidden">
                <div className="flex animate-marquee-infinite gap-16 items-center">
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <Image key={index} src={logo.src} alt={logo.alt} width={150} height={60} className="flex-shrink-0 object-contain h-12 w-auto" data-ai-hint={logo.dataAiHint} />
                  ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
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

      <section className="py-12 md:py-16">
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
                    <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                    <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                  </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
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
                    <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
                    <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 rounded-full bg-background/70 hover:bg-background/90 shadow-lg border" />
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
      
       <section className="py-12 md:py-16">
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
           <div className="mt-12 border-t pt-12">
            <h3 className="text-2xl font-headline font-bold text-center mb-8">With Every Event, You Get:</h3>
             <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
               {whatYouGet.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
              <div className="text-center">
                  <h2 className="text-3xl font-headline font-bold">Success Stories</h2>
                  <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">See how we've helped leading companies achieve their event goals.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {caseStudies.map((study, index) => (
                      <Card key={index} className="flex flex-col shadow-lg">
                          <CardHeader>
                              <CardTitle className="font-headline">{study.client}</CardTitle>
                              <p className="text-sm font-semibold text-accent">{study.event}</p>
                          </CardHeader>
                          <CardContent className="flex-grow space-y-4">
                              <p className="text-muted-foreground italic">"{study.challenge}"</p>
                              <div className="border-t pt-4">
                                <p className="font-semibold text-foreground/90">Our Solution:</p>
                                <p className="text-muted-foreground text-sm">{study.solution}</p>
                              </div>
                          </CardContent>
                           <CardFooter className="bg-primary/20 p-4">
                               <p className="font-bold text-foreground text-center w-full">Outcome: {study.outcome}</p>
                           </CardFooter>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
      
      <section className="py-12 md:py-16">
          <div className="container">
              <div className="text-center">
                  <h2 className="text-3xl font-headline font-bold">Sample MICE Packages</h2>
                  <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">Get a clear idea of what we can offer. Packages can be customized to your needs.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {samplePackages.map((pkg, index) => (
                      <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <CardHeader>
                              <CardTitle className="font-headline text-xl">{pkg.title}</CardTitle>
                              <p className="text-sm font-medium text-muted-foreground">{pkg.pax}</p>
                          </CardHeader>
                          <CardContent className="flex-grow">
                              <p className="font-semibold text-lg text-accent mb-4">{pkg.price}</p>
                              <ul className="space-y-2">
                                  {pkg.inclusions.map((item, i) => (
                                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                                          <CheckCircle className="w-4 h-4 text-green-500" />
                                          <span>{item}</span>
                                      </li>
                                  ))}
                              </ul>
                          </CardContent>
                           <CardFooter className="p-4">
                                <Button asChild className="w-full">
                                    <Link href="/contact">Request a Custom Quote</Link>
                                </Button>
                           </CardFooter>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
            <div className="text-center">
                <h2 className="text-3xl font-headline font-bold">Expertise Across Industries</h2>
                <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">We understand the unique nuances and compliance requirements of different sectors.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 rounded-lg bg-background shadow-md">
                    <Building className="w-10 h-10 mx-auto text-accent mb-3"/>
                    <h3 className="text-lg font-headline font-semibold">Pharma & Healthcare</h3>
                    <p className="text-sm text-muted-foreground mt-1">HCP compliance, detailed reporting, and secure data handling.</p>
                </div>
                 <div className="p-6 rounded-lg bg-background shadow-md">
                    <Rocket className="w-10 h-10 mx-auto text-accent mb-3"/>
                    <h3 className="text-lg font-headline font-semibold">Technology</h3>
                    <p className="text-sm text-muted-foreground mt-1">Product launches, tech summits, and developer conferences.</p>
                </div>
                 <div className="p-6 rounded-lg bg-background shadow-md">
                    <HandCoins className="w-10 h-10 mx-auto text-accent mb-3"/>
                    <h3 className="text-lg font-headline font-semibold">BFSI</h3>
                    <p className="text-sm text-muted-foreground mt-1">Investor meets, financial roadshows, and partner conclaves.</p>
                </div>
                 <div className="p-6 rounded-lg bg-background shadow-md">
                    <Cog className="w-10 h-10 mx-auto text-accent mb-3"/>
                    <h3 className="text-lg font-headline font-semibold">Manufacturing</h3>
                    <p className="text-sm text-muted-foreground mt-1">Dealer meets, factory visits, and supply chain partner events.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto">
             <div className="text-center">
                <h2 className="text-3xl font-headline font-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full mt-8">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-secondary">
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
