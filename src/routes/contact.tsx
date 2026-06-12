import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MKM Tech Hub" },
      { name: "description", content: "Reach MKM Tech Hub for WiFi installation, network support, web development and online cyber services in Eldoret and across Kenya." },
      { property: "og:title", content: "Contact — MKM Tech Hub" },
      { property: "og:description", content: "Call, WhatsApp or message us — we respond fast." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Let’s build something <span className="text-gradient">brilliant</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell us about your project, network or service request. We typically respond within a few minutes during working hours.
          </p>
        </div>
      </section>
      <ContactSection />
    </SiteLayout>
  );
}