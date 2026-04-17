import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 bg-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Heading */}
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-foreground">
            READY TO{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              TRANSFORM
            </span>
            ?
          </h2>

          {/* Sub Text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Start your 7-day free trial today. No commitment, no contracts —
            just real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-500 text-white font-semibold text-base uppercase tracking-wide px-10 py-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Secondary Button */}
            <button className="px-8 py-6 border border-white/20 rounded-xl text-sm uppercase tracking-wide text-muted-foreground hover:bg-white/10 transition-all duration-300">
              View Plans
            </button>

          </div>
        </div>
      </div>

      {/* Glass Card Effect (optional layer) */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none"></div>
    </section>
  );
}