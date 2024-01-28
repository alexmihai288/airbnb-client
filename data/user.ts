import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({ where: { userId } });

    return account;
  } catch (error) {
    return null;
  }
};
