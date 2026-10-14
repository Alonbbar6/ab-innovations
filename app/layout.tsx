import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://bardaleslabs.com"),
  title: {
    default: "Bardales Labs | AI Agents and Automation for Small Businesses",
    template: "%s | Bardales Labs"
  },
  description:
    "Alonso Bardales builds AI voice agents, lead generation pipelines, and custom AI assistants for small businesses in Miami, tested against failure before launch.",
  keywords: [
    "AI voice agent",
    "AI receptionist",
    "lead generation automation",
    "CRM automation",
    "RAG assistant",
    "Miami AI engineer",
    "Bardales Labs"
  ],
  authors: [{ name: "Alonso Bardales" }],
  creator: "Alonso Bardales",
  openGraph: {
    title: "Bardales Labs | AI agents built to not break",
    description:
      "Voice agents, lead pipelines, and workflow automations for small businesses, tested against failure before launch.",
    url: "/",
    siteName: "Bardales Labs",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bardales Labs",
    description: "Voice agents, lead pipelines, and AI assistants for small businesses."
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
