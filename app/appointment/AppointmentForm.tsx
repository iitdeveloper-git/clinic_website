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
  <div className="booking-section"><div className="booking-heading"><span>1</span><div><h2>Doctor aur service chuniye</h2><p>Aap kisi bhi available doctor ko bhi chun sakte hain.</p></div></div><div className="field-grid"><label>Doctor<select name="doctor" required defaultValue=""><option value="" disabled>Doctor chuniye</option><option>Doctor 1 — details pending</option><option>Doctor 2 — details pending</option><option>Doctor 3 — details pending</option><option>Koi bhi available doctor</option></select></label><label>Baby Care Service<select name="service" required defaultValue=""><option value="" disabled>Service chuniye</option><option>Baby Health Check</option><option>Vaccination Guidance</option><option>Common Illness Care</option><option>Growth & Nutrition</option><option>Samajh nahi aa raha</option></select></label></div></div>
  <div className="booking-section"><div className="booking-heading"><span>2</span><div><h2>Din chuniye</h2><p>Appointment clinic confirmation ke baad pakka hoga.</p></div></div><label className="date-field">Preferred Date<input name="date" type="date" min={today} value={date} onChange={e=>setDate(e.target.value)} required/></label></div>
  <div className="booking-section"><div className="booking-heading"><span>3</span><div><h2>Samay chuniye</h2><p>Blue slot aapka selected time hai.</p></div></div><div className="slot-group"><h3>☀️ Subah</h3><div className="slot-grid">{slots(morning)}</div></div><div className="slot-group"><h3>🌇 Shaam</h3><div className="slot-grid">{slots(evening)}</div></div><input type="hidden" name="time" value={time}/></div>
  <div className="booking-section"><div className="booking-heading"><span>4</span><div><h2>Contact details bhariye</h2><p>Clinic team isi number par confirmation degi.</p></div></div><div className="field-grid"><label>Parent / Guardian Name<input name="name" autoComplete="name" required minLength={2} placeholder="Apna poora naam"/></label><label>Mobile Number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9 +()-]{8,18}" placeholder="+91 00000 00000"/></label><label>Email <small>(optional)</small><input name="email" type="email" autoComplete="email" placeholder="name@example.com"/></label><label>Baby ki age <small>(optional)</small><input name="age" placeholder="Jaise: 8 months"/></label></div><label>Bachche ke baare mein chhoti baat <small>(private medical details na likhein)</small><textarea name="message" rows={3} placeholder="Jaise: general check-up"/></label></div>
  <label className="check booking-consent"><input type="checkbox" required/> Main appointment ke baare mein phone ki permission deta/deti hoon aur <Link href="/privacy-policy">privacy notice</Link> padha hai.</label><input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
  {error&&<p className="booking-error" role="alert">{error}</p>}
  <div className="booking-submit"><div><b>Selected:</b><span>{date||"Din chuniye"} • {time||"Samay chuniye"}</span></div><button className="button big-button" type="submit" disabled={sending}>{sending?"Submit ho raha hai…":"Appointment Request Submit Karein →"}</button></div>
  <p className="form-note">Yeh appointment request hai. Clinic team phone karke final confirmation degi.</p>
 </form>
}
