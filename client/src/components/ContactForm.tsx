import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useContactForm } from "@/hooks/useContactForm";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "duplicate">("idle");
  const { mutate, isPending } = useContactForm();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmitStatus("idle");
    mutate(data, {
      onSuccess: () => {
        form.reset();
        setSubmitStatus("success");
      },
      onError: (error: Error) => {
        if (error.message === "DUPLICATE_EMAIL") {
          setSubmitStatus("duplicate");
        } else {
          setSubmitStatus("error");
        }
      },
    });
  };

  return (
    <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
      {/* Gradient accent on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Cloud wave pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <path
            d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z"
            fill="currentColor"
            className="text-cyan-500"
          />
          <path
            d="M0,400 Q250,300 500,400 T1000,400 L1000,1000 L0,1000 Z"
            fill="currentColor"
            className="text-purple-500 opacity-50"
          />
        </svg>
      </div>

      <CardContent className="relative p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      disabled={isPending}
                      {...field}
                      className="bg-background/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or inquiry..."
                      disabled={isPending}
                      {...field}
                      className="min-h-[150px] bg-background/50 resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === "success" && (
              <Alert className="border-green-500/50 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-500">
                  Thank you for reaching out! We've received your message and will get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert className="border-red-500/50 bg-red-500/10">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <AlertDescription className="text-red-500">
                  Something went wrong. Please try again or contact us directly at info@exorax.com
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "duplicate" && (
              <Alert className="border-yellow-500/50 bg-yellow-500/10">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <AlertDescription className="text-yellow-500">
                  This email has already been submitted. If you need to send another message, please contact us directly at info@exorax.com
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium"
            >
              {isPending ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
