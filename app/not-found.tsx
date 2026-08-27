import Link from "next/link";import {Footer,Header} from "./components";
export default function NotFound(){return <><Header/><main className="not-found"><p className="eyebrow">404 — Page not found</p><h1>This page seems to have stepped out.</h1><p>The link may be outdated, but the next step is simple.</p><Link className="button" href="/">Return home →</Link></main><Footer/></>}
