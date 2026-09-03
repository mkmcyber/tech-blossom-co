import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Brian K.",
    role: "Cafe Owner, Eldoret",
    text: "Salubrious Tech installed our hotspot system and we now earn from every customer. Setup was clean and support is instant.",
    rating: 5,
  },
  {
    name: "Linet A.",
    role: "Landlord, Pipeline",
    text: "Tenants finally have stable WiFi with PPPoE billing. Bandwidth management is on point — no more downtime.",
    rating: 5,
  },
  {
    name: "Dennis O.",
    role: "Startup Founder",
    text: "They built our website in under two weeks. Modern, fast, and beautiful. We get compliments every day.",
    rating: 5,
  },
  {
    name: "Faith W.",
    role: "School Administrator",
    text: "Reliable network maintenance for our computer lab. They’re responsive, professional and very knowledgeable.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="relative z-10 border-y border-border/60 bg-background/30 py-20 backdrop-blur-sm sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Client stories
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Trusted by businesses, landlords and creators
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real words from real clients we’ve connected, built for and supported.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <Quote className="absolute right-4 top-4 h-10 w-10 text-primary/15" />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{r.text}”</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}