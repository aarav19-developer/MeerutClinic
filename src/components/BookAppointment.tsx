/**
 * BookAppointment.tsx — Two-column premium section.
 * LEFT: FAQ accordion  |  RIGHT: WhatsApp booking form
 */
import { useState, type FormEvent } from "react"
import Icon              from "@/components/ui/Icon"
import ScrollReveal      from "@/components/ui/ScrollReveal"
import { clinic, doctors, faqs } from "@/data/clinic"

/* ── Types ────────────────────────────────────────────────────────────────── */
interface FormData   { name:string; phone:string; patientAge:string; doctor:string; date:string; time:string; reason:string }
interface FormErrors { name?:string; phone?:string; patientAge?:string; doctor?:string; date?:string; time?:string; reason?:string }
const EMPTY: FormData = { name:"", phone:"", patientAge:"", doctor:"", date:"", time:"", reason:"" }

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.name.trim())    e.name = "Please enter the patient name."
  if (!d.phone.trim())   e.phone = "Please enter a phone number."
  else if (!/^[+\d\s\-()]{7,15}$/.test(d.phone.trim())) e.phone = "Please enter a valid phone number."
  if (!d.patientAge.trim()) e.patientAge = "Please enter the patient\u2019s age."
  else if (Number(d.patientAge)<0||Number(d.patientAge)>120) e.patientAge="Age must be 0\u2013120."
  if (!d.doctor)  e.doctor = "Please select a doctor."
  if (!d.date)    e.date   = "Please choose a preferred date."
  else { const t=new Date(); t.setHours(0,0,0,0); if(new Date(d.date)<t) e.date="Choose today or a future date." }
  if (!d.time)    e.time   = "Please choose a preferred time."
  if (!d.reason.trim()) e.reason = "Please briefly describe the reason."
  return e
}

