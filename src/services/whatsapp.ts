// Configure the WhatsApp number that receives applications.
// Use international format without "+" or leading zeros.
export const WHATSAPP_NUMBER = "6281234567890";

export interface RegistrationPayload {
  name: string;
  country: string;
  whatsapp: string;
  gpu: string;
  gpuCount: string;
  cpu?: string;
  ram?: string;
  hours: string;
  payment: string;
  notes?: string;
}

export function buildWhatsAppMessage(p: RegistrationPayload): string {
  return [
    "Halo Tim Farisium AI Compute,",
    "",
    "Saya ingin mengajukan pendaftaran GPU Compute Partnership Program.",
    "",
    `Nama: ${p.name}`,
    `Negara: ${p.country}`,
    `WhatsApp: ${p.whatsapp}`,
    `GPU: ${p.gpu}`,
    `Jumlah GPU: ${p.gpuCount}`,
    `CPU: ${p.cpu || "-"}`,
    `RAM: ${p.ram || "-"}`,
    `Jam Online: ${p.hours}`,
    `Metode Pembayaran: ${p.payment}`,
    `Catatan: ${p.notes || "-"}`,
    "",
    "Mohon informasi lebih lanjut mengenai proses verifikasi.",
  ].join("\n");
}

export function openWhatsApp(p: RegistrationPayload) {
  const text = encodeURIComponent(buildWhatsAppMessage(p));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
