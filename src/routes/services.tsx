import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { ContactSection } from "@/components/site/ContactSection";
import { Toaster } from "@/components/ui/sonner";
import servicesNet from "@/assets/services-network.jpg";
import servicesWeb from "@/assets/services-web.jpg";
import servicesCyber from "@/assets/services-cyber.jpg";
import { ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const showcases = [
  {
    img: servicesNet,
    tag: "Networks",
    title: "Hotspot, PPPoE & enterprise WiFi",
    body: "We design, install and maintain MikroTik-powered networks for homes, estates, schools and businesses. Voucher portals, per-user billing, bandwidth shaping, monitoring — all configured the right way.",
  },
  {
    img: servicesWeb,
    tag: "Web",
    title: "Modern websites & business systems",
    body: "Marketing sites, portfolios, e-commerce stores, school portals and custom dashboards. Fast, beautiful, mobile-first and built to convert — with hosting and domain support included.",
  },
  {
    img: servicesCyber,
    tag: "Cyber",
    title: "Online cyber & consultation services",
    body: "KRA returns, HELB, NTSA, eCitizen, application forms, printing, scanning and document services. Plus expert tech consultation to help you choose, plan and grow.",
  },
];

function ServicesPage() {
  useSeo(
    "Services — MKM Tech Hub",
    "WiFi installation (Hotspot & PPPoE), network management, web development, online cyber services and tech consultation across Kenya.",
  );
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Our services</span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Built to <span className="text-gradient">keep you connected</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Whether you’re lighting up a building with WiFi or launching your
            online presence, we deliver the complete tech stack — with the
            craftsmanship of people who actually care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <ServicesGrid />
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6">
        {showcases.map((s, i) => (
          <div key={s.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">{s.tag}</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Request this service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-primary opacity-25 blur-3xl" />
              <img src={s.img} alt={s.title} loading="lazy" width={1280} height={800} className="relative aspect-[16/10] w-full rounded-2xl border border-border/60 object-cover shadow-elegant" />
            </div>
          </div>
        ))}
      </section>

      <ContactSection />
    </SiteLayout>
  );
}