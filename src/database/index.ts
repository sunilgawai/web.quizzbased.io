import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
const betterSqlite = new Database(":memory:");
export const database = drizzle(betterSqlite);
migrate(database, { migrationsFolder: "drizzle" });
betterSqlite.close();
