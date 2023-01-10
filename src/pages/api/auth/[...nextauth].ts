import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as unknown as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as unknown as string,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            const { email } = user;

            try {
                await fauna.query(
                    q.Create(q.Collection("users"), { data: { email } })
                );

                return true;
            } catch {
                return false;
            }
        },
    },
} as AuthOptions;

export default NextAuth(authOptions);
