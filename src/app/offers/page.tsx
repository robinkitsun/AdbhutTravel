
import type { Metadata } from "next";
import Image from "next/image";
import { OfferModal } from "@/components/offers/OfferModal";

export const metadata: Metadata = {
  title: "Special Offers",
  description: "Find exciting offers and exclusive deals on our travel packages. Explore our curated travel experiences by Adbhut Travel.",
};

const offers = [
    {
        title: "Morni Hills 1N/2D Package",
        imageUrl: "/images/offers/morni-hills.jpg",
        dataAiHint: "hills landscape"
    },
    {
        title: "Shimla 2N/3D Tour",
        imageUrl: "/images/offers/shimla.jpg",
        dataAiHint: "mountain town"
    },
    {
        title: "Mussoorie 2N/3D Getaway",
        imageUrl: "/images/offers/mussoorie.jpg",
        dataAiHint: "himalayan valley"
    },
    {
        title: "Manali 3N/5D Adventure",
        imageUrl: "/images/offers/manali.jpg",
        dataAiHint: "snowy mountains"
    },
    {
        title: "Explore the World with Us",
        imageUrl: "/images/offers/travel-video-ad.jpg",
        dataAiHint: "travel collage"
    },
    {
        title: "Trio Island Special by Adbhut",
        imageUrl: "/images/offers/trio-island.png",
        dataAiHint: "tropical islands"
    },
    {
        title: "Honeymoon Special by Adbhut",
        imageUrl: "/images/offers/honeymoon-special.jpg",
        dataAiHint: "honeymoon couple"
    },
    {
        title: "Amazing Thailand Tour",
        imageUrl: "/images/offers/thailand.jpg",
        dataAiHint: "thailand beach"
    },
    {
        title: "Experience Dubai with Adbhut",
        imageUrl: "/images/offers/dubai.jpg",
        dataAiHint: "dubai skyline"
    },
    {
        title: "Discover Adbhut Travel",
        imageUrl: "/images/offers/about-adbhut.jpg",
        dataAiHint: "travel agency"
    }
];

export default function OffersPage() {
  return (
     <>
      <section className="bg-secondary py-12 md:py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Special Offers</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore our latest travel deals and exclusive packages. Click on any offer to see more details and book your next adventure.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offers.map((offer) => (
                <OfferModal key={offer.title} offer={offer}>
                    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer relative">
                         <Image
                            src={offer.imageUrl}
                            alt={offer.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={offer.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="font-headline text-lg font-semibold text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)]">
                                {offer.title}
                            </h3>
                        </div>
                    </div>
                </OfferModal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

    