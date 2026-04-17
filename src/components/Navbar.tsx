import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4">
        <a href="#" className="flex items-center gap-2 text-foreground group">
          <Dumbbell className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-display tracking-widest">IRONFORGE</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
         <Button
  onClick={() => {
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="bg-gradient-primary text-primary-foreground font-bold uppercase tracking-wider shadow-glow hover:opacity-90 transition-opacity px-6"
>
  Join Now
</Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border px-4 pb-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-3 bg-gradient-primary text-primary-foreground font-bold uppercase tracking-wider">
            Join Now
          </Button>
        </div>
      )}
    </nav>
  );
}
