
import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackageShowcase from "@/components/home/PackageShowcase";
import Testimonials from "@/components/home/Testimonials";
import TailoredExperience from "@/components/home/TailoredExperience";
import type { Package } from "@/lib/types";

const domesticPackages: Package[] = [
  {
    id: '1',
    name: 'Couple Kashmir Package',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Kashmir snow couple',
    duration: '04 Nights / 05 Days',
    packageType: '(Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '2',
    name: '4 Person Leh Ladakh',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Ladakh mountains snow',
    duration: '04 Nights / 05 Days',
    packageType: '(4 Person)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '3',
    name: 'Char dham yatra',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'himalayas temple pilgrimage',
    duration: '04 Nights / 05 Days',
    packageType: '(Honeymoon Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
];

const internationalPackages: Package[] = [
  {
    id: '4',
    name: 'Parisian Dreams: Eiffel Tower & Louvre',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Eiffel Tower',
    duration: '7 Days / 6 Nights',
  },
  {
    id: '5',
    name: 'Bali Bliss: Beaches & Temples',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Bali temple',
    duration: '8 Days / 7 Nights',
  },
  {
    id: '6',
    name: 'Roman Holiday: Colosseum & Vatican',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Rome Colosseum',
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
