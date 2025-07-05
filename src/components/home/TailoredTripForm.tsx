
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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

const initialState = {
  message: "",
  errors: {},
  success: false,
  data: undefined,
};

const inclusionsOptions: { id: string; label: string }[] = [
  { id: 'flight', label: 'Flights' },
  { id: 'hotel', label: 'Accommodation' },
  { id: 'transport', label: 'Transport' },
  { id: 'meals', label: 'Meals' },
  { id: 'sightseeing', label: 'Sightseeing' },
  { id: 'visa', label: 'Visa Assistance' },
  { id: 'other', label: 'Other' },
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
  
  // Controlled component state
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [adults, setAdults] = useState('');
  const [kids, setKids] = useState('');
  const [inclusions, setInclusions] = useState<string[]>([]);
  const [otherInclusion, setOtherInclusion] = useState('');
  const [comments, setComments] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');


  const handleInclusionChange = (checked: boolean, id: string) => {
    if (checked) {
      setInclusions(prev => [...prev, id]);
    } else {
      setInclusions(prev => prev.filter(item => item !== id));
    }
  };

  const resetForm = () => {
      setDestination('');
      setStartDate(undefined);
      setEndDate(undefined);
      setAdults('');
      setKids('');
      setInclusions([]);
      setOtherInclusion('');
      setComments('');
      setEmail('');
      setMobile('');
  };


  useEffect(() => {
    if (state.success) {
      resetForm();
      setTimeout(() => {
        setOpen(false);
        // Reset server state after closing to allow for fresh form next time
        state.success = false;
        state.message = "";
        state.data = undefined;
      }, 2000);
    }

    // Re-hydrate form on validation error
    if (!state.success && state.data) {
        setDestination(state.data.destination || '');
        if (state.data.startDate) {
          const parsedDate = new Date(state.data.startDate);
          if (!isNaN(parsedDate.getTime())) setStartDate(parsedDate);
        } else {
          setStartDate(undefined);
        }
        if (state.data.endDate) {
          const parsedDate = new Date(state.data.endDate);
          if (!isNaN(parsedDate.getTime())) setEndDate(parsedDate);
        } else {
          setEndDate(undefined);
        }
        setAdults(state.data.adults || '');
        setKids(state.data.kids || '');
        setInclusions(state.data.inclusions || []);
        setOtherInclusion(state.data.otherInclusion || '');
        setComments(state.data.comments || '');
        setEmail(state.data.email || '');
        setMobile(state.data.mobile || '');
    }
  }, [state]);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="transition-transform duration-300 hover:-translate-y-1">
          Start Planning
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl p-0 flex flex-col max-h-[90vh]">
        <DialogHeader className="p-6 pb-4 border-b shrink-0">
          <DialogTitle className="font-headline">Create Your Custom Trip</DialogTitle>
          <DialogDescription>
            Fill in the details below and our experts will craft a personalized itinerary just for you.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="flex-grow min-h-0 flex flex-col">
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" name="destination" placeholder="e.g., Paris, France" value={destination} onChange={e => setDestination(e.target.value)} />
                {state.errors?.destination && <p className="text-sm font-medium text-destructive">{state.errors.destination[0]}</p>}
            </div>

            <input type="hidden" name="startDate" value={startDate ? format(startDate, "PPP") : ""} />
            <input type="hidden" name="endDate" value={endDate ? format(endDate, "PPP") : ""} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate-popover">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      id="startDate-popover"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start" side="bottom">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate-popover">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      id="endDate-popover"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start" side="bottom">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      disabled={(date) => startDate ? date <= startDate : date < new Date(new Date().setHours(0,0,0,0)) }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adults">Adults</Label>
                <Input id="adults" name="adults" type="number" placeholder="2" min="0" value={adults} onChange={e => setAdults(e.target.value)} />
                {state.errors?.adults && <p className="text-sm font-medium text-destructive">{state.errors.adults[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="kids">Kids (Below 12)</Label>
                <Input id="kids" name="kids" type="number" placeholder="0" min="0" value={kids} onChange={e => setKids(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Desired Inclusions</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-md border p-4">
                {inclusionsOptions.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={item.id} 
                      name="inclusions" 
                      value={item.id}
                      checked={inclusions.includes(item.id)}
                      onCheckedChange={(checked) => handleInclusionChange(!!checked, item.id)}
                    />
                    <Label htmlFor={item.id} className="font-normal cursor-pointer">{item.label}</Label>
                  </div>
                ))}
              </div>
              {inclusions.includes('other') && (
                <div className="space-y-2 pt-2">
                    <Label htmlFor="otherInclusion" className="sr-only">Other inclusion details</Label>
                    <Input id="otherInclusion" name="otherInclusion" placeholder="Please specify other inclusion" value={otherInclusion} onChange={e => setOtherInclusion(e.target.value)} />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comments">Comments / Special Requests</Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Any additional information or requests..."
                className="min-h-[100px]"
                value={comments}
                onChange={e => setComments(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number (Required)</Label>
                <Input id="mobile" name="mobile" type="tel" placeholder="9876543210" value={mobile} onChange={e => setMobile(e.target.value)} />
                {state.errors?.mobile && <p className="text-sm font-medium text-destructive">{state.errors.mobile[0]}</p>}
              </div>
            </div>
          </div>
          
          <DialogFooter className="p-6 pt-4 shrink-0 border-t !mt-0 flex-col gap-2">
              {state.success && (
              <div className="flex items-center gap-2 text-green-600 font-medium p-3 bg-green-100 rounded-md">
                <CheckCircle className="h-5 w-5" />
                <p>{state.message}</p>
              </div>
            )}
            {state.message && !state.success && (
              <p className="text-sm font-medium text-destructive text-center">{state.message}</p>
            )}
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
