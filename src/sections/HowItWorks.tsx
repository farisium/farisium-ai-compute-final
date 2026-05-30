import { useLang } from "@/i18n";
import { UserPlus, ShieldCheck, MonitorSmartphone, Network, Wallet } from "lucide-react";

const steps = [
  { icon: UserPlus, t: "how.s1", d: "how.s1d" },
  { icon: ShieldCheck, t: "how.s2", d: "how.s2d" },
  { icon: MonitorSmartphone, t: "how.s3", d: "how.s3d" },
  { icon: Network, t: "how.s4", d: "how.s4d" },
  { icon: Wallet, t: "how.s5", d: "how.s5d" },
] as const;

export function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how" className="py-20 sm:py-28 relative reveal">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title={t("how.title")} subtitle={t("how.sub")} />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.t}
                className="relative group glass surface-depth rounded-2xl p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition gradient-border"
              >
                <div className="absolute -top-3 left-6 text-[10px] font-mono px-2 py-0.5 rounded-full bg-background border border-cyan-glow/30 text-cyan-glow">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-electric/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="h-6 w-6 text-cyan-glow" />
                </div>
                <h3 className="font-semibold text-base mb-2">{t(s.t)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(s.d)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <div className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-glow mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
