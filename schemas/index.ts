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
  country: z.string(),
  city: z.string(),
  streetAddress: z.string(),
  postalCode: z.string(),
});

export type ChooseAddressSchemaType = z.infer<typeof ChooseAddressSchema>;
