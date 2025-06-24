import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function TailoredExperience() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/600x700.png"
              alt="Tailored travel experience"
              width={600}
              height={700}
              className="w-full h-full object-cover"
              data-ai-hint="person planning map"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Your Journey, Perfectly Tailored
            </h2>
            <p className="text-muted-foreground mb-6">
              At Adbhut Explorer, we believe that travel should be as unique as you are. Our experts work with you to design a personalized itinerary that matches your interests, budget, and style.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary bg-primary/20 rounded-full p-1" />
                <span>Custom itineraries built around your dreams.</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary bg-primary/20 rounded-full p-1" />
                <span>Expert guidance and 24/7 support.</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary bg-primary/20 rounded-full p-1" />
                <span>Exclusive access and unique local experiences.</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/planner">Start Planning with AI</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
