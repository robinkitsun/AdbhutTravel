import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Globe, HeartHandshake } from "lucide-react";

const teamMembers = [
  { name: "Aarav Patel", role: "Founder & CEO", image: "https://placehold.co/100x100.png", dataAiHint: "man portrait" },
  { name: "Priya Singh", role: "Head of Operations", image: "https://placehold.co/100x100.png", dataAiHint: "woman portrait" },
  { name: "Rohan Mehta", role: "Lead Travel Consultant", image: "https://placehold.co/100x100.png", dataAiHint: "man portrait" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Adbhut Explorer</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a team of passionate travelers dedicated to creating extraordinary journeys and unforgettable memories.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x500.png"
                alt="Our team"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                data-ai-hint="diverse team"
              />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, Adbhut Explorer was born from a simple yet powerful idea: to make exceptional travel accessible and personal. We started with a small office and a big dream to share the wonders of the world.
              </p>
              <p className="text-muted-foreground">
                Today, we have helped thousands of travelers explore the globe, from the serene beaches of the Maldives to the majestic peaks of the Himalayas. Our commitment to quality, personalization, and responsible tourism remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6 border-0 shadow-lg">
              <HeartHandshake className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-headline font-semibold mb-2">Customer First</h3>
              <p className="text-muted-foreground">Your journey is our priority. We are committed to providing impeccable service and support.</p>
            </Card>
            <Card className="p-6 border-0 shadow-lg">
              <Globe className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-headline font-semibold mb-2">Authentic Experiences</h3>
              <p className="text-muted-foreground">We connect you with the local culture for travel that is genuine and enriching.</p>
            </Card>
            <Card className="p-6 border-0 shadow-lg">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-headline font-semibold mb-2">Unmatched Quality</h3>
              <p className="text-muted-foreground">From planning to execution, we ensure the highest standards in every aspect of your trip.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-headline font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
