import type { AuthOptions, User as NextAuthUser, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "./env";
import { getDataSource } from "./db";
import { User } from "./models/Users";
import type { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // 1) On sign-in, upsert the user by email
    async signIn({ user }: { user: NextAuthUser }) {
      if (!user?.email) return false;

      const ds = await getDataSource();
      const repo = ds.getRepository(User);

      // Upsert by unique email
      await repo.upsert(
        {
          email: user.email,
          name: user.name ?? null,
          image: user.image ?? null,
        },
        ["email"]
      );

      return true;
    },

    // 2) Put the NUMERIC DB id onto the JWT as token.id
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
      // Only on first sign-in within this JWT lifecycle does "user" exist
      if (user?.email) {
        const ds = await getDataSource();
        const repo = ds.getRepository(User);
        const record = await repo.findOneBy({ email: user.email });
        if (record) {
          token.id = record.id; // number
        }
      }
      return token;
    },

    // 3) Expose the numeric id on the session
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id ?? 0; // keep your Session type as number
      }
      return session;
    },
  },
};
