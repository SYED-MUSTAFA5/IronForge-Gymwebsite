const schedule = [
  { time: "06:00", mon: "HIIT Blast", tue: "Power Yoga", wed: "HIIT Blast", thu: "Spin", fri: "HIIT Blast", sat: "CrossFit", sun: "—" },
  { time: "08:00", mon: "Strength", tue: "Boxing", wed: "CrossFit", thu: "Strength", fri: "Boxing", sat: "Yoga Flow", sun: "Open Gym" },
  { time: "10:00", mon: "Yoga Flow", tue: "CrossFit", wed: "Pilates", thu: "Yoga Flow", fri: "Strength", sat: "HIIT Blast", sun: "Open Gym" },
  { time: "12:00", mon: "Express HIIT", tue: "Express Lift", wed: "Express HIIT", thu: "Express Lift", fri: "Express HIIT", sat: "—", sun: "—" },
  { time: "17:00", mon: "Boxing", tue: "Strength", wed: "Boxing", thu: "CrossFit", fri: "MMA", sat: "—", sun: "—" },
  { time: "19:00", mon: "CrossFit", tue: "HIIT Blast", wed: "Strength", thu: "Boxing", fri: "Yoga Flow", sat: "—", sun: "—" },
];

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-line" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Weekly Schedule</p>
            <div className="divider-line" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-foreground">
            CLASS <span className="text-gradient">TIMETABLE</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border">Time</th>
                {dayLabels.map((d) => (
                  <th key={d} className="p-4 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time} className="group hover:bg-secondary/30 transition-colors">
                  <td className="p-4 text-sm font-bold text-primary font-display text-lg">{row.time}</td>
                  {days.map((day) => {
                    const val = row[day];
                    const isClass = val !== "—";
                    return (
                      <td key={day} className="p-3 text-center">
                        <span className={`text-xs font-medium px-3 py-2 rounded inline-block transition-all ${
                          isClass
                            ? "bg-secondary text-foreground group-hover:bg-primary/15 group-hover:text-primary cursor-pointer"
                            : "text-muted-foreground/30"
                        }`}>
                          {val}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
