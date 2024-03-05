import Google from "next-auth/providers/google";
import prisma from "@/app/lib/prismadb";

import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/job-applications");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to homepage page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/job-applications", nextUrl));
      }
      return true;
    },
  },
  providers: [Google],
} satisfies NextAuthConfig;
