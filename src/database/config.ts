import { defineConfig } from "drizzle-kit";
export default defineConfig({
	schema: "./schema.ts",
	driver: "better-sqlite",
	dbCredentials: {
		url: process.env.DRIZZLE_DATABASE_URL as string,
	},
	verbose: true,
	strict: true,
});
