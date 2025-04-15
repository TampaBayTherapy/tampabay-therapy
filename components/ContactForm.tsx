"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { sendEmailAction } from "@/lib/sendEmail.action";
import toast from "react-hot-toast";
import PrimaryButton from "./shared/PrimaryButton";
import { FadeIn } from "./shared/FadeIn";
import { contactFormSchema, TContactFormSchema } from "@/lib/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  // Initialize the form with React Hook Form and Zod validation.
  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: TContactFormSchema) => {
    try {
      const response = await sendEmailAction(data);

      if (response.error) {
        toast.error(
          `Something went wrong. Please try again later:${response.error}`
        );
      } else {
        toast.success("Your message has been sent successfully!");
        form.reset();
      }
    } catch (error) {
      toast.error(`Unexpected error: ${error} `);
    }
  };

  return (
    <FadeIn className="">
      <h2 className="text-h2">Contact Us with Ease for Any Inquiry</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-12 bg-white p-6 rounded-[32px] border border-gray-200"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <div className="min-h-[24px]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Last Name Field */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <div className="min-h-[24px]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="123-456-7890" {...field} />
                  </FormControl>
                  <div className="min-h-[24px]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 ">
                  <FormLabel>Email</FormLabel>
                  <FormControl className="">
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <div className="min-h-[24px]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          {/* Message Field (Textarea) */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea rows={20} className="min-h-[200px]" placeholder="Your message..." {...field} />
                </FormControl>
                <div className="min-h-[24px]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <PrimaryButton
            type="submit"
            disabled={form.formState.isSubmitting}
            className="mt-10 px-10 w-full mx-auto text-lg py-6"
          >
            Send Message
          </PrimaryButton>
        </form>
      </Form>
    </FadeIn>
  );
}
