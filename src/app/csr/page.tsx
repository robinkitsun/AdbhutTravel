
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description: "Learn about Adbhut Travel's commitment to corporate social responsibility (CSR) and our initiatives to make a positive impact.",
};

export default function CsrPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Corporate Social Responsibility</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            At Adbhut Travel, we believe in responsible tourism and are committed to making a positive impact on the communities and environments we visit.
          </p>
        </div>
      </section>
      <section className="py-16">
         <div className="container max-w-3xl mx-auto">
            <p className="text-muted-foreground text-center">
                Information about our CSR initiatives and activities will be available here soon. We are dedicated to sustainable practices, supporting local economies, and preserving cultural heritage for future generations. Please check back later for updates on our efforts.
            </p>
         </div>
      </section>
    </>
  );
}
