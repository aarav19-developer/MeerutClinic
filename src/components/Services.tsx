import Icon         from "@/components/ui/Icon"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { services } from "@/data/clinic"

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium text-primary bg-primary-light px-4 py-1.5 rounded-pill mb-4 tracking-widest uppercase">What We Treat</span>
          <h2 id="services-heading" className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>Our Services</h2>
          <p className="mt-3 font-body text-text-muted max-w-xl mx-auto" style={{ fontSize:"clamp(1rem,1.5vw,1.1rem)" }}>
            Two specialties, one convenient location — comprehensive care for every member of your family.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((group, gi) => {
            const isTeal = group.accentColor === "teal"
            return (
              <ScrollReveal key={group.heading} delay={(gi+1) as 1|2}>
                <article
                  className="shimmer relative bg-surface rounded-3xl shadow-card overflow-hidden flex flex-col hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full"
                  aria-labelledby={`sg-${gi}`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 ${isTeal ? "bg-gradient-to-r from-primary to-secondary" : "bg-gradient-to-r from-secondary to-accent"}`} aria-hidden="true" />

                  <div className="p-8 flex flex-col gap-6 flex-1">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3.5 rounded-2xl ${isTeal ? "bg-primary-light" : "bg-secondary-light"}`}>
                        <Icon id={group.iconId} size={30} aria-hidden="true" className={isTeal ? "text-primary" : "text-secondary"} />
                      </div>
                      <div>
                        <h3 id={`sg-${gi}`} className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.1rem,2vw,1.35rem)" }}>{group.heading}</h3>
                        <p className="mt-1 font-body text-text-muted text-sm leading-relaxed">{group.intro}</p>
                      </div>
                    </div>

                    {/* Services list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label={`${group.heading} services`}>
                      {group.items.map(item => (
                        <li key={item.label} className="flex items-center gap-2.5 group/item">
                          <span className={`flex-shrink-0 p-1.5 rounded-full transition-all duration-200 group-hover/item:scale-110 ${isTeal ? "bg-primary-light text-primary" : "bg-secondary-light text-secondary"}`}>
                            <Icon id={item.iconId} size={14} aria-hidden="true" />
                          </span>
                          <span className="font-body text-sm text-text group-hover/item:text-primary transition-colors duration-150">{item.label}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#book"
                      className={`mt-auto inline-flex items-center gap-2 self-start font-body font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] ${isTeal ? "text-primary hover:bg-primary-light focus-visible:ring-primary" : "text-secondary hover:bg-secondary-light focus-visible:ring-secondary"}`}>
                      <Icon id="calendar" size={15} aria-hidden="true" />
                      Book Appointment →
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
