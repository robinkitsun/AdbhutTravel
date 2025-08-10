
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";

const miceFormSchema = z.object({
  title: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  monthOfTravel: z.string().optional(),
  guests: z.string().min(1, { message: "Number of guests is required." }),
  destinations: z.string().optional(),
  hotelCategory: z.string().optional(),
  hotelType: z.string().optional(),
  serviceRequired: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type MiceFormData = z.infer<typeof miceFormSchema>;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const hotelCategories = ["3 Star", "4 Star", "5 Star"];
const hotelTypes = ["Business Hotel", "Resort", "Boutique Hotel", "Airport Hotel"];

export default function MiceContactForm() {
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string }>({ success: false, message: "" });

  const form = useForm<MiceFormData>({
    resolver: zodResolver(miceFormSchema),
    defaultValues: {
      title: "Mr.",
      lastName: "",
      email: "",
      phone: "",
      monthOfTravel: "October",
      guests: "1",
      destinations: "",
      hotelCategory: "3 Star",
      hotelType: "Business Hotel",
      serviceRequired: "",
      additionalInfo: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: MiceFormData) => {
    setFormStatus({ success: false, message: "" });
    try {
        console.log("Form Data:", data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormStatus({ success: true, message: "Your message has been sent successfully! We will get back to you shortly." });
        form.reset();
    } catch (error) {
        setFormStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-headline font-bold text-gray-800">Get in touch</h2>
            <p className="text-muted-foreground mt-2">
                or write to us at <Link href="mailto:mice@adbhuttravel.com" className="text-accent font-semibold hover:underline">mice@adbhuttravel.com</Link>
            </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700">First & Middle name</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-gray-50">
                                        <SelectValue placeholder="Mr." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Mr.">Mr.</SelectItem>
                                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                                    <SelectItem value="Ms.">Ms.</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700">Last name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} className="bg-gray-50"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-gray-700">Work e-mail</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="Work e-mail Address" {...field} className="bg-gray-50"/>
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
                        <FormLabel className="text-gray-700">Phone number</FormLabel>
                        <FormControl>
                            <Input type="tel" placeholder="" {...field} className="bg-gray-50" hasPrefix={true}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="monthOfTravel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700">Month of Travel</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-gray-50">
                                        <SelectValue placeholder="Select month" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {months.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700">No. of Guests</FormLabel>
                            <FormControl>
                                <Input type="number" min="1" placeholder="1" {...field} className="bg-gray-50"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

             <FormField
                control={form.control}
                name="destinations"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-gray-700">Choice of Destinations</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Destinations" {...field} className="bg-gray-50"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="hotelCategory"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700">Category of Hotels</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-gray-50">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                     {hotelCategories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="hotelType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700">Type of Hotel</FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-gray-50">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {hotelTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
             <FormField
                control={form.control}
                name="serviceRequired"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-gray-700">Service Required</FormLabel>
                        <FormControl>
                            <Input placeholder="Air Tickets" {...field} className="bg-gray-50"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Any Additional Information</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" className="min-h-[100px] bg-gray-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="text-center pt-4">
              <Button type="submit" className="w-full sm:w-auto px-16 py-6 text-lg bg-red-500 hover:bg-red-600" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>

            {formStatus.message && (
              <div className="pt-4">
                {formStatus.success ? (
                  <div className="flex items-center gap-2 text-green-700 font-medium p-3 bg-green-100 rounded-md">
                    <CheckCircle className="h-5 w-5" />
                    <p>{formStatus.message}</p>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-destructive text-center">{formStatus.message}</p>
                )}
              </div>
            )}
          </form>
        </Form>
    </div>
  );
}
