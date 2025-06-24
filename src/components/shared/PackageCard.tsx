import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card border">
      <CardHeader className="p-0">
        <Image
          src={pkg.image}
          alt={pkg.name}
          width={600}
          height={400}
          className="w-full h-56 object-cover"
          data-ai-hint={pkg.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2 h-14">{pkg.name}</CardTitle>
        <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="w-4 h-4 mr-1.5"/>
            <span>{pkg.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end items-center">
        <Button asChild>
          <Link href="/contact">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
