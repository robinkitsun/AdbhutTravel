export type Facility = 'flight' | 'food' | 'hotel' | 'wifi' | 'transport' | 'veg';

export interface Package {
  id: string;
  name: string;
  image: string;
  dataAiHint: string;
  duration: string;
  packageType?: string;
  facilities?: Facility[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}
