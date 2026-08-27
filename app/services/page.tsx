import Link from "next/link";import { CTA,Footer,Header,PageHero } from "../components";import { services } from "../data";
export const metadata={title:"Clinic Services | Nanhe Kadam Child Clinic",description:"Baby health check, vaccination guidance, common illness care and nutrition information for village families."};
export default function Services(){return <><Header/><main><PageHero eyebrow="Clinic Service / Clinic sevas" title="Baby care that is easy to understand / Aasaan baby care." intro="Baby care service chuniye. Clinic se verified service list milne ke baad final details update hongi."/><section className="content-section service-grid">{services.map(s=><article className="service-card" key={s.slug}><span>{s.icon}</span><h2>{s.title}</h2><p>{s.short}</p><Link href={`/services/${s.slug}`}>See what to expect →</Link></article>)}</section><CTA/></main><Footer/></>}


