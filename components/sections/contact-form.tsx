"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-panel dark:border-white/10 dark:bg-graphite"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Name
          <input name="name" required className="focus-ring rounded-2xl border border-slate-300 bg-transparent px-4 py-3 font-normal dark:border-white/10" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" required className="focus-ring rounded-2xl border border-slate-300 bg-transparent px-4 py-3 font-normal dark:border-white/10" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Project type
          <select name="projectType" className="focus-ring rounded-2xl border border-slate-300 bg-transparent px-4 py-3 font-normal dark:border-white/10">
            <option>AI app development</option>
            <option>Custom web application</option>
            <option>Automation system</option>
            <option>SaaS product</option>
            <option>Digital product/storefront</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Budget range
          <select name="budget" className="focus-ring rounded-2xl border border-slate-300 bg-transparent px-4 py-3 font-normal dark:border-white/10">
            <option>$2,500 - $7,500</option>
            <option>$7,500 - $20,000</option>
            <option>$20,000+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Business inquiry
        <textarea
          name="message"
          rows={6}
          required
          className="focus-ring resize-none rounded-2xl border border-slate-300 bg-transparent px-4 py-3 font-normal dark:border-white/10"
          placeholder="Tell us what you want to build, automate, or sell."
        />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
      >
        <Send className="h-4 w-4" />
        Send inquiry
      </button>
      {submitted ? (
        <p className="rounded-2xl bg-electric/10 p-4 text-sm font-semibold text-electric">
          Inquiry captured. Connect this form to Netlify Forms or your CRM to receive submissions.
        </p>
      ) : null}
    </form>
  );
}
