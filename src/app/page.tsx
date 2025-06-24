import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackageShowcase from "@/components/home/PackageShowcase";
import Testimonials from "@/components/home/Testimonials";
import TailoredExperience from "@/components/home/TailoredExperience";
import type { Package } from "@/lib/types";

const domesticPackages: Package[] = [
  {
    id: '1',
    name: 'Mystical Manali',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'himalayas mountains',
    price: 499,
    duration: '5 Days / 4 Nights',
  },
  {
    id: '2',
    name: 'Goan Paradise',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'goa beach',
    price: 699,
    duration: '7 Days / 6 Nights',
  },
  {
    id: '3',
    name: 'Kerala Backwaters',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'kerala backwaters',
    price: 599,
    duration: '6 Days / 5 Nights',
  },
];

const internationalPackages: Package[] = [
  {
    id: '4',
    name: 'Parisian Romance',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paris eiffel',
    price: 1299,
    duration: '6 Days / 5 Nights',
  },
  {
    id: '5',
    name: 'Swiss Alps Adventure',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'switzerland alps',
    price: 1899,
    duration: '8 Days / 7 Nights',
  },
  {
    id: '6',
    name: 'Echoes of Rome',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'rome colosseum',
    price: 1499,
    duration: '7 Days / 6 Nights',
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
