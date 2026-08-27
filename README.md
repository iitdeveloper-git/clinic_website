# Aarogya Family Clinic website

A production-oriented premium clinic website built with Next.js-compatible Vinext, TypeScript and Tailwind CSS.

## Before launch

All clinic-specific facts are intentionally marked as placeholders because no verified client data was supplied. Replace these values in `app/data.ts`: clinic name, phone, email, full address and opening hours. Replace `https://your-clinic.example` in `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` with the final HTTPS domain. Add only verified doctor profiles, services, clinic photographs, Google Maps coordinates/embed, social profiles and consented testimonials. Have the privacy policy and terms reviewed for the clinic’s jurisdiction.

The appointment form demonstrates validation, loading, consent, honeypot spam protection and feedback. Connect it to a secure server-side mail/CRM endpoint with rate limiting and CSRF protection before accepting real enquiries. Do not expose API keys in browser code.

## Local development

Use Node.js 22.13 or newer. Run `npm install`, then `npm run dev`. Create a production build with `npm run build`; run code checks with `npm run lint`.

## Content and safety

The current copy makes no claims about qualifications, outcomes, experience, ratings or patient counts. The site states clearly that web content is not medical advice and that appointment requests are not for emergencies.
