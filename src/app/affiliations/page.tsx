
import Image from "next/image";

const affiliationsList = [
  "MOT (Ministry of Tourism India)",
  "IATA (International Air Transport Association – Established in 1945)",
  "TAAI (Travel Agents Association Of India – Established in 1951)",
  "TAFI (Travel Agents Federation Of India – Established in 1986)",
  "ETAA (Enterprising Travel Agent's Association – Established in 1996)",
  "ADTOI (Association of Domestic Tour Operator of India-Established in 1996)",
  "OTOAI (Outbound Tour Operators Association of India – Youngest)",
  "IATTE (Indian Association of Travel & Tourism Experts -Youngest)",
  "IGCC (Indo-German Chamber of Commerce – Established in 1956)",
  "State Tourism (Haryana Tourism Corporation – Established in 1974)",
  "HCCI (Haryana Chamber of Commerce and Industry )",
  "ISO 9001: 2015 And many more...",
];

export default function AffiliationsPage() {
  return (
    <>
      <section className="bg-secondary py-12 md:py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Affiliations</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Affiliations – We are Affiliated with:</h2>
          <ul className="space-y-3 list-disc list-inside text-muted-foreground">
            {affiliationsList.map((item, index) => (
              <li key={index} className="text-lg">{item}</li>
            ))}
          </ul>
          <div className="mt-12">
            <Image
              src="https://www.adbhuttravel.com/wp-content/uploads/2025/01/Screenshot-2025-01-04-at-9.55.01%E2%80%AFAM-1536x113.png"
              alt="Certifications and Affiliations Logos"
              width={1536}
              height={113}
              className="w-full h-auto object-contain"
              data-ai-hint="certifications collage"
            />
          </div>
        </div>
      </section>
    </>
  );
}
