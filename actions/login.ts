"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema, LoginSchemaType } from "@/schemas";
import { User } from "@prisma/client";
import { AuthError } from "next-auth";

export const login = async (
  values: LoginSchemaType,
  callbackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email, password } = validatedFields.data;

  const existingUser = (await getUserByEmail(email)) as User;
  if (!existingUser || !existingUser?.email || !existingUser.password)
    return { error: "Invalid credentials" };

  // if (!existingUser.emailVerified) {
  //     const verificationToken = await generateVerificationToken(
  //       existingUser.email
  //     );
  //     await sendVerificationEmail(
  //       verificationToken.email,
  //       verificationToken.token
  //     );
  //     return { success: "Confirmation email sent !" };
  //   }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Logged in" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
