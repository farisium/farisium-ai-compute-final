import { useLang } from "@/i18n";
import { ArrowRight, CheckCircle2, Cpu, Network, ShieldCheck, Sparkles, Zap } from "lucide-react";

export function Hero() {
  const { t } = useLang();
  const badges = ["hero.badge1", "hero.badge2", "hero.badge3", "hero.badge4"] as const;

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden particle-field">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-cyan-glow mb-6 premium-ring">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-glow" />
              </span>
              {t("hero.tag")}
            </div>

            <h1 className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.03]">
              <span className="block text-foreground">Farisium AI Compute</span>
              <span className="block gradient-text text-glow mt-2">{t("hero.title")}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("hero.sub")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#register"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-glow to-electric text-primary-foreground font-semibold shadow-xl shadow-electric/30 hover:-translate-y-0.5 hover:shadow-electric/50 transition"
              >
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#reward"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg glass hover:bg-white/10 font-medium transition"
              >
                <Zap className="h-4 w-4 text-cyan-glow" />
                {t("hero.cta2")}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((b) => (
                <div
                  key={b}
                  className="glass rounded-lg px-3 py-3 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-glow flex-shrink-0" />
                  {t(b)}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <ComputeNetwork />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComputeNetwork() {
  const nodes = [
    { x: "50%", y: "14%", label: "AI" },
    { x: "83%", y: "35%", label: "FP16" },
    { x: "72%", y: "76%", label: "GPU" },
    { x: "28%", y: "76%", label: "CUDA" },
    { x: "17%", y: "35%", label: "ML" },
  ];

  return (
    <div className="relative aspect-square max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-glow/20 via-electric/15 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-cyan-glow/10 animate-float" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" aria-hidden="true">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop stopColor="rgb(103 232 249)" stopOpacity="0.75" />
            <stop offset="1" stopColor="rgb(129 140 248)" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <path d="M210 72 L338 148 L302 318 L118 318 L82 148 Z" fill="none" stroke="url(#line)" strokeWidth="1.4" strokeDasharray="8 10">
          <animate attributeName="stroke-dashoffset" from="120" to="0" dur="9s" repeatCount="indefinite" />
        </path>
        <path d="M210 210 L210 72 M210 210 L338 148 M210 210 L302 318 M210 210 L118 318 M210 210 L82 148" fill="none" stroke="url(#line)" strokeWidth="1" opacity="0.55" />
      </svg>

      <div className="absolute inset-0">
        {nodes.map((node, index) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{ left: node.x, top: node.y, animationDelay: `${index * 0.35}s` }}
          >
            <div className="glass rounded-lg px-3 py-2 text-[11px] font-mono text-cyan-glow shadow-2xl">
              {node.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative h-full w-full flex items-center justify-center">
        <div className="glass-strong surface-depth rounded-2xl p-7 w-72 min-h-72 flex flex-col items-center justify-center gradient-border glow-cyan">
          <img
            src="/assets/farisium-logo-white.png"
            alt="Farisium AI Compute"
            className="h-10 w-auto object-contain mb-6"
            loading="eager"
          />
          <div className="h-20 w-20 rounded-2xl bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center">
            <Cpu className="h-11 w-11 text-cyan-glow" strokeWidth={1.2} />
          </div>
          <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            GPU Node
          </div>
          <div className="mt-1 font-bold text-lg">Compute Active</div>

          <div className="mt-5 w-full space-y-2">
            {[86, 72, 94].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-glow to-electric"
                  style={{ width: `${w}%`, animation: `pulse-glow ${2 + i * 0.4}s ease-in-out infinite` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 w-full text-center text-[10px] text-muted-foreground">
            <span className="rounded-md bg-white/5 py-1.5 flex items-center justify-center gap-1">
              <ShieldCheck className="h-3 w-3 text-cyan-glow" /> Verified
            </span>
            <span className="rounded-md bg-white/5 py-1.5 flex items-center justify-center gap-1">
              <Network className="h-3 w-3 text-cyan-glow" /> Sync
            </span>
            <span className="rounded-md bg-white/5 py-1.5 flex items-center justify-center gap-1">
              <Sparkles className="h-3 w-3 text-cyan-glow" /> AI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
