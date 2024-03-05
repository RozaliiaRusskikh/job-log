import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";
import prisma from "@/app/lib/prismadb";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
});
