import NextAuth, { DefaultSession } from "next-auth";
export type ExtendedUser = DefaultSession["user"] & {
  phoneNumber: string;
  image: string;
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    phoneNumber: string;
    image: string;
  }
}
