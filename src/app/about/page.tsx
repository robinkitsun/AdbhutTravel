import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Globe, HeartHandshake } from "lucide-react";
import type { Metadata } from "next";
import { Logo } from "@/components/shared/Logo";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the story, values, and passionate team behind Adbhut Travel. Discover our commitment to creating extraordinary journeys and unforgettable memories.",
};

const teamMembers = [
  { name: "Mohit Sharma", role: "Founder & CEO", image: "https://media.licdn.com/dms/image/v2/D4D03AQEby5crkpPERQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719289726893?e=2147483647&v=beta&t=QtcfIgIbkwq1Jr2IB7BXeVfOr89PuLox_Y5crNwBcB0", dataAiHint: "man portrait" },
  { name: "Aditi Sharma", role: "Sales Head", image: "", dataAiHint: "woman portrait" },
  { name: "Sachin", role: "Operation Manager", image: "", dataAiHint: "man portrait" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-8 md:py-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Adbhut Travel</h1>
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
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Our team working together on a travel plan"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                data-ai-hint="diverse team"
              />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground">
                ADBHUT TRAVEL is a family run and operated business that has been providing service for tourists to all over world since 2017. ADBHUT is specialised in Personals Travel, Groups , Corporate Tours and MICE who are looking for the real Cultural experience. ADBHUT is affiliated with MOT, IATA, TAAI, TAFI, ETAA, ADTOI, OTOAI, IGCC, HCCI, State Tourism, ISO 9001: 2015 and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">Discover Our Journey</h2>
            <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl mb-12">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/SOYiaKA5sRk?si=2WdEVM6oot_jdX0d"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/IfBDSc2Lb7U"
                title="ADBHUT Profile Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-headline font-bold text-center mb-4">Our Brands</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Adbhut Travel is a proud member of the Adbhut Group, a family of brands dedicated to providing a comprehensive and exceptional range of services in the travel and tourism industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center text-center">
            <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center h-16">
                    <Logo />
                </div>
                <h3 className="text-xl font-headline font-semibold">Adbhut Travel</h3>
                <p className="text-muted-foreground mt-2">Our flagship brand for crafting unforgettable domestic and international travel experiences.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center h-16">
                    <Image src="https://www.adbhuttravel.com/wp-content/uploads/2024/06/Screenshot-2024-06-27-at-11.23.46%E2%80%AFAM.png" alt="North Cab Logo" width={200} height={80} className="max-h-12 w-auto object-contain" />
                </div>
                <h3 className="text-xl font-headline font-semibold">North Cab</h3>
                <p className="text-muted-foreground mt-2">Reliable and comfortable taxi services for all your travel needs across North India.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center h-16">
                    <Image src="https://www.adbhuttravel.com/wp-content/uploads/2024/06/Screenshot_2023-01-24_at_1.52.15_PM-removebg-preview.png" alt="Visit Kurukshetra Logo" width={250} height={80} className="max-h-12 w-auto object-contain" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Visit Kurukshetra</h3>
                <p className="text-muted-foreground mt-2">Your dedicated guide to exploring the rich history and culture of Kurukshetra.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6 border-0 shadow-lg hover:-translate-y-1 transition-all duration-300">
              <HeartHandshake className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-headline font-semibold mb-2">Customer First</h3>
              <p className="text-muted-foreground">Your journey is our priority. We are committed to providing impeccable service and support.</p>
            </Card>
            <Card className="p-6 border-0 shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Globe className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-headline font-semibold mb-2">Authentic Experiences</h3>
              <p className="text-muted-foreground">We connect you with the local culture for travel that is genuine and enriching.</p>
            </Card>
            <Card className="p-6 border-0 shadow-lg hover:-translate-y-1 transition-all duration-300">
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
              <Card key={member.name} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} className="object-cover" />
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
