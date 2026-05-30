import { useLang } from "@/i18n";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-10 pb-20 sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img
            src="/assets/farisium-logo-white.png"
            alt="Farisium AI Compute"
            className="h-10 w-auto object-contain mb-4"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            {t("footer.about")}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-cyan-glow mb-4">Program</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#how" className="text-muted-foreground hover:text-foreground transition">{t("nav.how")}</a></li>
            <li><a href="#reward" className="text-muted-foreground hover:text-foreground transition">{t("nav.reward")}</a></li>
            <li><a href="#requirements" className="text-muted-foreground hover:text-foreground transition">{t("nav.req")}</a></li>
            <li><a href="#register" className="text-muted-foreground hover:text-foreground transition">{t("nav.register")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-cyan-glow mb-4">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition">{t("footer.privacy")}</a></li>
            <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition">{t("footer.terms")}</a></li>
            <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition">{t("footer.faq")}</a></li>
          </ul>

          <div className="mt-6 flex gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Farisium social link"
                className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-cyan-glow transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>&copy; {year} Farisium AI Compute. {t("footer.rights")}</span>
          <span className="font-mono">Distributed AI Compute Network</span>
        </div>
      </div>
    </footer>
  );
}
