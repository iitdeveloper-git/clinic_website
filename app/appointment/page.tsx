import Link from "next/link";
import {Footer,Header} from "../components";import AppointmentForm from "./AppointmentForm";
export const metadata={title:"Book an Appointment | Sampurna Clinic",description:"Choose a doctor, date and time to submit a consultation request."};
export default function Appointment(){return <><Header/><main className="booking-page"><section className="booking-top"><p className="section-label">Online Appointment</p><h1>Request a private consultation</h1><p>Choose the doctor, service, preferred date and time.</p></section><section className="booking-shell"><aside className="booking-help"><div className="help-icon">📅</div><h2>Your appointment request</h2><ol><li><b>1</b> Choose doctor</li><li><b>2</b> Choose date</li><li><b>3</b> Choose time</li><li><b>4</b> Enter contact details</li></ol><div className="emergency-note"><b>Need urgent help?</b><p>Do not use this form for emergencies. Contact the nearest hospital or emergency service immediately.</p></div><Link className="call-booking" href="/contact">☎ View call details</Link></aside><AppointmentForm/></section></main><Footer/></>}






