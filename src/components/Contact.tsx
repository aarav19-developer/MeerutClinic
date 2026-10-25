import Icon         from "@/components/ui/Icon"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { clinic }   from "@/data/clinic"

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium text-primary bg-primary-light px-4 py-1.5 rounded-pill mb-4 tracking-widest uppercase">Location</span>
          <h2 id="contact-heading" className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>Find Us</h2>
          <p className="mt-3 font-body text-text-muted max-w-xl mx-auto">Conveniently located and easy to reach.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={1}>
            <div className="flex flex-col gap-6">
              {[
                { iconId:"map-pin",  label:"Address",  content:<><p className="font-body text-sm text-text-muted leading-relaxed">{clinic.address}</p><a href={clinic.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 font-body font-semibold text-sm text-primary hover:text-primary-dark hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"><Icon id="map-pin" size={13} aria-hidden="true"/>Get Directions →</a></> },
                { iconId:"phone",    label:"Phone",    content:<a href={`tel:${clinic.phone}`} className="font-body text-sm text-primary font-medium hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{clinic.phone}</a> },
                { iconId:"whatsapp", label:"WhatsApp", content:<a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary font-medium hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Message us on WhatsApp</a> },
                { iconId:"mail",     label:"Email",    content:<a href={`mailto:${clinic.email}`} className="font-body text-sm text-primary font-medium hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{clinic.email}</a> },
              ].map(item=>(
                <div key={item.iconId} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 p-3 bg-primary-light rounded-2xl group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                    <Icon id={item.iconId} size={20} aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-200"/>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-text mb-1">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}

              <div className="bg-danger/8 border border-danger/20 rounded-2xl px-5 py-4 flex items-start gap-3">
                <Icon id="phone" size={18} aria-hidden="true" className="text-danger flex-shrink-0 mt-0.5"/>
                <div>
                  <p className="font-heading font-semibold text-sm text-text">Medical Emergency?</p>
                  <p className="font-body text-sm text-text-muted mt-0.5">
                    Call{" "}
                    <a href={`tel:${clinic.emergency}`} className="font-semibold text-danger hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger rounded">{clinic.emergency}</a>
                    {" "}or go to the nearest hospital.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 aspect-video md:aspect-auto md:h-[420px]">
              <iframe
                title="Clinic location on Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`}
                width="100%" height="100%"
                style={{ border:0, minHeight:"320px" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing the clinic location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
