import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";


export const authOptionsGoogle = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 365 * 2,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        // Check if user already exists in database
        const existingUser = await db.user.findFirst({
          where: {
            email: user.email!,
          },
        });

        // If user doesn't exist, create a new user
        if (!existingUser) {
          await db.user.create({
            data: {
              email: user.email!,
              name: user.name || "",
              image: user.image || "",
            },
          });
          console.log(`New user created: ${user.email}`);
        } else {
          console.log(`Existing user signed in: ${user.email}`);
        }

        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false;
      }
    }
  }
};

