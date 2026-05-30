import { useLang, type Lang } from "@/i18n";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { key: "nav.home", href: "/#home" },
  { key: "nav.how", href: "/#how" },
  { key: "nav.reward", href: "/#reward" },
  { key: "nav.req", href: "/#requirements" },
  { key: "nav.faq", href: "/#faq" },
  { key: "nav.register", href: "/#register" },
] as const;

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangBtn = ({ value, label }: { value: Lang; label: string }) => (
    <button
      onClick={() => setLang(value)}
      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
        lang === value
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition ${
            scrolled ? "glass-strong glow-cyan" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group" aria-label="Farisium AI Compute home">
            <img
              src="/assets/farisium-logo-white.png"
              alt="Farisium AI Compute"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <a
                key={n.key}
                href={n.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-md hover:bg-white/5"
              >
                {t(n.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-background/40 p-0.5">
              <LangBtn value="id" label="ID" />
              <span className="text-muted-foreground/50 text-xs">|</span>
              <LangBtn value="en" label="EN" />
            </div>

            <a
              href="#register"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-glow to-electric text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-electric/20"
            >
              {t("nav.register")}
            </a>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-2 animate-fade-up">
            {navItems.map((n) => (
              <a
                key={n.key}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg"
              >
                {t(n.key)}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
