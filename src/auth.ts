import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

const providers: Provider[] = [Google];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  providers,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    // async session({ token, session }) {
    //   if (token) {
    //     session.user.id = token.id as string;
    //     session.user.name = token.name;
    //     session.user.email = token.email as string;
    //     session.user.image = token.picture;
    //   }
    //   return { ...session, ...token };
    // },
    // async jwt({ token, user }) {
    //   const dbUser = await db.user.findFirst({
    //     where: {
    //       email: token.email,
    //     },
    //   });
    //   if (!dbUser) {
    //     /* @ts-ignore */
    //     token.id = user!.id;
    //     return token;
    //   }
    //   return {
    //     id: dbUser.id,
    //     name: dbUser.name,
    //     email: dbUser.email,
    //     picture: dbUser.image,
    //   };
    // },
    redirect() {
      return "/dashboard";
    }
  },
});
