import Image from "next/image";
import Link from "next/link";
import { CTA, Footer, Header } from "./components";
import { doctors, services } from "./data";

const serviceImages = [
  "/sampurna-womens-consultation-v2.png",
  "/sampurna-maternity-care-v2.png",
  "/female-reproductive-system.png",
  "/female-pelvic-floor.png",
];

export default function Home() {
  const doctor = doctors[0];
  return <><Header/><main className="v003-home">
    <section className="v003-hero">
      <div className="v003-hero-copy">
        <p className="v003-kicker">Sampurna Clinic · Gyanpur, Bhadohi</p>
        <h1>Care for women.<br/><em>Guidance for every stage.</em></h1>
        <p>Consult Dr. Kanchan for gynecology, pregnancy, maternity, menstrual health and fertility-related concerns in a respectful clinical setting.</p>
        <div className="v003-actions"><Link className="v003-button" href="/appointment">Book an Appointment</Link><Link className="v003-button secondary" href="/services">Explore Services</Link></div>
        <small>Appointments are confirmed by the clinic after availability review.</small>
      </div>
      <div className="v003-hero-image"><Image src="/sampurna-gynecologist-hero-v2.png" alt="Representative Indian gynecologist in a modern women health clinic" fill priority sizes="(max-width:900px) 100vw, 58vw"/></div>
    </section>

    <section className="v003-signature">
      <header><p className="v003-kicker">Focused women’s health services</p><h2>Clinical support built around your needs.</h2></header>
      <div>{services.slice(0,4).map((service,index)=><Link href={`/services/${service.slug}`} key={service.slug}><span>{service.icon}</span><h3>{service.title}</h3><p>{service.short}</p><b>Learn more →</b></Link>)}</div>
    </section>

    <section className="v003-story">
      <article><p className="v003-kicker">About Sampurna Clinic</p><h2>A calm place to discuss personal health concerns.</h2><p>Every consultation starts with careful listening, relevant history and an individual clinical assessment. Recommendations may include advice, examination, investigations or referral depending on your needs.</p><Link className="v003-button secondary" href="/about">Discover Our Approach</Link></article>
      <div className="v003-story-grid"><div className="wide"><Image src="/sampurna-womens-consultation-v2.png" alt="Gynecologist explaining women health concerns during a consultation" fill sizes="(max-width:800px) 100vw, 55vw"/></div><div><Image src="/womens-clinic-reception.png" alt="Welcoming women health clinic reception" fill sizes="30vw"/></div><div><Image src="/sampurna-maternity-care-v2.png" alt="Maternity consultation with an Indian couple" fill sizes="30vw"/></div></div>
    </section>

    <section className="v003-quality">
      <div><p className="v003-kicker">Care with integrity</p><h2>Clarity. Privacy.<br/>Respect.</h2><p>We publish only confirmed clinic details and verified patient feedback. Treatment decisions remain based on a personal medical assessment.</p></div>
      <dl><div><dt>Doctor</dt><dd>Dr. Kanchan</dd></div><div><dt>Qualification</dt><dd>{doctor.qualification}</dd></div><div><dt>Location</dt><dd>Gyanpur</dd></div><div><dt>Approach</dt><dd>Individual</dd></div></dl>
    </section>

    <section className="v003-specialities">
      <header><p className="v003-kicker">Gynecology and maternity care</p><h2>Explore concerns we can assess.</h2><p>Choose a topic to understand the consultation scope. Final advice depends on your symptoms, history and examination.</p></header>
      <div>{services.slice(0,4).map((service,index)=><Link href={`/services/${service.slug}`} key={service.slug}><div><Image src={serviceImages[index]} alt={`${service.title} at Sampurna Clinic`} fill sizes="(max-width:700px) 100vw, 25vw"/></div><span>0{index+1}</span><h3>{service.title}</h3><p>{service.short}</p></Link>)}</div>
    </section>

    <section className="v003-doctor">
      <div className="v003-doctor-image"><Image src="/sampurna-clinic-logo.png" alt="Sampurna Clinic logo" fill sizes="380px"/></div>
      <article><p className="v003-kicker">Meet the consulting doctor</p><h2>Dr. Kanchan</h2><h3>{doctor.role}</h3><p>{doctor.qualification}</p><p>Clinic-provided details identify Dr. Kanchan for women’s health, maternity and infertility-related consultation. The approved doctor portrait, registration number and exact timings will be published after verification.</p><div className="v003-actions"><Link className="v003-button" href={`/doctors/${doctor.slug}`}>View Doctor Profile</Link><Link className="v003-button secondary" href="/appointment">Request Appointment</Link></div></article>
    </section>

    <section className="v003-journey">
      <header><p className="v003-kicker">Your visit</p><h2>A simple, clearly explained process.</h2></header>
      <ol><li><span>01</span><h3>Choose</h3><p>Select your concern, preferred date and time.</p></li><li><span>02</span><h3>Confirm</h3><p>The clinic team reviews and confirms availability.</p></li><li><span>03</span><h3>Consult</h3><p>Discuss your symptoms and health history privately.</p></li><li><span>04</span><h3>Next step</h3><p>Receive guidance based on the doctor’s assessment.</p></li></ol>
    </section>

    <section className="v003-feedback">
      <article><span>★★★★★</span><h3>Verified feedback policy</h3><p>Patient reviews will appear only when a genuine source and permission are available.</p></article><div><p className="v003-kicker">Patient-first communication</p><blockquote>“Your questions deserve time, privacy and an explanation you can understand.”</blockquote><small>— Sampurna Clinic care principle</small></div><article><span>✓</span><h3>No unsupported claims</h3><p>Doctor credentials, experience and results are published only after clinic verification.</p></article>
    </section>

    <section className="v003-education">
      <div className="v003-education-image"><Image src="/female-reproductive-system.png" alt="Educational female reproductive system illustration" fill sizes="(max-width:800px) 100vw, 50vw"/></div><article><p className="v003-kicker">Women’s health education</p><h2>Know when to seek professional advice.</h2><p>Persistent pelvic pain, unusual bleeding, cycle changes, pregnancy concerns or fertility questions should be discussed with a qualified clinician.</p><ul><li>Menstrual and PCOS-related concerns</li><li>Pregnancy and maternity guidance</li><li>Pelvic symptoms and preventive care</li><li>Fertility-related consultation</li></ul><Link className="v003-button secondary" href="/blog">Read Health Guidance</Link></article>
    </section>

    <CTA/>
  </main><Footer/></>;
}