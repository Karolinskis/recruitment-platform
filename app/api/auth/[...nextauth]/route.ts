import prisma from "@/app/utils/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cwd } from "process";

export const authOptions: NextAuthOptions = {
  secret: "asdasdasdasdasdasd",
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E. paštas",
          type: "email",
        },
        password: { label: "Slaptažodis", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        console.log(credentials);
        const { email, password } = credentials as any;

        const user = await prisma.naudotojai.findFirst({
          where: {
            el_pastas: email,
          },
        });

        if (!user) {
          return null;
        }

        if (user.slaptazodis != credentials.password) {
          return null;
        }

        return user;

        // const res = await fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email,
        //     password,
        //   }),
        // });
        // // const user = await res.json();
        // console.log({ user });
        // if (res.ok && user) {
        //   return user;
        // } else return null;

        // return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
