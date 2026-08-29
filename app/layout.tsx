import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://your-clinic.example"),
  title: "Women’s Health Clinic | Private Gynecology Consultations",
  description: "Private, respectful and clearly explained gynecology consultations for women at every life stage.",
  alternates:{canonical:"/"}, robots:{index:true,follow:true},
  openGraph:{title:"Women’s Health Clinic",description:"Women’s health care with privacy, clarity and respect.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Women’s Health Clinic"}]},
  twitter:{card:"summary_large_image",title:"Women’s Health Clinic",description:"Women’s health care with privacy, clarity and respect.",images:["/og.png"]}
};
const schema={"@context":"https://schema.org","@graph":[{"@type":["MedicalClinic","MedicalBusiness"],"@id":"https://your-clinic.example/#clinic",name:"Women’s Health Clinic",url:"https://your-clinic.example",telephone:"+91 00000 00000",description:"Private, respectful and clearly explained gynecology consultations for women at every life stage."},{"@type":"WebSite","@id":"https://your-clinic.example/#website",url:"https://your-clinic.example",name:"Women’s Health Clinic",publisher:{"@id":"https://your-clinic.example/#clinic"}}]};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>; }


