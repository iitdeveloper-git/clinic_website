import {Footer,Header} from "../../components";import SuccessDetails from "./SuccessDetails";
export const metadata={title:"Appointment Request Submitted | Nanhe Kadam Child Clinic",description:"Your clinic appointment request has been submitted.",robots:{index:false,follow:false}};
export default function AppointmentSuccess(){return <><Header/><main className="success-page"><SuccessDetails/></main><Footer/></>}
