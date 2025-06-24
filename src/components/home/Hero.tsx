import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[calc(80vh)] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="thailand beach"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold !text-primary-foreground leading-tight drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
          Explore the world's most breathtaking destinations with Adbhut Travel. From exotic beaches to thrilling mountain treks, we curate unforgettable travel experiences tailored just for you.
        </p>
        <div className="mt-8 w-full max-w-2xl">
          <div className="relative">
            <Input type="search" placeholder="Search destinations or packages" className="h-14 pl-12 pr-32 rounded-full bg-white/90 text-foreground focus:bg-white" />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Button size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-8">Search</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
