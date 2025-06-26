
"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plane, BedDouble, Utensils, Car, Palmtree, User, FileText, ShieldCheck, Ticket, Flower, Wifi, Leaf } from 'lucide-react';
import type { Package, Facility } from "@/lib/types";

const facilityDetails: Record<Facility, { icon: React.ElementType; label: string }> = {
  flight: { icon: Plane, label: "Flights" },
  hotel: { icon: BedDouble, label: "Accommodation" },
  transport: { icon: Car, label: "Private Transfers" },
  meals: { icon: Utensils, label: "Meals" },
  sightseeing: { icon: Palmtree, label: "Sightseeing" },
  guide: { icon: User, label: "Local Guide" },
  visa: { icon: FileText, label: "Visa Assistance" },
  insurance: { icon: ShieldCheck, label: "Travel Insurance" },
  permit: { icon: Ticket, label: "Permits & Fees" },
  spa: { icon: Flower, label: "Spa & Wellness" },
  wifi: { icon: Wifi, label: "Wi-Fi" },
  veg: { icon: Leaf, label: "Veg Meals" },
};

const commonExclusions = [
    "Personal expenses (laundry, phone calls, etc.)",
    "Optional tours and activities not listed in the itinerary",
    "Tips and gratuities for guides and drivers",
    "Any items not specifically mentioned as 'included'",
    "Early check-in or late check-out charges"
];

export function PackageDetailModal({ pkg, children }: { pkg: Package; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">{pkg.name}</DialogTitle>
        </DialogHeader>
        <div className="flex-grow min-h-0">
          <Tabs defaultValue="outline" className="h-full flex flex-col">
            <TabsList className="inline-flex h-auto justify-start rounded-none border-b bg-transparent p-0 w-full">
              <TabsTrigger value="outline" className="h-full rounded-none border-b-2 border-transparent bg-transparent p-4 font-medium text-muted-foreground shadow-none ring-offset-background transition-all duration-300 hover:-translate-y-1 focus-visible:ring-0 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Trip Outline</TabsTrigger>
              <TabsTrigger value="includes" className="h-full rounded-none border-b-2 border-transparent bg-transparent p-4 font-medium text-muted-foreground shadow-none ring-offset-background transition-all duration-300 hover:-translate-y-1 focus-visible:ring-0 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Trip Includes</TabsTrigger>
              <TabsTrigger value="excludes" className="h-full rounded-none border-b-2 border-transparent bg-transparent p-4 font-medium text-muted-foreground shadow-none ring-offset-background transition-all duration-300 hover:-translate-y-1 focus-visible:ring-0 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Trip Excludes</TabsTrigger>
              <TabsTrigger value="gallery" className="h-full rounded-none border-b-2 border-transparent bg-transparent p-4 font-medium text-muted-foreground shadow-none ring-offset-background transition-all duration-300 hover:-translate-y-1 focus-visible:ring-0 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Gallery</TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-grow mt-4 pr-3">
              <TabsContent value="outline">
                <div className="flow-root">
                  <ul className="-mb-8">
                    {pkg.itinerary.map((item, index) => (
                      <li key={item.day}>
                        <div className="relative pb-8">
                          {index !== pkg.itinerary.length - 1 ? (
                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                          ) : null}
                          <div className="relative flex items-start space-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                              <span className="font-bold text-primary-foreground">{item.day}</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div>
                                <h3 className="text-xl font-headline font-bold text-foreground">{item.title}</h3>
                              </div>
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
              </TabsContent>
              <TabsContent value="includes">
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pkg.facilities?.map((facility) => {
                        const detail = facilityDetails[facility];
                        if (!detail) return null;
                        return (
                            <div key={facility} className="flex items-center gap-3 p-3 bg-secondary/70 rounded-lg">
                                <detail.icon className="h-7 w-7 text-primary"/>
                                <span className="font-medium text-foreground">{detail.label}</span>
                            </div>
                        )
                    })}
                 </div>
              </TabsContent>
              <TabsContent value="excludes">
                <ul className="space-y-3 list-disc list-inside">
                  {commonExclusions.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="gallery">
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {(pkg.gallery || []).map((imgSrc, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
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
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
