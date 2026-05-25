import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Layers3,
  LineChart,
  PanelsTopLeft,
  Smartphone,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "AI App Development",
    description: "Production-grade AI assistants, copilots, workflow agents, and intelligent product experiences.",
    icon: BrainCircuit
  },
  {
    title: "Custom Web Applications",
    description: "Secure, scalable web apps built around your business model, users, and operating workflows.",
    icon: PanelsTopLeft
  },
  {
    title: "Automation Systems",
    description: "Automated operations for sales, support, reporting, onboarding, and internal execution.",
    icon: Workflow
  },
  {
    title: "SaaS Development",
    description: "From MVP to launch-ready SaaS platforms with billing, dashboards, roles, and analytics.",
    icon: Layers3
  },
  {
    title: "AI Integration",
    description: "Connect OpenAI, vector search, RAG pipelines, CRM data, and internal tools into one system.",
    icon: Cpu
  },
  {
    title: "Mobile App Development",
    description: "Responsive mobile-first products and app experiences designed for speed and retention.",
    icon: Smartphone
  },
  {
    title: "Business Consulting",
    description: "Technical strategy, product roadmaps, architecture decisions, and AI adoption planning.",
    icon: BriefcaseBusiness
  },
  {
    title: "UI/UX Design",
    description: "Premium interfaces, conversion flows, product design systems, and polished user journeys.",
    icon: Sparkles
  }
];

