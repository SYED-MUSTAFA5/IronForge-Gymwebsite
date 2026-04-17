import { Flame, Dumbbell, Heart, Zap, Timer, Users } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with progressive overload and compound lifts.", tag: "Popular" },
  { icon: Flame, title: "HIIT Classes", desc: "Torch fat and boost cardio with high-intensity intervals.", tag: "Trending" },
  { icon: Heart, title: "Yoga & Recovery", desc: "Improve flexibility, mobility, and mental clarity.", tag: null },
  { icon: Zap, title: "CrossFit", desc: "Functional fitness combining cardio, strength, and agility.", tag: "Intense" },
  { icon: Timer, title: "Boxing & MMA", desc: "Learn fighting technique with an incredible workout.", tag: null },
  { icon: Users, title: "Personal Training", desc: "1-on-1 coaching customized for your specific goals.", tag: "Premium" },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-line" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Our Programs</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-foreground">
              TRAIN YOUR <span className="text-gradient">WAY</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            From powerlifting to yoga, we offer something for every fitness level and goal. Find your perfect program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-card hover:shadow-card-hover overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {p.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                  {p.tag}
                </span>
              )}
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-primary transition-all duration-300">
                <p.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
