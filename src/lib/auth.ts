import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { signInSchema } from "@/schemas/signin";
// import { database } from "@/database";

const saltAndHashPassword = (pw: string) => pw.toUpperCase();
export const { handlers, signIn, signOut, auth } = NextAuth({
    // adapter: DrizzleAdapter(database),
	providers: [
		Google,
		Github,
		Credentials({
			credentials: {
				email: {
					name: "email",
					type: "email",
				},
				password: {
					name: "password",
					type: "password",
				},
			},
			authorize: async (credentials) => {
				let user = null;
                const { email, password } = await signInSchema.parseAsync(credentials)
				const pwHash = saltAndHashPassword(credentials.password as string);
				try {
					// GET USER FROM DB
				} catch (error) {
					throw new Error("User not found");
				}
				if (!user) {
					// No user found, so this is their first attempt to login
					// meaning this is also the place you could do registration
					throw new Error("User not found.");
				}
				return user;
			},
		}),
	],
	pages: {
		signIn: "/signin",
		signOut: "/signout",
		newUser: "/signup",
	},
});