function buildWaUrl(d: FormData): string {
  const doc = doctors.find(x=>x.id===d.doctor)?.name ?? d.doctor
  const msg = [`Hello, I'd like to book an appointment.`,`Name: ${d.name}`,`Phone: ${d.phone}`,`Age: ${d.patientAge} yrs`,`Doctor: ${doc}`,`Date: ${d.date}`,`Time: ${d.time}`,`Reason: ${d.reason}`].join("\n")
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`
}

/* ── Field ────────────────────────────────────────────────────────────────── */
interface FP { id:string; name:string; label:string; type:string; value:string; error?:string; onChange:React.ChangeEventHandler<HTMLInputElement>; autoComplete?:string; min?:string; max?:string }
function Field({ id,name,label,type,value,error,onChange,autoComplete,min,max }:FP) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-body font-medium text-sm text-text tracking-wide">
        {label} <span aria-hidden="true" className="text-danger">*</span>
      </label>
      <input
        id={id} name={name} type={type} value={value} onChange={onChange}
        required aria-required="true" aria-invalid={!!error}
        aria-describedby={error?`${id}-err`:undefined}
        autoComplete={autoComplete} min={min} max={max}
        className={`font-body text-sm text-text bg-white/80 border rounded-xl px-4 py-3 min-h-[44px]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
          transition-all duration-200
          ${error ? "border-danger ring-1 ring-danger/30" : "border-border/80 hover:border-primary/60 focus:border-primary"}`}
      />
      {error && <p id={`${id}-err`} role="alert" className="text-xs font-body text-danger">{error}</p>}
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */
export default function BookAppointment() {
  const [formData,setFormData]   = useState<FormData>(EMPTY)
  const [errors,setErrors]       = useState<FormErrors>({})
  const [submitted,setSubmitted] = useState(false)
  const [openFaq,setOpenFaq]     = useState<number|null>(0) // single-open accordion

  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const {name,value}=e.target
    setFormData(p=>({...p,[name]:value}))
    if(errors[name as keyof FormErrors]) setErrors(p=>({...p,[name]:undefined}))
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    const errs = validate(formData)
    if(Object.keys(errs).length){
      setErrors(errs)
      document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }
    window.open(buildWaUrl(formData),"_blank","noopener,noreferrer")
    setSubmitted(true); setFormData(EMPTY); setErrors({})
  }

  const todayStr = new Date().toISOString().split("T")[0]

  return (
    <section id="book" aria-labelledby="book-heading" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background:"linear-gradient(135deg,#e8f8f5 0%,#f4faf8 50%,#e0f0fb 100%)" }}>

      {/* Decorative circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block font-body text-sm font-medium text-primary bg-primary-light px-4 py-1.5 rounded-pill mb-4 tracking-widest uppercase">Get in Touch</span>
          <h2 id="book-heading" className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>
            Book Your Appointment
          </h2>
          <p className="mt-3 font-body text-text-muted max-w-xl mx-auto" style={{ fontSize:"clamp(1rem,1.5vw,1.1rem)" }}>
            Have a question? Browse the FAQs or fill in the form to request an appointment via WhatsApp.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: FAQ Accordion ───────────────────────────────────── */}
          <ScrollReveal delay={1}>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-semibold text-text mb-2" style={{ fontSize:"clamp(1.2rem,2vw,1.5rem)" }}>
                Frequently Asked Questions
              </h3>

              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div
                      key={i}
                      className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "shadow-card" : "shadow-sm"}`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-p-${i}`}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group hover:bg-primary-light/40 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                      >
                        <span className={`font-body font-medium text-sm leading-snug transition-colors duration-150 ${isOpen ? "text-primary" : "text-text group-hover:text-primary"}`}>
                          {faq.question}
                        </span>
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-primary-light text-primary"}`}>
                          <Icon id="chevron" size={16} aria-hidden="true" />
                        </span>
                      </button>
                      <div id={`faq-p-${i}`} hidden={!isOpen}>
                        <div className="px-5 pb-4 pt-1">
                          <p className="font-body text-sm text-text-muted leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Clinic info strip */}
              <div className="mt-4 glass rounded-2xl p-5 flex flex-col gap-3">
                {[
                  { iconId:"clock",    text:"Mon – Sat  ·  10 AM – 2 PM & 5 PM – 8 PM" },
                  { iconId:"phone",    text:clinic.phone, href:`tel:${clinic.phone}` },
                  { iconId:"whatsapp", text:"WhatsApp us", href:`https://wa.me/${clinic.whatsapp}`, external:true },
                ].map(item => (
                  <div key={item.iconId} className="flex items-center gap-3 group">
                    <span className="p-2 bg-primary-light rounded-lg group-hover:bg-primary transition-colors duration-200">
                      <Icon id={item.iconId} size={16} aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-200" />
                    </span>
                    {item.href
                      ? <a href={item.href} target={item.external?"_blank":undefined} rel={item.external?"noopener noreferrer":undefined}
                           className="font-body text-sm text-primary font-medium hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{item.text}</a>
                      : <span className="font-body text-sm text-text-muted">{item.text}</span>}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT: Booking Form ───────────────────────────────────── */}
          <ScrollReveal delay={2}>
            {submitted ? (
              <div role="alert" className="glass rounded-3xl p-10 flex flex-col items-center gap-5 text-center shadow-card">
                <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center">
                  <Icon id="check" size={32} aria-hidden="true" className="text-success" />
                </div>
                <h3 className="font-heading font-bold text-xl text-text">Request Sent!</h3>
                <p className="font-body text-text-muted text-sm max-w-xs">Your details have been sent via WhatsApp. The clinic will confirm your appointment shortly.</p>
                <button type="button" onClick={()=>setSubmitted(false)}
                  className="font-body font-semibold text-sm text-primary underline underline-offset-2 hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate
                className="glass rounded-3xl p-7 lg:p-9 flex flex-col gap-5 shadow-card"
                aria-label="Book appointment form">

                <div className="flex flex-col gap-1 mb-1">
                  <h3 className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.2rem,2vw,1.4rem)" }}>Request an Appointment</h3>
                  <p className="font-body text-xs text-text-muted">We'll confirm via WhatsApp within clinic hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="b-name"  name="name"       label="Patient Name"        type="text"   value={formData.name}       error={errors.name}       onChange={handleChange} autoComplete="name" />
                  <Field id="b-phone" name="phone"      label="Phone Number"        type="tel"    value={formData.phone}      error={errors.phone}      onChange={handleChange} autoComplete="tel" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="b-age"  name="patientAge" label="Patient Age (yrs)"   type="number" value={formData.patientAge} error={errors.patientAge} onChange={handleChange} min="0" max="120" />

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="b-doctor" className="font-body font-medium text-sm text-text tracking-wide">
                      Doctor <span aria-hidden="true" className="text-danger">*</span>
                    </label>
                    <select id="b-doctor" name="doctor" value={formData.doctor} onChange={handleChange}
                      required aria-required="true" aria-invalid={!!errors.doctor}
                      className={`font-body text-sm text-text bg-white/80 border rounded-xl px-4 py-3 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary appearance-none transition-all duration-200
                        ${errors.doctor ? "border-danger" : "border-border/80 hover:border-primary/60"}`}>
                      <option value="">Choose…</option>
                      {doctors.map(d=><option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                    {errors.doctor && <p role="alert" className="text-xs font-body text-danger">{errors.doctor}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="b-date" name="date" label="Preferred Date" type="date" value={formData.date} error={errors.date} onChange={handleChange} min={todayStr} />
                  <Field id="b-time" name="time" label="Preferred Time" type="time" value={formData.time} error={errors.time} onChange={handleChange} min="10:00" max="20:00" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="b-reason" className="font-body font-medium text-sm text-text tracking-wide">
                    Reason for Visit <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <textarea id="b-reason" name="reason" value={formData.reason} onChange={handleChange}
                    required aria-required="true" aria-invalid={!!errors.reason}
                    rows={3} placeholder="Briefly describe symptoms or reason…"
                    className={`font-body text-sm text-text bg-white/80 border rounded-xl px-4 py-3 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200
                      ${errors.reason ? "border-danger" : "border-border/80 hover:border-primary/60"}`}
                  />
                  {errors.reason && <p role="alert" className="text-xs font-body text-danger">{errors.reason}</p>}
                </div>

                <button type="submit"
                  className="btn-glow w-full flex items-center justify-center gap-2.5 bg-primary text-white font-heading font-semibold text-base px-6 py-4 rounded-xl shadow-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[52px] mt-1">
                  <Icon id="whatsapp" size={20} aria-hidden="true" />
                  Send via WhatsApp
                </button>

                <p className="text-xs font-body text-text-muted text-center leading-relaxed">
                  This opens WhatsApp with your details pre-filled. Your data is not stored by this website.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
