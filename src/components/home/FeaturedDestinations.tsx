import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const destinations = [
  { name: "Majestic Peaks of the Alps", image: "https://placehold.co/400x500.png", dataAiHint: "Alps mountains" },
  { name: "Serene Shores of the Maldives", image: "https://placehold.co/400x500.png", dataAiHint: "Maldives beach" },
  { name: "Vibrant Streets of Tokyo", image: "https://placehold.co/400x500.png", dataAiHint: "Tokyo street" },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2">
          Featured Destinations
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Explore breathtaking destinations handpicked by our travel experts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Card key={dest.name} className="overflow-hidden group border-0 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-0 relative">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={dest.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-headline font-bold text-white">
                    {dest.name}
                  </h3>
                  <div className="flex items-center text-primary mt-2">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
