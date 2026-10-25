import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      // ── Colour palette ─────────────────────────────────────────────────
      colors: {
        background: "#f4faf8",
        surface:    "#ffffff",
        primary: {
          DEFAULT: "#2d8c8c",
          light:   "#e0f5f5",
          dark:    "#1e6262",
        },
        secondary: {
          DEFAULT: "#4a9eca",
          light:   "#dff0fb",
        },
        accent: {
          DEFAULT: "#f5a96a",
          light:   "#fef3e8",
          yellow:  "#f5d76e",
        },
        text: {
          DEFAULT:   "#1e3a3a",
          muted:     "#4a6b6b",
          onPrimary: "#ffffff",
        },
        border:  "#d0e8e8",
        success: "#2a9d5c",
        danger:  "#c0392b",
      },

      // ── Typography — Nunito headings + DM Sans body ───────────────────
      fontFamily: {
        // Playfair Display — elegant serif for headings (premium/luxury feel)
        heading: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
        // Inter — ultra-clean modern sans for body text
        body:    ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        "fluid-sm":  ["clamp(0.875rem, 1.5vw, 1rem)",    { lineHeight: "1.7" }],
        "fluid-base":["clamp(1rem, 1.8vw, 1.125rem)",    { lineHeight: "1.7" }],
        "fluid-lg":  ["clamp(1.125rem, 2vw, 1.375rem)",  { lineHeight: "1.5" }],
        "fluid-xl":  ["clamp(1.375rem, 3vw, 1.75rem)",   { lineHeight: "1.4" }],
        "fluid-2xl": ["clamp(1.75rem, 4vw, 2.5rem)",     { lineHeight: "1.25" }],
        "fluid-3xl": ["clamp(2rem, 5vw, 3.25rem)",       { lineHeight: "1.15" }],
      },

      // ── Border radius ──────────────────────────────────────────────────
      borderRadius: {
        card: "1rem",
        btn:  "0.625rem",
        pill: "9999px",
      },

      // ── Box shadows ────────────────────────────────────────────────────
      boxShadow: {
        card:          "0 2px 20px 0 rgba(45,140,140,0.09)",
        "card-hover":  "0 8px 32px 0 rgba(45,140,140,0.18)",
        btn:           "0 2px 10px 0 rgba(45,140,140,0.22)",
        "btn-hover":   "0 4px 18px 0 rgba(45,140,140,0.32)",
        glow:          "0 0 0 4px rgba(45,140,140,0.15)",
      },

      maxWidth: {
        prose: "65ch",
      },

      // ── Custom keyframes for intro + hover ────────────────────────────
      keyframes: {
        "drop-in": {
          "0%":   { opacity: "0", transform: "translateY(-80px) scale(0.8)" },
          "70%":  { transform: "translateY(8px) scale(1.03)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "letter-drop": {
          "0%":   { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%":   { opacity: "1" },
          "100%": { opacity: "0", pointerEvents: "none" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-8px)" },
        },
        "heartbeat-draw": {
          from: { strokeDashoffset: "900" },
          to:   { strokeDashoffset: "0" },
        },
        "cursor-scale": {
          "0%,100%": { transform: "scale(1)" },
          "50%":     { transform: "scale(1.3)" },
        },
      },
      animation: {
        "drop-in":      "drop-in 0.7s cubic-bezier(.34,1.56,.64,1) forwards",
        "letter-drop":  "letter-drop 0.5s cubic-bezier(.34,1.56,.64,1) forwards",
        "fade-out":     "fade-out 0.6s ease forwards",
        float:          "float 5s ease-in-out infinite",
        "float-slow":   "float-slow 7s ease-in-out infinite",
        heartbeat:      "heartbeat-draw 2.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}

export default config

