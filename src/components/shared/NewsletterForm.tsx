
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { subscribeToNewsletter } from "@/lib/actions";
import { newsletterFormSchema } from "@/lib/schemas";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

export function NewsletterForm() {
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string }>({ success: false, message: "" });
  
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: NewsletterFormData) => {
    setFormStatus({ success: false, message: "" });
    const result = await subscribeToNewsletter(data);
    setFormStatus(result);
    if (result.success) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex w-full max-w-sm items-center space-x-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} className="bg-background"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
        </div>
        {formStatus.message && (
          <p className={cn(
            "text-sm font-medium",
            formStatus.success ? "text-green-600 flex items-center gap-2" : "text-destructive"
          )}>
            {formStatus.success && <CheckCircle className="h-4 w-4" />}
            {formStatus.message}
          </p>
        )}
      </form>
    </Form>
  );
}
