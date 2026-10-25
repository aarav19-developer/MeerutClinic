/**
 * CustomCursor.tsx — Soft round teal cursor that tracks the mouse.
 * Grows on hover over interactive elements, shrinks on click.
 * Hides on touch devices.
 */

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot  = dotRef.current
    if (!ring || !dot) return

    // Only show on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      ring.style.display = "none"
      dot.style.display  = "none"
      return
    }

    let rx = 0, ry = 0 // ring position (lerped)
    let dx = 0, dy = 0 // dot position (direct)
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      dx = e.clientX
      dy = e.clientY
    }

    const onDown = () => ring.classList.add("cursor-click")
    const onUp   = () => ring.classList.remove("cursor-click")

    // Interactive element detection
    const INTERACTIVE = "a, button, input, textarea, select, label, [role=button], [tabindex]"
    const onEnterInteractive = () => ring.classList.add("cursor-hover")
    const onLeaveInteractive = () => ring.classList.remove("cursor-hover")

    document.querySelectorAll(INTERACTIVE).forEach(el => {
      el.addEventListener("mouseenter", onEnterInteractive)
      el.addEventListener("mouseleave", onLeaveInteractive)
    })

    // Observe DOM for new interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll(INTERACTIVE).forEach(el => {
        el.addEventListener("mouseenter", onEnterInteractive)
        el.addEventListener("mouseleave", onLeaveInteractive)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Lerp loop — ring follows with soft lag, dot is instant
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      rx = lerp(rx, dx, 0.14)
      ry = lerp(ry, dy, 0.14)
      ring.style.left = rx + "px"
      ring.style.top  = ry + "px"
      dot.style.left  = dx + "px"
      dot.style.top   = dy + "px"
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup",   onUp)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup",   onUp)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="custom-cursor" ref={ringRef} aria-hidden="true" />
      <div id="cursor-dot"    ref={dotRef}  aria-hidden="true" />
    </>
  )
}
