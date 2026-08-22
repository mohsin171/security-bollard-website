import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * The database is optional at runtime. If DATABASE_URL is not configured the
 * site still works and the quote form still emails: we never lose a lead to
 * an infrastructure error.
 */
export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    return drizzle(neon(url), { schema });
  } catch {
    return null;
  }
}

export { schema };
