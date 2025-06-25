export type Facility = 
  | 'flight' 
  | 'hotel' 
  | 'transport' 
  | 'meals'
  | 'sightseeing'
  | 'guide'
  | 'visa'
  | 'insurance'
  | 'permit'
  | 'spa'
  | 'wifi'
  | 'veg';

export interface Package {
  id: string;
  name: string;
  image: string;
  dataAiHint: string;
  duration: string;
  packageType?: string;
  facilities?: Facility[];
  gallery?: string[];
  galleryHints?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}
