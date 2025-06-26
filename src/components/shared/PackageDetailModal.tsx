
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plane, BedDouble, Utensils, Car, Palmtree, User, FileText, ShieldCheck, Ticket, Flower, Wifi, Leaf, Info, X, Map, ListChecks, XCircle, GalleryHorizontal } from 'lucide-react';
import type { Package, Facility } from "@/lib/types";
import { cn } from "@/lib/utils";

const facilityDetails: Record<Facility, { icon: React.ElementType; label: string; description: string }> = {
  flight: { icon: Plane, label: "Flights", description: "Round-trip economy class airfare from your departure city." },
  hotel: { icon: BedDouble, label: "Accommodation", description: "Stay in carefully selected 4-star hotels with daily breakfast." },
  transport: { icon: Car, label: "Private Transfers", description: "All airport transfers and ground transportation in a private, air-conditioned vehicle." },
  meals: { icon: Utensils, label: "Meals", description: "Daily breakfast at the hotel and select lunches or dinners as per the itinerary." },
  sightseeing: { icon: Palmtree, label: "Sightseeing", description: "All entry fees and guided tours for attractions mentioned in the itinerary." },
  guide: { icon: User, label: "Local Guide", description: "Services of an English-speaking professional guide for all tours." },
  visa: { icon: FileText, label: "Visa Assistance", description: "We provide assistance with the visa application process. Fees are not included." },
  insurance: { icon: ShieldCheck, label: "Travel Insurance", description: "Basic travel insurance covering medical emergencies and trip cancellation." },
  permit: { icon: Ticket, label: "Permits & Fees", description: "All necessary permits, road taxes, and government fees are included." },
  spa: { icon: Flower, label: "Spa & Wellness", description: "A complimentary spa or wellness session to help you relax and rejuvenate." },
  wifi: { icon: Wifi, label: "Wi-Fi", description: "Complimentary Wi-Fi access at all hotel accommodations." },
  veg: { icon: Leaf, label: "Veg Meals", description: "Vegetarian meal options are available upon request at all locations." },
};

const exclusionDetails = [
    { title: "Personal expenses (laundry, phone calls, etc.)", description: "Any costs of a personal nature, such as laundry services, phone calls, or mini-bar purchases, are not included." },
    { title: "Optional tours and activities not listed in the itinerary", description: "Any tours or activities that are not explicitly mentioned in the 'Trip Includes' section can be arranged at an additional cost." },
    { title: "Tips and gratuities for guides and drivers", description: "Tipping is at your discretion and is a way to show appreciation for excellent service. It is not included in the package price." },
    { title: "Any items not specifically mentioned as 'included'", description: "This package only covers items listed under 'Trip Includes'. Anything not on that list is excluded." },
    { title: "Early check-in or late check-out charges", description: "Standard hotel check-in and check-out times apply. Any charges for early arrival or late departure are not included." }
];

