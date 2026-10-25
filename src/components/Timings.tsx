import { useState, useEffect } from "react"
import Icon         from "@/components/ui/Icon"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { timings }  from "@/data/clinic"

function isClinicOpenNow(): boolean {
  const now = new Date(); const di = now.getDay()
  const ci  = di === 0 ? 6 : di - 1
  const t   = timings[ci]
  if (!t || t.closed) return false
  const cur = now.getHours()*60 + now.getMinutes()
  return t.slots.some(s=>{
    const [oh,om]=s.open.split(":").map(Number)
    const [ch,cm]=s.close.split(":").map(Number)
    return cur>=oh*60+om && cur<ch*60+cm
  })
}
function fmt(t:string):string{
  const [h,m]=t.split(":").map(Number)
  return `${h%12||12}:${String(m).padStart(2,"0")} ${h>=12?"PM":"AM"}`
}

export default function Timings() {
  const [isOpen,setIsOpen]=useState(isClinicOpenNow)
  useEffect(()=>{
    const id=setInterval(()=>setIsOpen(isClinicOpenNow()),30_000)
    return ()=>clearInterval(id)
  },[])

  return (
    <section id="timings" aria-labelledby="timings-heading" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium text-primary bg-primary-light px-4 py-1.5 rounded-pill mb-4 tracking-widest uppercase">Opening Hours</span>
          <h2 id="timings-heading" className="font-heading font-bold text-text" style={{ fontSize:"clamp(1.9rem,4vw,2.8rem)" }}>Clinic Timings</h2>
          <p className="mt-3 font-body text-text-muted max-w-xl mx-auto">Open six days a week, morning and evening. Walk-ins welcome.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <ScrollReveal className="md:col-span-3" delay={1}>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <table className="w-full text-left bg-surface" aria-label="Weekly clinic hours">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-light to-secondary-light">
                    {["Day","Morning","Evening"].map(h=>(
                      <th key={h} scope="col" className="font-heading font-semibold text-sm text-text px-5 py-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {timings.map(row=>(
                    <tr key={row.day} className="hover:bg-primary-light/20 transition-colors group">
                      <td className="font-body font-medium text-sm text-text px-5 py-3.5 group-hover:text-primary transition-colors">{row.day}</td>
                      {row.closed
                        ? <td colSpan={2} className="font-heading font-bold text-sm text-danger px-5 py-3.5">Closed</td>
                        : <>
                            <td className="font-body text-sm text-text-muted px-5 py-3.5">{row.slots[0]?`${fmt(row.slots[0].open)} – ${fmt(row.slots[0].close)}`:"—"}</td>
                            <td className="font-body text-sm text-text-muted px-5 py-3.5">{row.slots[1]?`${fmt(row.slots[1].open)} – ${fmt(row.slots[1].close)}`:"—"}</td>
                          </>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 flex flex-col gap-5" delay={2}>
            {/* Open/Closed badge */}
            <div role="status" aria-live="polite" aria-atomic="true"
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl ${isOpen?"bg-success/10 border border-success/25 text-success":"bg-danger/10 border border-danger/25 text-danger"}`}>
              <span className="relative flex h-3 w-3 flex-shrink-0" aria-hidden="true">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${isOpen?"bg-success":"bg-danger"}`}/>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen?"bg-success":"bg-danger"}`}/>
              </span>
              <span className="font-heading font-bold text-xl">{isOpen?"Open Now":"Closed Now"}</span>
            </div>

            {/* Info card */}
            <div className="glass rounded-2xl p-5 flex flex-col gap-4">
              {[["Morning","10:00 AM – 2:00 PM"],["Evening","5:00 PM – 8:00 PM"]].map(([l,t])=>(
                <div key={l} className="flex items-start gap-3 group">
                  <span className="p-2 bg-primary-light rounded-lg group-hover:bg-primary transition-colors duration-200">
                    <Icon id="clock" size={16} aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-200"/>
                  </span>
                  <div>
                    <p className="font-heading font-bold text-sm text-text">{l}</p>
                    <p className="font-body text-sm text-text-muted">{t}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <span className="p-2 bg-danger/10 rounded-lg">
                  <Icon id="clock" size={16} aria-hidden="true" className="text-danger"/>
                </span>
                <div>
                  <p className="font-heading font-bold text-sm text-danger">Sunday: Closed</p>
                  <p className="font-body text-sm text-text-muted">Monday – Saturday only</p>
                </div>
              </div>
            </div>

            <a href="#book"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-primary text-white font-heading font-semibold text-sm px-5 py-3.5 rounded-xl shadow-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[48px]">
              <Icon id="calendar" size={16} aria-hidden="true"/>
              Book an Appointment
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
