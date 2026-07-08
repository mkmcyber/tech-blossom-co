import { Link } from "@tanstack/react-router";
import { Wifi, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/40 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Wifi className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-bold">
              MKM <span className="text-gradient">Tech Hub</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Powering homes, businesses and institutions with reliable WiFi,
            modern networks and beautifully built web solutions across Kenya.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 0791 398 996</li>
            <li className="flex items-start gap-2 break-all"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> mkmonlinecyber@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Eldoret, Kenya · Online nationwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MKM Tech Hub. All rights reserved.
        <span className="ml-2 rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          Build {new Date(__BUILD_VERSION__).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}
        </span>
      </div>
    </footer>
  );
}