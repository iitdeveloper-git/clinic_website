import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";

const facilities=[
  ["Reception & Registration","A straightforward check-in experience for scheduled consultations.","/womens-clinic-reception.png"],
  ["Patient Waiting Area","A welcoming space for patients and accompanying family members.","/clinic-reception-v2.png"],
  ["Private Consultation Space","A respectful setting for discussing personal women’s health concerns.","/sampurna-womens-consultation-v2.png"],
  ["Maternity Consultation","A supportive environment for pregnancy questions and follow-up planning.","/sampurna-maternity-care-v2.png"],
];

export default function FacilitiesPage(){return <><Header/><main className="facility-page"><PageHero eyebrow="Sampurna Clinic" title="Clinic facilities designed around a comfortable visit." intro="Explore the patient spaces and consultation setting at Sampurna Clinic, Gyanpur."/><section className="facility-intro"><div><p className="v003-kicker">Your clinic visit</p><h2>A calm, organised and private care environment.</h2></div><p>Our aim is to make every stage—from arrival and registration to consultation and next-step guidance—easy to understand. Facility photographs are representative website visuals; patients may contact the clinic for current on-site details.</p></section><section className="facility-grid">{facilities.map(([title,text,image],i)=><article key={title}><div><Image src={image} alt={`${title} for patients at Sampurna Clinic`} fill sizes="(max-width:700px) 100vw, 50vw"/></div><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="facility-cta"><h2>Planning your first visit?</h2><p>Request an appointment and review the clinic address before travelling.</p><div><Link className="v003-button" href="/appointment">Book Appointment</Link><Link className="v003-button secondary" href="/contact">Map & Directions</Link></div></section></main><Footer/></>}