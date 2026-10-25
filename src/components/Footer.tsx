import Icon       from "@/components/ui/Icon"
import { clinic } from "@/data/clinic"

const quickLinks = [
  {label:"Services",href:"#services"},{label:"Our Doctor",href:"#doctors"},
  {label:"Child Care",href:"#child-care"},{label:"Timings",href:"#timings"},
  {label:"Testimonials",href:"#testimonials"},{label:"FAQ & Book",href:"#book"},
  {label:"Contact",href:"#contact"},
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-primary-light border-t border-border/60" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          <div className="flex flex-col gap-5">
            <a href="#hero" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded w-fit" aria-label={`${clinic.name} — back to top`}>
              <span className="p-2 bg-white/80 border border-border/60 rounded-xl group-hover:bg-primary group-hover:border-primary transition-all duration-200">
                <Icon id="stethoscope" size={20} aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-200"/>
              </span>
              <span className="font-heading font-bold text-lg text-text group-hover:text-primary transition-colors duration-200">{clinic.shortName||clinic.name}</span>
            </a>
            <p className="font-body text-sm text-text-muted max-w-[34ch] leading-relaxed">{clinic.tagline}</p>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {quickLinks.map(link=>(
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-sm text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg text-text">Opening Hours</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon id="clock" size={15} aria-hidden="true" className="text-primary flex-shrink-0"/>
                <span className="font-heading font-semibold text-sm text-text">Mon – Sat</span>
              </div>
              <p className="font-body text-sm text-text-muted pl-5">10:00 AM – 2:00 PM</p>
              <p className="font-body text-sm text-text-muted pl-5">5:00 PM – 8:00 PM</p>
              <div className="flex items-center gap-2 mt-1">
                <Icon id="clock" size={15} aria-hidden="true" className="text-danger flex-shrink-0"/>
                <span className="font-heading font-bold text-sm text-danger">Sunday: Closed</span>
              </div>
            </div>
            <div className="bg-danger/8 border border-danger/20 rounded-xl px-4 py-3 flex items-start gap-2">
              <Icon id="phone" size={15} aria-hidden="true" className="text-danger flex-shrink-0 mt-0.5"/>
              <p className="font-body text-sm text-text">
                <strong className="font-heading">Emergency:</strong>{" "}
                <a href={`tel:${clinic.emergency}`} className="text-danger font-semibold hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger rounded">{clinic.emergency}</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-lg text-text">Contact</h3>
            <div className="flex flex-col gap-3">
              {[
                {icon:"map-pin",content:<span className="font-body text-sm text-text-muted">{clinic.address}</span>},
                {icon:"phone",  content:<a href={`tel:${clinic.phone}`} className="font-body text-sm text-primary hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{clinic.phone}</a>},
                {icon:"mail",   content:<a href={`mailto:${clinic.email}`} className="font-body text-sm text-primary hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{clinic.email}</a>},
                {icon:"whatsapp",content:<a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">WhatsApp Us</a>},
              ].map(item=>(
                <div key={item.icon} className="flex items-start gap-2">
                  <Icon id={item.icon} size={15} aria-hidden="true" className="text-primary flex-shrink-0 mt-0.5"/>
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col gap-3">
          <p role="note" className="font-body text-xs text-text-muted text-center max-w-prose mx-auto leading-relaxed">
            <strong className="font-heading text-text">Medical Disclaimer:</strong> This website is for informational purposes only and does not constitute medical advice. Please consult your doctor for diagnosis and treatment.
          </p>
          <p className="font-body text-xs text-text-muted text-center">© {year} {clinic.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
