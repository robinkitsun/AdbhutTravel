
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Presentation, Award, Users, Briefcase, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import MiceContactForm from "@/components/mice/MiceContactForm";

export default function MicePage() {
    const micePillars = [
        {
            letter: "M",
            title: "Meetings",
            services: ["Venue Sourcing & Booking", "Agenda Planning", "Audio-Visual Setup", "On-site Coordination"]
        },
        {
            letter: "I",
            title: "Incentives",
            services: ["Customized Itineraries", "Luxury Accommodations", "Exclusive Experiences", "Team-building Activities"]
        },
        {
            letter: "C",
            title: "Conferences",
            services: ["Delegate Registration", "Speaker Management", "Logistics & Transport", "Gala Dinners & Networking"]
        },
        {
            letter: "E",
            title: "Exhibitions",
            services: ["Stall Design & Fabrication", "Exhibitor Management", "Visitor Engagement", "Post-event Analytics"]
        }
    ];

    const whyChooseUs = [
        "End-to-End solutions for all your event needs.",
        "Access to a global network of trusted vendors and hotels.",
        "Dedicated event manager for seamless coordination.",
        "Transparent budgeting with a focus on delivering value.",
        "Innovative technology for registration and engagement."
    ];

    const clientLogos = [
      { src: "https://placehold.co/150x60/f8f8f8/333333?text=Client+A", alt: "Client A Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f8f8f8/333333?text=Client+B", alt: "Client B Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f8f8f8/333333?text=Client+C", alt: "Client C Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f8f8f8/333333?text=Client+D", alt: "Client D Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f8f8f8/333333?text=Client+E", alt: "Client E Logo", dataAiHint: "corporate logo" },
      { src: "https://placehold.co/150x60/f8f8f8/333333?text=Client+F", alt: "Client F Logo", dataAiHint: "corporate logo" },
    ];

    const faqItems = [
      {
        question: "What is the ideal lead time for booking a MICE event?",
        answer: "For domestic events, we recommend a lead time of at least 3-6 months. For international events, 6-12 months is ideal to ensure the best rates and venue availability. However, we can also accommodate more urgent requests."
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold">MICE Corporate Travel: Book your business events and off-sites</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We are a one-stop solution for your MICE (Meetings, Incentives, Conferences, and Exhibitions) and corporate travel needs.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg">
               <Image
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
                  alt="Corporate Event"
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="corporate event"
               />
               <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-lg -z-10"></div>
               <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold">Simplifying MICE</h2>
            <p className="mt-4 text-muted-foreground">
              You might have business associates from all over the world whom you want to give a seamless experience, or you want to take your team for an offsite. With Adbhut Travel as your partner, you can be sure of getting the best experience of MICE anywhere in the world. Our team will be your travel partner and take care of all travel and MICE related services so that you can concentrate on growing your business and network.
            </p>
            <p className="mt-4 text-muted-foreground">
                We also understand that planning MICE events requires a special focus on individual needs and various associated services. We have a separate team of professionals who are experts at conceptualizing and executing MICE events for all our esteemed clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
           <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-headline font-bold">What Adbhut Offers in MICE?</h2>
              <p className="mt-4 text-muted-foreground">
                A one-stop solution for different MICE related services. We provide a full spectrum of services to ensure your corporate event is a resounding success from start to finish.
              </p>
           </div>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {micePillars.map((pillar) => (
                    <div key={pillar.title} className="relative p-8 rounded-lg bg-secondary/30">
                        <div className="absolute top-0 left-8 text-8xl md:text-9xl font-bold text-foreground/5 opacity-50 select-none -z-10">
                            {pillar.letter}
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4">{pillar.title}</h3>
                        <ul className="space-y-2">
                           {pillar.services.map(service => (
                             <li key={service} className="flex items-center gap-2 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-accent" />
                                <span>{service}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                ))}
           </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold">Why Choose Adbhut MICE?</h2>
              <ul className="mt-6 space-y-4">
                {whyChooseUs.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">{point}</span>
                    </li>
                ))}
              </ul>
            </div>
             <div className="relative h-80 rounded-lg">
               <Image
                  src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg"
                  alt="Team celebrating success"
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="team celebration"
               />
            </div>
          </div>
          <div className="mt-16">
             <div className="relative">
                 <h3 className="text-center text-muted-foreground font-semibold mb-6">TRUSTED BY LEADING BRANDS</h3>
                 <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {clientLogos.map((logo, index) => (
                        <Image key={index} src={logo.src} alt={logo.alt} width={120} height={48} className="object-contain h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" data-ai-hint={logo.dataAiHint} />
                    ))}
                 </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" id="mice-contact">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                  <div>
                      <h2 className="text-3xl font-headline font-bold">Get In Touch</h2>
                      <p className="mt-2 text-muted-foreground max-w-md">
                          Planning a corporate event? Fill out the form, and our MICE specialists will get back to you with a customized proposal.
                      </p>
                  </div>
                  <MiceContactForm />
              </div>
          </div>
      </section>
      
       <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
             <div className="text-center">
                <h2 className="text-3xl font-headline font-bold">FAQs on MICE Tourism</h2>
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
    </>
  );
}
