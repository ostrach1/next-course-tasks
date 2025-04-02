import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: "51021f647bf6691a9758",
      clientSecret: "4c43656df3b264e3afb4d35f30bf52526d70613b",
    }),
  ],
});

export { handler as GET, handler as POST };
