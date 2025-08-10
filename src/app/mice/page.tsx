
"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
      { src: "https://www.adbhuttravel.com/wp-content/uploads/2025/07/Adbhut-Affilications-Cetifications.png", alt: "Client Accreditations", dataAiHint: "corporate accreditations" },
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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-gray-800">MICE Corporate Travel: Book your business events and off-sites</h1>
              <p className="mt-6 text-lg text-gray-600">
                We are a one-stop solution for your MICE (Meetings, Incentives, Conferences, and Exhibitions) and corporate travel needs.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
               <div className="absolute inset-0 bg-primary/10 rounded-lg -rotate-3 transition-transform duration-300 hover:rotate-0"></div>
               <Image
                  src="https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg"
                  alt="Corporate Event Singer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  data-ai-hint="corporate event concert"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Simplifying MICE Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-headline font-bold text-gray-800">Simplifying <span className="text-accent">MICE</span></h2>
            <div className="mt-6 text-gray-600 space-y-4 text-left">
                <p>
                You might have business associates from all over the world whom you want to give a seamless experience, or you want to take your team for an offsite. With Adbhut Travel as your partner, you can be sure of getting the best experience of MICE anywhere in the world. Our team will be your travel partner and take care of all travel and MICE related services so that you can concentrate on growing your business and network.
                </p>
                <p>
                We also understand that planning MICE events requires a special focus on individual needs and various associated services. We have a separate team of professionals who are experts at conceptualizing and executing MICE events for all our esteemed clients.
                </p>
            </div>
        </div>
      </section>

      {/* What Adbhut Offers in MICE? Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container">
           <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-headline font-bold text-gray-800">What Adbhut Offers in MICE?</h2>
              <p className="mt-4 text-gray-600">
                A one-stop solution for different MICE related services. We provide a full spectrum of services to ensure your corporate event is a resounding success from start to finish.
              </p>
           </div>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {micePillars.map((pillar) => (
                    <div key={pillar.title} className="relative p-8 rounded-lg bg-white shadow-md border border-gray-100">
                        <div className="absolute -top-4 -left-2 text-8xl md:text-9xl font-bold text-gray-100 select-none -z-10">
                            {pillar.letter}
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4 text-gray-800">{pillar.title}</h3>
                        <ul className="space-y-3">
                           {pillar.services.map(service => (
                             <li key={service} className="text-gray-600 border-b pb-2">
                                <span>{service}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold text-gray-800">Why Choose Adbhut MICE?</h2>
              <ul className="mt-6 space-y-4">
                {whyChooseUs.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-gray-600">{point}</span>
                    </li>
                ))}
              </ul>
            </div>
             <div className="relative h-80 rounded-lg">
               <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Team working on a project"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  data-ai-hint="corporate team working"
               />
            </div>
          </div>
          <div className="mt-16">
             <div className="relative text-center">
                 <h3 className="text-gray-600 font-semibold mb-6">OUR ACCREDITATIONS</h3>
                 <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {clientLogos.map((logo, index) => (
                        <Image key={index} src={logo.src} alt={logo.alt} width={1000} height={80} className="object-contain h-auto w-full max-w-4xl" data-ai-hint={logo.dataAiHint} />
                    ))}
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-20 bg-secondary/30" id="mice-contact">
          <div className="container max-w-4xl mx-auto">
              <div className="text-center">
                  <h2 className="text-3xl font-headline font-bold text-gray-800">Get In Touch</h2>
                  <p className="mt-2 text-gray-600">
                      Planning a corporate event? Fill out the form, and our MICE specialists will get back to you with a customized proposal.
                  </p>
              </div>
              <div className="mt-8">
                 <MiceContactForm />
              </div>
          </div>
      </section>
      
       {/* FAQ Section */}
       <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl mx-auto">
             <div className="text-center">
                <h2 className="text-3xl font-headline font-bold text-gray-800">FAQs on MICE Tourism</h2>
            </div>
            <Accordion type="single" collapsible className="w-full mt-8">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-left font-semibold text-lg text-gray-700">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
