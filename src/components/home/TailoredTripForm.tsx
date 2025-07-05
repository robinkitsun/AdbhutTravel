"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { submitTailoredTripForm } from "@/lib/actions";
import { cn } from "@/lib/utils";
import type { Facility } from "@/lib/types";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

const inclusions: { id: Facility; label: string }[] = [
  { id: 'flight', label: 'Flights' },
  { id: 'hotel', label: 'Accommodation' },
  { id: 'transport', label: 'Transport' },
  { id: 'meals', label: 'Meals' },
  { id: 'sightseeing', label: 'Sightseeing' },
  { id: 'visa', label: 'Visa Assistance' },
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit Request"
      )}
    </Button>
  );
}

export function TailoredTripForm() {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(submitTailoredTripForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setDate(undefined);
      setTimeout(() => {
        setOpen(false);
        // Reset state after closing
        state.success = false; 
        state.message = "";
      }, 2000);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="transition-transform duration-300 hover:-translate-y-1">
          Start Planning
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-headline">Create Your Custom Trip</DialogTitle>
          <DialogDescription>
            Fill in the details below and our experts will craft a personalized itinerary just for you.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <input type="hidden" name="departureDate" value={date ? format(date, "PPP") : ""} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="departureDate-popover">Tentative Dates</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    id="departureDate-popover"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">How long (e.g., 5 Days & 4 Nights)</Label>
              <Input id="duration" name="duration" placeholder="e.g., 5D / 4N" />
              {state.errors?.duration && <p className="text-sm font-medium text-destructive">{state.errors.duration[0]}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="adults">Adults</Label>
              <Input id="adults" name="adults" type="number" placeholder="2" min="1" />
              {state.errors?.adults && <p className="text-sm font-medium text-destructive">{state.errors.adults[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="kids">Kids (Below 12)</Label>
              <Input id="kids" name="kids" type="number" placeholder="0" min="0" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Desired Inclusions</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-md border p-4">
              {inclusions.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox id={item.id} name="inclusions" value={item.id} />
                  <Label htmlFor={item.id} className="font-normal cursor-pointer">{item.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" />
              {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" name="mobile" type="tel" placeholder="+91 12345 67890" />
              {state.errors?.mobile && <p className="text-sm font-medium text-destructive">{state.errors.mobile[0]}</p>}
            </div>
          </div>

          <DialogFooter className="!mt-6 flex-col gap-2">
             {state.success && (
              <div className="flex items-center gap-2 text-green-600 font-medium p-3 bg-green-100 rounded-md">
                <CheckCircle className="h-5 w-5" />
                <p>{state.message}</p>
              </div>
            )}
            {state.message && !state.success && (
               <p className="text-sm font-medium text-destructive">{state.message}</p>
            )}
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
