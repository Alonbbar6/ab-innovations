import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://abinnovation.com"),
  title: {
    default: "AB Innovation | AI Apps, Software Development, and Automation",
    template: "%s | AB Innovation"
  },
  description:
    "AB Innovation builds premium AI products, custom software, automation systems, SaaS platforms, and digital tools for ambitious companies.",
  keywords: [
    "AI development",
    "software development",
    "custom web applications",
    "SaaS development",
    "AI automation",
    "AB Innovation"
  ],
  authors: [{ name: "AB Innovation" }],
  creator: "AB Innovation",
  openGraph: {
    title: "AB Innovation | Build Your Vision with AI",
    description:
      "Premium AI and software development services for startups, operators, and growth-focused businesses.",
    url: "/",
    siteName: "AB Innovation",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Innovation",
    description: "AI applications, SaaS platforms, automations, and product strategy."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
