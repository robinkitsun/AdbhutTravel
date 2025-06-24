"use client";

import { useState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { MessageSquare, Send, Loader2, Bot } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { chatWithAgentAction } from "@/lib/actions";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // Find the viewport element within the ScrollArea
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  const handleSubmit = async (formData: FormData) => {
    const userInput = formData.get("message") as string;
    
    if (!userInput.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setIsPending(true);
    formRef.current?.reset();

    const actionFormData = new FormData();
    actionFormData.append('message', userInput);
    actionFormData.append('history', JSON.stringify(messages));

    try {
        const result = await chatWithAgentAction({ messages: [], response: "" }, actionFormData);
        if (result.response) {
            setMessages(prev => [...prev, { role: "assistant", content: result.response }]);
        }
    } catch (error) {
        setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I had trouble connecting. Please try again." }]);
    } finally {
        setIsPending(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg"
          aria-label="Open travel chatbot"
        >
          <MessageSquare className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-headline flex items-center gap-2">
            <Bot /> AI Travel Agent
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-grow my-4 -mr-6 pr-6" ref={scrollAreaRef}>
          <div className="space-y-4">
             <div className="flex items-end gap-2 justify-start">
                <Avatar className="h-8 w-8">
                    <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="max-w-xs rounded-lg p-3 text-sm bg-muted">
                  Hello! I'm your AI travel agent. How can I help you plan your next adventure today?
                </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-end gap-2",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                   <Avatar className="h-8 w-8">
                      <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-xs rounded-lg p-3 text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <form action={handleSubmit} ref={formRef} className="flex items-center gap-2 border-t pt-4">
          <Input name="message" placeholder="Ask about your trip..." className="flex-grow" autoComplete="off" disabled={isPending} />
          <Button type="submit" size="icon" disabled={isPending} aria-label="Send message">
            {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
