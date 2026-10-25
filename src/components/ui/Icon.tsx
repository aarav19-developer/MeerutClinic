/**
 * Icon.tsx — Renders an SVG icon from the sprite via <use href="#icon-{id}">.
 *
 * Icons inherit currentColor by default, so they follow the surrounding text
 * color without any extra className needed.
 *
 * Usage (decorative):
 *   <Icon id="stethoscope" size={24} aria-hidden />
 *
 * Usage (meaningful):
 *   <Icon id="phone" size={20} aria-label="Call us" />
 */

interface IconProps {
  /** Icon symbol ID — matches <symbol id="icon-{id}"> in sprite.svg */
  id: string;
  /** Size in px (applied to both width and height). Default: 24 */
  size?: number;
  /** Additional Tailwind / CSS classes */
  className?: string;
  /** Accessible label — required when the icon conveys meaning */
  'aria-label'?: string;
  /** Mark as decorative. Default: true when no aria-label is provided */
  'aria-hidden'?: boolean | 'true' | 'false';
}

export default function Icon({
  id,
  size = 24,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) {
  // If aria-label is provided the icon is meaningful; otherwise decorative.
  const isDecorative = !ariaLabel;
  const hiddenAttr = ariaHidden ?? (isDecorative ? 'true' : undefined);

  return (
    <svg
      width={size}
      height={size}
      aria-hidden={hiddenAttr}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      focusable="false"
      className={className}
    >
      <use href={`#icon-${id}`} />
    </svg>
  );
}
