import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  company: varchar("company", { length: 200 }),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 60 }),
  siteType: varchar("site_type", { length: 120 }),
  siteAddress: varchar("site_address", { length: 300 }),
  protecting: varchar("protecting", { length: 160 }),
  quantity: varchar("quantity", { length: 60 }),
  locations: varchar("locations", { length: 60 }),
  projectType: varchar("project_type", { length: 80 }),
  surface: varchar("surface", { length: 60 }),
  timeline: varchar("timeline", { length: 80 }),
  installation: varchar("installation", { length: 80 }),
  trigger: varchar("trigger", { length: 300 }),
  message: text("message"),
  photoUrl: text("photo_url"),
  sourcePage: varchar("source_page", { length: 200 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Quote = typeof quotes.$inferSelect;
export type NewQuote = typeof quotes.$inferInsert;
