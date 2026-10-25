/**
 * FloatingActions.tsx — Always-visible floating Call and WhatsApp buttons.
 */
import Icon       from "@/components/ui/Icon"
import { clinic } from "@/data/clinic"

export default function FloatingActions() {
  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Quick contact buttons"
    >
      <a
        href={`https://wa.me/${clinic.whatsapp}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-btn hover:shadow-btn-hover hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <Icon id="whatsapp" size={26} aria-hidden="true" />
      </a>
      <a
        href={`tel:${clinic.phone}`}
        aria-label={`Call the clinic at ${clinic.phone}`}
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-dark text-text-onPrimary rounded-full shadow-btn hover:shadow-btn-hover hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
      >
        <Icon id="phone" size={24} aria-hidden="true" />
      </a>
    </div>
  )
}
