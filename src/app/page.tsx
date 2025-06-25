
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
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dataAiHint: 'Kashmir snow couple',
    duration: '04 Nights / 05 Days',
    packageType: '(Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '2',
    name: '4 Person Leh Ladakh',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/2f3139a7-93e8-4446-ab1e-49abfc63c708-qbf1rs0z1iunz4nx07wz6oj7hbm3yhhcoy8b0gdm0o.jpg',
    dataAiHint: 'Ladakh mountains snow',
    duration: '04 Nights / 05 Days',
    packageType: '(4 Person)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '3',
    name: 'Char dham yatra',
    image: 'https://as1.ftcdn.net/v2/jpg/03/42/68/56/1000_F_342685632_iYq6sENl13xyC7mo5dR1pqzFDVs2ZSt8.jpg',
    dataAiHint: 'himalayas temple pilgrimage',
    duration: '04 Nights / 05 Days',
    packageType: '(Honeymoon Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
];

const internationalPackages: Package[] = [
  {
    id: '4',
    name: 'Couple Malaysia trip',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Malaysia city skyline',
    duration: '04 Nights / 05 Days',
    packageType: '(Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '5',
    name: 'Paris tour',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Eiffel Tower',
    duration: '04 Nights / 05 Days',
    packageType: '(One Person)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '6',
    name: 'Honeymoon in Bali',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Bali temple lake',
    duration: '7 night 8 days',
    packageType: '(Honeymoon Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
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
