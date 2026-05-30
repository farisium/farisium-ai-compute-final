import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/i18n";
import { SectionHeader } from "./HowItWorks";
import { fetchGpuRewards, type GpuRewardEntry, type GpuVendor } from "@/services/rewards";
import { CheckCircle2, ChevronDown, Search, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const vendorAccent: Record<GpuVendor, string> = {
  NVIDIA: "bg-[#76b900]/15 text-[#9bea42] border-[#76b900]/30",
  AMD: "bg-[#ed1c24]/15 text-[#ff8c91] border-[#ed1c24]/30",
};

export function RewardCalculator() {
  const { t } = useLang();
  const [gpus, setGpus] = useState<GpuRewardEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string>("rtx4090");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchGpuRewards().then(setGpus);
  }, []);

  const selected = useMemo(() => gpus.find((g) => g.id === selectedId), [gpus, selectedId]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? gpus.filter((g) => `${g.vendor} ${g.name}`.toLowerCase().includes(q)) : gpus;
  }, [gpus, query]);

  return (
    <section id="reward" className="py-20 sm:py-28 relative reveal">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title={t("rw.title")} subtitle={t("rw.sub")} eyebrow="REWARD ESTIMATE" />

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          <div className="glass-strong surface-depth rounded-2xl p-6 sm:p-8 gradient-border">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground">
                {t("rw.select")}
              </label>
              <div className="flex gap-2">
                <VendorBadge vendor="NVIDIA" />
                <VendorBadge vendor="AMD" />
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={t("rw.select")}
                className="w-full flex items-center justify-between gap-3 px-4 py-4 rounded-lg bg-background/70 border border-border hover:border-cyan-glow/50 transition text-left"
              >
                <span>
                  <span className="block text-xs text-muted-foreground">GPU</span>
                  <span className="font-semibold">
                    {selected ? `${selected.vendor} ${selected.name}` : "-"}
                  </span>
                </span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`} />
              </button>

              {open && (
                <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl glass-strong border border-border shadow-2xl">
                  <div className="p-3 border-b border-border/60">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t("rw.search")}
                        className="w-full rounded-lg bg-background/70 border border-border py-2.5 pl-9 pr-3 text-sm outline-none focus:border-cyan-glow/60"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="max-h-80 overflow-auto">
                    {(["NVIDIA", "AMD"] as const).map((vendor) => {
                      const vendorGpus = filtered.filter((g) => g.vendor === vendor);
                      if (!vendorGpus.length) return null;
                      return (
                        <div key={vendor}>
                          <div className="px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-cyan-glow bg-white/[0.03] sticky top-0">
                            {vendor}
                          </div>
                          {vendorGpus.map((g) => (
                            <button
                              key={g.id}
                              type="button"
                              onClick={() => {
                                setSelectedId(g.id);
                                setOpen(false);
                                setQuery("");
                              }}
                              className={`w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition flex items-center justify-between ${
                                g.id === selectedId ? "text-cyan-glow" : ""
                              }`}
                            >
                              <span>{g.name}</span>
                              <span className={`text-[10px] px-2 py-1 rounded-md border ${vendorAccent[g.vendor]}`}>
                                {g.vendor}
                              </span>
                            </button>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <Stat label="Source" value="Cached JSON" />
              <Stat label="Sync Layer" value="Prepared" />
              <Stat label="Setup Fee" value="$0" />
              <Stat label="Verification" value="Manual" />
            </div>
          </div>

          <div className="relative glass-strong surface-depth rounded-2xl p-6 sm:p-8 gradient-border glow-cyan overflow-hidden">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-glow/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-glow">
                <Sparkles className="h-3.5 w-3.5" />
                {t("rw.potential")}
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{selected ? `${selected.vendor} ${selected.name}` : "-"}</span>
                  {selected && <VendorBadge vendor={selected.vendor} />}
                </div>
                <div className="mt-4 text-xs uppercase text-muted-foreground tracking-widest">
                  {t("rw.upto")}
                </div>
                <div className="mt-1 flex items-end gap-2 leading-none">
                  <span className="text-6xl sm:text-7xl font-bold gradient-text text-glow">
                    ${selected?.weeklyRewardUsd ?? 0}
                  </span>
                  <span className="text-muted-foreground pb-2">{t("rw.week")}</span>
                </div>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-background/45 border border-border p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("rw.status")}</div>
                  <div className="mt-2 flex items-center gap-2 font-semibold text-cyan-glow">
                    <CheckCircle2 className="h-4 w-4" /> Eligible
                  </div>
                </div>
                <div className="rounded-lg bg-background/45 border border-border p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("rw.payment")}</div>
                  <div className="mt-2 text-sm font-semibold">USDT / Transfer Bank / E-Wallet</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-cyan-glow" />
                <span className="text-muted-foreground">{t("rw.paid")}</span>
              </div>

              <div className="mt-6 h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-glow to-electric transition-all duration-700"
                  style={{ width: `${Math.min(100, ((selected?.weeklyRewardUsd ?? 0) / 60) * 100)}%` }}
                />
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                * Estimasi berbasis sinkronisasi performa jaringan. Hasil aktual dapat bervariasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VendorBadge({ vendor }: { vendor: GpuVendor }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-md border font-semibold ${vendorAccent[vendor]}`}>
      <ShieldCheck className="h-3 w-3" />
      {vendor}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-background/50 border border-border px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold mt-0.5">{value}</div>
    </div>
  );
}
