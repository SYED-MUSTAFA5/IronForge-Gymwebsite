import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lost 30 lbs in 6 months",
    text: "IronForge changed my life. The trainers pushed me beyond what I thought was possible. I've never felt stronger or more confident.",
  },
  {
    name: "Marcus Johnson",
    role: "Gained 20 lbs of muscle",
    text: "The equipment is world-class. Every time I walk in, the energy hits different. This isn't just a gym — it's a lifestyle.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marathon runner",
    text: "From strength training to recovery yoga, everything I need is here. The community keeps me accountable every single day.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-line" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Testimonials</p>
            <div className="divider-line" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-foreground">
            REAL <span className="text-gradient">RESULTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-primary font-semibold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
