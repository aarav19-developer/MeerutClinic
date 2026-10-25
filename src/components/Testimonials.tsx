import Icon               from "@/components/ui/Icon"
import ScrollReveal       from "@/components/ui/ScrollReveal"
import { testimonials }   from "@/data/clinic"

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading"
      className="py-24 lg:py-32"
      style={{ background:"linear-gradient(135deg,#f4faf8 0%,#e0f5f5 50%,#f4faf8 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-5">
          <span className="inline-block font-body text-sm font-medium text-primary bg-primary-light px-4 py-1.5 rounded-pill mb-4 tracking-widest uppercase">Patient Voices</span>
          <h2 id="testimonials-heading" className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>Patient Feedback</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div role="note" className="mb-12 mx-auto max-w-lg text-center bg-white/70 backdrop-blur border border-accent/40 text-text-muted font-body text-sm px-5 py-3 rounded-2xl">
            Sample reviews — real testimonials will be added with patient consent.
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={((i % 3) + 1) as 1|2|3}>
              <article className="shimmer glass rounded-3xl p-7 flex flex-col gap-4 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full" aria-labelledby={`t-${t.id}`}>
                <span className="inline-block font-body font-semibold text-xs bg-accent-light text-accent border border-accent/40 rounded-lg px-2.5 py-1 self-start">
                  {t.placeholderLabel}
                </span>
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({length:5}).map((_,si)=>(
                    <Icon key={si} id="star" size={15} aria-hidden="true" className={si<t.rating?"text-accent-yellow":"text-border"} />
                  ))}
                </div>
                <p className="font-body text-text-muted text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
                <p id={`t-${t.id}`} className="font-heading font-semibold text-sm text-text">— {t.reviewerName}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
