
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
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/0231360a-2d4d-4083-b845-af0ab6a5f939-qbf1rtwnf6x8mcl6p8q8bo24o3cudvotd7j9z0ato8.jpg',
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
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan-qbf1rtwnf6x8mcl6p8q8bo24o3cudvotd7j9z0ato8.jpg',
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
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/cityscape-singapore-city-skyline-qbf1ruuhm0yixyjtjr4uw5tl9h87lksjpc6rga9fi0.jpg',
    dataAiHint: 'Malaysia city skyline',
    duration: '04 Nights / 05 Days',
    packageType: '(Couple)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '5',
    name: 'Paris tour',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/famous-eiffel-tower-paris-with-gorgeous-colors-qbf1rs0z1iunz4nx07wz6oj7hbm3yhhcoy8b0gdm0o.jpg',
    dataAiHint: 'Eiffel Tower',
    duration: '04 Nights / 05 Days',
    packageType: '(One Person)',
    facilities: ['flight', 'food', 'hotel', 'wifi', 'transport', 'veg'],
  },
  {
    id: '6',
    name: 'Honeymoon in Bali',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/bali-pagoda-indonesia-qbf1rvsbsuzt9kige9jhgnl1uv3kt9wa1gu8xk81bs.jpg',
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
