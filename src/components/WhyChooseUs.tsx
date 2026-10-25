import Icon            from "@/components/ui/Icon"
import ScrollReveal    from "@/components/ui/ScrollReveal"
import { whyChooseUs } from "@/data/clinic"

export default function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-heading" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium text-primary bg-primary-light px-4 py-1.5 rounded-pill mb-4 tracking-widest uppercase">Our Difference</span>
          <h2 id="why-heading" className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>Why Choose Us</h2>
          <p className="mt-3 font-body text-text-muted max-w-xl mx-auto" style={{ fontSize:"clamp(1rem,1.5vw,1.1rem)" }}>
            A few things that set our clinic apart.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {whyChooseUs.map((point, i) => (
            <ScrollReveal key={point.heading} delay={((i % 3) + 1) as 1|2|3}>
              <div className="shimmer group relative flex flex-col gap-4 p-7 bg-background rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />

                <div className="relative flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon id={point.iconId} size={24} aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="relative font-heading font-bold text-text group-hover:text-primary transition-colors duration-200" style={{ fontSize:"clamp(1rem,1.8vw,1.2rem)" }}>{point.heading}</h3>
                <p className="relative font-body text-text-muted text-sm leading-relaxed">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
