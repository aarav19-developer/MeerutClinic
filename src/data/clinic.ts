/**
 * clinic.ts — Single source of truth for all clinic content.
 *
 * HOW TO EDIT:
 * Replace every [PLACEHOLDER] with real info. Run `npm run build` after.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ClinicInfo {
  name:        string
  tagline:     string
  shortName:   string
  address:     string
  mapsLink:    string
  phone:       string
  whatsapp:    string   // digits only
  email:       string
  emergency:   string
  description: string
}

export interface Doctor {
  id:             string
  name:           string
  qualifications: string
  specialty:      string
  experience:     string
  focusAreas:     string[]
  /** Path to a real photo in public/images/doctors/ — or leave as placeholder SVG */
  avatarSrc:      string
  avatarAlt:      string
  /** Second image slot — e.g. doctor with patient, or clinic photo */
  secondImageSrc?: string
  secondImageAlt?: string
  accentColor:    "teal" | "peach"
}

export interface ServiceItem  { label: string; iconId: string }
export interface ServiceGroup {
  doctorId:   string
  heading:    string
  intro:      string
  accentColor:"teal" | "sky"
  iconId:     string
  items:      ServiceItem[]
}

export interface TimingSlot { label: string; open: string; close: string }
export interface DayTiming  { day: string; slots: TimingSlot[]; closed: boolean }
export interface FaqItem    { question: string; answer: string }

export interface Testimonial {
  id:               string
  reviewerName:     string
  rating:           number
  text:             string
  isPlaceholder:    true
  placeholderLabel: string
}

export interface WhyPoint  { iconId: string; heading: string; description: string }
export interface ClinicImage { src: string; alt: string; caption?: string }

// ─── Clinic Info ──────────────────────────────────────────────────────────────

export const clinic: ClinicInfo = {
  name:        "[CLINIC NAME]",
  shortName:   "[SHORT NAME]",
  tagline:     "[YOUR CLINIC TAGLINE — e.g. \"Caring for every generation\"]",
  address:     "[FULL ADDRESS — Street, Area, City, PIN Code]",
  mapsLink:    "https://www.google.com/maps?q=[YOUR+CLINIC+LOCATION]",
  phone:       "[PHONE NUMBER — e.g. +91 98765 43210]",
  whatsapp:    "919876543210",
  email:       "[EMAIL ADDRESS — e.g. info@yourclinic.com]",
  emergency:   "[EMERGENCY NUMBER]",
  description: "Dr. Pradeep Adhana Clinic — [TAGLINE]. General Physician and Child Specialist available Mon–Sat.",
}

// ─── Doctor — Dr. Pradeep Adhana ─────────────────────────────────────────────

export const doctors: Doctor[] = [
  {
    id:             "pradeep",
    name:           "Dr. Pradeep Adhana",
    qualifications: "[QUALIFICATIONS — e.g. MBBS, MD (General Medicine & Paediatrics)]",
    specialty:      "General Physician & Child Specialist (Pediatrician)",
    experience:     "[X]+ years",
    focusAreas: [
      "Fever & Infections",
      "Diabetes & Blood Pressure",
      "Thyroid Conditions",
      "Preventive Health Check-ups",
      "Newborn & Infant Care",
      "Childhood Vaccinations",
      "Growth & Development",
      "Chronic Disease Follow-up",
    ],
    // ── Replace these paths with real photos ──
    // Drop a square photo (400×400px recommended) into public/images/doctors/
    // and rename it doctor-pradeep.jpg — then update the line below.
    avatarSrc:      "/images/doctors/doctor-1.svg",        // → replace with /images/doctors/doctor-pradeep.jpg
    avatarAlt:      "Dr. Pradeep Adhana — General Physician & Child Specialist",
    secondImageSrc: "/images/doctors/doctor-consulting.svg", // → replace with a real consultation photo
    secondImageAlt: "Dr. Pradeep Adhana consulting a patient",
    accentColor:    "teal",
  },
]

// ─── Clinic Images ────────────────────────────────────────────────────────────
// Add real photos by dropping them into public/images/clinic/
// and updating the src paths below.

