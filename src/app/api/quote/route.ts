import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const optional = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

const QuoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(160),
  company: optional(200),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: optional(60),
  siteType: optional(120),
  siteAddress: optional(300),
  protecting: optional(160),
  quantity: optional(60),
  locations: optional(60),
  projectType: optional(80),
  surface: optional(60),
  timeline: optional(80),
  installation: optional(80),
  trigger: optional(300),
  message: optional(4000),
  sourcePage: optional(200),
});

const clean = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

/**
 * Rate limit, per IP, in memory.
 *
 * The form is the only writable surface on the site, so an unthrottled endpoint
 * means anyone can flood the inbox or burn the Resend quota. Serverless
 * instances are reused between requests, so this catches the bursts that
 * matter; it is not a distributed limiter, and a determined attacker spread
 * across instances would get more through. Good enough for a quote form, and
 * it costs nothing to run.
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();   // crude ceiling so memory cannot run away
  return false;
}

/** Photos only. An email attachment is a poor place for arbitrary binaries. */
const ALLOWED_PHOTO = /^image\/(jpeg|png|webp|gif|heic|heif)$/i;

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 12px;border-bottom:1px solid #e2e2e2;font-weight:600;color:#1a1a1a;width:38%">${label}</td>
    <td style="padding:6px 12px;border-bottom:1px solid #e2e2e2;color:#5a5a5a">${value}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Could not read the form data." }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        error: `That is a lot of requests in a short time. Please call ${site.phone} and we will take the details directly.`,
      },
      { status: 429 }
    );
  }

  // Honeypot
  if (clean(form.get("company_website"))) {
    return NextResponse.json({ ok: true });
  }

  const parsed = QuoteSchema.safeParse({
    name: clean(form.get("name")),
    company: clean(form.get("company")),
    email: clean(form.get("email")),
    phone: clean(form.get("phone")),
    siteType: clean(form.get("siteType")),
    siteAddress: clean(form.get("siteAddress")),
    protecting: clean(form.get("protecting")),
    quantity: clean(form.get("quantity")),
    locations: clean(form.get("locations")),
    projectType: clean(form.get("projectType")),
    surface: clean(form.get("surface")),
    timeline: clean(form.get("timeline")),
    installation: clean(form.get("installation")),
    trigger: clean(form.get("trigger")),
    message: clean(form.get("message")),
    sourcePage: clean(form.get("sourcePage")),
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." },
      { status: 400 }
    );
  }

  const d = parsed.data;

  // The photo rides along with the notification email, so "send a photo, get a
  // quote" actually delivers the photo. Long-term storage (Vercel Blob / R2) can
  // come later; the attachment means nothing is lost in the meantime.
  const photo = form.get("photo");
  let photoNote = "";
  let attachment: { filename: string; content: Buffer } | null = null;
  if (photo instanceof File && photo.size > 0) {
    if (photo.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "That photo is larger than 10MB." }, { status: 400 });
    }
    if (photo.type && !ALLOWED_PHOTO.test(photo.type)) {
      return NextResponse.json(
        { error: "Please attach a photo (JPG, PNG, WEBP or HEIC)." },
        { status: 400 }
      );
    }
    const kb = photo.size / 1024;
    photoNote = `${photo.name} (${kb < 1024 ? `${Math.round(kb)}KB` : `${(kb / 1024).toFixed(1)}MB`})`;
    try {
      attachment = {
        filename: photo.name || "site-photo",
        content: Buffer.from(await photo.arrayBuffer()),
      };
    } catch (err) {
      console.error("[quote] could not read the uploaded photo:", err);
    }
  }

  const summary = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px">
    <div style="background:#c8102e;height:4px"></div>
    <h1 style="font-size:20px;color:#1a1a1a;margin:20px 0 4px">New quote request</h1>
    <p style="color:#5a5a5a;margin:0 0 20px;font-size:14px">
      ${d.name}${d.company ? ` &middot; ${d.company}` : ""}
    </p>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Site type", d.siteType)}
      ${row("Site address", d.siteAddress)}
      ${row("Protecting", d.protecting)}
      ${row("Quantity", d.quantity)}
      ${row("Locations", d.locations)}
      ${row("Replacement or new", d.projectType)}
      ${row("Mounting surface", d.surface)}
      ${row("Timeline", d.timeline)}
      ${row("Installation", d.installation)}
      ${row("What prompted this", d.trigger)}
      ${row("Photo", photoNote ? `${photoNote}, attached to this email` : "")}
      ${row("Source page", d.sourcePage)}
    </table>
    ${
      d.message
        ? `<div style="margin-top:20px"><p style="font-weight:600;color:#1a1a1a;margin:0 0 6px">Details</p>
           <p style="color:#5a5a5a;white-space:pre-wrap;margin:0">${d.message}</p></div>`
        : ""
    }
    <p style="margin-top:28px;font-size:12px;color:#5a5a5a;border-top:1px solid #e2e2e2;padding-top:12px">
      24-hour quote standard applies. Received ${new Date().toLocaleString("en-CA", {
        timeZone: "America/Toronto",
      })} ET.
    </p>
  </div>`;

  // 1. Notify first: the lead must survive a database problem.
  let emailed = false;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_NOTIFICATION_EMAIL || site.email;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.QUOTE_FROM_EMAIL || "quotes@securitybollarddirect.ca",
        to,
        replyTo: d.email,
        subject: `Quote request: ${d.company || d.name}${d.siteType ? ` (${d.siteType})` : ""}`,
        html: summary,
        ...(attachment ? { attachments: [attachment] } : {}),
      });
      emailed = true;
    } catch (err) {
      console.error("[quote] email failed:", err);
    }
  } else {
    console.warn("[quote] RESEND_API_KEY not set, logging submission instead:", d);
  }

  // Never tell a customer their enquiry was received when it went nowhere.
  // Email is the only delivery channel, so if it failed, say so and give them
  // the phone number: a visible error is far cheaper than a lost lead.
  if (!emailed) {
    console.error(
      "[quote] DELIVERY FAILED: no channel accepted this submission.",
      { hasResendKey: Boolean(apiKey), to },
      d
    );
    return NextResponse.json(
      {
        error: `We could not send that just now. Please call ${site.phone} or email ${site.email} and we will pick it up straight away.`,
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
