"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { submitContactForm } from "@/lib/actions";
import { Loader2, CheckCircle } from "lucide-react";

const initialState = {
  message: "",
  errors: {
    name: [],
    email: [],
    subject: [],
    message: [],
  },
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);


  return (
    <Card className="p-4 sm:p-6 lg:p-8 shadow-2xl bg-secondary/30">
        <CardContent className="p-0">
           <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" />
                {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" />
                 {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
              </div>

               <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Booking Inquiry" />
                 {state.errors?.subject && <p className="text-sm font-medium text-destructive">{state.errors.subject[0]}</p>}
              </div>

               <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your travel plans..."
                  className="min-h-[120px]"
                />
                 {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
              </div>
              
              <SubmitButton />

               {state.success && (
                <div className="flex items-center gap-2 text-green-600 font-medium p-3 bg-green-100 rounded-md">
                   <CheckCircle className="h-5 w-5" />
                   <p>Thank you for your message! We will get back to you shortly.</p>
                </div>
              )}
              {state.message && !state.success && (
                 <p className="text-sm font-medium text-destructive">{state.message}</p>
              )}
           </form>
        </CardContent>
    </Card>
  );
}
