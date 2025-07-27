import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "An absolutely magical experience from start to finish. Adbhut Explorer took care of every detail, allowing us to just relax and enjoy. Highly recommended!",
    author: "Anjali Sharma",
    location: "Mumbai, India",
  },
  {
    id: "2",
    quote: "The AI planner was a game-changer! It created the perfect itinerary for our family, balancing adventure for the kids and relaxation for us. A truly personalized trip.",
    author: "David Chen",
    location: "Singapore",
  },
  {
    id: "3",
    quote: "Professional, attentive, and incredibly knowledgeable. Our trip to the Swiss Alps was seamless and more beautiful than we could have ever imagined.",
    author: "Emily White",
    location: "London, UK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Stories from travelers who embarked on their dream journeys with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-secondary border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
