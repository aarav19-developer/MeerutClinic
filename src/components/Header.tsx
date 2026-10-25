/**
 * Header.tsx — Sticky top navigation with logo, nav links, Book CTA,
 * and a mobile hamburger menu with focus trapping.
 */

import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/Icon"
import { clinic } from "@/data/clinic"

const navLinks = [
  { label: "Services",     href: "#services"   },
  { label: "Doctor",       href: "#doctors"     },
  { label: "Child Care",   href: "#child-care"  },
  { label: "Timings",      href: "#timings"     },
  { label: "FAQ",          href: "#faq"         },
  { label: "Contact",      href: "#contact"     },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef    = useRef<HTMLDivElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenuOpen(false); menuBtnRef.current?.focus(); return }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
        const first = focusable[0]; const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface transition-all duration-200 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            aria-label={`${clinic.name} — home`}
          >
            <span className="p-1.5 bg-primary-light rounded-card group-hover:bg-primary transition-colors duration-200">
              <Icon id="stethoscope" size={24} aria-hidden="true" className="text-primary group-hover:text-white transition-colors duration-200 flex-shrink-0" />
            </span>
            <span className="font-heading font-bold text-fluid-lg text-text group-hover:text-primary transition-colors duration-200">
              {clinic.shortName || clinic.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body font-medium text-sm text-text-muted hover:text-primary px-3 py-2 rounded-btn transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-text-onPrimary font-heading font-bold text-sm px-5 py-2.5 rounded-btn shadow-btn hover:shadow-btn-hover transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Icon id="calendar" size={16} aria-hidden="true" />
            Book Appointment
          </a>

          {/* Mobile hamburger */}
          <button
            ref={menuBtnRef}
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-btn text-text hover:bg-primary-light hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Icon id={menuOpen ? "close" : "menu"} size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-surface border-t border-border shadow-card-hover"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body font-medium text-base text-text-muted hover:text-primary hover:bg-primary-light py-3 px-3 rounded-btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-text-onPrimary font-heading font-bold text-base py-3 px-5 rounded-btn shadow-btn transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Icon id="calendar" size={18} aria-hidden="true" />
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
