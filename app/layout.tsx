import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Manrope({ variable: "--font-serif", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://aarogya-family-clinic.rk1918.chatgpt.site"),
  title: "Sampurna Clinic | Dr. Kanchan, Gyanpur Bhadohi",
  description: "Women’s health, maternity and infertility consultation with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi.",
  alternates:{canonical:"/"}, robots:{index:true,follow:true},
  openGraph:{title:"Sampurna Clinic",description:"Women’s health care with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Sampurna Clinic"}]},
  twitter:{card:"summary_large_image",title:"Sampurna Clinic",description:"Women’s health care with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi.",images:["/og.png"]}
};
const schema={"@context":"https://schema.org","@graph":[{"@type":["MedicalClinic","MedicalBusiness"],"@id":"https://aarogya-family-clinic.rk1918.chatgpt.site/#clinic",name:"Sampurna Clinic",url:"https://aarogya-family-clinic.rk1918.chatgpt.site",telephone:"",description:"Women’s health, maternity and infertility consultation with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi."},{"@type":"WebSite","@id":"https://aarogya-family-clinic.rk1918.chatgpt.site/#website",url:"https://aarogya-family-clinic.rk1918.chatgpt.site",name:"Sampurna Clinic",publisher:{"@id":"https://aarogya-family-clinic.rk1918.chatgpt.site/#clinic"}}]};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${display.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>; }



