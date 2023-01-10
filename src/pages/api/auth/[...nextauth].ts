import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as unknown as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as unknown as string,
        }),
        // ...add more providers here
    ],
};

export default NextAuth(authOptions);
