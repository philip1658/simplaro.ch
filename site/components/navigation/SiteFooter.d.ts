/** Schlanker One-Line-Footer auf radialem Terra-Glow — weisses Lockup, Adresse, «↑ nach oben». */
export interface SiteFooterProps {
  /** Pfad zum weissen Lockup (Standard assets/logo-lockup-white.png) */
  logoSrc?: string;
  /** Logo-Höhe in px, Standard 24 */
  logoHeight?: number;
  /** Standard «Simplaro GmbH · Lehenstrasse 74» plus «8037 Zürich» auf eigener Zeile. */
  address?: string;
  email?: string;
  copyright?: string;
  /** Klick-Handler für «nach oben» */
  onTop?: (e: MouseEvent) => void;
  style?: React.CSSProperties;
}
