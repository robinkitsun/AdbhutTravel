
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Updates",
  description: "Stay informed with the latest news, travel alerts, and updates from Adbhut Travel.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Latest Updates</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Stay informed with the latest news, travel alerts, and updates from Adbhut Travel.
          </p>
        </div>
      </section>
      <section className="py-16">
         <div className="container text-center">
            <p className="text-muted-foreground">Our new updates section is coming soon. Please check back later!</p>
         </div>
      </section>
    </>
  );
}
