import { Bot, BrainCircuit, LineChart, PhoneCall, Users, Zap } from "lucide-react";

export const siteConfig = {
  name: "Bardales Labs",
  founder: "Alonso Bardales",
  location: "Miami, FL",
  email: "hello@bardaleslabs.com",
  url: "https://bardaleslabs.com",
  github: "https://github.com/Alonbbar6",
  linkedin: "https://linkedin.com/in/alonso-bardales/"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "AI voice and phone agents",
    description:
      "Receptionists and outbound callers that answer, book, and route calls. Every agent is stress-tested with scripted callers before it talks to your customers.",
    icon: PhoneCall
  },
  {
    title: "Lead generation and CRM automation",
    description:
      "Pipelines that find prospects, enrich and score them with AI, and keep your CRM current without manual data entry.",
    icon: Users
  },
  {
    title: "Custom AI assistants (RAG)",
    description:
      "Assistants that answer from your own documents, calendar, and inbox, with permission gates and audit logs so they cannot act without approval.",
    icon: BrainCircuit
  }
];

export type Project = {
  title: string;
  category: string;
  image?: string;
  imageAlt?: string;
  description: string;
  technologies: string[];
  outcome: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "robot-runtime",
    category: "Safe AI agent control",
    image: "/images/robot-runtime-outage-timeline.png",
    imageAlt: "Timeline of the runtime holding position through a server outage and resuming",
    description:
      "A control runtime that keeps a simulated robot arm working when the AI model behind it sits across an unreliable network. Stale commands are rejected, failures trip a circuit breaker, a protective hold clears itself when valid data returns, and every run is recorded for bit-exact replay. An MCP tool surface lets an agent drive the cell, but refuses to move anything until the cell is armed with a logged reason.",
    technologies: ["Python", "MCP", "Fault injection", "MCAP replay", "Circuit breaker"],
    outcome:
      "100% task success across 25 seeds per condition, including 20% packet loss and 3-second server outages. Ablations removing each safety measure show exactly what breaks without it.",
    links: [{ label: "Source", href: "https://github.com/Alonbbar6/robot-runtime" }]
  },
  {
    title: "Voice agent stress tester",
    category: "AI voice agents",
    description:
      "An outbound voice bot that role-plays a patient calling an AI phone receptionist, records both sides of the call, transcribes them, and scores the receptionist's behavior. Twilio carries the call and bridges audio straight into the OpenAI Realtime API, speech to speech. A hard-coded destination guard means it can only ever dial the number under test.",
    technologies: ["Python", "Twilio", "OpenAI Realtime API", "FastAPI", "pytest"],
    outcome:
      "Found real defects in a production receptionist, including a case where it disclosed identity details without verifying the caller. 56 automated tests run offline against a fake Realtime server.",
    links: [{ label: "Source", href: "https://github.com/Alonbbar6/standardized-patient" }]
  },
  {
    title: "VibeLeads",
    category: "Lead generation pipeline",
    image: "/images/vibeleads-lead-console.png",
    imageAlt: "VibeLeads lead console showing tracked local businesses with status filters",
    description:
      "The system I use to find my own clients. It pulls Florida small businesses from Google Places and Yelp, checks whether each one has a working website, and classifies them. Celery workers write to Postgres, and Claude scores each prospect and drafts research on demand.",
    technologies: ["Python", "Claude", "Google Places", "Yelp", "Celery", "Postgres"],
    outcome: "7,500+ local businesses tracked and classified automatically. Private codebase, demo available on a call.",
    links: []
  },
  {
    title: "Quintave Finance Tracker",
    category: "iOS app",
    image: "/images/quintave-finance-tracker-preview.png",
    imageAlt: "Quintave Finance Tracker daily timeline view and onboarding screen",
    description:
      "A privacy-first personal finance tracker for iOS. Log income and expenses, visualize spending by category, and export backups, all stored on-device with no accounts required.",
    technologies: ["Swift", "SwiftUI", "Core Data"],
    outcome: "Live on the App Store. No servers, no subscriptions.",
    links: [{ label: "App Store", href: "https://apps.apple.com/us/app/id6759624736" }]
  },
  {
    title: "Priority Task Manager",
    category: "iOS app",
    image: "/images/priority-task-manager-preview.png",
    imageAlt: "Priority Task Manager settings, priority matrix, and schedule screens",
    description:
      "A focused task manager for iOS. Organize tasks by priority level, set due dates, and stay on top of the day without distractions.",
    technologies: ["Swift", "SwiftUI"],
    outcome: "Live on the App Store. Built for daily use.",
    links: [{ label: "App Store", href: "https://apps.apple.com/us/app/id6757319158" }]
  }
];

