import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/shared/Logo";

const trademarks = [
  {
    name: "VISITKURUKSHETRA.IN (A Unit of Adbhut Travel)",
    logoUrl: "https://www.adbhuttravel.com/wp-content/uploads/2024/06/Screenshot-2024-06-27-at-11.17.15%E2%80%AFAM-1.png",
    width: 250,
    height: 100,
  },
  {
    name: "Adbhut Travel And Event Pvt. Ltd.",
    isComponent: true,
  },
  {
    name: "NORTH CAB",
    logoUrl: "https://www.adbhuttravel.com/wp-content/uploads/2024/06/Screenshot_2023-01-24_at_1.52.15_PM-removebg-preview.png",
    width: 200,
    height: 100,
  },
  {
    name: "Adbhut Foundation",
    logoUrl: "https://www.adbhuttravel.com/wp-content/uploads/2024/06/LOGO-ADBHUT-FOUNDATION.png",
    width: 200,
    height: 100,
  },
  {
    name: "Adbhut Vivah",
    logoUrl: "https://www.adbhuttravel.com/wp-content/uploads/2024/06/Screenshot-2024-06-27-at-11.23.46%E2%80%AFAM.png",
    width: 250,
    height: 100,
  },
];

export default function TrademarksPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Trademarks</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Our registered trademarks and brands under Adbhut Travel And Event Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trademarks.map((trademark) => (
              <Card key={trademark.name} className="flex flex-col items-center justify-start p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="h-28 flex items-center justify-center">
                  {trademark.isComponent ? (
                    <Logo />
                  ) : (
                    <Image
                      src={trademark.logoUrl!}
                      alt={`${trademark.name} Logo`}
                      width={trademark.width}
                      height={trademark.height}
                      className="max-h-24 w-auto object-contain"
                    />
                  )}
                </CardHeader>
                <CardContent className="flex-grow flex items-center">
                  <CardTitle className="font-body text-base font-semibold">{trademark.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
