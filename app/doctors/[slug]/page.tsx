import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {CTA,Footer,Header} from "../../components";
import {clinic,doctors,services} from "../../data";
import "./doctor-profile.css";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const{slug}=await params;const doctor=doctors.find(d=>d.slug===slug);
 return doctor?{title:`${doctor.name} | ${clinic.name}`,description:`Meet ${doctor.name} for women’s health, maternity and infertility consultations at ${clinic.name}, Gyanpur.`}:{};
}

const processSteps=[
 {number:"01",title:"A private first conversation",text:"Share your concern, symptoms and relevant history in a respectful setting. Bring previous reports, prescriptions and a list of current medicines.",image:"/clinic-consultation-v2.png",alt:"Representative private doctor consultation"},
 {number:"02",title:"Individual clinical assessment",text:"Your history and symptoms are reviewed carefully. Examination or investigations are suggested only when the doctor considers them appropriate.",image:"/doctor-care-hero-v2.png",alt:"Representative women and baby healthcare collage"},
 {number:"03",title:"A clearly explained care plan",text:"Possible treatment, follow-up or referral is explained in simple language so you understand the next step before leaving the clinic.",image:"/clinic-reception-v2.png",alt:"Representative welcoming clinic reception"},
];

export default async function DoctorProfile({params}:{params:Promise<{slug:string}>}){
 const{slug}=await params;const doctor=doctors.find(d=>d.slug===slug);if(!doctor)notFound();
 return <><Header/><main className="doctor-editorial doctor-profile-v2">
  <section className="doctor-v2-hero">
   <div className="doctor-v2-hero-copy"><p className="eyebrow">Doctor profile • Sampurna Clinic</p><h1>Thoughtful care for every stage of a woman’s life.</h1><p>Meet {doctor.name} for private consultations related to women’s health, maternity and infertility concerns in Gyanpur, Bhadohi.</p><div className="doctor-v2-actions"><Link className="button" href="/appointment">Book Appointment →</Link><Link className="doctor-text-link" href="/contact">Clinic details & directions</Link></div><div className="doctor-v2-trust"><span><b>Private</b> consultation</span><span><b>Personal</b> assessment</span><span><b>Clear</b> next steps</span></div></div>
   <div className="doctor-v2-hero-art"><Image src="/gynecologist-hero.png" alt="Representative gynecology and women’s healthcare" fill priority sizes="(max-width:900px) 100vw,52vw"/><div><span>Women’s Health</span><b>Care with dignity, privacy and clear guidance.</b></div></div>
  </section>
  <section className="doctor-v2-card"><div className="doctor-v2-mark"><Image src="/sampurna-clinic-logo.png" alt="Sampurna Clinic logo" width={116} height={116}/></div><div className="doctor-v2-name"><p className="eyebrow">Meet your doctor</p><h2>{doctor.name}</h2><p>{doctor.role}</p></div><dl><div><dt>Qualification</dt><dd>{doctor.qualification}</dd></div><div><dt>Clinic</dt><dd>Sampurna Clinic</dd></div><div><dt>Location</dt><dd>Gyanpur, Bhadohi</dd></div></dl></section>
  <section className="doctor-v2-intro"><div><p className="eyebrow">How the doctor can help</p><h2>Care begins by listening to you.</h2><p>Every consultation starts with your concern and relevant history. Advice, examination, investigation, treatment or referral depends on your individual clinical assessment.</p><Link className="button" href="/services">Explore All Services →</Link></div><div className="doctor-v2-help-grid"><article><span>01</span><h3>Women’s Health</h3><p>Menstrual, hormonal and general gynecology concerns.</p></article><article><span>02</span><h3>Pregnancy Care</h3><p>Stage-appropriate antenatal guidance and follow-up.</p></article><article><span>03</span><h3>Fertility Concerns</h3><p>A respectful first discussion and evaluation planning.</p></article><article><span>04</span><h3>Preventive Care</h3><p>Check-up guidance based on age, history and clinical need.</p></article></div></section>
  <section className="doctor-v2-process"><header><p className="eyebrow">Our consultation process</p><h2>A simple journey from concern to care plan.</h2><p>Designed to help patients and families understand what happens during a clinic visit.</p></header><div className="doctor-v2-process-list">{processSteps.map((step,index)=><article key={step.number} className={index%2?"reverse":""}><div className="doctor-v2-process-image"><Image src={step.image} alt={step.alt} fill sizes="(max-width:760px) 100vw,46vw"/></div><div><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></section>
  <section className="doctor-v2-services"><header><p className="eyebrow">Consultation areas</p><h2>Women’s healthcare at Sampurna Clinic.</h2></header><div>{services.map((service,index)=><Link href={`/services/${service.slug}`} key={service.slug}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{service.title}</h3><p>{service.short}</p></div><i>→</i></Link>)}</div></section>
  <section className="doctor-v2-why"><div className="doctor-v2-why-copy"><p className="eyebrow">Why choose this care approach</p><h2>Professional care, explained without confusion.</h2><ul><li><b>Respectful conversations</b><span>Your concerns are heard without judgement.</span></li><li><b>Individual decisions</b><span>Recommendations depend on your clinical needs.</span></li><li><b>Simple explanations</b><span>Questions and next steps are discussed clearly.</span></li></ul></div><div className="doctor-v2-collage"><div><Image src="/clinic-consultation-v2.png" alt="Representative doctor consultation" fill sizes="30vw"/></div><div><Image src="/doctor-care-hero-v2.png" alt="Representative maternity care" fill sizes="25vw"/></div><div><Image src="/clinic-reception-v2.png" alt="Representative clinic reception" fill sizes="25vw"/></div></div></section>
  <section className="doctor-v2-reviews"><div><p className="eyebrow">Patient trust</p><h2>Real feedback only.</h2><p>We do not publish invented ratings, patient numbers or “best doctor” claims. Verified reviews can be added when the clinic provides the original review source and permission.</p></div><aside><span>Verified patient rating</span><strong>Awaiting verified source</strong><p>Doctor experience, registration number and consultation hours will also be published after verification.</p><Link href="/contact">Contact the clinic →</Link></aside></section>
  <CTA/>
 </main><Footer/></>;
}
