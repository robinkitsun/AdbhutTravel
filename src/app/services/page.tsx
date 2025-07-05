import { Plane, Hotel, Compass, Users, Star, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover the comprehensive travel services offered by Adbhut Travel, including personalized itineraries, flight and hotel bookings, group tours, corporate MICE solutions, and exclusive experiences.",
};

const services = [
  {
    icon: Compass,
    title: "Personalized Itineraries",
    description: "Your journey should be as unique as you are. We go beyond pre-packaged tours to design a travel blueprint that perfectly aligns with your passions, pace, and preferences. Our experts collaborate with you to craft a one-of-a-kind adventure, ensuring every detail reflects your personal travel style.",
    example: "Example: A 10-day culinary tour through Italy, featuring private cooking classes in Tuscany, wine tasting in a Chianti vineyard, and a guided food market exploration in Bologna, all tailored to your love for authentic Italian cuisine.",
    image: "https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg",
    dataAiHint: "travel map planning",
  },
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Navigating the world of air travel can be complex. Let us handle it for you. We leverage our expertise to find the most efficient routes, optimal layovers, and competitive fares across a global network of airlines. Our goal is a seamless, stress-free booking experience from start to finish.",
    example: "Example: For a multi-city European holiday, we can book a complex open-jaw ticket, flying you into Rome and out of Paris, with a convenient and cost-effective flight to Barcelona in between, saving you both time and money.",
    image: "https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg",
    dataAiHint: "airplane window view",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: "Where you stay is a crucial part of your travel experience. We handpick and book accommodations that promise comfort, quality, and character. From world-class luxury resorts and charming boutique hotels to cozy B&Bs, we ensure your home away from home meets our high standards and your expectations.",
    example: "Example: On a romantic honeymoon in Bali, we can arrange a stay in a private pool villa overlooking the serene rice paddies of Ubud, followed by a chic beachfront resort to catch the stunning sunsets in Seminyak.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    dataAiHint: "luxury hotel room",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Discover the world with like-minded individuals on our expertly curated group tours. We keep our groups small to foster a sense of community and provide a more intimate experience. Led by knowledgeable local guides, our tours offer a perfect balance of planned activities and personal free time for exploration.",
    example: "Example: Join our 'Wonders of Peru' tour to hike the historic Inca Trail to Machu Picchu. You’ll share the journey with a small group of fellow adventurers and be led by a local guide who brings the ancient Incan world to life.",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    dataAiHint: "friends traveling together",
  },
  {
    icon: Star,
    title: "Exclusive Experiences",
    description: "We believe in creating moments that last a lifetime. Our connections provide you with access to unique local experiences, private tours, and activities that go far beyond the standard tourist trail. Let us add that 'wow' factor to your itinerary with moments you won't find in a guidebook.",
    example: "Example: Imagine a private, after-hours tour of the Vatican Museums, a serene sunrise hot air balloon ride over the ancient temples of Bagan, or a thrilling helicopter journey over Iceland's dramatic volcanic landscapes.",
    image: "https://images.pexels.com/photos/373406/pexels-photo-373406.jpeg",
    dataAiHint: "hot air balloon sunrise",
  },
  {
    icon: Briefcase,
    title: "Corporate & MICE",
    description: "Elevate your business events with our professional MICE (Meetings, Incentives, Conferences, and Exhibitions) services. We provide end-to-end solutions, from strategic planning and venue sourcing to seamless on-site logistics and management, ensuring your corporate event is both successful and memorable.",
    example: "Example: We can organize a week-long sales incentive trip to Dubai for your top performers, including 5-star accommodation, team-building desert safaris, and a formal gala dinner at an exclusive venue with city skyline views.",
    image: "https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg",
    dataAiHint: "corporate conference",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From personalized dream trips to seamless corporate events, we offer a comprehensive suite of travel solutions designed to make your journey extraordinary.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 space-y-16 md:space-y-24">
        {services.map((service, index) => (
          <div key={service.title} className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={service.dataAiHint}
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-headline font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-sm italic text-muted-foreground/80 border-l-4 border-primary/50 pl-4 py-2">{service.example}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-headline font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            Whether you're dreaming of a custom adventure or planning a corporate event, our experts are here to help.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
