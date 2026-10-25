/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Allows importing SVG files as raw strings via ?raw query
declare module '*.svg?raw' {
  const content: string
  export default content
}

// Allows importing SVG files as React components via ?react query
declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react'
  const ReactComponent: FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}

// Allows importing plain SVG files (url string)
declare module '*.svg' {
  const src: string
  export default src
}
