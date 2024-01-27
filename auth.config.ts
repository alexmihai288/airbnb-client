import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = (await getUserByEmail(email)) as User;
          if (!user || !user.password) return null;

          const passswordsMatch = await bcrypt.compare(password, user.password);

          if (passswordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
