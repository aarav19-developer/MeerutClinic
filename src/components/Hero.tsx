/**
 * Hero.tsx — Premium hero with gradient headline, staggered entrance,
 * animated trust pills, and floating illustration.
 */
import HeroScene from "@/assets/svg/illustrations/hero-scene.svg?react"
import Blob1     from "@/assets/svg/illustrations/blob-1.svg?react"
import Blob2     from "@/assets/svg/illustrations/blob-2.svg?react"
import Icon      from "@/components/ui/Icon"
import { clinic } from "@/data/clinic"

const trustPoints = [
  { iconId: "stethoscope",  label: "General Physician",  color: "bg-primary-light text-primary"    },
  { iconId: "baby",         label: "Child Specialist",   color: "bg-secondary-light text-secondary" },
  { iconId: "clock",        label: "Mon – Sat",          color: "bg-accent-light text-accent"       },
  { iconId: "shield-check", label: "WCAG AA Safe",       color: "bg-primary-light text-primary"    },
]

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Welcome"
      className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16"
    >
      {/* ── Gradient mesh background ─────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Top-left teal blob */}
        <div className="animate-float absolute -top-20 -left-20 w-80 sm:w-[28rem] opacity-50">
          <Blob1 />
        </div>
        {/* Bottom-right peach blob */}
        <div className="animate-float-slow absolute -bottom-10 -right-10 w-72 sm:w-[24rem] opacity-40" style={{ animationDelay:"1.8s" }}>
          <Blob2 />
        </div>
        {/* Radial glow centre */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(45,140,140,0.07),transparent)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:"linear-gradient(#2d8c8c 1px,transparent 1px),linear-gradient(90deg,#2d8c8c 1px,transparent 1px)", backgroundSize:"48px 48px" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text column ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-7">

            {/* Emergency pill — animated badge */}
            <div className="hero-animate hero-animate-1 badge-pop inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-accent/60 text-text rounded-pill px-4 py-2.5 text-sm font-body shadow-sm w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Emergency:{" "}
              <a href={`tel:${clinic.emergency}`} className="font-semibold text-danger hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                {clinic.emergency}
              </a>
            </div>

            {/* Headline — gradient on key word */}
            <div className="hero-animate hero-animate-2">
              <h1 className="font-heading font-bold leading-[1.08] tracking-tight" style={{ fontSize:"clamp(2.4rem,5.5vw,4rem)" }}>
                <span className="text-text">{clinic.name}</span>
              </h1>
              <p className="mt-3 font-heading font-semibold gradient-text" style={{ fontSize:"clamp(1.3rem,2.8vw,1.75rem)", lineHeight:1.3 }}>
                {clinic.tagline}
              </p>
            </div>

            {/* Body */}
            <p className="hero-animate hero-animate-3 font-body text-text-muted leading-relaxed max-w-[54ch]" style={{ fontSize:"clamp(1rem,1.6vw,1.125rem)" }}>
              Dr. Pradeep Adhana brings together General Physician and Child Specialist expertise under one roof — attentive, expert care for your whole family in a calm, welcoming environment.
            </p>

            {/* CTA row */}
            <div className="hero-animate hero-animate-4 flex flex-wrap gap-4">
              <a
                href="#book"
                className="btn-glow inline-flex items-center gap-2.5 bg-primary text-white font-heading font-semibold px-7 py-3.5 rounded-btn shadow-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[48px] text-base"
                style={{ letterSpacing:"0.01em" }}
              >
                <Icon id="calendar" size={18} aria-hidden="true" />
                Book Appointment
              </a>
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border-2 border-primary/60 text-primary font-heading font-semibold px-7 py-3.5 rounded-btn hover:bg-primary-light hover:border-primary transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[48px] text-base"
              >
                <Icon id="phone" size={18} aria-hidden="true" />
                Call Now
              </a>
            </div>

            {/* Trust pills */}
            <div className="hero-animate hero-animate-5 flex flex-wrap gap-2.5 mt-1">
              {trustPoints.map((p, i) => (
                <span
                  key={p.label}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-sm font-body font-medium ${p.color} hover:scale-105 transition-transform duration-200`}
                  style={{ animationDelay:`${0.7 + i * 0.08}s` }}
                >
                  <Icon id={p.iconId} size={13} aria-hidden="true" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Illustration column ───────────────────────────────────── */}
          <div className="hero-animate hero-animate-3 relative flex justify-center items-center order-first lg:order-last" aria-hidden="true">
            {/* Glow halo behind illustration */}
            <div className="absolute w-[90%] h-[90%] rounded-full bg-primary-light/60 blur-3xl" />
            {/* Rotating ring */}
            <div
              className="absolute w-[105%] h-[105%] rounded-full border border-primary/10"
              style={{ animation:"float 12s linear infinite" }}
            />
            <div className="relative w-full max-w-[360px] lg:max-w-[440px] animate-float-slow drop-shadow-lg">
              <HeroScene />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
