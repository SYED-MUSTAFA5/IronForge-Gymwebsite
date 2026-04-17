import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "29",
    features: ["Gym floor access", "Locker rooms", "Free Wi-Fi", "Basic app access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "59",
    features: ["All Starter features", "Unlimited classes", "1 PT session/month", "Nutrition guide", "Recovery zone"],
    popular: true,
  },
  {
    name: "Elite",
    price: "99",
    features: ["All Pro features", "4 PT sessions/month", "Sauna & spa access", "Priority booking", "Guest passes"],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-line" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Pricing</p>
            <div className="divider-line" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-foreground">
            CHOOSE YOUR <span className="text-gradient">PLAN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-lg overflow-hidden transition-all duration-300 shadow-card ${
                plan.popular
                  ? "border-primary md:-mt-4 md:mb-4 shadow-glow"
                  : "border-border hover:border-primary/30 hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.3em] text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{plan.name}</p>
                <div className="flex items-baseline gap-1 mt-3 mb-6">
                  <span className="text-6xl font-display text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-bold uppercase tracking-wider ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "bg-secondary text-foreground hover:bg-muted"
                  } transition-all`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