export const pricingPlans = [
  {
    name: "Starter Build",
    price: "From $2,500",
    description: "A single automation or assistant with a clear job: one lead pipeline, one intake bot, one internal tool.",
    features: ["Scoping call", "Working build", "Test suite", "Deployment", "Handoff docs"],
    cta: "Start a project"
  },
  {
    name: "Growth Product",
    price: "From $7,500",
    description: "A voice agent, CRM automation, or RAG assistant integrated with your existing tools and data.",
    features: ["Workflow mapping", "Custom build", "Tool and CRM integration", "Failure testing", "Launch support"],
    cta: "Plan my build",
    highlighted: true
  },
  {
    name: "Ongoing Partnership",
    price: "Custom",
    description: "For businesses that want several AI systems built, monitored, and improved over time.",
    features: ["Discovery workshop", "Permission and audit design", "Multi-system integration", "Monitoring", "Priority support"],
    cta: "Book consultation"
  }
];

export const faqs = [
  {
    question: "How fast can Bardales Labs launch a project?",
    answer:
      "A focused automation or assistant usually takes 2 to 4 weeks. Voice agents and multi-system integrations depend on scope, the tools involved, and how clean your data is."
  },
  {
    question: "Can you connect AI to our existing business tools?",
    answer:
      "Yes. I integrate with CRMs, phone systems, calendars, email, spreadsheets, databases, and internal dashboards through their APIs."
  },
  {
    question: "What does testing against failure mean?",
    answer:
      "Before an agent goes live I run it against scripted bad inputs: dropped calls, confused callers, missing data, and slow or failing APIs. You get the test results, not just a demo."
  },
  {
    question: "Who owns the code?",
    answer: "You do. Every build is delivered with source, documentation, and the test suite, so you are never locked in."
  }
];

export const stats = [
  { value: "2", label: "iOS apps on the App Store" },
  { value: "56", label: "automated tests on my voice agent" },
  { value: "100%", label: "task success under 20% packet loss" },
  { value: "7,500+", label: "leads tracked by my pipeline" }
];

export const processSteps = [
  {
    title: "Discover",
    description: "Clarify the job the system needs to do, who uses it, what tools it touches, and what failure would cost."
  },
  {
    title: "Design",
    description: "Map the workflow, the permissions the AI gets, the handoffs to humans, and what gets logged."
  },
  {
    title: "Build",
    description: "Develop the agent or automation, the integrations, and the test suite that proves it holds up."
  },
  {
    title: "Launch",
    description: "Deploy, monitor the first weeks of real use, and hand over source and documentation."
  }
];

export const aiSolutionCards = [
  {
    title: "AI phone receptionist",
    description: "Answer calls, qualify leads, book appointments, and hand off clean context to your team.",
    icon: Bot
  },
  {
    title: "Internal knowledge assistant",
    description: "Turn SOPs, documents, policies, and data into a searchable assistant for your employees.",
    icon: BrainCircuit
  },
  {
    title: "Pipeline automation",
    description: "Automate prospecting, follow-up, reminders, and CRM updates so nothing slips through.",
    icon: LineChart
  },
  {
    title: "Agents with guardrails",
    description: "Permission-gated actions, audit logs, and automatic recovery for agents that touch real systems.",
    icon: Zap
  }
];
