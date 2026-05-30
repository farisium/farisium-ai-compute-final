import { Footer } from "@/components/Footer";
import { FloatingCtas } from "@/components/FloatingCtas";
import { Navbar } from "@/components/Navbar";
import { BatchStatus, Faq, Requirements, SupportedHardware, Testimonials, WhyJoin } from "@/sections/Sections";
import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { Registration } from "@/sections/Registration";
import { RewardCalculator } from "@/sections/RewardCalculator";

const description =
  "Farisium AI Compute adalah GPU Compute Partnership Program dengan assisted setup, manual verification, dan weekly reward distribution untuk jaringan komputasi AI terdistribusi.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah ada biaya pendaftaran?",
      acceptedAnswer: { "@type": "Answer", text: "Tidak ada biaya pendaftaran untuk mengajukan GPU Compute Partnership Program." },
    },
    {
      "@type": "Question",
      name: "Bagaimana reward dibayarkan?",
      acceptedAnswer: { "@type": "Answer", text: "Reward didistribusikan mingguan melalui USDT, transfer bank, atau e-wallet sesuai pilihan peserta." },
    },
    {
      "@type": "Question",
      name: "Apakah setup dibantu?",
      acceptedAnswer: { "@type": "Answer", text: "Ya. Tim Farisium membantu proses setup dan verifikasi perangkat secara terpandu." },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Farisium AI Compute",
  url: "/",
  logo: "/assets/farisium-logo-white.png",
  description,
};

export function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <RewardCalculator />
        <WhyJoin />
        <SupportedHardware />
        <Requirements />
        <BatchStatus />
        <Testimonials />
        <Faq />
        <Registration />
      </main>
      <Footer />
      <FloatingCtas />
    </div>
  );
}
