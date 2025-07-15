import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { type NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile && account.provider === "google") {
        token.name = profile.name;
        token.email = profile.email;
        if ("picture" in profile && typeof profile.picture === "string") {
          token.picture = profile.picture;
        }
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          email: token.email,
          image: token.picture,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };