import { useState } from "react";
import { useLang } from "@/i18n";
import { SectionHeader } from "./HowItWorks";
import {
  BadgeDollarSign,
  CalendarClock,
  HeartHandshake,
  Laptop,
  Globe2,
  LogOut,
  Cpu,
  CheckCircle2,
  ChevronDown,
  Info,
  Monitor,
  Wifi,
  Clock,
  ShieldCheck,
  Search,
  MapPin,
} from "lucide-react";

const features = [
  { i: BadgeDollarSign, t: "why.1", d: "why.1d" },
  { i: CalendarClock, t: "why.2", d: "why.2d" },
  { i: HeartHandshake, t: "why.3", d: "why.3d" },
  { i: Laptop, t: "why.4", d: "why.4d" },
  { i: Globe2, t: "why.5", d: "why.5d" },
  { i: LogOut, t: "why.6", d: "why.6d" },
] as const;

export function WhyJoin() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28 reveal">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title={t("why.title")} eyebrow="BENEFITS" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.i;
            return (
              <div
                key={f.t}
                className="group glass surface-depth rounded-2xl p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition gradient-border"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-electric/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition">
                  <Icon className="h-5 w-5 text-cyan-glow" />
                </div>
                <h3 className="font-semibold mb-1.5">{t(f.t)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(f.d)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const nvidiaGpus = ["RTX 2080", "RTX 2080 Super", "RTX 3060+", "RTX 40 Series", "RTX 50 Series"];
const amdGpus = ["RX 7900 XT", "RX 7900 XTX", "RX 9070", "RX 9070 XT"];

export function SupportedHardware() {
  const { t } = useLang();
  const [tab, setTab] = useState<"NVIDIA" | "AMD">("NVIDIA");
  const list = tab === "NVIDIA" ? nvidiaGpus : amdGpus;
  return (
    <section className="py-20 sm:py-28 reveal">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title={t("hw.title")} eyebrow="HARDWARE" />
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex glass rounded-xl p-1">
              {(["NVIDIA", "AMD"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setTab(v)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition ${
                    tab === v
                      ? "bg-gradient-to-r from-cyan-glow to-electric text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-strong surface-depth rounded-2xl p-6 sm:p-8 gradient-border">
            <div className="grid sm:grid-cols-2 gap-3">
              {list.map((g) => (
                <div
                  key={g}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/40 border border-border hover:border-cyan-glow/40 transition"
                >
                  <Cpu className="h-4 w-4 text-cyan-glow" />
                  <span className="text-sm font-medium">{g}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 text-cyan-glow" />
              {t("hw.note")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const requirements = [
  { i: Monitor, t: "req.1" },
  { i: Cpu, t: "req.2" },
  { i: Wifi, t: "req.3" },
  { i: Clock, t: "req.4" },
  { i: CalendarClock, t: "req.5" },
  { i: ShieldCheck, t: "req.6" },
] as const;

export function Requirements() {
  const { t } = useLang();
  return (
    <section id="requirements" className="py-20 sm:py-28 reveal">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title={t("req.title")} eyebrow="REQUIREMENTS" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {requirements.map((r) => {
            const Icon = r.i;
            return (
              <div key={r.t} className="glass rounded-lg px-5 py-4 flex items-center gap-3 hover:-translate-y-0.5 transition">
                <div className="h-9 w-9 rounded-lg bg-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-cyan-glow" />
                </div>
                <span className="text-sm font-medium">{t(r.t)}</span>
                <CheckCircle2 className="h-4 w-4 text-cyan-glow ml-auto flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BatchStatus() {
  const { t } = useLang();
  const progress = 56;
  return (
    <section className="py-20 sm:py-28 reveal">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader title={t("batch.title")} eyebrow="LIVE STATUS" />
        <div className="mt-12 glass-strong surface-depth rounded-2xl p-6 sm:p-10 gradient-border glow-cyan">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-glow mb-1">
                Active Batch
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{t("batch.name")}</h3>
            </div>
            <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 text-cyan-glow">
              <span className="h-2 w-2 rounded-full bg-cyan-glow animate-pulse" />
              Recruiting
            </div>
          </div>

          <div className="flex items-baseline justify-between mb-2">
            <span className="font-semibold">{t("batch.slots")}</span>
            <span className="text-2xl font-bold gradient-text">{progress}%</span>
          </div>
          <div className="h-3 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-glow to-electric transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{t("batch.note")}</p>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    gpu: "RTX 3070",
    city: "Bandung",
    quote: "Setup dibantu hingga berjalan lancar dan proses reward mingguan cukup transparan.",
  },
  {
    gpu: "RTX 3080",
    city: "Jakarta",
    quote: "Program cocok untuk GPU yang sering idle dan tidak digunakan penuh setiap hari.",
  },
  {
    gpu: "RTX 4070",
    city: "Surabaya",
    quote: "Tim membantu proses konfigurasi sehingga saya tidak perlu memahami detail teknis.",
  },
];

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28 reveal">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title={t("tm.title")} subtitle={t("tm.sub")} eyebrow="PARTNER FEEDBACK" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((tm, i) => (
            <div
              key={i}
              className="glass-strong surface-depth rounded-2xl p-6 gradient-border hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-glow to-electric flex items-center justify-center text-primary-foreground font-bold">
                  {tm.city.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-semibold">Early GPU Partner Feedback</div>
                  <div className="text-xs text-muted-foreground">Verified onboarding experience</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{tm.quote}"</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-cyan-glow px-2 py-1 rounded-md bg-cyan-glow/10 border border-cyan-glow/20">
                  <Cpu className="h-3 w-3" /> {tm.gpu}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-1 rounded-md bg-white/5 border border-border">
                  <MapPin className="h-3 w-3 text-cyan-glow" /> {tm.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqsId = [
  {
    q: "Apakah saya harus membeli perangkat tambahan?",
    a: "Tidak. Anda hanya membutuhkan desktop PC dengan GPU yang didukung dan koneksi internet stabil.",
  },
  {
    q: "Apakah laptop didukung?",
    a: "Saat ini program hanya mendukung desktop PC. Laptop tidak didukung karena keterbatasan thermal dan stabilitas.",
  },
  {
    q: "Apakah saya masih bisa menggunakan komputer saya?",
    a: "Ya. Compute client berjalan di latar belakang dan dapat disesuaikan agar tidak mengganggu aktivitas harian Anda.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Reward dihitung mingguan berdasarkan kontribusi GPU Anda ke jaringan, lalu dibayarkan melalui metode pilihan: USDT, transfer bank, atau e-wallet.",
  },
  {
    q: "Kapan reward dibayarkan?",
    a: "Setiap minggu, sesuai jadwal payout yang akan diinformasikan setelah onboarding.",
  },
  { q: "Apakah ada biaya pendaftaran?", a: "Tidak ada biaya pendaftaran. Bergabung gratis." },
  {
    q: "Berapa minimal jam online?",
    a: "Minimal 12 jam online per hari. Direkomendasikan 24 jam untuk hasil optimal.",
  },
  {
    q: "Apakah saya bisa keluar kapan saja?",
    a: "Peserta dapat menghentikan program kapan saja setelah menyelesaikan minimal 1 minggu partisipasi atau setelah menerima payout pertama.",
  },
  {
    q: "Apakah setup dibantu?",
    a: "Ya. Tim kami akan memandu proses setup secara remote sehingga Anda tidak perlu memahami detail teknis.",
  },
  {
    q: "Negara mana saja yang bisa bergabung?",
    a: "Program terbuka secara global untuk peserta dengan perangkat yang memenuhi syarat.",
  },
];

export function Faq() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const filteredFaqs = faqsId.filter((f) =>
    `${f.q} ${f.a}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <section id="faq" className="py-20 sm:py-28 reveal">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader title={t("faq.title")} eyebrow="FAQ" />
        <div className="relative mt-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari pertanyaan..."
            aria-label="Cari FAQ"
            className="w-full rounded-lg glass px-11 py-3 text-sm outline-none focus:border-cyan-glow/60"
          />
        </div>
        <div className="mt-5 space-y-3">
          {filteredFaqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q} className="glass rounded-2xl overflow-hidden gradient-border">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left hover:bg-white/[0.03] transition"
                >
                  <span className="font-medium text-sm sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-cyan-glow flex-shrink-0 transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