export function PackageDetailModal({ pkg, children }: { pkg: Package; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-0 flex flex-col max-h-[90vh]">
        <DialogHeader className="p-6 border-b shrink-0 relative">
          <DialogTitle className="font-headline text-3xl">{pkg.name}</DialogTitle>
           <DialogClose className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <Tabs defaultValue="outline" className="w-full flex-grow flex flex-col overflow-hidden">
            <div className="px-6 pt-4 pb-2 shrink-0">
                 <div className="bg-muted p-1 rounded-lg">
                    <TabsList className="grid w-full grid-cols-4 rounded-md bg-transparent p-0 h-auto">
                        <TabsTrigger value="outline">Trip Outline</TabsTrigger>
                        <TabsTrigger value="includes">Trip Includes</TabsTrigger>
                        <TabsTrigger value="excludes">Trip Excludes</TabsTrigger>
                        <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    </TabsList>
                </div>
            </div>

            <TabsContent value="outline" className="flex-grow m-0 overflow-hidden">
              <ScrollArea className="h-full bg-pastel-blue">
                <div className="p-6">
                  <div className="mb-6">
                      <h3 className="text-2xl font-headline font-bold flex items-center gap-3 text-foreground">
                          <Map className="h-7 w-7 text-chart-3" /> Trip Outline
                      </h3>
                      <p className="text-muted-foreground mt-1">A day-by-day journey through your adventure.</p>
                  </div>
                  <div className="flow-root">
                    <ul className="-mb-8">
                      {pkg.itinerary.map((item, index) => (
                        <li key={item.day}>
                          <div className="relative pb-8">
                            {index !== pkg.itinerary.length - 1 ? (
                              <span className="absolute left-6 top-6 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex items-start space-x-5">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary ring-8 ring-pastel-blue">
                                <span className="text-lg font-bold text-primary-foreground">{item.day}</span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 transition-transform duration-300 hover:-translate-y-1">
                                <h3 className="text-xl font-headline font-bold text-foreground">{item.title}</h3>
                                <div className="mt-2 text-muted-foreground">
                                  {item.details.map((p, i) => <p key={i} className="mb-2">{p}</p>)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="includes" className="flex-grow m-0 overflow-hidden">
                <ScrollArea className="h-full bg-pastel-green">
                    <div className="p-6">
                        <div className="mb-6">
                            <h3 className="text-2xl font-headline font-bold flex items-center gap-3 text-foreground">
                                <ListChecks className="h-7 w-7 text-chart-2" /> Trip Includes
                            </h3>
                            <p className="text-muted-foreground mt-1">Everything that is covered in your package.</p>
                        </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                            {pkg.facilities?.map((facility) => {
                                const detail = facilityDetails[facility];
                                if (!detail) return null;
                                return (
                                <li key={facility} className="group flex items-center gap-2 py-2 transition-transform duration-300 hover:-translate-y-1">
                                    <detail.icon className="h-6 w-6 text-primary shrink-0"/>
                                    <span className="font-medium text-foreground">{detail.label}</span>
                                    <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                          <div className="relative h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100">
                                            <Info className="h-4 w-4 cursor-pointer" />
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="z-[9999] max-w-xs">
                                          <p>{detail.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    </TooltipProvider>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </ScrollArea>
            </TabsContent>

            <TabsContent value="excludes" className="flex-grow m-0 overflow-hidden">
                <ScrollArea className="h-full bg-pastel-red">
                    <div className="p-6">
                        <div className="mb-6">
                            <h3 className="text-2xl font-headline font-bold flex items-center gap-3 text-foreground">
                                <XCircle className="h-7 w-7 text-destructive" /> Trip Excludes
                            </h3>
                            <p className="text-muted-foreground mt-1">What's not covered in the package price.</p>
                        </div>
                        <ul className="space-y-2">
                          {exclusionDetails.map((item) => (
                            <li key={item.title} className="group flex items-center gap-2 py-2 transition-transform duration-300 hover:-translate-y-1">
                                <X className="h-5 w-5 text-destructive bg-destructive/20 rounded-full p-1 shrink-0"/>
                                <span className="text-muted-foreground">{item.title}</span>
                                <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="relative h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100">
                                          <Info className="h-4 w-4 cursor-pointer" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="z-[9999] max-w-xs">
                                        <p>{item.description}</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                    </div>
                </ScrollArea>
            </TabsContent>
            
            <TabsContent value="gallery" className="flex-grow m-0 overflow-hidden">
                 <ScrollArea className="h-full bg-pastel-purple">
                    <div className="p-6">
                        <div className="mb-6">
                            <h3 className="text-2xl font-headline font-bold flex items-center gap-3 text-foreground">
                                <GalleryHorizontal className="h-7 w-7 text-chart-5" /> Gallery
                            </h3>
                            <p className="text-muted-foreground mt-1">A visual glimpse of your destination.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {(pkg.gallery || []).map((imgSrc, index) => (
                                <div key={index} className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
                                <Image 
                                    src={imgSrc} 
                                    alt={`${pkg.name} gallery image ${index + 1}`} 
                                    width={400} 
                                    height={300} 
                                    className="w-full h-full object-cover"
                                    data-ai-hint={pkg.galleryHints ? pkg.galleryHints[index] : pkg.dataAiHint}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
