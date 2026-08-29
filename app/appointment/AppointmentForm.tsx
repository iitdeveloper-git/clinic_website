"use client";
import Link from "next/link";
import {FormEvent,useMemo,useState} from "react";
import {useRouter} from "next/navigation";

const morning=["09:00 AM","09:20 AM","09:40 AM","10:00 AM","10:20 AM","10:40 AM","11:00 AM"];
const evening=["05:00 PM","05:20 PM","05:40 PM","06:00 PM","06:20 PM","06:40 PM","07:00 PM"];

export default function AppointmentForm(){
 const router=useRouter();
 const today=useMemo(()=>new Date().toISOString().split("T")[0],[]);
 const [date,setDate]=useState(today);
 const [time,setTime]=useState("");
 const [sending,setSending]=useState(false);
 const [error,setError]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();setError("");
  if(!date||!time){setError("Appointment ke liye din aur samay chuniye.");return}
  const data=new FormData(e.currentTarget);
  if(data.get("website"))return;
  const ref=`NK-${Date.now().toString().slice(-6)}`;
  const booking={ref,name:String(data.get("name")||""),phone:String(data.get("phone")||""),doctor:String(data.get("doctor")||""),service:String(data.get("service")||""),date,time};
  setSending(true);
  sessionStorage.setItem("nanhe-kadam-booking",JSON.stringify(booking));
  setTimeout(()=>router.push(`/appointment/success?ref=${encodeURIComponent(ref)}`),650);
 }
 const slots=(items:string[])=>items.map(slot=><button type="button" key={slot} className={time===slot?"slot active":"slot"} onClick={()=>setTime(slot)} aria-pressed={time===slot}><span>○</span>{slot}</button>);
 return <form className="booking-form" onSubmit={submit}>
  <div className="booking-section"><div className="booking-heading"><span>1</span><div><h2>Choose doctor and service</h2><p>Select the listed doctor or any available gynecologist.</p></div></div><div className="field-grid"><label>Doctor<select name="doctor" required defaultValue=""><option value="" disabled>Doctor chuniye</option><option>Doctor Name — details pending</option><option>Any available gynecologist</option></select></label><label>Women’s Health Service<select name="service" required defaultValue=""><option value="" disabled>Service chuniye</option><option>Women’s Wellness Consultation</option><option>Pregnancy Consultation</option><option>Menstrual & PCOS Care</option><option>Menopause Care</option><option>Not sure yet</option></select></label></div></div>
  <div className="booking-section"><div className="booking-heading"><span>2</span><div><h2>Choose a preferred date</h2><p>Your appointment is final after clinic confirmation.</p></div></div><label className="date-field">Preferred Date<input name="date" type="date" min={today} value={date} onChange={e=>setDate(e.target.value)} required/></label></div>
  <div className="booking-section"><div className="booking-heading"><span>3</span><div><h2>Choose a preferred time</h2><p>The selected time appears in blue.</p></div></div><div className="slot-group"><h3>☀️ Subah</h3><div className="slot-grid">{slots(morning)}</div></div><div className="slot-group"><h3>🌇 Shaam</h3><div className="slot-grid">{slots(evening)}</div></div><input type="hidden" name="time" value={time}/></div>
  <div className="booking-section"><div className="booking-heading"><span>4</span><div><h2>Enter contact details</h2><p>The clinic team will use this number for confirmation.</p></div></div><div className="field-grid"><label>Patient Name<input name="name" autoComplete="name" required minLength={2} placeholder="Your full name"/></label><label>Mobile Number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9 +()-]{8,18}" placeholder="+91 00000 00000"/></label><label>Email <small>(optional)</small><input name="email" type="email" autoComplete="email" placeholder="name@example.com"/></label><label>Age <small>(optional)</small><input name="age" placeholder="Jaise: 8 months"/></label></div><label>Reason for visit <small>(do not include sensitive medical details)</small><textarea name="message" rows={3} placeholder="Example: general consultation"/></label></div>
  <label className="check booking-consent"><input type="checkbox" required/> I consent to being contacted about this appointment and have read the <Link href="/privacy-policy">privacy notice</Link> padha hai.</label><input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
  {error&&<p className="booking-error" role="alert">{error}</p>}
  <div className="booking-submit"><div><b>Selected:</b><span>{date||"Choose a preferred date"} • {time||"Choose a preferred time"}</span></div><button className="button big-button" type="submit" disabled={sending}>{sending?"Submit ho raha hai…":"Submit Appointment Request →"}</button></div>
  <p className="form-note">This is a request. The clinic will call to confirm availability.</p>
 </form>
}



