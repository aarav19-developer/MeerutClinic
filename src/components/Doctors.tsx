/**
 * Doctors.tsx — Doctor profile with photo slots, credentials,
 * specialty badges, experience, and gallery of clinic images.
 * Rich hover effects on every card.
 */

import Icon        from "@/components/ui/Icon"
import { doctors, clinicImages } from "@/data/clinic"

export default function Doctors() {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="bg-surface py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            id="doctors-heading"
            className="font-heading font-bold text-fluid-2xl text-text"
          >
            Meet Our Doctor
          </h2>
          <p className="mt-3 text-text-muted font-body text-fluid-base max-w-prose mx-auto">
            Experienced, attentive care from a qualified physician who treats patients of all ages.
          </p>
        </div>

        {doctors.map((doctor) => (
          <article
            key={doctor.id}
            className="bg-background rounded-card shadow-card overflow-hidden mb-14"
            aria-labelledby={`doctor-${doctor.id}-name`}
          >
            <div className="grid lg:grid-cols-2 gap-0">

              {/* ── Photo column ─────────────────────────────────────── */}
              <div className="relative group overflow-hidden min-h-[320px] lg:min-h-[480px] bg-primary-light flex items-center justify-center">
                <img
                  src={doctor.avatarSrc}
                  alt={doctor.avatarAlt}
                  width={480}
                  height={480}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "320px" }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-400 pointer-events-none" />

                {/* Photo replacement hint (shown only when still a placeholder SVG) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-2 px-4 text-xs font-body text-text-muted text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  📷 Replace with a real photo — see README for instructions
                </div>

                {/* Specialty badge */}
                <span className="absolute top-4 left-4 bg-primary text-white font-heading font-semibold text-xs px-3 py-1.5 rounded-pill shadow">
                  General Physician & Pediatrician
                </span>
              </div>

              {/* ── Info column ──────────────────────────────────────── */}
              <div className="p-8 lg:p-12 flex flex-col gap-6">

                <div>
                  <h3
                    id={`doctor-${doctor.id}-name`}
                    className="font-heading font-bold text-fluid-2xl text-text leading-tight"
                  >
                    {doctor.name}
                  </h3>
                  <p className="mt-1 font-body text-text-muted text-fluid-base">
                    {doctor.qualifications}
                  </p>
                </div>

                {/* Experience badge */}
                <div className="flex items-center gap-3 bg-primary-light rounded-card px-5 py-3 w-fit">
                  <Icon id="stethoscope" size={22} aria-hidden="true" className="text-primary flex-shrink-0" />
                  <span className="font-heading font-bold text-fluid-lg text-primary">
                    {doctor.experience} of experience
                  </span>
                </div>

                {/* Focus areas */}
                <div>
                  <p className="font-heading font-bold text-sm text-text mb-4">Specialises In</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {doctor.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="flex items-center gap-2.5 font-body text-fluid-sm text-text-muted group/item"
                      >
                        <span className="flex-shrink-0 p-1.5 bg-primary-light rounded-full group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-200">
                          <Icon id="check" size={13} aria-hidden="true" className="text-primary group-hover/item:text-white transition-colors duration-200" />
                        </span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Second image slot — consultation photo */}
                {doctor.secondImageSrc && (
                  <div className="rounded-card overflow-hidden shadow-card group/img mt-2">
                    <div className="relative">
                      <img
                        src={doctor.secondImageSrc}
                        alt={doctor.secondImageAlt ?? ""}
                        width={600}
                        height={220}
                        loading="lazy"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/8 transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1.5 px-4 text-xs font-body text-text-muted text-center translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                        📷 Replace with a real consultation photo
                      </div>
                    </div>
                  </div>
                )}

                {/* Placeholder notice */}
                <p className="text-xs font-body text-text-muted bg-border/30 rounded px-3 py-2 border border-border">
                  ℹ️ Replace name, qualifications, and photos in{" "}
                  <code className="text-primary font-mono">src/data/clinic.ts</code>
                </p>

                <a
                  href="#book"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-text-onPrimary font-heading font-bold text-fluid-base px-7 py-3.5 rounded-btn shadow-btn hover:shadow-btn-hover transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 self-start min-h-[44px]"
                >
                  <Icon id="calendar" size={18} aria-hidden="true" />
                  Book an Appointment
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* ── Clinic Image Gallery ───────────────────────────────────── */}
        <div className="mt-6">
          <h3 className="font-heading font-bold text-fluid-xl text-text text-center mb-8">
            Our Clinic
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {clinicImages.map((img) => (
              <div
                key={img.src}
                className="group rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={260}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-all duration-300 pointer-events-none" />
                  {/* Replace hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 text-xs font-body text-text-muted px-3 py-1.5 rounded-pill shadow">
                      📷 Replace with real photo
                    </span>
                  </div>
                </div>
                {img.caption && (
                  <div className="px-4 py-3 bg-surface">
                    <p className="font-body text-sm text-text-muted text-center">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
