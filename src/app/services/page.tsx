import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, Compass, Users, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover the comprehensive travel services offered by Adbhut Travel, including personalized itineraries, flight and hotel bookings, group tours, and more.",
};

const services = [
  {
    icon: Compass,
    title: "Personalized Itineraries",
    description: "Tailor-made travel plans that align with your interests, budget, and travel style. Your dream trip, your way."
  },
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Seamless flight reservations to destinations worldwide. We find the best routes and fares for your convenience."
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: "From luxury resorts to charming boutique hotels, we book accommodations that ensure your comfort and satisfaction."
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Join our expertly curated group tours to explore new cultures and make new friends along the way."
  },
  {
    icon: Star,
    title: "Exclusive Experiences",
    description: "Gain access to unique local experiences, private tours, and activities that are off the beaten path."
  },
  {
    icon: "MICE",
    title: "Corporate & MICE",
    description: "Specialized services for Meetings, Incentives, Conferences, and Exhibitions. We handle all logistics."
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Comprehensive travel solutions designed to make your journey seamless and extraordinary.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                    {typeof service.icon === 'string' ? (
                       <span className="text-primary font-bold text-2xl">{service.icon}</span>
                    ) : (
                      <service.icon className="w-10 h-10 text-primary" />
                    )}
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
