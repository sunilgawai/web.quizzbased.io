import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
const betterSqlite = new Database("quizzed.db");
export const database: BetterSQLite3Database = drizzle(betterSqlite);
migrate(database, { migrationsFolder: "drizzle" });
// betterSqlite.close();
