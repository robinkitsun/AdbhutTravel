
import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PackageShowcase from "@/components/home/PackageShowcase";
import Testimonials from "@/components/home/Testimonials";
import TailoredExperience from "@/components/home/TailoredExperience";
import type { Package } from "@/lib/types";

const domesticPackages: Package[] = [
  {
    id: '1',
    name: 'GOA-DELIGHT',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/2023/08/goa-delight-350x250.jpg',
    dataAiHint: 'Goa beach',
    duration: '3 Nights / 4 Days',
  },
  {
    id: '2',
    name: 'Heavenly Kashmir',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/2023/08/kashmir-350x250.jpg',
    dataAiHint: 'Kashmir valley',
    duration: '5 Nights / 6 Days',
  },
  {
    id: '3',
    name: 'KERALA-MUNNAR',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/2023/08/kerala-350x250.jpg',
    dataAiHint: 'Kerala backwaters',
    duration: '4 Nights / 5 Days',
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
