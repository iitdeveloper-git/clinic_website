import Image from "next/image";
import Link from "next/link";
import { CTA, Footer, Header } from "./components";
import { doctors, services } from "./data";

const careImages = ["/female-reproductive-system.png", "/sampurna-maternity-care-v2.png", "/sampurna-womens-consultation-v2.png"];

export default function Home() {
  const doctor = doctors[0];
  return <><Header/><main className="clinic-v001">
    <section className="v001-hero">
      <div className="v001-hero-copy">
        <p className="v001-kicker">Women’s health • Gyanpur, Bhadohi</p>
        <h1>Advanced care for women. <em>Personalized for you.</em></h1>
        <p className="v001-lead">Respectful, private consultations for gynecology, maternity and fertility concerns at Sampurna Clinic.</p>
        <div className="v001-actions"><Link className="button" href="/appointment">Book an Appointment</Link><Link className="v001-link" href="/about">About the Clinic →</Link></div>
        <div className="v001-trust"><span>✓ Private consultation</span><span>✓ Clearly explained care</span></div>
      </div>
      <div className="v001-hero-art">
        <Image src="/sampurna-gynecologist-hero-v2.png" alt="Gynecology consultation in a modern women’s health clinic" fill priority sizes="(max-width: 900px) 100vw, 50vw"/>
        <div className="v001-badge v001-badge-doctor"><b>Dr. Kanchan</b><small>Women’s Health Care</small></div>
        <div className="v001-badge v001-badge-clinic"><span>✦</span><b>Sampurna Clinic</b><small>Gyanpur, Bhadohi</small></div>
      </div>
    </section>

    <section className="v001-about">
      <div>
        <p className="v001-kicker">About us</p><h2>Professional care dedicated to women’s health.</h2>
        <p>From routine concerns to maternity and fertility discussions, each visit begins by listening carefully and understanding your individual needs.</p>
        <ul><li><b>Patient-centred care</b><span>Your concerns guide the consultation.</span></li><li><b>Respectful and private</b><span>A comfortable setting for personal conversations.</span></li><li><b>Clear next steps</b><span>Assessment and options explained in simple language.</span></li></ul>
        <Link className="button" href="/about">More About Sampurna Clinic</Link>
      </div>
      <div className="v001-collage"><div className="v001-collage-main"><Image src="/sampurna-maternity-care-v2.png" alt="Maternity consultation with a gynecologist" fill sizes="(max-width: 900px) 100vw, 45vw"/></div><div className="v001-collage-small"><Image src="/womens-clinic-reception.png" alt="Welcoming women’s clinic reception" fill sizes="220px"/></div><div className="v001-hours"><b>Clinic location</b><span>Gyanpur, Bhadohi</span><Link href="/contact">Get directions →</Link></div></div>
    </section>

    <section className="v001-services">
      <header><p className="v001-kicker">Our services</p><h2>Comprehensive care for every stage.</h2><p>Consultation plans are based on individual assessment, relevant history and clinical needs.</p></header>
      <div className="v001-service-grid">{services.slice(0,3).map((service,index)=><Link href={`/services/${service.slug}`} key={service.slug}><div className="v001-service-title"><span>{service.icon}</span><b>{service.title}</b><i>→</i></div><p>{service.short}</p><div className="v001-service-image"><Image src={careImages[index]} alt={`${service.title} consultation at Sampurna Clinic`} fill sizes="(max-width: 700px) 100vw, 30vw"/></div></Link>)}</div>
      <Link className="button" href="/services">View All Services</Link>
    </section>

    <section className="v001-why">
      <div className="v001-why-copy"><div><p className="v001-kicker">Why choose us</p><h2>Thoughtful care built around your comfort.</h2></div><ul><li>Appointments designed to reduce unnecessary waiting.</li><li>Private discussion of personal health concerns.</li><li>Individual assessment before recommendations.</li><li>Clear guidance for the next step in care.</li></ul></div>
      <div className="v001-trust-image"><Image src="/womens-clinic-reception.png" alt="Sampurna Clinic care team supporting patients" fill sizes="(max-width: 900px) 100vw, 1120px"/><div className="v001-trust-shade"/><div className="v001-proof"><span><b>Private</b><small>Consultations</small></span><span><b>Personal</b><small>Assessment</small></span><span><b>Clear</b><small>Next steps</small></span></div></div>
    </section>

    <section className="v001-doctor">
      <header><p className="v001-kicker">Meet the doctor</p><h2>Experienced care you can trust.</h2><p>Clinic details identify Dr. Kanchan as the consulting doctor for women’s health, maternity and infertility care.</p></header>
      <div className="v001-doctor-card"><div className="v001-doctor-photo"><Image src="/sampurna-clinic-logo.png" alt="Sampurna Clinic logo" fill sizes="300px"/></div><div><span>Consulting Gynecologist</span><h3>Dr. Kanchan</h3><p>{doctor.qualification}</p><p>{doctor.role}</p><small>The doctor’s approved portrait, registration number and final consultation timings will be added after clinic verification.</small><div className="v001-actions"><Link className="button" href={`/doctors/${doctor.slug}`}>View Doctor Profile</Link><Link className="v001-link" href="/appointment">Book Appointment →</Link></div></div></div>
    </section>

    <section className="v001-numbers">
      <header><p className="v001-kicker">Care, explained</p><h2>Women’s health support in one welcoming place.</h2></header>
      <div className="v001-mosaic"><article className="v001-mosaic-text"><span>01</span><h3>Understand your concern</h3><p>A consultation starts with your symptoms, history and questions.</p><Link href="/services">Explore care →</Link></article><div className="v001-mosaic-wide"><Image src="/sampurna-maternity-care-v2.png" alt="Doctor explaining maternity care" fill sizes="(max-width: 700px) 100vw, 50vw"/></div><div className="v001-mosaic-image"><Image src="/female-pelvic-floor.png" alt="Educational illustration of the female pelvic floor" fill sizes="(max-width: 700px) 100vw, 35vw"/></div><article className="v001-mosaic-note"><span>02</span><h3>Know when to seek help</h3><p>Persistent pain, unusual bleeding, cycle changes or pregnancy concerns deserve professional assessment.</p><Link href="/blog">Read health guidance →</Link></article></div>
    </section>

    <section className="v001-assurance"><header><p className="v001-kicker">Our patient promise</p><h2>Trust is earned with honest, respectful care.</h2></header><div><article><span>★★★★★</span><h3>Verified feedback only</h3><p>Patient reviews will be published only after the clinic provides a verified source and consent.</p></article><article><span>●</span><h3>Privacy matters</h3><p>Personal health information is handled carefully throughout the appointment journey.</p></article><article><span>✓</span><h3>No false claims</h3><p>Doctor credentials and clinic facts are displayed only after they are confirmed.</p></article></div></section>

    <section className="v001-updates"><header><p className="v001-kicker">Health updates</p><h2>Helpful women’s health information.</h2></header><div><Link href="/blog"><div><Image src="/female-pelvic-floor.png" alt="Pelvic health educational illustration" fill sizes="33vw"/></div><small>Pelvic health</small><h3>When should you speak with a gynecologist?</h3><span>Read more →</span></Link><Link href="/services/pregnancy-maternity-care"><div><Image src="/sampurna-maternity-care-v2.png" alt="Pregnancy consultation" fill sizes="33vw"/></div><small>Pregnancy care</small><h3>Preparing for a comfortable maternity consultation</h3><span>Read more →</span></Link><Link href="/services/menstrual-pcos-care"><div><Image src="/female-reproductive-system.png" alt="Female reproductive system educational illustration" fill sizes="33vw"/></div><small>Menstrual health</small><h3>Understanding cycle changes and PCOS concerns</h3><span>Read more →</span></Link></div></section>
    <CTA/>
  </main><Footer/></>;
}