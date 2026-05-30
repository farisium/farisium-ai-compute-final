import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

type Dict = Record<string, { id: string; en: string }>;

export const T: Dict = {
  "nav.home": { id: "Home", en: "Home" },
  "nav.how": { id: "Cara Kerja", en: "How it Works" },
  "nav.reward": { id: "Reward", en: "Rewards" },
  "nav.req": { id: "Persyaratan", en: "Requirements" },
  "nav.faq": { id: "FAQ", en: "FAQ" },
  "nav.register": { id: "Daftar", en: "Apply" },

  "hero.tag": { id: "GPU Compute Partnership Program", en: "GPU Compute Partnership Program" },
  "hero.title": {
    id: "Passive Income dari GPU di Jaringan AI Compute",
    en: "Run Your GPU in a Premium AI Compute Network",
  },
  "hero.sub": {
    id: "Farisium membantu pemilik GPU memenuhi permintaan komputasi AI melalui proses setup terpandu, verifikasi manual, dan distribusi reward mingguan.",
    en: "Farisium helps GPU owners serve AI compute demand through assisted setup, manual verification, and weekly reward distribution.",
  },
  "hero.cta1": { id: "Ajukan Pendaftaran", en: "Apply Now" },
  "hero.cta2": { id: "Lihat Estimasi Reward", en: "See Reward Estimate" },
  "hero.badge1": { id: "Weekly Reward Distribution", en: "Weekly Reward Distribution" },
  "hero.badge2": { id: "Global Participants", en: "Global Participants" },
  "hero.badge3": { id: "Assisted Setup", en: "Assisted Setup" },
  "hero.badge4": { id: "Manual Verification", en: "Manual Verification" },

  "how.title": { id: "Cara Kerja Program", en: "How the Program Works" },
  "how.sub": {
    id: "Lima langkah sederhana untuk mulai menjalankan GPU Anda di jaringan komputasi kami.",
    en: "Five simple steps to start running your GPU on our compute network.",
  },
  "how.s1": { id: "Daftar Program", en: "Register" },
  "how.s1d": { id: "Isi formulir pendaftaran dan tim kami akan menghubungi Anda.", en: "Fill the registration form and our team will reach out." },
  "how.s2": { id: "Verifikasi GPU", en: "GPU Verification" },
  "how.s2d": { id: "Tim memverifikasi spesifikasi perangkat dan stabilitas koneksi.", en: "Our team verifies your hardware specs and connection stability." },
  "how.s3": { id: "Remote Setup Bersama Tim", en: "Remote Setup with the Team" },
  "how.s3d": { id: "Sesi remote untuk konfigurasi compute client di perangkat Anda.", en: "Remote session to configure the compute client on your machine." },
  "how.s4": { id: "Jalankan Compute Network", en: "Run the Compute Network" },
  "how.s4d": { id: "GPU Anda mulai berkontribusi ke jaringan AI terdistribusi.", en: "Your GPU starts contributing to the distributed AI network." },
  "how.s5": { id: "Terima Reward Mingguan", en: "Receive Weekly Rewards" },
  "how.s5d": { id: "Reward dihitung dan dibayarkan setiap minggu ke metode pilihan Anda.", en: "Rewards are calculated and paid weekly to your chosen method." },

  "rw.title": { id: "Estimasi Reward GPU", en: "GPU Reward Estimate" },
  "rw.sub": {
    id: "Pilih GPU Anda untuk melihat estimasi reward mingguan. Data disiapkan melalui arsitektur sync layer dan cached JSON.",
    en: "Pick your GPU to see an estimated weekly reward. Data is prepared through a sync layer and cached JSON architecture.",
  },
  "rw.select": { id: "Pilih GPU Anda", en: "Select your GPU" },
  "rw.potential": { id: "Potensi Reward Mingguan", en: "Weekly Reward Potential" },
  "rw.upto": { id: "Up To", en: "Up To" },
  "rw.week": { id: "/ Minggu", en: "/ Week" },
  "rw.paid": { id: "Dibayarkan Mingguan", en: "Paid Weekly" },
  "rw.search": { id: "Cari GPU...", en: "Search GPU..." },
  "rw.status": { id: "Status", en: "Status" },
  "rw.payment": { id: "Payment", en: "Payment" },

  "why.title": { id: "Mengapa Memilih Farisium AI Compute", en: "Why Choose Farisium AI Compute" },
  "why.1": { id: "Manual Device Verification", en: "Manual Device Verification" },
  "why.1d": { id: "Setiap perangkat ditinjau untuk memastikan spesifikasi, stabilitas, dan kesiapan operasional.", en: "Every device is reviewed for hardware specs, stability, and operational readiness." },
  "why.2": { id: "Weekly Reward Distribution", en: "Weekly Reward Distribution" },
  "why.2d": { id: "Reward dikurasi dan didistribusikan mingguan melalui metode pembayaran pilihan.", en: "Rewards are reviewed and distributed weekly through your selected payment method." },
  "why.3": { id: "Assisted Setup Process", en: "Assisted Setup Process" },
  "why.3d": { id: "Tim teknis membantu onboarding hingga GPU siap berkontribusi.", en: "The technical team assists onboarding until your GPU is ready to contribute." },
  "why.4": { id: "Global Participation", en: "Global Participation" },
  "why.4d": { id: "Program terbuka untuk peserta global dengan perangkat yang memenuhi syarat.", en: "The program is open to global participants with eligible devices." },
  "why.5": { id: "No Registration Fee", en: "No Registration Fee" },
  "why.5d": { id: "Pendaftaran gratis dan tidak memerlukan biaya awal.", en: "Registration is free and requires no upfront fee." },
  "why.6": { id: "Flexible Participation", en: "Flexible Participation" },
  "why.6d": { id: "Partisipasi dapat disesuaikan dengan ketersediaan perangkat dan kebutuhan harian Anda.", en: "Participation can align with your device availability and daily needs." },

  "hw.title": { id: "Hardware yang Didukung", en: "Supported Hardware" },
  "hw.note": { id: "Laptop tidak didukung saat ini.", en: "Laptops are not supported at this time." },

  "req.title": { id: "Persyaratan Program", en: "Program Requirements" },
  "req.1": { id: "Desktop PC", en: "Desktop PC" },
  "req.2": { id: "GPU yang Didukung", en: "Supported GPU" },
  "req.3": { id: "Koneksi Internet Stabil", en: "Stable Internet Connection" },
  "req.4": { id: "Minimal 12 Jam Online per Hari", en: "Minimum 12 Hours Online per Day" },
  "req.5": { id: "Direkomendasikan 24 Jam Online", en: "24 Hours Online Recommended" },
  "req.6": { id: "Bersedia Mengikuti Proses Setup", en: "Willing to Follow the Setup Process" },

  "batch.title": { id: "Status Batch Saat Ini", en: "Current Batch Status" },
  "batch.name": { id: "Batch 1 - Active Recruitment", en: "Batch 1 - Active Recruitment" },
  "batch.slots": { id: "17 / 30 GPU Partners Approved", en: "17 / 30 GPU Partners Approved" },
  "batch.note": {
    id: "Seluruh aplikasi ditinjau secara manual berdasarkan spesifikasi perangkat, stabilitas koneksi, dan ketersediaan slot jaringan.",
    en: "All applications are reviewed manually based on hardware specs, connection stability, and network slot availability.",
  },

  "tm.title": { id: "Early GPU Partner Feedback", en: "Early GPU Partner Feedback" },
  "tm.sub": { id: "Cerita dari partner awal program kami.", en: "Stories from our early program partners." },

  "faq.title": { id: "Pertanyaan Umum", en: "Frequently Asked Questions" },

  "reg.title": { id: "Ajukan Pendaftaran", en: "Apply Now" },
  "reg.sub": {
    id: "Isi formulir berikut. Tim kami akan menghubungi Anda melalui WhatsApp untuk verifikasi.",
    en: "Fill the form below. Our team will contact you via WhatsApp for verification.",
  },
  "reg.name": { id: "Nama Lengkap", en: "Full Name" },
  "reg.wa": { id: "WhatsApp", en: "WhatsApp" },
  "reg.country": { id: "Negara", en: "Country" },
  "reg.gpu": { id: "GPU", en: "GPU" },
  "reg.gpuCount": { id: "Jumlah GPU", en: "Number of GPUs" },
  "reg.cpu": { id: "CPU (Opsional)", en: "CPU (Optional)" },
  "reg.ram": { id: "RAM (Opsional)", en: "RAM (Optional)" },
  "reg.hours": { id: "Jam Online per Hari", en: "Online Hours per Day" },
  "reg.pay": { id: "Metode Pembayaran", en: "Payment Method" },
  "reg.notes": { id: "Catatan Tambahan", en: "Additional Notes" },
  "reg.submit": { id: "Ajukan Pendaftaran", en: "Submit Application" },
  "reg.selectPlaceholder": { id: "Pilih...", en: "Select..." },
  "reg.success": { id: "Data siap dikirim. WhatsApp akan terbuka untuk proses verifikasi.", en: "Your data is ready. WhatsApp will open for verification." },
  "reg.loading": { id: "Menyiapkan WhatsApp...", en: "Preparing WhatsApp..." },

  "footer.about": {
    id: "GPU Compute Partnership Program untuk pemilik GPU yang ingin berpartisipasi dalam jaringan komputasi AI terdistribusi yang dikelola secara profesional.",
    en: "GPU Compute Partnership Program for GPU owners who want to participate in a professionally managed distributed AI compute network.",
  },
  "footer.privacy": { id: "Privacy Policy", en: "Privacy Policy" },
  "footer.terms": { id: "Terms", en: "Terms" },
  "footer.faq": { id: "FAQ", en: "FAQ" },
  "footer.rights": { id: "Hak Cipta Dilindungi.", en: "All rights reserved." },
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof T) => string;
}

const LangContext = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  const t = (key: keyof typeof T) => T[key]?.[lang] ?? String(key);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
