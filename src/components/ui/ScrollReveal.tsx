/**
 * ScrollReveal.tsx — Wraps children and fades them in as they scroll into view.
 * Uses IntersectionObserver. Respects prefers-reduced-motion via CSS.
 */
import { useEffect, useRef, type ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4   // maps to reveal-delay-N CSS class
  threshold?: number
}

export default function ScrollReveal({ children, className = "", delay = 0, threshold = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ""

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
