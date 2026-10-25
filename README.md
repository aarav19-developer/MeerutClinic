# Dr. Pradeep Adhana - Clinic Website

A single-page website for Dr. Pradeep Adhana’s medical clinic. The doctor handles both General Physician and Child Specialist (Pediatrician) consultations. Patients can learn about services, check clinic timings, and book appointments directly via WhatsApp.

Live URL: [meerutclinic.vercel.app]

---

## What this project is

Fully static front-end. No backend, no database. Everything runs in the browser. Appointment booking works by pre-filling a WhatsApp message and opening it in the app — no server needed.

---

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS v3 with custom design tokens
- Playfair Display (headings) and Inter (body) — Google Fonts
- vite-plugin-svgr for SVG illustrations as React components
- SVGO for SVG optimisation

---

## Page Sections

All content is on one scrollable page:

- Animated intro screen (doctor cartoon + Welcome animation)
- Hero with two CTAs and trust badges
- Services — General Physician and Pediatrician
- Doctor profile with photo slots and clinic gallery
- Child Care highlight (vaccines, growth, nutrition)
- Why Choose Us
- Clinic Timings with live Open / Closed badge
- Patient Testimonials
- Book Appointment + FAQ accordion (side by side)
- Contact and Google Map
- Footer with medical disclaimer

---

## Getting Started

Install dependencies:

    npm install

Start the local server:

    npm run dev

Build for production:

    npm run build

Preview the build before deploying:

    npm run preview

---

## Deployment

Vercel is the easiest — connect the repo, it auto-detects Vite and handles everything.

---

## Challenges

**Single doctor, two specialties**
The original data model assumed two doctors. Restructured clinic.ts so one doctor entry carries both GP and Pediatrician focus areas without duplicating the services section.

**WhatsApp booking without a backend**
The form needed to feel like a real booking flow even though it just opens a wa.me link. Client-side validation, clean message formatting, and a proper success state made it feel complete.

**Custom cursor on touch devices**
The cursor uses a requestAnimationFrame lerp loop. Had to detect pointer:coarse (phones and tablets) and exit early — otherwise touch devices got a broken invisible element stuck on screen.

**Intro animation timing**
Getting the cartoon drop, letter animation, and dissolve to feel snappy without cutting things short. Too fast reads as a glitch. Too slow and users scroll past before it finishes.

**Live Open / Closed logic**
Converting HH:MM strings to minutes, comparing against current time, and mapping getDay() (Sunday = 0) correctly to the timings array index took a few passes to get right.

---