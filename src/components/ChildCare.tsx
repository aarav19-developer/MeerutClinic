import Icon         from "@/components/ui/Icon"
import ScrollReveal from "@/components/ui/ScrollReveal"

const highlights = [
  { iconId:"syringe",      heading:"Vaccinations",       text:"Standard childhood vaccines per national schedule, administered with care." },
  { iconId:"growth-chart", heading:"Growth Monitoring",  text:"Tracking height, weight, and milestones from newborn through adolescence." },
  { iconId:"apple",        heading:"Nutrition Guidance", text:"Age-appropriate feeding and nutrition advice for every stage." },
  { iconId:"shield-check", heading:"Illness Management", text:"Prompt, expert care for infections, coughs, allergies, and fever." },
]

export default function ChildCare() {
  return (
    <section id="child-care" aria-labelledby="childcare-heading" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background:"linear-gradient(135deg,#fff8f0 0%,#fef3e8 60%,#fff8f0 100%)" }}>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent-yellow/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-accent/50 text-accent font-body font-semibold text-sm px-4 py-2 rounded-pill w-fit">
                <Icon id="baby" size={16} aria-hidden="true" />
                Child Specialist Care
              </span>
              <h2 id="childcare-heading" className="font-heading font-bold text-text leading-tight" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>
                Caring for your little ones,<br />at every stage
              </h2>
              <p className="font-body text-text-muted leading-relaxed max-w-[52ch]" style={{ fontSize:"clamp(1rem,1.5vw,1.1rem)" }}>
                Dr. Pradeep Adhana provides patient, attentive care for children from newborns through their teenage years — guidance and reassurance at every step.
              </p>
              <p className="font-body text-text-muted leading-relaxed max-w-[52ch]" style={{ fontSize:"clamp(1rem,1.5vw,1.1rem)" }}>
                Whether it&apos;s a routine vaccination, a growth check, or a symptom you can&apos;t quite explain — we&apos;re here to listen.
              </p>
              <a href="#book"
                className="btn-glow inline-flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-base px-7 py-3.5 rounded-xl shadow-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 self-start min-h-[48px]">
                <Icon id="calendar" size={18} aria-hidden="true" />
                Book a Child&apos;s Appointment
              </a>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.heading} delay={((i % 4) + 1) as 1|2|3|4}>
                <div className="shimmer glass rounded-3xl p-6 flex flex-col gap-3 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="w-11 h-11 rounded-2xl bg-accent-light flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon id={item.iconId} size={22} aria-hidden="true" className="text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-text group-hover:text-accent transition-colors duration-200" style={{ fontSize:"1.05rem" }}>{item.heading}</h3>
                  <p className="font-body text-text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
