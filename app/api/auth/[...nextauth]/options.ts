import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_Client_ID as string,
      clientSecret: process.env.GITHUB_Client_Sevret as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_Client_ID as string,
      clientSecret: process.env.GOOGLE_Client_Secret as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
