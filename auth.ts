import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Google({})],
});
