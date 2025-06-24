import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackageShowcase from "@/components/home/PackageShowcase";
import Testimonials from "@/components/home/Testimonials";
import TailoredExperience from "@/components/home/TailoredExperience";
import type { Package } from "@/lib/types";

const domesticPackages: Package[] = [
  {
    id: '1',
    name: 'Coastal Charm: Goa Gateway',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'goa beach',
    price: 499,
    duration: '5 Days / 4 Nights',
  },
  {
    id: '2',
    name: 'Mountain Majesty: Himalayan Retreat',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'himalayan mountains',
    price: 799,
    duration: '7 Days / 6 Nights',
  },
  {
    id: '3',
    name: 'Royal Rajasthan: Heritage Tour',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'rajasthan fort',
    price: 650,
    duration: '6 Days / 5 Nights',
  },
];

const internationalPackages: Package[] = [
  {
    id: '4',
    name: 'Parisian Dreams: Eiffel Tower & Louvre',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paris eiffel tower',
    price: 1299,
    duration: '7 Days / 6 Nights',
  },
  {
    id: '5',
    name: 'Bali Bliss: Beaches & Temples',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'bali temple',
    price: 999,
    duration: '8 Days / 7 Nights',
  },
  {
    id: '6',
    name: 'Roman Holiday: Colosseum & Vatican',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'rome colosseum',
    price: 1150,
    duration: '6 Days / 5 Nights',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedDestinations />
      <PackageShowcase title="Popular Domestic Packages" packages={domesticPackages} />
      <PackageShowcase title="Popular International Packages" packages={internationalPackages} />
      <TailoredExperience />
      <Testimonials />
    </div>
  );
}
