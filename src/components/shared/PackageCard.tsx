import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag } from "lucide-react";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-secondary/50">
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
        <CardTitle className="font-headline text-2xl mb-2">{pkg.name}</CardTitle>
        <div className="flex items-center text-muted-foreground text-sm space-x-4">
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4"/>
                <span>{pkg.duration}</span>
            </div>
             <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4"/>
                <span>Starts from ${pkg.price}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href="/contact">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
