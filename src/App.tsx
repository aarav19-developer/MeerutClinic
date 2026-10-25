/**
 * App.tsx — Root component.
 */
import { useEffect } from "react"
import SvgSprite        from "@/components/ui/SvgSprite"
import CustomCursor     from "@/components/ui/CustomCursor"
import SectionDivider   from "@/components/ui/SectionDivider"
import IntroScreen      from "@/components/IntroScreen"
import Header           from "@/components/Header"
import Hero             from "@/components/Hero"
import Services         from "@/components/Services"
import Doctors          from "@/components/Doctors"
import ChildCare        from "@/components/ChildCare"
import WhyChooseUs      from "@/components/WhyChooseUs"
import Timings          from "@/components/Timings"
import Testimonials     from "@/components/Testimonials"
import BookAppointment  from "@/components/BookAppointment"
import Contact          from "@/components/Contact"
import Footer           from "@/components/Footer"
import FloatingActions  from "@/components/FloatingActions"
import { buildJsonLd }  from "@/lib/seo"

export default function App() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id   = "jsonld-schema"
    script.text = buildJsonLd()
    document.head.appendChild(script)
    return () => { document.getElementById("jsonld-schema")?.remove() }
  }, [])

  return (
    <>
      <CustomCursor />
      <IntroScreen />
      <SvgSprite />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider flip />
        <Doctors />
        <SectionDivider />
        <ChildCare />
        <SectionDivider flip />
        <WhyChooseUs />
        <SectionDivider />
        <Timings />
        <SectionDivider flip />
        <Testimonials />
        <SectionDivider />
        {/* FAQ is merged inside BookAppointment — two-column layout */}
        <BookAppointment />
        <SectionDivider flip />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
