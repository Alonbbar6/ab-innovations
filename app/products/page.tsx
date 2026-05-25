import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProductBrowser } from "@/components/sections/product-browser";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Products",
  description: "AB Innovation app store for AI tools, SaaS products, templates, and digital services."
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="App store"
        title="Digital products ready for future checkout."
        description="A professional storefront for web apps, SaaS products, AI tools, templates, and digital service offers."
      />
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProductBrowser />
        </div>
      </section>
      <CTA />
    </>
  );
}
