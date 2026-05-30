import { MessageCircle, Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/services/whatsapp";
import { useLang } from "@/i18n";

export function FloatingCtas() {
  const { t } = useLang();
  const message = encodeURIComponent("Halo Tim Farisium AI Compute, saya ingin bertanya tentang GPU Compute Partnership Program.");

  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp Farisium AI Compute"
        className="fixed bottom-24 right-4 z-40 hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 hover:-translate-y-1 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-white/10 bg-background/88 backdrop-blur-xl px-4 py-3">
        <a
          href="#register"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-glow to-electric px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-electric/25"
        >
          <Send className="h-4 w-4" />
          {t("reg.title")}
        </a>
      </div>
    </>
  );
}
