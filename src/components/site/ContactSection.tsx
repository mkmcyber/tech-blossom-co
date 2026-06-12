import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const phone = String(data.get("phone") || "");
    const body = encodeURIComponent(
      `Hello MKM Tech Hub,\n\nMy name is ${name} (${phone}).\n\n${message}`,
    );
    setSending(true);
    window.location.href = `https://wa.me/254791398996?text=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening WhatsApp to send your message…");
    }, 600);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-60"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Get in touch
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Let’s connect you to <span className="text-gradient">faster, smarter tech</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us what you need — a hotspot setup, PPPoE rollout, a new
            website, or ongoing maintenance. We respond within minutes.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Call / WhatsApp</div>
                <a href="tel:+254791398996" className="text-base font-semibold hover:text-primary">0791 398 996</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="min-w-0">
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:mkmonlinecyber@gmail.com" className="block break-all text-base font-semibold hover:text-primary">mkmonlinecyber@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-base font-semibold">Eldoret, Kenya · Online nationwide</div>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border/60 bg-gradient-card p-6 shadow-elegant sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Full name</span>
              <input name="name" required placeholder="John Doe" className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Phone</span>
              <input name="phone" required placeholder="07xx xxx xxx" className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Service of interest</span>
            <select name="service" defaultValue="Hotspot WiFi" className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2">
              <option>Hotspot WiFi</option>
              <option>PPPoE WiFi</option>
              <option>Network management</option>
              <option>Web development</option>
              <option>Online cyber services</option>
              <option>Tech consultation</option>
            </select>
          </label>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">How can we help?</span>
            <textarea name="message" rows={5} required placeholder="Tell us about your project…" className="w-full resize-none rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2" />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {sending ? "Sending…" : "Send via WhatsApp"}
          </button>
        </form>
      </div>
    </section>
  );
}