import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reviews } from "@/components/site/Reviews";
import { Toaster } from "@/components/ui/sonner";
import aboutImg from "@/assets/about-tech.jpg";
import { Target, Heart, Sparkles, Users } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Reliability", desc: "We install once and we install right. Uptime is our reputation." },
  { icon: Heart, title: "Customer first", desc: "Every client is a long-term partner — not a one-off ticket." },
  { icon: Sparkles, title: "Modern craft", desc: "We use modern tools and proven setups to deliver work that lasts." },
  { icon: Users, title: "Local & accessible", desc: "Based in Eldoret, serving Kenya — always a call or message away." },
];

function AboutPage() {
  useSeo(
    "About — SALUBRIOUS TECH LTD",
    "SALUBRIOUS TECH LTD is a Kenyan tech company delivering WiFi, network management, web development and cyber services with care and craftsmanship.",
  );
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">About us</span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              We build the tech that <span className="text-gradient">keeps Kenya online</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              SALUBRIOUS TECH LTD started with a simple goal: deliver internet, networks
              and digital services people can actually rely on. From a small
              operation in Eldoret, we’ve grown into a trusted partner for
              homes, landlords, schools, cafes and businesses across the
              country.
            </p>
            <p className="mt-4 text-muted-foreground">
              We combine engineering know-how with a service-first mindset —
              clean installations, honest pricing, fast support and a genuine
              love for technology.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
              Work with us
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" />
            <img src={aboutImg} alt="Glowing WiFi router symbolising connectivity" loading="lazy" width={1280} height={800} className="relative aspect-[16/10] w-full rounded-3xl border border-border/60 object-cover shadow-elegant" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What we stand for</h2>
          <p className="mt-4 text-muted-foreground">The values that shape every install, every line of code and every conversation.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Reviews />
    </SiteLayout>
  );
}