export const projects = [
  {
    title: "NexusOps AI Command Center",
    category: "AI Operations",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description:
      "A centralized automation dashboard that routes leads, summarizes customer conversations, and triggers operational workflows.",
    technologies: ["Next.js", "OpenAI", "Postgres", "Tailwind", "Zapier"],
    outcome: "Reduced manual admin time by 42% for a service business.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "FinSight SaaS Analytics",
    category: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A subscription analytics workspace with KPI forecasting, cohort reporting, role-based access, and exportable board updates.",
    technologies: ["TypeScript", "Stripe", "Supabase", "Recharts", "Vercel"],
    outcome: "Investor-ready reporting for revenue and retention metrics.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "LumaCare Intake Assistant",
    category: "AI Product",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80",
    description:
      "An AI intake and triage tool that collects structured information, prepares summaries, and hands off to staff.",
    technologies: ["React", "Node.js", "RAG", "HIPAA-ready UX", "Prisma"],
    outcome: "Improved intake completion rates and staff response quality.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Atlas Mobile Commerce",
    category: "Mobile Experience",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "A fast mobile-first storefront with product discovery, checkout flow, lifecycle email hooks, and admin controls.",
    technologies: ["Next.js", "Shopify", "Klaviyo", "Tailwind", "Analytics"],
    outcome: "Built for high-converting digital product launches.",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const products = [
  {
    name: "LaunchStack AI",
    category: "AI Tools",
    price: "$149",
    featured: true,
    description: "A starter kit for AI landing pages, lead capture, and automated follow-up.",
    tags: ["AI", "Leads", "Templates"]
  },
  {
    name: "SaaS Metrics Dashboard",
    category: "SaaS Products",
    price: "$299",
    featured: true,
    description: "A polished analytics dashboard template for subscription businesses and founders.",
    tags: ["Dashboard", "SaaS", "Analytics"]
  },
  {
    name: "Automation Blueprint Pack",
    category: "Templates",
    price: "$79",
    featured: false,
    description: "Documented automations for CRM, onboarding, reporting, and customer success.",
    tags: ["Automation", "Docs", "Ops"]
  },
  {
    name: "AI Support Bot Template",
    category: "AI Tools",
    price: "$199",
    featured: false,
    description: "A customizable AI support assistant interface with knowledge base-ready flows.",
    tags: ["Support", "AI", "Web App"]
  },
  {
    name: "Premium UI System",
    category: "Digital Services",
    price: "$499",
    featured: false,
    description: "A conversion-focused design system for high-end SaaS and agency websites.",
    tags: ["UI/UX", "Brand", "Design"]
  },
  {
    name: "Founder Strategy Sprint",
    category: "Digital Services",
    price: "$1,500",
    featured: true,
    description: "A focused product and AI roadmap session for founders preparing to build.",
    tags: ["Consulting", "Roadmap", "AI"]
  }
];

export const pricingPlans = [
  {
    name: "Starter Build",
    price: "From $2,500",
    description: "For founders who need a polished website, MVP surface, or automation foundation.",
    features: ["Strategy call", "Responsive frontend", "Lead capture", "Analytics setup", "Launch checklist"],
    cta: "Start a project"
  },
  {
    name: "Growth Product",
    price: "From $7,500",
    description: "For businesses building AI workflows, SaaS platforms, dashboards, or internal tools.",
    features: ["Product architecture", "Custom app build", "AI integration", "Admin workflows", "Deployment support"],
    cta: "Plan my build",
    highlighted: true
  },
  {
    name: "Enterprise AI",
    price: "Custom",
    description: "For advanced AI systems, automation programs, and long-term product partnerships.",
    features: ["Discovery workshop", "Security planning", "Multi-system integration", "Roadmap ownership", "Priority support"],
    cta: "Book consultation"
  }
];

export const testimonials = [
  {
    quote:
      "AB Innovation turned a rough automation idea into a working product our team uses every day.",
    name: "Maya Henderson",
    title: "Operations Director, ScaleForge"
  },
  {
    quote:
      "The strategy, interface quality, and build speed felt like working with a senior product team.",
    name: "Jordan Lee",
    title: "Founder, Northstar Labs"
  },
  {
    quote:
      "We needed more than a website. We got a premium digital sales engine with AI built into the workflow.",
    name: "Ari Campbell",
    title: "CEO, Vanta Growth"
  }
];

export const faqs = [
  {
    question: "How fast can AB Innovation launch a project?",
    answer:
      "Focused landing pages can launch in 1-2 weeks. Custom applications, SaaS products, and AI systems depend on scope, integrations, and data readiness."
  },
  {
    question: "Can you connect AI to our existing business tools?",
    answer:
      "Yes. We can integrate AI with CRMs, forms, spreadsheets, databases, APIs, documents, and internal dashboards."
  },
  {
    question: "Do you build products that can be sold online?",
    answer:
      "Yes. AB Innovation can create storefronts, SaaS apps, templates, digital product systems, and checkout-ready experiences."
  },
  {
    question: "Is the website ready for a CMS later?",
    answer:
      "The content is organized in data modules and reusable components so it can be migrated to a CMS like Sanity, Contentful, or Strapi."
  }
];

export const stats = [
  { value: "8+", label: "service categories" },
  { value: "24/7", label: "automation mindset" },
  { value: "AI-first", label: "product strategy" },
  { value: "100%", label: "responsive builds" }
];

export const processSteps = [
  {
    title: "Discover",
    description: "Clarify the offer, users, workflows, revenue model, and AI opportunities."
  },
  {
    title: "Design",
    description: "Map the product experience, user flows, technical architecture, and launch plan."
  },
  {
    title: "Build",
    description: "Develop the frontend, backend integrations, AI logic, automations, and admin workflows."
  },
  {
    title: "Launch",
    description: "Deploy, measure, improve, and prepare the system for growth or monetization."
  }
];

export const aiSolutionCards = [
  {
    title: "AI Customer Concierge",
    description: "Qualify leads, answer questions, summarize calls, and hand off clean context to your team.",
    icon: Bot
  },
  {
    title: "Internal Knowledge Engine",
    description: "Turn SOPs, docs, policies, and data into a searchable assistant for your employees.",
    icon: BrainCircuit
  },
  {
    title: "Revenue Automation",
    description: "Automate follow-up, proposals, reporting, reminders, and pipeline movement.",
    icon: LineChart
  },
  {
    title: "Product Copilots",
    description: "Add intelligent recommendations, generation, search, and decision support inside your app.",
    icon: Zap
  }
];

export const blogPosts = [
  {
    title: "How AI Can Remove 10 Hours of Weekly Admin Work",
    category: "Automation",
    date: "Coming soon"
  },
  {
    title: "What Founders Should Know Before Building a SaaS MVP",
    category: "Product",
    date: "Coming soon"
  },
  {
    title: "The Modern Website Is a Sales System, Not a Brochure",
    category: "Growth",
    date: "Coming soon"
  }
];