export const clinicImages: ClinicImage[] = [
  {
    src:     "/images/clinic/reception.svg",    // → replace with real photo
    alt:     "Clinic reception area",
    caption: "Our welcoming reception",
  },
  {
    src:     "/images/clinic/consultation.svg", // → replace with real photo
    alt:     "Consultation room",
    caption: "Clean, comfortable consultation rooms",
  },
  {
    src:     "/images/clinic/waiting.svg",      // → replace with real photo
    alt:     "Waiting area",
    caption: "Spacious waiting area",
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: ServiceGroup[] = [
  {
    doctorId:    "pradeep",
    heading:     "General Physician",
    intro:       "Comprehensive adult care — from routine check-ups to long-term condition management.",
    accentColor: "teal",
    iconId:      "stethoscope",
    items: [
      { label: "Fever & Infections",          iconId: "thermometer" },
      { label: "Diabetes & Blood Pressure",   iconId: "droplet"     },
      { label: "Thyroid Conditions",          iconId: "pill"        },
      { label: "Preventive Health Check-ups", iconId: "shield-check"},
      { label: "Seasonal Illness",            iconId: "lungs"       },
      { label: "Chronic Disease Follow-up",   iconId: "heart-pulse" },
    ],
  },
  {
    doctorId:    "pradeep",
    heading:     "Child Specialist (Pediatrician)",
    intro:       "Gentle, expert care for children from newborns through adolescence.",
    accentColor: "sky",
    iconId:      "baby",
    items: [
      { label: "Newborn & Infant Care",       iconId: "baby"        },
      { label: "Growth & Development",        iconId: "growth-chart"},
      { label: "Vaccinations",                iconId: "syringe"     },
      { label: "Nutrition Guidance",          iconId: "apple"       },
      { label: "Childhood Infections",        iconId: "thermometer" },
      { label: "Allergies & Asthma",          iconId: "lungs"       },
    ],
  },
]

// ─── Timings ──────────────────────────────────────────────────────────────────

export const timings: DayTiming[] = [
  { day: "Monday",    closed: false, slots: [{ label: "Morning", open: "10:00", close: "14:00" }, { label: "Evening", open: "17:00", close: "20:00" }] },
  { day: "Tuesday",   closed: false, slots: [{ label: "Morning", open: "10:00", close: "14:00" }, { label: "Evening", open: "17:00", close: "20:00" }] },
  { day: "Wednesday", closed: false, slots: [{ label: "Morning", open: "10:00", close: "14:00" }, { label: "Evening", open: "17:00", close: "20:00" }] },
  { day: "Thursday",  closed: false, slots: [{ label: "Morning", open: "10:00", close: "14:00" }, { label: "Evening", open: "17:00", close: "20:00" }] },
  { day: "Friday",    closed: false, slots: [{ label: "Morning", open: "10:00", close: "14:00" }, { label: "Evening", open: "17:00", close: "20:00" }] },
  { day: "Saturday",  closed: false, slots: [{ label: "Morning", open: "10:00", close: "14:00" }, { label: "Evening", open: "17:00", close: "20:00" }] },
  { day: "Sunday",    closed: true,  slots: [] },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:   "Use the booking form on this page or send a WhatsApp message to the clinic number. Walk-ins are welcome during clinic hours.",
  },
  {
    question: "What are the clinic timings?",
    answer:   "Monday to Saturday: 10:00 AM – 2:00 PM and 5:00 PM – 8:00 PM. Closed on Sundays.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:   "A valid photo ID, any previous medical records or prescriptions, and a list of current medications.",
  },
  {
    question: "Is Dr. Pradeep Adhana available for newborn check-ups?",
    answer:   "Yes. Dr. Pradeep Adhana specialises in newborn and infant care and is available during all regular hours.",
  },
  {
    question: "What vaccinations are available for children?",
    answer:   "Standard childhood vaccinations as per the national immunisation schedule. Contact us to confirm availability.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer:   "Call [EMERGENCY NUMBER] or go to the nearest hospital emergency department immediately.",
  },
  {
    question: "Are consultation fees listed here?",
    answer:   "Fees are not listed online. Please contact the clinic for the current schedule.",
  },
  {
    question: "Does the clinic manage chronic conditions like diabetes?",
    answer:   "Yes. Dr. Pradeep Adhana provides structured follow-up care for diabetes, hypertension, thyroid, and other long-term conditions.",
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id:               "t1",
    reviewerName:     "[Patient Name Placeholder]",
    rating:           5,
    text:             "[Sample review — replace with a real patient testimonial collected with consent. E.g. \"Dr. Adhana was thorough and took time to explain everything clearly.\"]",
    isPlaceholder:    true,
    placeholderLabel: "[SAMPLE — NOT A REAL REVIEW]",
  },
  {
    id:               "t2",
    reviewerName:     "[Patient Name Placeholder]",
    rating:           5,
    text:             "[Sample review — replace with real testimonial. E.g. \"My child was nervous but Dr. Adhana made the visit very comfortable.\"]",
    isPlaceholder:    true,
    placeholderLabel: "[SAMPLE — NOT A REAL REVIEW]",
  },
  {
    id:               "t3",
    reviewerName:     "[Patient Name Placeholder]",
    rating:           5,
    text:             "[Sample review — replace with real testimonial. E.g. \"Very clean clinic and minimal waiting time.\"]",
    isPlaceholder:    true,
    placeholderLabel: "[SAMPLE — NOT A REAL REVIEW]",
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUs: WhyPoint[] = [
  {
    iconId:      "shield-check",
    heading:     "GP & Paediatrician in One",
    description: "General Physician and Pediatrician expertise under one roof — care for every age.",
  },
  {
    iconId:      "calendar",
    heading:     "Flexible Timings",
    description: "Morning and evening slots six days a week — visit at a time that suits you.",
  },
  {
    iconId:      "heart-pulse",
    heading:     "Patient-Centred Care",
    description: "Every consultation focuses on your concerns with time and attention.",
  },
  {
    iconId:      "baby",
    heading:     "Child-Friendly Environment",
    description: "Welcoming for children of all ages, from newborns to teenagers.",
  },
  {
    iconId:      "syringe",
    heading:     "Vaccination Services",
    description: "Standard childhood vaccines following the national immunisation schedule.",
  },
  {
    iconId:      "doctor-bag",
    heading:     "Chronic Disease Management",
    description: "Structured follow-up for diabetes, hypertension, thyroid, and more.",
  },
]
