# Design System — Executive Editorial × Cinematic B2B Technology

## Visual intent

A confident, editorial portfolio for B2B sales and account leadership. Use cinematic depth sparingly: strong typography, calm surfaces, clear content hierarchy, and one signature teal accent. Avoid dashboard-like framing in the hero and avoid giving every small label the same visual weight.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| Obsidian Navy | `#0A0F18` | Primary page and section background |
| Graphite Surface | `#151D29` | Alternating secondary section background |
| Slate Surface | `#202B39` | Panels, cards, and separated content surfaces |
| Soft White | `#F1F3F5` | Primary headings and body copy |
| Muted Text | `#A6B0BD` | Secondary copy, quiet labels, and supporting metadata |
| Signature Teal | `#19C69A` | Primary actions, active indicators, and a small number of essential highlights only |

Secondary category labels should use Muted Text with a restrained dot, rule, or neutral outline. Do not use teal as a default label color. Keep borders subtle (`1px`, low-contrast); omit borders where spacing and tonal contrast already separate content.

## Typography

- **Headings and figures:** Manrope. Hero value statement: `56–72px` on desktop; section headings: `36–44px`; card headings: `20–24px`.
- **Body and labels:** Inter. Body copy: `16–18px` with an ideal reading width of `60–72ch`; labels: `12–14px`.
- **Editorial accent:** Instrument Serif, italic, used selectively on a single key phrase in the hero or career journey heading.

## Layout and components

- Main desktop container: `1160–1240px`, organized on a 12-column grid.
- Vertical section rhythm: `88–120px` on desktop; compact naturally on mobile.
- Standard component corner radius: `10–14px`.
- Alternate Obsidian Navy and Graphite Surface to create tonal transitions. Use Slate Surface for distinct panels rather than adding unnecessary outlines.
- Hero layout: asymmetric editorial composition, value-led headline on the left, unframed professional portrait on the right, restrained radial light, and very subtle background grid texture.

## Motion and accessibility

- Hero entrance: background, label, headline lines, supporting copy, portrait mask, then calls to action; use opacity and transform with an overall reveal of approximately `700–1000ms`.
- CTA arrow micro-interactions: translate a few pixels over `160–220ms`.
- Preserve keyboard-operable dialogs, visible focus rings, descriptive image alternatives, and touch targets of at least `44px`.
- Certificate previews remain high-resolution WebP images; do not replace the image viewer with an embedded PDF.

## Project guardrails

- Canonical, Open Graph, and Twitter metadata remain on `https://www.anggaramadhan.my.id`.
- Preserve `@vercel/analytics` `<Analytics />` and the mobile-only WhatsApp `FloatingCTA`.
- Keep portfolio assets public and approved only; do not commit internal handoff documents, QA captures, logs, or secrets.
