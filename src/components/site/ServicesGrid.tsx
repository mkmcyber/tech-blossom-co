import { Wifi, Network, Wrench, Code2, Globe2, GraduationCap, ShieldCheck, Cpu } from "lucide-react";

const services = [
  { icon: Wifi, title: "Hotspot WiFi Installation", desc: "Voucher-based hotspot systems with MikroTik/Mikhmon — perfect for cafes, hostels and public spaces." },
  { icon: Network, title: "PPPoE WiFi Setup", desc: "Reliable home & estate WiFi with per-user PPPoE accounts, bandwidth control and automated billing." },
  { icon: Wrench, title: "Network Management & Maintenance", desc: "Proactive monitoring, fault response, upgrades and tune-ups so your network never lets you down." },
  { icon: Code2, title: "Web Development", desc: "Lightning-fast modern websites, business landing pages, portals and dashboards built for results." },
  { icon: Globe2, title: "Online Cyber Services", desc: "KRA, HELB, NTSA, eCitizen, printing, applications and all online services under one trusted roof." },
  { icon: GraduationCap, title: "Tech Consultation & Training", desc: "We advise on hardware, networks and digital strategy — and train your team to run things smoothly." },
  { icon: ShieldCheck, title: "Network Security", desc: "Firewalls, secure SSIDs, guest isolation and best-practice configurations to keep threats out." },
  { icon: Cpu, title: "Computer Repairs & Setup", desc: "Diagnostics, repairs, OS installs, office tooling and CCTV setup for homes and businesses." },
];

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.slice(0, 6) : services;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
        >
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  );
}