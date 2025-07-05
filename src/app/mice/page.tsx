import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MICE & Corporate Travel",
  description: "Elevate your corporate events with Adbhut Travel. We provide end-to-end solutions for Meetings, Incentives, Conferences, and Exhibitions (MICE).",
};

export default function MicePage() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-secondary">
         <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg')" }}
          data-ai-hint="corporate meeting"
        ></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">MICE & Corporate Travel</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Elevating your corporate events with precision planning and flawless execution.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Global Event Solutions</h2>
              <p className="text-muted-foreground mb-6">
                Adbhut Explorer provides comprehensive solutions for all your corporate travel needs. Whether it's a high-profile conference, an incentive trip to motivate your team, or an international exhibition, we manage every detail to ensure your event is a resounding success.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                  <span>End-to-end event planning and management for meetings and conferences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                  <span>Creative and motivational incentive travel programs to reward performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                  <span>Logistical support for exhibitions, including travel, accommodation, and venue coordination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                  <span>Customized corporate packages to suit your company's brand and budget.</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="/contact">Request a Proposal</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl order-first md:order-last">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Corporate event presentation in a large hall"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint="conference room"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
