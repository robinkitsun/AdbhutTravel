import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="beautiful landscape"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold !text-primary-foreground leading-tight drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
          Journey beyond the ordinary with Adbhut Explorer. We create bespoke travel experiences that you will cherish for a lifetime.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/planner">Plan Your Trip</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#packages">View Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
