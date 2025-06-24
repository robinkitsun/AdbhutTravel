import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our packages or want to plan a custom trip, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-headline font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground mb-6">Fill out the form and our team will get back to you within 24 hours.</p>
                </div>
                <div className="space-y-4">
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                           <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Our Office</h3>
                            <p className="text-muted-foreground">SCF 61, 1st Floor, Near Anaj Mandi Gate, Pehowa, Kurukshetra, Haryana-136128</p>
                        </div>
                     </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                           <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email Us</h3>
                            <p className="text-muted-foreground">info@adbhuttravel.in</p>
                        </div>
                     </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                           <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Call Us</h3>
                            <p className="text-muted-foreground">Toll Free: 1800 890 5147</p>
                            <p className="text-muted-foreground">Mobile: +91-9671825147</p>
                        </div>
                     </div>
                </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
