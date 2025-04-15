import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First Name is required." })
    .max(100, { message: "First Name must be at most 100 characters long." })
    .refine((value) => /^[a-zA-ZčćšđžČĆŠĐŽ\s]+$/.test(value), {
      message: "Name can only contain letters and spaces.",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "First Name is required." })
    .max(100, { message: "First Name must be at most 100 characters long." })
    .refine((value) => /^[a-zA-ZčćšđžČĆŠĐŽ\s]+$/.test(value), {
      message: "Name can only contain letters and spaces.",
    }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." })
    .max(100, { message: "Email must be at most 100 characters long." }),

  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone number must be at most 20 characters long." })
    .optional()
    .refine((value) => !value || /^[\d\s()+-]+$/.test(value), {
      message: "Phone number contains invalid characters.",
    }),

  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required." })
    .max(1000, { message: "Message must be at most 1000 characters long." }),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;
