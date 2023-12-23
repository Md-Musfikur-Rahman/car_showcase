import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "musfikur@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password }: any = credentials;

        if (email === "musfikur@test.com" && password === "musfikur") {
          return null;
        }

        return { id: "011", name: "Musfikur", email: "musfikur@test.com" };
        //   const res = await fetch("/your/endpoint", {
        //     method: "POST",
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" },
        //   });
        //   const user = await res.json();
        //   if (res.ok && user) {
        //     return user;
        //   }
        //   return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
