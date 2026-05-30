import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { useLang } from "@/i18n";
import { SectionHeader } from "./HowItWorks";
import { openWhatsApp, type RegistrationPayload } from "@/services/whatsapp";
import { listGpuRewards } from "@/services/rewards";
import { CheckCircle2, Send } from "lucide-react";

const initial: RegistrationPayload = {
  name: "",
  whatsapp: "",
  country: "",
  gpu: "",
  gpuCount: "1",
  cpu: "",
  ram: "",
  hours: "12",
  payment: "USDT",
  notes: "",
};

export function Registration() {
  const { t } = useLang();
  const [form, setForm] = useState<RegistrationPayload>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const gpus = listGpuRewards();

  const errors = useMemo(() => {
    const next: Partial<Record<keyof RegistrationPayload, string>> = {};
    if (!form.name.trim()) next.name = "Nama wajib diisi";
    if (!/^\+?[0-9\s-]{8,18}$/.test(form.whatsapp.trim())) next.whatsapp = "Nomor WhatsApp belum valid";
    if (!form.country.trim()) next.country = "Negara wajib diisi";
    if (!form.gpu.trim()) next.gpu = "Pilih GPU";
    const count = Number(form.gpuCount);
    if (!Number.isFinite(count) || count < 1) next.gpuCount = "Minimal 1 GPU";
    const hours = Number(form.hours);
    if (!Number.isFinite(hours) || hours < 1 || hours > 24) next.hours = "Masukkan 1-24 jam";
    return next;
  }, [form]);

  const update =
    (k: keyof RegistrationPayload) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setSubmitted(false);
      setForm((f) => ({ ...f, [k]: e.target.value }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    window.setTimeout(() => {
      openWhatsApp(form);
      setLoading(false);
    }, 450);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-background/70 border border-border focus:border-cyan-glow/60 focus:outline-none focus:ring-2 focus:ring-cyan-glow/20 transition text-sm placeholder:text-muted-foreground/60";
  const labelCls = "block text-xs uppercase tracking-widest text-muted-foreground mb-2";

  return (
    <section id="register" className="py-20 sm:py-28 relative reveal">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader title={t("reg.title")} subtitle={t("reg.sub")} eyebrow="REGISTRATION" />

        <form
          onSubmit={onSubmit}
          noValidate
          className="mt-12 glass-strong surface-depth rounded-2xl p-5 sm:p-8 lg:p-10 gradient-border space-y-5"
        >
          {submitted && Object.keys(errors).length === 0 && (
            <div className="rounded-lg border border-cyan-glow/30 bg-cyan-glow/10 px-4 py-3 text-sm text-cyan-glow flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              {t("reg.success")}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t("reg.name")} error={submitted ? errors.name : undefined}>
              <input className={inputCls} required value={form.name} onChange={update("name")} autoComplete="name" />
            </Field>
            <Field label={t("reg.wa")} error={submitted ? errors.whatsapp : undefined}>
              <input
                className={inputCls}
                required
                placeholder="+62..."
                value={form.whatsapp}
                onChange={update("whatsapp")}
                autoComplete="tel"
                inputMode="tel"
              />
            </Field>
            <Field label={t("reg.country")} error={submitted ? errors.country : undefined}>
              <input className={inputCls} required value={form.country} onChange={update("country")} autoComplete="country-name" />
            </Field>
            <Field label={t("reg.gpu")} error={submitted ? errors.gpu : undefined}>
              <select className={inputCls} required value={form.gpu} onChange={update("gpu")}>
                <option value="">{t("reg.selectPlaceholder")}</option>
                <optgroup label="NVIDIA">
                  {gpus.filter((g) => g.vendor === "NVIDIA").map((g) => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                  ))}
                </optgroup>
                <optgroup label="AMD">
                  {gpus.filter((g) => g.vendor === "AMD").map((g) => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                  ))}
                </optgroup>
              </select>
            </Field>
            <Field label={t("reg.gpuCount")} error={submitted ? errors.gpuCount : undefined}>
              <input className={inputCls} type="number" min={1} value={form.gpuCount} onChange={update("gpuCount")} />
            </Field>
            <Field label={t("reg.hours")} error={submitted ? errors.hours : undefined}>
              <input className={inputCls} type="number" min={1} max={24} value={form.hours} onChange={update("hours")} />
            </Field>
            <Field label={t("reg.cpu")}>
              <input className={inputCls} value={form.cpu} onChange={update("cpu")} />
            </Field>
            <Field label={t("reg.ram")}>
              <input className={inputCls} value={form.ram} onChange={update("ram")} />
            </Field>
            <div className="sm:col-span-2">
              <label className={labelCls}>{t("reg.pay")}</label>
              <select className={inputCls} value={form.payment} onChange={update("payment")}>
                <option>USDT</option>
                <option>Transfer Bank</option>
                <option>E-Wallet</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>{t("reg.notes")}</label>
              <textarea className={`${inputCls} min-h-24 resize-y`} value={form.notes} onChange={update("notes")} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-glow to-electric text-primary-foreground font-semibold shadow-xl shadow-electric/30 hover:-translate-y-0.5 hover:shadow-electric/50 transition disabled:opacity-70 disabled:translate-y-0"
          >
            <Send className="h-4 w-4" />
            {loading ? t("reg.loading") : t("reg.submit")}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Form akan membuka WhatsApp dengan pesan otomatis ke tim verifikasi.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-300">{error}</p>}
    </div>
  );
}
