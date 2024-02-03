import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 character" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const ChooseAddressSchema = z.object({
  country: z
    .string()
    .min(4, { message: "Country must be at least 4 characters" }),
  city: z.string().min(1, { message: "City must be at least 1 character" }),
  streetAddress: z
    .string()
    .min(4, { message: "Street address must be at least 4 characters" }),
  postalCode: z
    .string()
    .min(5, { message: "Postal code must be at least 5 characters" }),
});

export type ChooseAddressSchemaType = z.infer<typeof ChooseAddressSchema>;
