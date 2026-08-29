import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://your-clinic.example"),
  title: "Sampurna Clinic | Dr. Kanchan, Gyanpur Bhadohi",
  description: "Women’s health, maternity and infertility consultation with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi.",
  alternates:{canonical:"/"}, robots:{index:true,follow:true},
  openGraph:{title:"Sampurna Clinic",description:"Women’s health care with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Sampurna Clinic"}]},
  twitter:{card:"summary_large_image",title:"Sampurna Clinic",description:"Women’s health care with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi.",images:["/og.png"]}
};
const schema={"@context":"https://schema.org","@graph":[{"@type":["MedicalClinic","MedicalBusiness"],"@id":"https://your-clinic.example/#clinic",name:"Sampurna Clinic",url:"https://your-clinic.example",telephone:"",description:"Women’s health, maternity and infertility consultation with Dr. Kanchan at Sampurna Clinic, Gyanpur, Bhadohi."},{"@type":"WebSite","@id":"https://your-clinic.example/#website",url:"https://your-clinic.example",name:"Sampurna Clinic",publisher:{"@id":"https://your-clinic.example/#clinic"}}]};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>; }



