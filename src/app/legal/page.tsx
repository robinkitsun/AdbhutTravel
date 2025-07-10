import { FileText, Shield, Gavel } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Find legal documents for Adbhut Travel, including our Privacy Policy and Terms of Service.",
};

export default function LegalPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Legal Information</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Important documents governing your use of our services and how we handle your data.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
           <div className="grid md:grid-cols-2 gap-8">
                <Link href="/privacy-policy">
                    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                        <CardHeader className="flex-row items-center gap-4">
                            <Shield className="w-8 h-8 text-primary"/>
                            <CardTitle className="font-headline">Privacy Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Learn how we collect, use, and protect your personal data when you use our travel services.</p>
                        </CardContent>
                    </Card>
                </Link>
                 <Link href="/terms-of-service">
                    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                        <CardHeader className="flex-row items-center gap-4">
                            <FileText className="w-8 h-8 text-primary"/>
                            <CardTitle className="font-headline">Terms of Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Read the terms and conditions that govern your access to and use of our website and booking services.</p>
                        </CardContent>
                    </Card>
                </Link>
           </div>
           <div className="mt-12 text-center text-muted-foreground text-sm">
                <p>If you have any questions regarding our legal policies, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
           </div>
        </div>
      </section>
    </>
  );
}
