import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Wifi, Zap, Shield, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Reviews } from "@/components/site/Reviews";
import { ContactSection } from "@/components/site/ContactSection";
import { Toaster } from "@/components/ui/sonner";
import heroNetwork from "@/assets/hero-network.jpg";
import { useSeo } from "@/hooks/use-seo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useSeo(
    "MKM Tech Hub — WiFi, Networks & Web Solutions",
    "Hotspot & PPPoE WiFi installation, network management, web development, cyber services and tech consultation in Eldoret and across Kenya.",
  );
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero" />
        <div aria-hidden className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${heroNetwork})`, backgroundSize: "cover", backgroundPosition: "center", maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:grid-cols-2 lg:pb-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Wifi className="h-3.5 w-3.5" /> Connecting Kenya, byte by byte
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Reliable WiFi.
              <br />
              <span className="text-gradient">Smart networks.</span>
              <br />
              Modern websites.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              MKM Tech Hub installs hotspot & PPPoE WiFi systems, manages
              networks, builds beautiful websites and runs trusted online cyber
              services — from Eldoret to anywhere in Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Request installation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-card"
              >
                Explore services
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/60 pt-6">
              <div>
                <dt className="text-xs text-muted-foreground">Installations</dt>
                <dd className="text-2xl font-bold text-gradient">200+</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Uptime</dt>
                <dd className="text-2xl font-bold text-gradient">90.5</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Support</dt>
                <dd className="text-2xl font-bold text-gradient">24/7</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" />
            <img
              src={heroNetwork}
              alt="MKM Tech Hub technician installing rooftop WiFi antenna at sunset"
              width={1600}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl border border-border/60 object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { icon: Zap, title: "Fast deployment", desc: "Most home & business installations completed within 24 hours." },
            { icon: Shield, title: "Secure by default", desc: "Hardened routers, isolated guest networks and best-practice security." },
            { icon: CheckCircle2, title: "Real support", desc: "WhatsApp & on-site response from real engineers, not chatbots." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            What we do
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Everything tech, under one roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From rooftop antennas to pixel-perfect websites — we’ve got the
            tools, talent and experience to deliver.
          </p>
        </div>
        <div className="mt-12">
          <ServicesGrid compact />
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Reviews />
      <ContactSection />
    </SiteLayout>
  );
}
