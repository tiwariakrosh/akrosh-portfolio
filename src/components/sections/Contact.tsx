import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  console.log("form values", form.getValues());

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormState("sending");
    setErrorMessage("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      setFormState("success");
      form.reset();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        "Something went wrong. Please try again or email me directly.",
      );
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-5/12 flex flex-col"
          >
            <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Let's build something together.
            </h3>
            <p className="text-muted-foreground text-lg mb-10">
              Feel free to reach out if you're looking for a developer, have a
              question, or simply want to connect.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:akroshtiwari03@gmail.com"
                data-testid="link-email"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">
                  akroshtiwari03@gmail.com
                </span>
              </a>
            </div>

            <div className="mt-auto">
              <h4 className="font-mono text-sm text-muted-foreground mb-4">
                SOCIAL PROFILES
              </h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12"
                  asChild
                >
                  <a
                    href="https://github.com/tiwariakrosh"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-github"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/akrosh-tiwari-9a1a42167/"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
              {formState === "success" ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold">Message sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setFormState("idle")}
                    data-testid="button-send-another"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-testid="form-contact"
                  >
                    {formState === "error" && (
                      <div className="flex items-center gap-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-name"
                                placeholder="John Doe"
                                className="bg-background"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-email"
                                placeholder="john@example.com"
                                type="email"
                                className="bg-background"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              data-testid="input-message"
                              placeholder="Tell me about your project..."
                              className="min-h-[150px] resize-y bg-background"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto min-w-[200px]"
                      disabled={formState === "sending"}
                      data-testid="button-submit"
                    >
                      {formState === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
