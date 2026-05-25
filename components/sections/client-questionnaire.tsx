"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full focus-ring rounded-2xl border border-slate-300 bg-transparent px-4 py-3 text-sm font-normal dark:border-white/10 dark:text-white";
const labelClass = "grid gap-2 text-sm font-semibold";
const sectionTitle = "text-lg font-bold mb-1";
const sectionSub = "text-sm text-slate-500 dark:text-slate-400 mb-6";

type Answers = Record<string, string | string[]>;

const STEPS = [
  "About You",
  "The Project",
  "Features & Scope",
  "Data & Privacy",
  "Timeline & Budget",
  "Business Model",
  "After Launch",
];

function CheckboxGroup({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (val: string[]) => void;
}) {
  const toggle = (opt: string) => {
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            values.includes(opt)
              ? "border-electric bg-electric text-white"
              : "border-slate-300 text-slate-600 hover:border-electric dark:border-white/10 dark:text-slate-300"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            value === opt
              ? "border-electric bg-electric text-white"
              : "border-slate-300 text-slate-600 hover:border-electric dark:border-white/10 dark:text-slate-300"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function ClientQuestionnaire() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    // Step 0
    name: "", email: "", company: "", website: "", phone: "", services: [],
    // Step 1
    platform: [], projectName: "", problem: "", targetUser: "", currentSolution: "",
    // Step 2
    mustHaveFeatures: "", niceToHave: "", needsAccounts: "", needsBackend: "",
    integrations: [], aiFeatures: "",
    // Step 3
    dataCollected: "", cloudSync: "", compliance: [],
    // Step 4
    launchDate: "", budget: "", scope: "", hasDesigns: "",
    // Step 5
    monetization: [], userType: "",
    // Step 6
    maintenance: "", ongoingSupport: "", appStoreHelp: "", extra: "",
  });

  const set = (key: string, val: string | string[]) =>
    setAnswers((prev) => ({ ...prev, [key]: val }));

  const formatAnswers = () => {
    const lines = [
      "=== ABOUT YOU ===",
      `Name: ${answers.name}`,
      `Email: ${answers.email}`,
      `Company: ${answers.company || "N/A"}`,
      `Website: ${answers.website || "N/A"}`,
      `Phone: ${answers.phone || "N/A"}`,
      `Services interested in: ${(answers.services as string[]).join(", ") || "N/A"}`,
      "",
      "=== THE PROJECT ===",
      `Platform: ${(answers.platform as string[]).join(", ") || "N/A"}`,
      `Project name: ${answers.projectName || "N/A"}`,
      `Problem being solved: ${answers.problem}`,
      `Target user: ${answers.targetUser}`,
      `Current solution: ${answers.currentSolution || "N/A"}`,
      "",
      "=== FEATURES & SCOPE ===",
      `Must-have features: ${answers.mustHaveFeatures}`,
      `Nice-to-have features: ${answers.niceToHave || "N/A"}`,
      `User accounts needed: ${answers.needsAccounts || "N/A"}`,
      `Backend/server needed: ${answers.needsBackend || "N/A"}`,
      `Integrations: ${(answers.integrations as string[]).join(", ") || "None"}`,
      `AI features needed: ${answers.aiFeatures || "N/A"}`,
      "",
      "=== DATA & PRIVACY ===",
      `Data collected: ${answers.dataCollected || "N/A"}`,
      `Cloud sync needed: ${answers.cloudSync || "N/A"}`,
      `Compliance requirements: ${(answers.compliance as string[]).join(", ") || "None"}`,
      "",
      "=== TIMELINE & BUDGET ===",
      `Target launch date: ${answers.launchDate || "N/A"}`,
      `Budget range: ${answers.budget || "N/A"}`,
      `Scope: ${answers.scope || "N/A"}`,
      `Has designs/wireframes: ${answers.hasDesigns || "N/A"}`,
      "",
      "=== BUSINESS MODEL ===",
      `Monetization: ${(answers.monetization as string[]).join(", ") || "N/A"}`,
      `Target user type: ${answers.userType || "N/A"}`,
      "",
      "=== AFTER LAUNCH ===",
      `Maintenance: ${answers.maintenance || "N/A"}`,
      `Ongoing support: ${answers.ongoingSupport || "N/A"}`,
      `App Store setup help: ${answers.appStoreHelp || "N/A"}`,
      `Additional notes: ${answers.extra || "N/A"}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `App Project Inquiry — ${answers.name || "New Client"} — ${answers.projectName || "Untitled"}`
    );
    const body = encodeURIComponent(formatAnswers());
    window.location.href = `mailto:alonsobardales.apps@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-panel dark:border-white/10 dark:bg-graphite">
        <CheckCircle2 className="h-14 w-14 text-electric" />
        <h3 className="text-2xl font-bold">Questionnaire complete</h3>
        <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
          Your email client opened with all your answers pre-filled. Hit send and we'll review your project and get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-panel dark:border-white/10 dark:bg-graphite">
      {/* Progress bar */}
      <div className="rounded-t-3xl bg-slate-100 px-6 py-4 dark:bg-white/5">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Step {step + 1} of {STEPS.length}</span>
          <span>{STEPS[step]}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-electric transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">

        {/* STEP 0 — About You */}
        {step === 0 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>About You</p>
              <p className={sectionSub}>Basic contact information so we can follow up.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Full Name <span className="text-electric">*</span>
                <input className={inputClass} value={answers.name as string} onChange={(e) => set("name", e.target.value)} placeholder="Alonso Bardales" />
              </label>
              <label className={labelClass}>
                Email <span className="text-electric">*</span>
                <input type="email" className={inputClass} value={answers.email as string} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Company / Organization
                <input className={inputClass} value={answers.company as string} onChange={(e) => set("company", e.target.value)} placeholder="Optional" />
              </label>
              <label className={labelClass}>
                Phone Number
                <input className={inputClass} value={answers.phone as string} onChange={(e) => set("phone", e.target.value)} placeholder="Optional" />
              </label>
            </div>
            <label className={labelClass}>
              Website (if any)
              <input className={inputClass} value={answers.website as string} onChange={(e) => set("website", e.target.value)} placeholder="https://yoursite.com" />
            </label>
            <label className={labelClass}>
              Which services are you interested in? <span className="text-electric">*</span>
              <CheckboxGroup
                options={["iOS App Development", "Android App Development", "AI App Development", "Custom Web Application", "SaaS Development", "AI Integration", "UI/UX Design", "Business Consulting", "Not sure yet"]}
                values={answers.services as string[]}
                onChange={(v) => set("services", v)}
              />
            </label>
          </div>
        )}

        {/* STEP 1 — The Project */}
        {step === 1 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>The Project</p>
              <p className={sectionSub}>Tell us about the app idea — what it does and who it's for.</p>
            </div>
            <label className={labelClass}>
              What platform? <span className="text-electric">*</span>
              <CheckboxGroup
                name="platform"
                options={["iOS", "Android", "Both", "Web App", "Not sure yet"]}
                values={answers.platform as string[]}
                onChange={(v) => set("platform", v)}
              />
            </label>
            <label className={labelClass}>
              Project name (if you have one)
              <input className={inputClass} value={answers.projectName as string} onChange={(e) => set("projectName", e.target.value)} placeholder="e.g. FitLog, BudgetPal..." />
            </label>
            <label className={labelClass}>
              What problem does this app solve? <span className="text-electric">*</span>
              <textarea rows={3} className={inputClass} value={answers.problem as string} onChange={(e) => set("problem", e.target.value)} placeholder="Describe the core problem your users face today." />
            </label>
            <label className={labelClass}>
              Who is the target user? <span className="text-electric">*</span>
              <input className={inputClass} value={answers.targetUser as string} onChange={(e) => set("targetUser", e.target.value)} placeholder="e.g. Freelancers, parents, small business owners..." />
            </label>
            <label className={labelClass}>
              How are they solving this problem today?
              <textarea rows={2} className={inputClass} value={answers.currentSolution as string} onChange={(e) => set("currentSolution", e.target.value)} placeholder="Spreadsheets, another app, manually, nothing..." />
            </label>
          </div>
        )}

        {/* STEP 2 — Features & Scope */}
        {step === 2 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>Features & Scope</p>
              <p className={sectionSub}>What the app needs to do — now and later.</p>
            </div>
            <label className={labelClass}>
              What are the must-have features for launch? <span className="text-electric">*</span>
              <textarea rows={4} className={inputClass} value={answers.mustHaveFeatures as string} onChange={(e) => set("mustHaveFeatures", e.target.value)} placeholder="List the core features without which the app doesn't work. One per line is fine." />
            </label>
            <label className={labelClass}>
              Nice-to-have features (for later versions)
              <textarea rows={3} className={inputClass} value={answers.niceToHave as string} onChange={(e) => set("niceToHave", e.target.value)} placeholder="Features you'd want eventually but not for launch." />
            </label>
            <label className={labelClass}>
              Does the app need user accounts / login?
              <RadioGroup
                options={["Yes", "No", "Not sure"]}
                value={answers.needsAccounts as string}
                onChange={(v) => set("needsAccounts", v)}
              />
            </label>
            <label className={labelClass}>
              Does it need a backend server or can it run fully on-device?
              <RadioGroup
                options={["Needs a server", "On-device only", "Not sure"]}
                value={answers.needsBackend as string}
                onChange={(v) => set("needsBackend", v)}
              />
            </label>
            <label className={labelClass}>
              Any third-party integrations needed?
              <CheckboxGroup
                name="integrations"
                options={["Payments (Stripe etc.)", "Push Notifications", "Maps / Location", "Calendar / Scheduling", "Social Login", "AI / ML", "Camera / Media", "External API", "None", "Not sure"]}
                values={answers.integrations as string[]}
                onChange={(v) => set("integrations", v)}
              />
            </label>
            <label className={labelClass}>
              Do you want AI features in the app?
              <RadioGroup
                options={["Yes", "No", "Not sure"]}
                value={answers.aiFeatures as string}
                onChange={(v) => set("aiFeatures", v)}
              />
            </label>
          </div>
        )}

        {/* STEP 3 — Data & Privacy */}
        {step === 3 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>Data & Privacy</p>
              <p className={sectionSub}>Understanding what data is involved shapes the entire architecture.</p>
            </div>
            <label className={labelClass}>
              What data will the app collect or store?
              <textarea rows={3} className={inputClass} value={answers.dataCollected as string} onChange={(e) => set("dataCollected", e.target.value)} placeholder="e.g. Names, emails, location, financial data, health data, photos..." />
            </label>
            <label className={labelClass}>
              Does data need to sync across multiple devices?
              <RadioGroup
                options={["Yes", "No — on-device only", "Not sure"]}
                value={answers.cloudSync as string}
                onChange={(v) => set("cloudSync", v)}
              />
            </label>
            <label className={labelClass}>
              Any compliance or regulatory requirements?
              <CheckboxGroup
                name="compliance"
                options={["HIPAA (health data)", "FERPA (education)", "GDPR (EU users)", "COPPA (children)", "PCI-DSS (payments)", "None", "Not sure"]}
                values={answers.compliance as string[]}
                onChange={(v) => set("compliance", v)}
              />
            </label>
          </div>
        )}

        {/* STEP 4 — Timeline & Budget */}
        {step === 4 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>Timeline & Budget</p>
              <p className={sectionSub}>Helps us understand the scope and pace of the build.</p>
            </div>
            <label className={labelClass}>
              When do you want to launch?
              <RadioGroup
                options={["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"]}
                value={answers.launchDate as string}
                onChange={(v) => set("launchDate", v)}
              />
            </label>
            <label className={labelClass}>
              Budget range <span className="text-electric">*</span>
              <RadioGroup
                options={["Under $2,500", "$2,500–$7,500", "$7,500–$20,000", "$20,000–$50,000", "$50,000+", "Not sure yet"]}
                value={answers.budget as string}
                onChange={(v) => set("budget", v)}
              />
            </label>
            <label className={labelClass}>
              Is this an MVP or a full production app?
              <RadioGroup
                options={["MVP — get to market fast", "Full production app", "Not sure"]}
                value={answers.scope as string}
                onChange={(v) => set("scope", v)}
              />
            </label>
            <label className={labelClass}>
              Do you already have designs or wireframes?
              <RadioGroup
                options={["Yes — ready to build", "In progress", "No — need design too", "Just rough sketches"]}
                value={answers.hasDesigns as string}
                onChange={(v) => set("hasDesigns", v)}
              />
            </label>
          </div>
        )}

        {/* STEP 5 — Business Model */}
        {step === 5 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>Business Model</p>
              <p className={sectionSub}>How the app will generate value or revenue.</p>
            </div>
            <label className={labelClass}>
              How will the app make money? (select all that apply)
              <CheckboxGroup
                name="monetization"
                options={["Free app", "One-time purchase", "Monthly subscription", "Annual subscription", "In-app purchases", "Internal tool — no revenue", "Not sure yet"]}
                values={answers.monetization as string[]}
                onChange={(v) => set("monetization", v)}
              />
            </label>
            <label className={labelClass}>
              Who is the primary audience?
              <RadioGroup
                options={["Consumers (B2C)", "Businesses (B2B)", "Internal team only", "Mixed"]}
                value={answers.userType as string}
                onChange={(v) => set("userType", v)}
              />
            </label>
          </div>
        )}

        {/* STEP 6 — After Launch */}
        {step === 6 && (
          <div className="grid gap-5">
            <div>
              <p className={sectionTitle}>After Launch</p>
              <p className={sectionSub}>What happens once the app is live.</p>
            </div>
            <label className={labelClass}>
              Who will maintain the app after delivery?
              <RadioGroup
                options={["I will handle it", "AB Innovation ongoing", "My own developer", "TBD"]}
                value={answers.maintenance as string}
                onChange={(v) => set("maintenance", v)}
              />
            </label>
            <label className={labelClass}>
              Do you want ongoing support from AB Innovation?
              <RadioGroup
                options={["Yes", "No", "Maybe — discuss pricing"]}
                value={answers.ongoingSupport as string}
                onChange={(v) => set("ongoingSupport", v)}
              />
            </label>
            <label className={labelClass}>
              Do you need help setting up your App Store account?
              <RadioGroup
                options={["Yes", "No — I have one", "Not applicable"]}
                value={answers.appStoreHelp as string}
                onChange={(v) => set("appStoreHelp", v)}
              />
            </label>
            <label className={labelClass}>
              Anything else you want us to know?
              <textarea rows={4} className={inputClass} value={answers.extra as string} onChange={(e) => set("extra", e.target.value)} placeholder="References, inspiration apps, deal-breakers, special requirements..." />
            </label>
          </div>
        )}

      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between rounded-b-3xl border-t border-slate-200 px-6 py-4 dark:border-white/10">
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-electric hover:text-electric disabled:opacity-30 dark:border-white/10 dark:text-slate-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={
              (step === 0 && (!answers.name || !answers.email || !(answers.services as string[]).length)) ||
              (step === 1 && (!answers.problem || !answers.targetUser || !(answers.platform as string[]).length)) ||
              (step === 2 && !answers.mustHaveFeatures) ||
              (step === 4 && !answers.budget)
            }
            className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <Send className="h-4 w-4" />
            Submit Questionnaire
          </button>
        )}
      </div>
    </div>
  );
}
