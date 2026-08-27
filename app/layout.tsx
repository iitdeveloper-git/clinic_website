import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://your-clinic.example"),
  title: "Nanhe Kadam Child Clinic | Baby Care for Village Families",
  description: "Simple and friendly baby and child care information for village families.",
  alternates:{canonical:"/"}, robots:{index:true,follow:true},
  openGraph:{title:"Nanhe Kadam Child Clinic",description:"Nanhe bachchon ki sehat, hamari zimmedari.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Nanhe Kadam Child Clinic"}]},
  twitter:{card:"summary_large_image",title:"Nanhe Kadam Child Clinic",description:"Nanhe bachchon ki sehat, hamari zimmedari.",images:["/og.png"]}
};
const schema={"@context":"https://schema.org","@graph":[{"@type":["MedicalClinic","MedicalBusiness"],"@id":"https://your-clinic.example/#clinic",name:"Nanhe Kadam Child Clinic",url:"https://your-clinic.example",telephone:"+91 00000 00000",description:"Simple and friendly baby and child care information for village families."},{"@type":"WebSite","@id":"https://your-clinic.example/#website",url:"https://your-clinic.example",name:"Nanhe Kadam Child Clinic",publisher:{"@id":"https://your-clinic.example/#clinic"}}]};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>; }

