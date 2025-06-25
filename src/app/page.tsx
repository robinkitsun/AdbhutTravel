
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
    facilities: ['flight', 'hotel', 'transport', 'meals', 'sightseeing'],
    gallery: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    galleryHints: ["kashmir dal lake", "kashmir mountains", "srinagar garden", "kashmir people"],
    itinerary: `Couple's Kashmir Escape: 5-Day Itinerary
This itinerary focuses on popular sights and romantic activities for a couple's getaway in Kashmir.

Day 1: Arrival in Srinagar & Dal Lake Serenity
Morning (9:00 AM): Arrive at Srinagar Airport (SXR). Our representative will greet you and transfer you to your houseboat on Dal Lake.
Afternoon (1:00 PM): Check in and enjoy a welcome lunch on the houseboat.
Afternoon (3:00 PM): Shikara ride on Dal Lake. Explore the floating gardens, Nehru Park, and Kabutarkhana (pigeon house).
Evening (7:00 PM): Enjoy a romantic candle-light dinner on the houseboat.

Day 2: Gulmarg's Snowy Paradise
Morning (9:00 AM): After breakfast, drive to Gulmarg, the "Meadow of Flowers."
Afternoon (1:00 PM): Take the Gulmarg Gondola ride (Phase 1) to Kongdoori Station for stunning views of the snow-capped peaks.
Afternoon (3:00 PM): Try your hand at skiing or snowboarding (seasonal) or simply enjoy the panoramic vistas.
Evening (6:00 PM): Return to Srinagar for dinner and overnight stay.

Day 3: The Valleys of Pahalgam
Morning (9:00 AM): Depart for Pahalgam, the "Valley of Shepherds." En route, visit the saffron fields and Awantipura ruins.
Afternoon (1:00 PM): On arrival, check into your hotel. Post lunch, explore the scenic Aru Valley and Betaab Valley.
Evening (6:00 PM): Stroll along the Lidder River. Dinner and overnight stay in Pahalgam.

Day 4: The Golden Meadows of Sonmarg
Morning (9:00 AM): Travel to Sonmarg, the "Meadow of Gold."
Afternoon (12:00 PM): Explore the Thajiwas Glacier. You can hire a pony for a scenic ride.
Afternoon (3:00 PM): Enjoy the serene beauty of the alpine meadows and gushing streams.
Evening (7:00 PM): Return to your hotel in Srinagar for a farewell dinner.

Day 5: Departure
Morning (9:00 AM): After breakfast, you will be transferred to Srinagar Airport for your onward journey, filled with beautiful memories.
`
  },
  {
    id: '2',
    name: '4 Person Leh Ladakh',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/2f3139a7-93e8-4446-ab1e-49abfc63c708-qbf1rs0z1iunz4nx07wz6oj7hbm3yhhcoy8b0gdm0o.jpg',
    dataAiHint: 'Ladakh mountains snow',
    duration: '04 Nights / 05 Days',
    packageType: '(4 Person)',
    facilities: ['hotel', 'transport', 'meals', 'sightseeing', 'guide'],
    gallery: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    galleryHints: ["ladakh monastery", "pangong lake", "nubra valley", "khardung la pass"],
    itinerary: `Leh-Ladakh Adventure: 5-Day Itinerary
A high-altitude adventure for a group of four, exploring the rugged beauty of Ladakh.

Day 1: Arrival and Acclimatization in Leh
Morning (10:00 AM): Arrive at Kushok Bakula Rimpochee Airport (IXL). Transfer to your hotel and rest for the full day to acclimatize to the high altitude (11,500 ft).
Evening (5:00 PM): A gentle walk to Leh Market and Shanti Stupa for a panoramic sunset view.

Day 2: Exploring Leh's Monasteries
Morning (9:00 AM): Visit Thiksey Monastery, an impressive complex rising tier upon tier on a hill.
Afternoon (1:00 PM): Explore Hemis Monastery, the largest and wealthiest monastery in Ladakh.
Afternoon (4:00 PM): Visit the Hall of Fame, a museum constructed by the Indian Army in memory of the brave soldiers.

Day 3: Nubra Valley via Khardung La
Morning (8:00 AM): Drive to Nubra Valley, crossing the Khardung La Pass, one of the world's highest motorable roads.
Afternoon (2:00 PM): Check into your camp/hotel in Hunder. Post lunch, enjoy a double-humped Bactrian camel ride on the sand dunes.
Evening: Relax and enjoy the serene desert landscape.

Day 4: Journey to Pangong Lake
Morning (8:00 AM): Drive to the mesmerizing Pangong Lake, a high-altitude saline water lake that changes colors.
Afternoon (1:00 PM): Spend time at the lake shore, taking in the breathtaking views of the turquoise water against the stark mountains.
Evening (6:00 PM): Drive back to Leh for dinner and overnight stay.

Day 5: Departure from Leh
Morning (8:00 AM): After breakfast, transfer to Leh airport for your flight back home, with memories of a lifetime.
`
  },
  {
    id: '3',
    name: 'Char dham yatra',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan-qbf1rtwnf6x8mcl6p8q8bo24o3cudvotd7j9z0ato8.jpg',
    dataAiHint: 'himalayas temple pilgrimage',
    duration: '09 Nights / 10 Days',
    packageType: '(Group)',
    facilities: ['hotel', 'transport', 'meals', 'guide', 'permit'],
    gallery: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    galleryHints: ["kedarnath temple", "badrinath temple", "gangotri glacier", "yamunotri temple"],
    itinerary: `Sacred Char Dham Yatra: 10-Day Itinerary
A spiritual group journey to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.

Day 1: Delhi to Haridwar (210 Kms / 6-7 hrs)
Arrive in Delhi and drive to Haridwar. Check into the hotel. In the evening, witness the grand Ganga Aarti at Har Ki Pauri.

Day 2: Haridwar to Barkot (220 Kms / 7-8 hrs)
After breakfast, drive to Barkot via Dehradun and Mussoorie. En route, visit Kempty Fall.

Day 3: Barkot - Yamunotri - Barkot (36 Kms drive & 6 Kms Trek)
Drive to Janki Chatti, then start your 6 km trek to Yamunotri. After Darshan, trek back and drive to Barkot.

Day 4: Barkot to Uttarkashi (100 Kms / 4 hrs)
Drive to Uttarkashi. Visit Vishwanath Temple. Check into the hotel.

Day 5: Uttarkashi - Gangotri - Uttarkashi (100 Kms / 3-4 hrs each way)
Proceed to Gangotri. After offering prayers at the temple, drive back to Uttarkashi.

Day 6: Uttarkashi to Guptkashi (220 Kms / 8-9 hrs)
Drive to Guptkashi via Moolgarh & Lambgoan. Check into the hotel.

Day 7: Guptkashi - Kedarnath (30 Kms by road & 19 Kms trek)
Drive to Sonprayag, then take a local jeep to Gaurikund. Begin your trek to Kedarnath. Perform Pooja and Darshan.

Day 8: Kedarnath - Guptkashi (19 Kms trek & 30 Kms by road)
Trek down to Gaurikund. Later, drive to Guptkashi and check into the hotel.

Day 9: Guptkashi to Badrinath (215 Kms / 7 hrs)
Drive to Badrinath via Chopta. On arrival, check into the hotel and visit the Badrinath Temple for evening Aarti.

Day 10: Badrinath to Rishikesh/Delhi (315 Kms / 10-11 hrs)
Early morning, visit Mana Village. Later, drive back to Rishikesh/Delhi for your onward journey.
`
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
    facilities: ['flight', 'hotel', 'transport', 'meals', 'visa'],
    gallery: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    galleryHints: ["kuala lumpur towers", "batu caves", "langkawi beach", "penang street art"],
    itinerary: `Malaysian Discovery for Two: 5-Day Itinerary
A romantic couple's trip exploring the vibrant culture and landmarks of Malaysia.

Day 1: Arrival in Kuala Lumpur
Arrive at Kuala Lumpur International Airport (KUL). Transfer to your hotel and check-in. Spend the rest of the day at leisure.

Day 2: Kuala Lumpur City Tour
Morning: Visit the iconic Petronas Twin Towers for a photo stop, explore Independence Square, and the National Mosque.
Afternoon: Head to the Batu Caves, a limestone hill that has a series of caves and cave temples.

Day 3: Genting Highlands Day Trip
Full Day: Enjoy a scenic drive to the Genting Highlands. Take a cable car ride and try your luck at the casino or enjoy the indoor theme park.

Day 4: Shopping and Leisure
Full Day: Free for you to explore Kuala Lumpur's famous shopping districts like Bukit Bintang or relax at the hotel.

Day 5: Departure
After breakfast, transfer to the airport for your flight home, with wonderful memories of Malaysia.
`
  },
  {
    id: '5',
    name: 'Paris tour',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/famous-eiffel-tower-paris-with-gorgeous-colors-qbf1rs0z1iunz4nx07wz6oj7hbm3yhhcoy8b0gdm0o.jpg',
    dataAiHint: 'Eiffel Tower',
    duration: '04 Nights / 05 Days',
    packageType: '(One Person)',
    facilities: ['flight', 'hotel', 'sightseeing', 'guide', 'insurance'],
    gallery: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    galleryHints: ["eiffel tower night", "louvre museum", "seine river cruise", "montmartre paris"],
    itinerary: `Solo in Paris: 5-Day Itinerary
An immersive tour for a solo traveler to experience the art, history, and charm of Paris.

Day 1: Arrival in Paris
Arrive at Charles de Gaulle Airport (CDG), transfer to your hotel. Settle in and perhaps take a walk around your neighborhood.

Day 2: Iconic Landmarks
Morning: Visit the Eiffel Tower. It's recommended to book tickets in advance to avoid long queues.
Afternoon: Explore the Louvre Museum, home to masterpieces like the Mona Lisa.

Day 3: Art, Culture, and River Views
Morning: Visit the charming neighborhood of Montmartre and the Sacré-Cœur Basilica.
Afternoon: Stroll along the Seine River and take a relaxing river cruise for a different perspective of the city.

Day 4: Palace of Versailles
Full Day: Take a day trip to the magnificent Palace of Versailles. Explore the opulent palace and its vast, beautiful gardens.

Day 5: Departure
Enjoy a final Parisian breakfast before heading to the airport for your departure.
`
  },
  {
    id: '6',
    name: 'Honeymoon in Bali',
    image: 'https://www.adbhuttravel.com/wp-content/uploads/elementor/thumbs/bali-pagoda-indonesia-qbf1rvsbsuzt9kige9jhgnl1uv3kt9wa1gu8xk81bs.jpg',
    dataAiHint: 'Bali temple lake',
    duration: '7 night 8 days',
    packageType: '(Honeymoon Couple)',
    facilities: ['flight', 'hotel', 'transport', 'meals', 'sightseeing', 'spa'],
    gallery: [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ],
    galleryHints: ["bali rice terrace", "bali temple", "beach sunset bali", "bali villa pool"],
    itinerary: `Bali Honeymoon Bliss: 8-Day Itinerary
A perfect romantic escape for honeymooners, blending relaxation, culture, and adventure in Bali.

Day 1: Arrival in Ubud
Arrive at Denpasar Airport (DPS) and transfer to your private villa in Ubud. Enjoy a romantic welcome dinner.

Day 2: Ubud's Cultural Heart
Morning: Visit the Tegalalang Rice Terraces and the Sacred Monkey Forest.
Afternoon: Enjoy a couple's cooking class to learn the secrets of Balinese cuisine.

Day 3: Spiritual Cleansing and Volcano Views
Morning: Experience a traditional water purification ceremony at Tirta Empul Temple.
Afternoon: Head to Kintamani to enjoy stunning views of Mount Batur and its crater lake.

Day 4: Relaxation and Transfer to Seminyak
Morning: Enjoy a leisurely breakfast and a couple's spa treatment at your villa.
Afternoon: Transfer to the stylish beach town of Seminyak.

Day 5: Beach Fun and Sunset Temple
Morning: Enjoy water sports at Tanjung Benoa beach.
Evening: Visit the iconic Uluwatu Temple perched on a cliff, and watch the traditional Kecak dance at sunset.

Day 6: Island Escape to Nusa Penida
Full Day: Take a fast boat to Nusa Penida island. Visit breathtaking spots like Kelingking Beach and Angel's Billabong.

Day 7: Leisure and Shopping
Enjoy a final day relaxing on Seminyak beach, shopping for souvenirs, or exploring the chic cafes and boutiques.

Day 8: Departure
Enjoy a final breakfast in paradise before transferring to the airport for your flight home.
`
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
