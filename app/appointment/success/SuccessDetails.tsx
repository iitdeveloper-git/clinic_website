"use client";
import Link from "next/link";
import {useMemo,useSyncExternalStore} from "react";
type Booking={ref:string;name:string;phone:string;doctor:string;service:string;date:string;time:string};
const subscribe=()=>()=>{};
export default function SuccessDetails(){const raw=useSyncExternalStore(subscribe,()=>sessionStorage.getItem("nanhe-kadam-booking"),()=>null);const data=useMemo<Booking|null>(()=>{if(!raw)return null;try{return JSON.parse(raw)}catch{return null}},[raw]);return <section className="success-card" aria-live="polite"><div className="success-check">✓</div><p className="section-label">Request Submitted / Request submitted</p><h1>Appointment request received! / Request mil gayi!</h1><p className="success-lede">Thank you{data?.name?`, ${data.name}`:""}. The clinic team will call your mobile number to confirm availability.</p>{data&&<div className="booking-ticket"><div><span>Booking Reference</span><b>{data.ref}</b></div><div><span>Doctor</span><b>{data.doctor}</b></div><div><span>Service</span><b>{data.service}</b></div><div><span>Date</span><b>{data.date}</b></div><div><span>Time</span><b>{data.time}</b></div><div><span>Mobile</span><b>{data.phone}</b></div></div>}<div className="success-note"><b>Please note</b><p>This is an appointment request. Your visit is confirmed only after the clinic calls you.</p></div><div className="success-actions"><Link className="button" href="/">Home Page</Link><Link className="call-button" href="/appointment">New Booking</Link></div></section>}


