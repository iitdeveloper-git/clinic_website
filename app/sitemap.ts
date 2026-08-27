import type { MetadataRoute } from "next";import {doctors,services} from "./data";
export default function sitemap():MetadataRoute.Sitemap{const base="https://your-clinic.example";const paths=["","/about","/doctors","/services","/appointment","/contact","/gallery","/testimonials","/faq","/blog","/privacy-policy","/terms",...services.map(s=>`/services/${s.slug}`),...doctors.map(d=>`/doctors/${d.slug}`)];return paths.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.7}))}

