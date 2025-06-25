
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Plane, BedDouble, Utensils, Car, Palmtree, User, FileText, ShieldCheck, Ticket, Flower, Wifi, Leaf } from 'lucide-react';
import { getTripOutline } from "@/lib/actions";
import type { Package, Facility } from "@/lib/types";
import { cn } from "@/lib/utils";

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
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && !itinerary) {
      setIsLoading(true);
      getTripOutline(pkg.name, pkg.duration)
        .then((result) => {
          setItinerary(result);
        })
        .catch((error) => {
          console.error(error);
          setItinerary("Could not load itinerary. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [open, itinerary, pkg.name, pkg.duration]);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">{pkg.name}</DialogTitle>
        </DialogHeader>
        <div className="flex-grow min-h-0">
          <Tabs defaultValue="outline" className="h-full flex flex-col">
            <TabsList className="shrink-0">
              <TabsTrigger value="outline">Trip Outline</TabsTrigger>
              <TabsTrigger value="includes">Trip Includes</TabsTrigger>
              <TabsTrigger value="excludes">Trip Excludes</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-grow mt-4 pr-3">
              <TabsContent value="outline">
                {isLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <div className="prose prose-sm md:prose-base max-w-none text-foreground whitespace-pre-wrap font-body">
                    {itinerary}
                  </div>
                )}
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
