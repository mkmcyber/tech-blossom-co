import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { Toaster } from "@/components/ui/sonner";
import { Check, ArrowRight, FileText, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

export const Route = createFileRoute("/cyber-services")({
  component: CyberServicesPage,
});

type Pkg = {
  icon: typeof FileText;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  highlight?: boolean;
};

const packages: Pkg[] = [
  {
    icon: GraduationCap,
    name: "Student Pack",
    tagline: "Everything a learner needs online",
    price: "From KSh 300",
    priceNote: "per task / bundle",
    features: [
      "HELB loan application & status check",
      "KUCCPS application, revision & placement",
      "School/college application forms",
      "Typing, printing, scanning & photocopy",
      "Email setup & CV starter template",
    ],
  },
  {
    icon: Briefcase,
    name: "Job Seeker Pack",
    tagline: "Stand out and get hired faster",
    price: "From KSh 800",
    priceNote: "per package",
    features: [
      "Professional CV & cover letter writing",
      "Good Conduct (DCI) application",
      "KRA PIN, iTax & compliance certificate",
      "NTSA TIMS & driving licence services",
      "Online job applications & profile setup",
    ],
    highlight: true,
  },
  {
    icon: FileText,
    name: "Citizen Essentials",
    tagline: "All your eCitizen needs in one place",
    price: "From KSh 200",
    priceNote: "per service",
    features: [
      "eCitizen account setup & access",
      "Birth, marriage & death certificates",
      "Passport, ID replacement applications",
      "Land search, business name registration",
      "Government bill payments & receipts",
    ],
  },
  {
    icon: Sparkles,
    name: "Business Pack",
    tagline: "Stay tax-ready and online",
    price: "From KSh 1,500",
    priceNote: "monthly",
    features: [
      "Monthly KRA returns (VAT, PAYE, Nil)",
      "NHIF / NSSF / SHIF registration & filing",
      "Business registration & permits",
      "Branded email & basic website setup",
      "Document design, printing & branding",
    ],
  },
];

function inquireLink(pkg: string) {
  const text = encodeURIComponent(
    `Hello MKM Tech Hub, I'd like to inquire about the "${pkg}" cyber services package. Please share more details.`,
  );
  return `https://wa.me/254791398996?text=${text}`;
}

function CyberServicesPage() {
  useSeo(
    "Online Cyber Services & Packages — MKM Tech Hub",
    "KRA, HELB, NTSA, eCitizen, TSC, applications, printing and more. Choose a cyber services package and inquire instantly via WhatsApp.",
  );
  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />

      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Online cyber services
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Cyber packages built for <span className="text-gradient">every Kenyan</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            From HELB and KRA to passports, jobs and business compliance — pick a
            package that fits you and inquire instantly. We handle the paperwork
            online or in our Eldoret office.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map(({ icon: Icon, name, tagline, price, priceNote, features, highlight }) => (
            <div
              key={name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:shadow-glow ${
                highlight ? "border-primary/60 ring-1 ring-primary/40" : "border-border/60 hover:border-primary/40"
              }`}
            >
              {highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                  Popular
                </span>
              )}
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>

              <div className="mt-5">
                <div className="text-2xl font-bold text-gradient">{price}</div>
                <div className="text-xs text-muted-foreground">{priceNote}</div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={inquireLink(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Inquire about {name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-gradient-card p-6 text-center shadow-elegant sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need something <span className="text-gradient">custom</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            We also handle bulk applications, school groups, SACCOs and corporate clients.
            Tell us what you need — we'll tailor a package and quote in minutes.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Request a custom package <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}