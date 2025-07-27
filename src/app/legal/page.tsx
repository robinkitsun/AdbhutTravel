import { FileText, Shield, Gavel, Award, Gem, ListTree } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Find legal documents, affiliations, and trademark information for Adbhut Travel.",
};

const legalLinks = [
    {
        href: "/terms-of-service",
        icon: Gavel,
        title: "Policy & Terms of Service",
        description: "Read the terms, conditions, and policies that govern your use of our website and booking services."
    },
    {
        href: "/cancellation-policy",
        icon: FileText,
        title: "Refund Policy",
        description: "Understand the terms for cancelling or modifying your booking, and how refunds are processed."
    },
    {
        href: "/affiliations",
        icon: Award,
        title: "Affiliations & Accreditations",
        description: "View our official affiliations, showcasing our commitment to industry standards and quality service."
    },
    {
        href: "/trademarks",
        icon: Gem,
        title: "Trademarks",
        description: "See the registered trademarks and wordmarks owned by Adbhut Travel And Event Private Limited."
    }
];

export default function LegalPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Legal Information</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Important documents, policies, and information about our company.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {legalLinks.map((link) => (
                     <Link href={link.href} key={link.title}>
                        <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                            <CardHeader className="flex-row items-center gap-4">
                                <link.icon className="w-8 h-8 text-primary"/>
                                <CardTitle className="font-headline">{link.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{link.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
           </div>
           <div className="mt-12 text-center text-muted-foreground text-sm">
                <p>If you have any questions regarding our legal policies, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
           </div>
        </div>
      </section>
    </>
  );
}
