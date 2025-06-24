"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { planTrip } from "@/lib/actions";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Wand2 } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  dates: z.string().min(5, "Please specify travel dates."),
  budget: z.string().min(3, "Please specify a budget."),
  preferences: z.string().min(10, "Please describe your preferences."),
  popularTouristDestinations: z.string().optional(),
});

export default function PlannerClient() {
  const { toast } = useToast();

  const [state, formAction] = useFormState(planTrip, {
    message: "",
    itinerary: null,
    success: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dates: "",
      budget: "",
      preferences: "",
      popularTouristDestinations: "",
    },
  });

  useEffect(() => {
    if (state.message && !state.success) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Card className="shadow-2xl bg-secondary/30">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Trip Details</CardTitle>
          <CardDescription>Provide details about your desired trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={formAction}
            className="space-y-6"
            onSubmit={form.handleSubmit(formAction as any)}
          >
            <FormField
              control={form.control}
              name="dates"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Travel Dates</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 10/12/2024 - 20/12/2024" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., $2000 - $3000" {...field} />
                  </FormControl>
                   <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferences</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Relaxing on beaches, historical sites, adventurous activities..." {...field} />
                  </FormControl>
                   <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="popularTouristDestinations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interested Destinations (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Paris, Tokyo, Rome" {...field} />
                  </FormControl>
                   <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-headline font-bold">Your Generated Itinerary</h3>
        <Card className="min-h-[400px] flex items-center justify-center bg-secondary/30">
          <CardContent className="p-6 w-full">
            {state.itinerary ? (
              <div className="prose prose-sm md:prose-base max-w-none text-foreground whitespace-pre-wrap">
                {state.itinerary}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <Wand2 className="mx-auto h-12 w-12 mb-4" />
                <p>Your personalized itinerary will appear here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// We need to extract the submit button to use useFormStatus
function SubmitButton() {
    const { pending } = useFormState(planTrip, { message: "", itinerary: null, success: false });

    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                </>
            ) : (
                'Generate Itinerary'
            )}
        </Button>
    )
}
