
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, CheckCircle } from "lucide-react";

const miceFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  eventDetails: z.string().min(10, { message: "Please provide some details about your event." }),
});

type MiceFormData = z.infer<typeof miceFormSchema>;

export default function MiceContactForm() {
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string }>({ success: false, message: "" });
  
  const form = useForm<MiceFormData>({
    resolver: zodResolver(miceFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      eventDetails: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: MiceFormData) => {
    setFormStatus({ success: false, message: "" });
    // This is a placeholder for the submission logic.
    // In a real application, this would call a server action to send an email or save to a DB.
    try {
        console.log("Form Data:", data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormStatus({ success: true, message: "Your request has been sent successfully! We will get back to you shortly." });
        form.reset();
    } catch (error) {
        setFormStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <Card className="p-4 sm:p-6 lg:p-8 shadow-lg bg-card">
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Innovatech Solutions" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="eventDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Details</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your event, number of people, destination, dates, etc." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>

            {formStatus.message && (
              formStatus.success ? (
                <div className="flex items-center gap-2 text-green-600 font-medium p-3 bg-green-100 rounded-md">
                   <CheckCircle className="h-5 w-5" />
                   <p>{formStatus.message}</p>
                </div>
              ) : (
                <p className="text-sm font-medium text-destructive">{formStatus.message}</p>
              )
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
