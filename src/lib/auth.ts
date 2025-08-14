// src/lib/auth.ts
import NextAuth, { AuthOptions, User as NextAuthUser, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "./env";
import { getDataSource } from "./db";
import { User } from "./models/Users";
import { JWT } from "next-auth/jwt";


export const authOptions: AuthOptions = {
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    secret: env.NEXTAUTH_SECRET,
    callbacks: {
      // 1) After sign-in, upsert user in DB
      async signIn({ user }: { user: NextAuthUser }) {
        const ds = await getDataSource();
        const repo = ds.getRepository(User);
        const exists = await repo.findOneBy({ email: user.email! });
        if (!exists) {
          await repo.save(
            repo.create({
              email: user.email!,
              name: user.name!,
              image: user.image!,
            })
          );
        }
        return true;
      },
      // 2) Include our DB user ID in the JWT
      async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
        if (user) {
          token.id = user.id as number;
        }
        return token;
      },
      // 3) Expose the user ID in session
      async session({ session, token }: { session: Session; token: JWT }) {
        session.user.id = token.id!;
        return session;
      },
    },
  };
