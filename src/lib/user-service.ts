import { db } from "@/db";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const createOrUpdateUser = async (kindUser: KindeUser) => {
  const { id, email } = kindUser;

  try {
    if (id && email) {
      const user = await db.user.create({
        data: { id, email },
      });
      return user;
    }
  } catch (error) {
    throw error;
  }
};
