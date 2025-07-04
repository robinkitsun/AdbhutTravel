
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
      <section className="bg-secondary py-8">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Affiliations</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc pl-5">
            {affiliationsList.map((item, index) => (
              <li key={index} className="text-lg text-muted-foreground">{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
