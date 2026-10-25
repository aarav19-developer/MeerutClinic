/**
 * FAQ.tsx — Multi-open accordion with keyboard navigation.
 */
import { useState } from "react"
import Icon       from "@/components/ui/Icon"
import { faqs }   from "@/data/clinic"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpenItems(prev => {
    const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next
  })

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-background py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="font-heading font-bold text-fluid-2xl text-text">Frequently Asked Questions</h2>
          <p className="mt-3 font-body text-text-muted text-fluid-base max-w-prose mx-auto">
            Common questions about appointments, timings, and services.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-card overflow-hidden shadow-card">
          {faqs.map((faq, index) => {
            const isOpen    = openItems.has(index)
            const panelId   = `faq-panel-${index}`
            const triggerId = `faq-trigger-${index}`
            return (
              <div key={index} className="bg-surface">
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary-light/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary group"
                >
                  <span className="font-heading font-semibold text-fluid-base text-text pr-2 group-hover:text-primary transition-colors duration-150">
                    {faq.question}
                  </span>
                  <Icon
                    id="chevron"
                    size={20}
                    aria-hidden="true"
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
                  <div className="px-6 pb-5 pt-1">
                    <p className="font-body text-fluid-sm text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center font-body text-fluid-sm text-text-muted">
          Still have questions?{" "}
          <a href="#contact" className="text-primary underline underline-offset-2 hover:text-primary-dark font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}
