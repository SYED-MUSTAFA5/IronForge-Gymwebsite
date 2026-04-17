import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.png";
import trainer3 from "@/assets/trainer-3.png";

const trainers = [
  { name: "Jake Morrison", role: "Strength & Conditioning", img: trainer1, specialties: ["Powerlifting", "Bodybuilding"] },
  { name: "Maya Patel", role: "HIIT & Functional Training", img: trainer2, specialties: ["HIIT", "Weight Loss"] },
  { name: "Alex Reed", role: "CrossFit & MMA", img: trainer3, specialties: ["CrossFit", "Boxing"] },
];

export function TrainersSection() {
  return (
    <section id="trainers" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-line" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Elite Team</p>
            <div className="divider-line" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-foreground">
            MEET YOUR <span className="text-gradient">TRAINERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trainers.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex gap-2 mb-3">
                  {t.specialties.map((s) => (
                    <span key={s} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/15 px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <a href="#" className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3 hover:underline">
                  <Instagram className="h-3.5 w-3.5" /> Follow
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
