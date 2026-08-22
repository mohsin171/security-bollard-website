"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { site } from "@/content/site";

const SITE_TYPES = [
  "Commercial plaza or retail",
  "Condominium or apartment",
  "Office building",
  "Warehouse, distribution or industrial",
  "School, daycare or campus",
  "Auto dealership or fleet yard",
  "Municipal or public space",
  "Construction project (new build)",
  "Residential driveway",
  "Other",
];

const PROTECTING = [
  "Store front, glazing or building entrance",
  "Loading dock, doors or racking",
  "Gas meter, electrical panel or equipment",
  "Pedestrian walkway or drop-off area",
  "Parking garage ramp or pillar",
  "Bicycle parking (code requirement)",
  "Vehicle theft or unauthorised access",
  "Not sure — need advice",
];

const PROJECT_TYPE = ["Replacement of existing", "New addition", "New construction", "Not sure"];
const SURFACE = ["Concrete", "Asphalt", "Pavers", "Not sure"];
const TIMELINE = ["Urgent (within 2 weeks)", "This month", "1–3 months", "Budgeting for later"];

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileError("");
    if (!file) {
      setFileName("");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setFileError("That photo is over 10MB. Please choose a smaller one.");
      e.target.value = "";
      setFileName("");
      return;
    }
    setFileName(file.name);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans do not.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please call us instead.");
        return;
      }

      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-l-4 border-sbd-red bg-fog p-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
          Request received
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-charcoal">
          Thanks — we have your details.
        </h2>
        <p className="mt-3 text-slate-grey">
          You will get a written quote within 24 hours on a business day, including part numbers,
          pricing and lead time on each line. If it is urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-sbd-red">
            {site.phone}
          </a>{" "}
          and we will deal with it now.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-display text-xs font-bold uppercase tracking-wider text-sbd-red underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const field =
    "w-full border border-hairline bg-white px-4 py-3 text-charcoal transition-colors focus:border-sbd-red focus:outline-none focus:ring-2 focus:ring-sbd-red/20";
  const label = "mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-charcoal";
  const hint = "mt-1 block text-xs font-normal normal-case tracking-normal text-slate-grey";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Do not fill this in</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Contact */}
      <fieldset>
        <legend className="red-rule mb-6 font-display text-lg font-bold text-charcoal">
          Your details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>
              Name <span className="text-sbd-red">*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="company" className={label}>
              Company or property
            </label>
            <input id="company" name="company" type="text" autoComplete="organization" className={field} />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              Email <span className="text-sbd-red">*</span>
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="phone" className={label}>
              Phone
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
          </div>
        </div>
      </fieldset>

      {/* Site */}
      <fieldset>
        <legend className="red-rule mb-6 font-display text-lg font-bold text-charcoal">
          The site
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="siteType" className={label}>
              Site type <span className="text-sbd-red">*</span>
            </label>
            <select id="siteType" name="siteType" required defaultValue="" className={field}>
              <option value="" disabled>
                Select one
              </option>
              {SITE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="siteAddress" className={label}>
              Site address or city
              <span className={hint}>City is enough if you would rather not share the address</span>
            </label>
            <input id="siteAddress" name="siteAddress" type="text" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="protecting" className={label}>
              What are you protecting? <span className="text-sbd-red">*</span>
              <span className={hint}>This tells us more than a product name does</span>
            </label>
            <select id="protecting" name="protecting" required defaultValue="" className={field}>
              <option value="" disabled>
                Select one
              </option>
              {PROTECTING.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Scope */}
      <fieldset>
        <legend className="red-rule mb-6 font-display text-lg font-bold text-charcoal">
          The job
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quantity" className={label}>
              How many units?
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 6"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="locations" className={label}>
              How many locations?
            </label>
            <input id="locations" name="locations" type="text" placeholder="e.g. 1" className={field} />
          </div>
          <div>
            <label htmlFor="projectType" className={label}>
              Replacement or new?
            </label>
            <select id="projectType" name="projectType" defaultValue="" className={field}>
              <option value="">Select one</option>
              {PROJECT_TYPE.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="surface" className={label}>
              Mounting surface
            </label>
            <select id="surface" name="surface" defaultValue="" className={field}>
              <option value="">Select one</option>
              {SURFACE.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className={label}>
              Target timeline
            </label>
            <select id="timeline" name="timeline" defaultValue="" className={field}>
              <option value="">Select one</option>
              {TIMELINE.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="installation" className={label}>
              Do you need installation?
            </label>
            <select id="installation" name="installation" defaultValue="" className={field}>
              <option value="">Select one</option>
              <option value="Supply only">Supply only — we have a contractor</option>
              <option value="Supply and install">Supply and install as one number</option>
              <option value="Not sure">Not sure yet</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Context */}
      <fieldset>
        <legend className="red-rule mb-6 font-display text-lg font-bold text-charcoal">
          Anything else
        </legend>
        <div className="space-y-5">
          <div>
            <label htmlFor="trigger" className={label}>
              What prompted this now?
              <span className={hint}>
                An incident, an audit, a budget cycle, a complaint — it changes what we recommend
              </span>
            </label>
            <input id="trigger" name="trigger" type="text" className={field} />
          </div>
          <div>
            <label htmlFor="message" className={label}>
              Details
            </label>
            <textarea id="message" name="message" rows={4} className={field} />
          </div>
          <div>
            <label htmlFor="photo" className={label}>
              Photo of the problem
              <span className={hint}>
                The single most useful thing you can send. JPG or PNG, up to 10MB.
              </span>
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic"
              onChange={onFileChange}
              className="w-full border border-dashed border-stainless bg-fog px-4 py-3 text-sm text-slate-grey file:mr-4 file:border-0 file:bg-charcoal file:px-4 file:py-2 file:font-display file:text-xs file:font-bold file:uppercase file:tracking-wider file:text-white"
            />
            {fileName && <p className="mt-2 text-xs text-slate-grey">Attached: {fileName}</p>}
            {fileError && (
              <p role="alert" className="mt-2 text-xs font-semibold text-sbd-red">
                {fileError}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      {status === "error" && (
        <div role="alert" className="border-l-4 border-sbd-red bg-fog p-4">
          <p className="font-semibold text-charcoal">{message}</p>
          <p className="mt-1 text-sm text-slate-grey">
            Call{" "}
            <a href={site.phoneHref} className="font-semibold text-sbd-red">
              {site.phone}
            </a>{" "}
            and we will take the details over the phone.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-sbd-red px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-sbd-red-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send request"}
        </button>
        <p className="text-sm text-slate-grey">
          Or call{" "}
          <a href={site.phoneHref} className="font-semibold text-sbd-red">
            {site.phone}
          </a>{" "}
          — quotes issued within 24 hours on business days.
        </p>
      </div>
    </form>
  );
}
