import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-gym.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image (Fixed) */}
      <img
        src={heroImg}
        alt="Gym"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay (Softer) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl space-y-8">

          {/* Tagline */}
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            Premium Fitness Club
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white">
            BUILD YOUR
            <br />
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              STRONGEST
            </span>
            <br />
            SELF
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            World-class equipment, elite trainers, and a powerful community.
            Your transformation starts here.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-500 text-white font-semibold uppercase px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Secondary */}
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 px-8 py-6 rounded-xl transition-all duration-300 group"
            >
              <Play className="mr-2 h-4 w-4 text-primary" />
              Watch Tour
            </Button>

          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-white/10">

          {[
            { value: "50+", label: "Expert Trainers" },
            { value: "200+", label: "Classes Weekly" },
            { value: "10K+", label: "Active Members" },
            { value: "24/7", label: "Open Gym" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left group">
              <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}