/**
 * IntroScreen.tsx — Full-screen animated intro.
 * 1. Doctor SVG cartoon drops from top (spring bounce)
 * 2. "Welcome" letters drop in one by one
 * 3. Subtitle fades in
 * 4. Screen fades out after ~2.8 s, then unmounts
 */

import { useEffect, useState } from "react"

const WELCOME_LETTERS = "Welcome".split("")

export default function IntroScreen() {
  const [hiding, setHiding]     = useState(false)
  const [gone, setGone]         = useState(false)

  useEffect(() => {
    // Start hide after 2.8 s
    const t1 = setTimeout(() => setHiding(true), 2800)
    // Unmount after hide animation (0.7 s)
    const t2 = setTimeout(() => setGone(true), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      id="intro-screen"
      className={hiding ? "hiding" : ""}
      aria-label="Welcome animation"
      aria-live="polite"
    >
      {/* ── Doctor SVG cartoon ──────────────────────────────────────── */}
      <div className="intro-doctor" aria-hidden="true">
        <svg
          viewBox="0 0 200 240"
          width="180"
          height="216"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Doctor cartoon"
        >
          {/* White coat body */}
          <ellipse cx="100" cy="190" rx="54" ry="52" fill="#ffffff" stroke="#d0e8e8" strokeWidth="2"/>
          {/* Coat lapels */}
          <path d="M78 155 L100 175 L122 155" fill="#e0f5f5" stroke="#b0d8d8" strokeWidth="1.5"/>
          {/* Shirt collar */}
          <path d="M88 155 L100 168 L112 155" fill="#4a9eca" opacity="0.7"/>
          {/* Stethoscope */}
          <path d="M82 175 Q72 192 76 204 Q80 213 90 213 Q112 213 116 204 Q120 192 110 175"
            fill="none" stroke="#2d8c8c" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="97" cy="215" r="7" fill="#2d8c8c"/>

          {/* Neck */}
          <rect x="91" y="128" width="18" height="20" rx="6" fill="#fddbb4"/>

          {/* Head */}
          <circle cx="100" cy="108" r="42" fill="#fddbb4"/>
          {/* Hair */}
          <path d="M60 100 Q63 68 100 64 Q137 68 140 100 Q130 75 100 72 Q70 75 60 100Z"
            fill="#3d2b1f"/>
          {/* Ears */}
          <ellipse cx="58" cy="112" rx="7" ry="9" fill="#fddbb4"/>
          <ellipse cx="142" cy="112" rx="7" ry="9" fill="#fddbb4"/>

          {/* Eyes */}
          <ellipse cx="86" cy="108" rx="7" ry="8" fill="#ffffff" stroke="#ccc" strokeWidth="0.5"/>
          <ellipse cx="114" cy="108" rx="7" ry="8" fill="#ffffff" stroke="#ccc" strokeWidth="0.5"/>
          <circle cx="87" cy="109" r="4.5" fill="#2d4a4a"/>
          <circle cx="115" cy="109" r="4.5" fill="#2d4a4a"/>
          <circle cx="88.5" cy="107.5" r="1.5" fill="#ffffff"/>
          <circle cx="116.5" cy="107.5" r="1.5" fill="#ffffff"/>
          {/* Eyebrows */}
          <path d="M79 100 Q86 96 93 100" fill="none" stroke="#3d2b1f" strokeWidth="2" strokeLinecap="round"/>
          <path d="M107 100 Q114 96 121 100" fill="none" stroke="#3d2b1f" strokeWidth="2" strokeLinecap="round"/>

          {/* Smile + cheeks */}
          <path d="M89 122 Q100 132 111 122" fill="none" stroke="#c0624a" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="80" cy="120" r="6" fill="#f5a96a" opacity="0.35"/>
          <circle cx="120" cy="120" r="6" fill="#f5a96a" opacity="0.35"/>

          {/* Glasses */}
          <circle cx="86" cy="108" r="11" fill="none" stroke="#2d8c8c" strokeWidth="1.8" opacity="0.7"/>
          <circle cx="114" cy="108" r="11" fill="none" stroke="#2d8c8c" strokeWidth="1.8" opacity="0.7"/>
          <path d="M97 108 L103 108" stroke="#2d8c8c" strokeWidth="1.8"/>
          <path d="M75 105 L63 103" stroke="#2d8c8c" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M125 105 L137 103" stroke="#2d8c8c" strokeWidth="1.8" strokeLinecap="round"/>

          {/* Arms */}
          <path d="M46 165 Q38 185 44 200" fill="none" stroke="#fddbb4" strokeWidth="18" strokeLinecap="round"/>
          <path d="M154 165 Q162 185 156 200" fill="none" stroke="#fddbb4" strokeWidth="18" strokeLinecap="round"/>
          {/* Clipboard in right hand */}
          <rect x="142" y="188" width="26" height="34" rx="4" fill="#f5f9f8" stroke="#2d8c8c" strokeWidth="1.5"/>
          <rect x="146" y="184" width="18" height="6" rx="3" fill="#2d8c8c"/>
          <line x1="146" y1="200" x2="164" y2="200" stroke="#b0d8d8" strokeWidth="1.5"/>
          <line x1="146" y1="207" x2="164" y2="207" stroke="#b0d8d8" strokeWidth="1.5"/>
          <line x1="146" y1="214" x2="158" y2="214" stroke="#b0d8d8" strokeWidth="1.5"/>

          {/* Coat pocket + cross */}
          <rect x="88" y="180" width="24" height="16" rx="3" fill="#f5f9f8" stroke="#d0e8e8" strokeWidth="1"/>
          <line x1="100" y1="183" x2="100" y2="193" stroke="#2d8c8c" strokeWidth="2"/>
          <line x1="95" y1="188" x2="105" y2="188" stroke="#2d8c8c" strokeWidth="2"/>

          {/* Legs */}
          <rect x="80" y="234" width="16" height="28" rx="6" fill="#e0f5f5" stroke="#b0d8d8" strokeWidth="1"/>
          <rect x="104" y="234" width="16" height="28" rx="6" fill="#e0f5f5" stroke="#b0d8d8" strokeWidth="1"/>

          {/* Decorative sparkles */}
          <text x="20" y="60" fontSize="14" opacity="0.5">✦</text>
          <text x="165" y="50" fontSize="10" opacity="0.4">✦</text>
          <text x="10" y="140" fontSize="8" opacity="0.3">✦</text>
        </svg>
      </div>

      {/* ── "Welcome" letter-by-letter drop ────────────────────────────── */}
      <div className="flex gap-1 items-end" aria-label="Welcome">
        {WELCOME_LETTERS.map((letter, i) => (
          <span
            key={i}
            className="intro-letter"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              color: i % 2 === 0 ? "#2d8c8c" : "#1e3a3a",
              animationDelay: `${0.55 + i * 0.09}s`,
              animationFillMode: "forwards",
              animation: `letter-drop 0.5s cubic-bezier(.34,1.56,.64,1) ${0.55 + i * 0.09}s forwards`,
              textShadow: "0 2px 12px rgba(45,140,140,0.18)",
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* ── Subtitle ─────────────────────────────────────────────────────── */}
      <p
        className="intro-subtitle"
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
          color: "#4a6b6b",
          textAlign: "center",
          letterSpacing: "0.04em",
        }}
      >
        Dr. Pradeep Adhana&apos;s Clinic
      </p>

      {/* ── Loading dots ─────────────────────────────────────────────────── */}
      <div className="flex gap-2 mt-2" aria-hidden="true">
        {[0,1,2].map(i => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: 8, height: 8,
              borderRadius: "50%",
              background: "#2d8c8c",
              opacity: 0,
              animation: `letter-drop 0.4s ease ${1.8 + i * 0.18}s forwards`,
            }}
          />
        ))}
      </div>
    </div>
  )
}


