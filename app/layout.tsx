import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Manrope({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aarogya-family-clinic.rk1918.chatgpt.site"),
  title: {
    default: "Sampurna Clinic | Gynecologist in Gyanpur, Bhadohi",
    template: "%s | Sampurna Clinic",
  },
  description: "Consult Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi for respectful gynecology, pregnancy, maternity, menstrual health and fertility-related care.",
  keywords: ["gynecologist in Gyanpur", "women doctor in Bhadohi", "Sampurna Clinic", "Dr. Kanchan", "pregnancy care Gyanpur", "PCOS consultation Bhadohi", "women health clinic"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sampurna Clinic | Gynecologist in Gyanpur, Bhadohi",
    description: "Respectful gynecology, pregnancy, maternity and fertility-related consultations with Dr. Kanchan.",
    type: "website",
    locale: "en_IN",
    siteName: "Sampurna Clinic",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sampurna Clinic women health clinic in Gyanpur, Bhadohi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampurna Clinic | Gynecologist in Gyanpur, Bhadohi",
    description: "Respectful women health consultations with Dr. Kanchan at Sampurna Clinic.",
    images: ["/og.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "MedicalBusiness"],
      "@id": "https://aarogya-family-clinic.rk1918.chatgpt.site/#clinic",
      name: "Sampurna Clinic",
      url: "https://aarogya-family-clinic.rk1918.chatgpt.site",
      telephone: "",
      description: "Gynecology, pregnancy, maternity, menstrual health and fertility-related consultations with Dr. Kanchan in Gyanpur, Bhadohi.",
      medicalSpecialty: "Gynecologic",
      areaServed: ["Gyanpur", "Bhadohi"],
    },
    {
      "@type": "WebSite",
      "@id": "https://aarogya-family-clinic.rk1918.chatgpt.site/#website",
      url: "https://aarogya-family-clinic.rk1918.chatgpt.site",
      name: "Sampurna Clinic",
      publisher: { "@id": "https://aarogya-family-clinic.rk1918.chatgpt.site/#clinic" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${sans.variable} ${display.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></body></html>;
}