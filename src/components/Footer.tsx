import { Dumbbell, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo + About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-7 w-7 text-primary" />
              <span className="text-2xl font-display tracking-widest text-foreground">
                IRONFORGE
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium fitness facility dedicated to helping you achieve your strongest self.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Programs", "Trainers", "Schedule", "Pricing"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon–Fri: 5AM – 11PM</li>
              <li>Saturday: 6AM – 10PM</li>
              <li>Sunday: 7AM – 9PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                123 Iron Street, Fitness City
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                info@ironforge.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          
          {/* Copyright + Credit */}
          <p className="text-xs text-muted-foreground">
            © 2026 IronForge. All rights reserved. | Made by{" "}
            <a
              href="https://github.com/SYED-MUSTAFA5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all"
            >
              Syed Mustafa
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}