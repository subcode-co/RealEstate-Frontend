import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .optional(),
  price: z.number().positive("Price must be positive"),
  location: z.string().optional(),
  type: z.string().optional(),
  bedrooms: z.number().int().positive().optional(),
  bathrooms: z.number().int().positive().optional(),
  area: z.number().positive().optional(),
  images: z.array(z.any()).optional(),
});

export type PropertyFormData = z.infer<typeof propertySchema>;
