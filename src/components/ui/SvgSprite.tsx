/**
 * SvgSprite.tsx — Injects the SVG symbol sprite into the DOM.
 *
 * Rendered once at the top of <body> (before <main>). The hidden <div>
 * makes all <symbol> definitions available to every <Icon> on the page
 * via <use href="#icon-{id}">.
 *
 * The sprite is imported as a raw string via Vite's ?raw query.
 */

import spriteRaw from '@/assets/svg/sprite.svg?raw';

export default function SvgSprite() {
  return (
    <div
      // Hidden from layout and screen readers — purely a symbol container
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: spriteRaw }}
    />
  );
}
