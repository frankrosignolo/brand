# OBSCURA

### The design system of Frank Rosignolo — warm noir, brutalist grid, catalog precision.

OBSCURA is the design language of the personal brand of **Frank Rosignolo**. It borrows from print catalogs, banknote engraving, technical specimen sheets, and Swiss editorial layout. The mood is dark and warm at once: espresso browns and rust against bone-white paper, an elegant transitional serif leading every headline in sentence case (the fin.ai register), fine monospace metadata, and a strict grid held together by hairline rules and registration ticks.

Brand marks: the wordmark is **Frank Rosignolo** set in the display serif; the monogram is **FR** in a hairline rust-keyed box; mono metadata signs work as `© 2026 — F. ROSIGNOLO`. Use the system for the portfolio site, journal, dashboards, decks, and anywhere the *object* should feel as designed as the content.

---

## 1. Design principles

**Ink on paper, light in the dark.** Every surface is either a warm dark "ink" field or a warm light "paper" field. There is no cold gray anywhere in the system. Neutrals carry a brown undertone so the whole palette reads like aged film, not a spreadsheet.

**The grid is visible.** OBSCURA does not hide its structure. Hairline rules, column guides, corner registration marks, and index numbers are part of the aesthetic, not scaffolding to remove. A layout should look like a printed plate.

**The serif speaks, the mono whispers.** Hierarchy comes from scale and voice contrast, not color. A large sentence-case serif headline next to quiet uppercase mono metadata is the signature move — editorial confidence over shouting. Accent color is a scalpel, not a highlighter.

**Everything is catalogued.** Serial numbers, page indices, dates, copyright marks, and category labels ("00001 / CAROUSEL") give content the authority of an archive. Metadata is decoration.

**Rust is rare.** The accent appears once or twice per view — an index number, a live CTA, a single underline. Overusing it collapses the tension the system depends on.

**Sharp by default.** Corners are square. Radius is reserved for pills (tags) and avatars. Softness is the exception that signals "interactive."

---

## 2. Color

OBSCURA runs on a warm neutral ramp (the "ink → paper" axis), a single rust accent ramp, four muted earthy semantic hues, and one special iridescent gradient reserved for rare "signal" moments (echoing the glitch strip in the reference).

### 2.1 Neutrals — the ink→paper ramp

Warm, brown-cast. Named by value 900 (darkest ink) → 050 (near paper).

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#14100B` | Primary dark surface, display text on paper |
| `--ink-800` | `#201811` | Raised dark surface |
| `--ink-700` | `#2C2118` | Dark card / espresso |
| `--ink-600` | `#3E2E20` | Umber — the turtleneck brown, dark accents |
| `--ink-500` | `#5A4636` | Muted brown, secondary dark text |
| `--ink-400` | `#7A6857` | Clay, disabled-on-dark, hairlines on paper |
| `--ink-300` | `#9C9086` | Ash, tertiary text |
| `--ink-200` | `#BAB3A8` | Stone — the reference background gray |
| `--ink-100` | `#D8D2C7` | Light rule / muted surface on paper |
| `--ink-050` | `#ECE7DD` | Bone — soft light surface |
| `--paper`   | `#F4F0E8` | Primary light surface / page |
| `--bone`    | `#EDE9E0` | Off-white text on dark surfaces |

### 2.2 Accent — rust

The one loud voice. `--rust-500` is the canonical accent.

| Token | Hex | Role |
|---|---|---|
| `--rust-700` | `#8F2F12` | Pressed / deep |
| `--rust-600` | `#B23C17` | Hover |
| `--rust-500` | `#CC4B1A` | **Primary accent** — CTAs, index numbers, live marks |
| `--rust-400` | `#E06A34` | Accent on dark, links on dark |
| `--rust-300` | `#EC8A5C` | Tint / subtle emphasis |

### 2.3 Semantic — muted & earthy

Desaturated so they never break the film-tone mood.

| Token | Hex | Meaning |
|---|---|---|
| `--success` | `#5E6B3E` | Olive — confirmed, active, in-stock |
| `--warning` | `#C08A2E` | Amber — caution, pending |
| `--danger`  | `#A83A28` | Brick — error, destructive |
| `--info`    | `#4A5A66` | Slate — neutral notice |

Each has a `-bg` companion at ~12% for soft fills (e.g. `--success-bg: #5E6B3E1F`).

### 2.4 Iridescent signal (special)

A rare gradient used for the "next / new / featured" marker — the soft chromatic strip from the reference. Never for large fills; only for a thin bar, a chip edge, or a hover sweep.

```
--iridescent: linear-gradient(100deg, #C9B6D6 0%, #A9C3D8 34%, #D8CBB6 66%, #E0B49C 100%);
```

### 2.5 Contrast & pairing rules

Body text must clear **WCAG AA (4.5:1)**. Safe pairings: `--ink-900`/`--ink-700` on `--paper`/`--bone`; `--bone`/`--ink-050` on `--ink-900`/`--ink-800`. `--rust-500` on `--paper` passes for large/bold text and UI, not small body copy — use `--rust-600` when rust text must be small. Never place `--ink-300`/`--ink-400` as body text on paper (decorative/metadata only).

---

## 3. Typography

Three voices, three jobs — modeled on the fin.ai register (Klim's *Financier Display* over a neutral grotesque): an economical **transitional serif** leads every headline; a **grotesque** carries UI and body; a **monospace** carries metadata, indices, and technical labels.

- **Display / Serif:** `Source Serif 4` (variable, optical sizing) — the closest open equivalent to Financier Display. **Weights: Display XL sits at 500 (medium); every other serif use is 300 (light) or 400 (regular). The serif is never bold.** Scale, not weight, carries the rest of the serif hierarchy. Always sentence case. Fallback: `Georgia, "Times New Roman", serif`. (Financier Display itself is the premium upgrade path.)
- **Sans / UI & body:** `Archivo` — the body voice, always. Permitted styles: *italic*, regular (400), medium (500), and bold (700). **Bold is reserved for emphasis inside running body text and used sparingly; UI chrome (buttons, labels, headers) tops out at medium.** No light weights. Fallback: `system-ui, sans-serif`.
- **Mono:** `Space Mono` (technical, catalog metadata). Fallback: `"IBM Plex Mono", ui-monospace, monospace`.

```
--font-display: "Source Serif 4", Georgia, "Times New Roman", serif;
--font-sans:    "Archivo", system-ui, -apple-system, sans-serif;
--font-mono:    "Space Mono", "IBM Plex Mono", ui-monospace, monospace;
```

### 3.1 Type scale

A big-contrast editorial scale. Display sizes use `clamp()` to stay dramatic but responsive.

| Token | Font / weight | Size (clamp) | Tracking | Use |
|---|---|---|---|---|
| `display-xl` | **Serif 500 (medium)**, sentence case | `clamp(3.4rem, 10vw, 8rem)` | `-0.028em`, lh 0.98 | Site title ("Design, catalogued.") |
| `display-l`  | **Serif 400** | `clamp(2.2rem, 5vw, 4rem)` | `-0.02em`, lh 1.04 | Section headline |
| `display-m`  | **Serif 400** | `clamp(1.6rem, 3vw, 2.4rem)` | `-0.016em`, lh 1.1 | Sub-hero, pull quotes, work titles |
| `h1` | Sans 500 | `2.25rem` | `-0.02em` | Page title |
| `h2` | Sans 500 | `1.75rem` | `-0.015em` | Section |
| `h3` | Sans 500 | `1.375rem` | `-0.01em` | Subsection |
| `h4` | Sans 500 | `1.125rem` | `0` | Card title |
| `body-l` | Sans 400 | `1.125rem` / 1.6 | `0` | Lead paragraph |
| `body` | Sans 400 | `1rem` / 1.65 | `0` | Default text |
| `body-s` | Sans 400 | `0.875rem` / 1.6 | `0` | Secondary |
| `caption` | Sans 400 | `0.75rem` | `0` | Captions |
| `overline` | Sans 500, UPPER | `0.75rem` | `0.18em` | Section labels ("DISCOVER:") |
| `mono-meta` | Mono 400, UPPER | `0.6875rem` | `0.12em` | Serial numbers, ©, page index |

### 3.2 Type rules

The signature pairing is a sentence-case serif-light `display-xl` line directly above `mono-meta`. A regular sans support line sits *above* the serif headline to create the two-tier lockup. **The serif is never set in all caps, never letter-spaced open, and never heavier than medium — and medium belongs to Display XL alone.** Its authority comes from size and the paper around it. Caps belong exclusively to the mono and sans overlines; bold belongs exclusively to body emphasis. Overlines stay uppercase, letter-spaced, colon-terminated (`DISCOVER:`). Numerals in the serif (serials like `00001`, prices, folio numbers) read as banknote figures — a deliberate echo of the engraving tradition. Three families maximum per surface, each in its lane: serif = headlines and editorial numbers, sans = UI and body, mono = metadata.

---

## 4. Spacing, grid & layout

**Base unit: 4px.** Spacing scale (`--space-*`): `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

**Column grid:** 12 columns, `--gutter: 24px`, max content width `--container: 1280px`, wide editorial `--container-wide: 1440px`. On mobile collapse to 4 columns.

**Rhythm:** vertical section padding `clamp(48px, 8vw, 128px)`. Cards pad `24–32px`. Metadata rows sit on a `16px` baseline.

**The rule line** (`--rule`) is `1px solid var(--ink-400)` at ~40% opacity on paper, or `var(--bone)` at ~20% on dark. Rules divide metadata rows, frame cards, and underline section labels. Registration ticks are 8–12px corner marks in rust or ink.

---

## 5. Shape, elevation & motion

**Radii:** `--radius-0: 0` (default), `--radius-sm: 2px` (inputs, subtle), `--radius-pill: 999px` (tags, avatars, toggles).

**Borders:** hairline `1px`; emphasis frame `1.5px`; focus ring `2px solid var(--rust-500)` with `2px` offset.

**Elevation:** OBSCURA is mostly flat. Two shadows only — `--shadow-1` (`0 1px 2px rgba(20,16,11,.10)`) for raised inputs/menus, and `--shadow-2` (`0 12px 40px rgba(20,16,11,.22)`) for modals/popovers. Prefer a hairline border over a shadow wherever possible.

**Motion:** duration `--dur-fast: 120ms`, `--dur: 200ms`, `--dur-slow: 380ms`. Easing `--ease: cubic-bezier(.2,.6,.2,1)` (standard), `--ease-out: cubic-bezier(0,.7,.2,1)` (entrances). Transitions are subtle — color, border, and 2–4px translations. The iridescent sweep and index-number tick are the only "showy" motions, used sparingly. Respect `prefers-reduced-motion`.

---

## 6. Illustration & imagery

OBSCURA's illustration voice is **copperplate line engraving** — the banknote-portrait (intaglio/burin) tradition. To be precise about the taxonomy, because adjacent styles get conflated: this is **not** a WSJ "hedcut" (which builds tone primarily from *stipple dots*), not a halftone screen, and not a woodcut (which is bolder, cruder line). It is *pure continuous line*: engraved strokes that swell and taper, laid in parallel banks that curve with the form, crossed into lozenge-pattern hatching where shadow deepens — exactly the technique on currency portraits.

**The five identifiers** (check any candidate image against these):

1. **Continuous curved line banks** — parallel strokes riding the surface topography like contour lines on a map (across a cheek, around the skull, along a collar).
2. **Cross-hatch = shadow** — a second and third bank crossing the first at 30–60°, forming the engraver's lozenge; density, not darkness of ink, makes the tone.
3. **Swelling line weight** — individual strokes thicken in shadow and thin to nothing toward light; highlights are *bare paper*, never white ink.
4. **Curl work in texture** — hair and beard drawn as looping, coiling strokes, not dots or smudges.
5. **Hard white ground, no midtone fill** — no gray washes, no dot screens, no gradients; every value is line-made.

Stipple may appear as a *tertiary* filler in transitions (a few dots between line banks), but line always dominates. If dots dominate, it's a hedcut — a different (and off-system) style.

**Why it fits.** The whole system is thin lines and boxes; engraving is thin lines making pictures. It also rhymes with the serif: transitional serifs and copperplate engraving come from the same era of printing. Photography reads too soft against the brutalist grid — an engraving reads archival, crafted, catalogued.

**Tone is density, not gray.** The scale runs highlight → light → mid → shadow → core: bare paper with sparse strokes at the highlight; one bank for light; two crossed banks for mid; three-to-four crossed, tightened banks for core shadow. Strokes ~0.9px at screen scale, round-capped.

**Lines follow form.** Contour before cross-hatch — the first bank always describes the surface. Straight parallel hatching is reserved for flat planes, backgrounds, and fabric (the ribbed-collar texture in the reference).

**Color treatment.**

- *Ink on paper (default).* Strokes are `--ink-900` on `--paper` — warm, never pure `#000` on `#fff`. This keeps illustration in the same film-tone world as everything else.
- *Inverted.* On a dark plate, flip to `--bone` strokes on `--ink-900`.
- *Rust duotone / spot.* One accent move only: either tint the whole engraving to a rust duotone, or leave it ink and let a single element (a collar, a rule, a background field) carry `--rust`. Never full color, never two accents.

**Framing.** Engravings live on the same plates as photography — a hairline frame, optional corner registration ticks, and a mono caption (`ENGRAVING · 00001`). Keep the art on a transparent or white ground so the plate's paper shows through. The striped "line-fabric" texture (a `repeating-linear-gradient` at ~58°) is a reusable companion for collars, bands, and dividers, in ink or rust.

**Producing the art — the image pipeline.** Every portrait and photo asset in the brand gets this treatment. Three routes, in order of fidelity: (1) commission an engraver/scratchboard artist (the gold standard — supply this section as the brief); (2) scan and threshold existing pen/scratchboard linework; (3) convert a photograph — high-contrast grayscale → *line-engraving* filter or hand-traced flow-field linework (never a halftone-dot or diffusion-dither filter) → clean-up to solid black strokes on white. Specs for conversions: line pitch ≈ 40–60 strokes across a face's width; line direction must follow facial topography, not run in one mechanical angle; keep highlights as open paper; deliver as vector or ≥2× raster so strokes stay crisp — engraving dies the moment it blurs. Then normalize to ink-on-paper and cap at one rust move.

**Do / don't.** Do build value from hatch density, curve lines with form, keep it monochrome with at most one rust move, and frame it like a catalog plate. Don't drop full-color or soft photographic art where an engraving is called for, don't use pure black on pure white, don't add a second accent, and don't stretch or low-res the linework — engraving lives or dies on crisp strokes.

## 7. Core components

Each entry lists intent, anatomy, variants, and states. All are rendered live in `obscura.html`.

**Buttons.** Anatomy: label (sans 600, optional uppercase), optional leading/trailing glyph, `44px` min height. Variants: `primary` (rust fill, bone text), `secondary` (ink outline, transparent), `ghost` (text only, rust underline on hover), `inverse` (bone fill on dark), `icon` (square). States: hover (darken one step), active (translateY 1px), focus (rust ring), disabled (40% opacity, no pointer). Radius `--radius-sm`.

**Index chip / serial tag.** The catalog signature: a mono, uppercase, letter-spaced label like `00001 / CAROUSEL` or `PAGE 01 · NEXT 02`. Rust variant for "live/featured," ink outline for neutral. Square corners.

**Pill tag.** Rounded category tag for lighter taxonomy (skills, filters). Sans 500, `--radius-pill`, hairline border, optional dot in a semantic color.

**Card (editorial plate).** A framed content block with a hairline border and optional corner registration ticks. Header row carries an index chip + title; body holds copy; footer holds a metadata row. Variants: `paper`, `dark`, `image` (media top, `4:5` or `16:9`), `spec` (data table body).

**Metadata row.** The `LABEL: value` pattern from the reference. Overline label in `--ink-400`, value in `--ink-700`, separated across a 2- or 4-up hairline grid. The backbone of footers, spec sheets, and captions.

**Registration / crop marks.** Decorative L-ticks or plus-marks at frame corners (8–12px), rust or ink. Purely aesthetic; mark the "plate."

**Inputs & forms.** Text field, textarea, select, search. Anatomy: overline label, field (`--radius-sm`, hairline border, `--paper`/`--ink-800` fill), helper/error caption. Focus = rust ring. Error = brick border + `--danger` caption. Checkbox/radio are square (checkbox) / pill (radio) with rust fill when checked. Toggle is a pill track, ink→rust on active.

**Navigation (header).** Left wordmark/monogram, center or right nav links (sans 500), a trailing index/CTA. A hairline sits under the bar. Mobile collapses to a monogram + menu button; the drawer is a dark ink field.

**Footer.** A dark ink field: large wordmark, column link groups under overline headers, and a bottom metadata rule (`© YEAR · LOCATION · v1.0`) in mono.

**Table / spec sheet.** Hairline rows, mono numerics (tabular), overline column headers, zebra optional at `--ink-050`. Right-align numbers.

**Pull quote / blockquote.** Oversized display-m quote with a rust left rule or a leading index chip; attribution in mono-meta.

**Alert / callout.** Hairline-framed strip with a semantic left border (4px) and matching icon; title in sans 600, body in body-s.

**Badge / status dot.** Small pill or dot in a semantic hue with mono label ("● ACTIVE").

**Progress / meter.** Thin `4px` track (`--ink-100`), rust fill, optional mono percentage. Segmented variant for multi-step.

**Avatar.** Pill/circle, `--radius-pill`, hairline ring; group stack with `-8px` overlap.

**Tooltip / popover.** Dark ink tooltip, bone text, mono-meta, `--shadow-2`, 8px offset, no arrow (a hairline connector optional).

**Modal / dialog.** Centered paper card, `--shadow-2`, hairline frame, corner ticks, dark scrim `rgba(20,16,11,.55)`.

**Divider.** The hairline rule, horizontal or vertical; "labeled divider" places an overline centered on the rule.

**Tabs.** Sans-medium labels on the section rule; the active tab carries a 2px rust underline. No fills, no pills.

**Breadcrumbs.** Mono uppercase with rust `/` separators; the current node in ink.

**Pagination.** 36px hairline squares with mono numerals; current page inverts to ink; ellipsis is unboxed.

**Accordion.** Hairline-framed items; sans-medium question with a rust `+` that rotates to `×`; sans answer in muted ink.

**Stepper.** Equal columns under a 2px top rule — rust for done, ink for current (marked with a rust middot), stone for upcoming; mono step numbers.

**Search & keys.** Standard field with a `⌘K` kbd chip inset right; kbd chips are mono in a hairline box with a doubled bottom edge.

**Editorial link.** Sans-medium with an inset rust underline that floods to a rust wash on hover. Footnote marks are mono superscripts in rust.

**Empty state.** A hairline box with a serif-light `00000` mark, a sans-medium line, and one secondary button — the archive waiting to be filled.

**Work-index / journal rows.** The list-as-catalog pattern: mono index or date, serif-regular title, metadata columns, and a hover-revealed rust arrow on a hairline row.

---

## 8. Website components

The website is a portfolio surface, redesigned around one oversized serif-light title.

**Navbar.** Hairline underline; FR monogram + serif wordmark left, sans links center-right, an availability badge (`● Available Q1 2027`) as the trailing element.

**Hero.** The defining move: a mono index crumb, then a **giant serif-medium title** — `clamp(3.4rem, 10vw, 8rem)`, weight 500, line-height 0.98, closed by a rust full stop ("Design, catalogued<span rust>.</span>") — followed by a sans lead, primary + ghost buttons, and a four-cell hairline metadata row (based in / focus / currently / contact).

**Work index.** Numbered project rows on hairlines: mono `01` · serif-regular project title · sans category · mono year · a rust arrow that appears on hover as the row shifts and tints `--ink-050`. The catalog as navigation.

**About split.** An engraved-portrait plate (white ground, corner ticks, mono caption) beside a serif-regular statement, sans paragraph, and an editorial link.

**Journal rows.** Date in mono, entry title in serif regular, rust arrow — the same row grammar as the work index at reading scale.

**Closing plate & footer.** A dark ink CTA plate with registration ticks and a single rust button; then the dark footer — serif-light name, sans link columns under overlines, mono legal rule.

Responsive: the giant title tracks the viewport via clamp; work rows drop category/year columns on mobile; the about split stacks.

## 9. Dashboard & data visualization

The dashboard is one cohesive surface, not loose cards: a title bar (serif-regular surface title + mono crumbs + range filter chips + export), a **hairline KPI band** (four cells divided by vertical rules — overline label, then value and sparkline sharing one baseline row, value left and trend right, with the signed mono delta beneath), a shared chart grid (line chart beside a capacity gauge and status list; column chart beside channel ranking), a records table with pills and status badges, and a mono rules-footer. Filter chips are mono, with the active range inverted to ink.

Charts speak in the OBSCURA voice: restrained, warm, and single-voiced. The cardinal rule from the rest of the system carries straight into data — **rust is the data color, and it is used with intent.** The palette is computed and validated, never eyeballed.

**Color by the job, not by decoration.**

- *Single series (the default).* Most charts plot one measure — revenue, output, a rate. Use `--rust-500` for the mark and nothing else needs a color. No legend box is required for a single series; the title names it.
- *A reference/comparison series.* When a "previous period" or benchmark line accompanies the primary one, draw it in a muted warm neutral (`--ink-300`) so it reads as recessive. Two series get a legend, and the current line is additionally distinguished by an end-dot and a direct end-label — identity never rests on color alone.
- *Magnitude (ranked bars, heat).* Use a **sequential rust ramp**, largest = darkest: `--rust-700 → --rust-600 → --rust-500 → --rust-400 → --rust-300`. Order carries meaning; direct value labels carry identity.
- *Polarity (variance up/down).* A diverging pair — rust (warm) against `--info` slate (cool) with a warm-gray midpoint. Never a hue at the midpoint.
- *Status (good/warn/serious).* The reserved semantics (`--success`, `--warning`, `--danger`, `--info`), always shipped with an icon or label, never color-alone, and never reused as a "series 4."

**Never a dual-axis chart.** Two measures of different scale become two charts, small multiples, or an indexed-to-100 line — one y-scale per plot, always.

**Mark specs.** Lines are `2px` with round joins and a `≥8px` end-marker carrying a `2px` surface ring. Columns/bars cap at `24px` thick with a `4px` rounded data-end and a square baseline; a `2px` surface gap separates adjacent bars. Area fills are the series hue at ~10% opacity — a wash, never a block. Gridlines and axes are hairline (`1px`), solid, one step off the surface (`--ink-100`), and recessive. Label selectively — the endpoint, the peak, the one series the story is about — never a number on every point.

**Text wears text tokens, never the data color.** Axis ticks, values, and legends use `--ink-400`/`--ink-700` in mono with `tabular-nums`; the colored mark beside them carries identity. Standalone figures (stat-tile values, hero numbers) use the proportional sans, not the display face.

**Components.**

- *Metric / stat tile.* Overline label (no colon) · large sans value (auto-compact: `1,284` / `12.9K` / `$4.2M`) · optional signed delta versus a named period (`--success` up-is-good, `--danger` down) · optional 12-point sparkline in rust with a current-period end-dot. Carries an index number to stay in the catalog.
- *Line / area chart.* Trend over time; crosshair-and-tooltip on hover by default.
- *Column chart.* Discrete volume per period; value on the peak cap, tooltip on the rest.
- *Ranking bars.* Horizontal, sequential rust by rank, right-aligned mono values.
- *Gauge / donut.* A meter in disguise — rust fill on a lighter-step track, one number in the center. Reserve for a single utilization or completion figure.
- *Meters & segments.* The `4px` rust-on-`--ink-100` track (§6) for progress; the segmented variant for multi-step state.

**Dark mode is selected, not flipped.** On an ink surface, step the accent up to `--rust-400`, drop gridlines to `rgba(bone,.1)`, and move axis text to `--ink-300`/`--ink-100`. A table view is always available so nothing is gated behind color, and every chart respects `prefers-reduced-motion`.

## 10. CTA banners

Three redesigned cross-medium calls to action, each holding the single-shout / single-accent rule in the serif-light voice.

**01 · Statement (bare, wide).** No fill at all — a serif-light line at `clamp(2.2rem, 5.8vw, 4.6rem)` between two **1.5px ink rules**, closed by a rust full stop, with a bottom row of mono metadata and one primary button. The most confident option; the paper is the banner. *Use for:* website section, deck closer, email banner.

**02 · Engraved plate (split).** A dark intaglio panel — the engraving on ink with a mono plate number — beside a paper panel with overline, serif-regular headline, sans copy, and primary + secondary buttons. *Use for:* landing section, proposal cover, social export.

**03 · Wire (inline, quiet).** A single hairline-bounded row: rust chip, short serif line, sans support, inline field + button. Belongs inside content. *Use for:* article inline, site footer, docs banner.

Rules: exactly one primary button; the serif stays light/regular; keep the mono metadata even when decorative; never two shouts in one banner.

## 11. Tokens reference (CSS custom properties)

```css
:root {
  /* Neutrals — ink → paper */
  --ink-900:#14100B; --ink-800:#201811; --ink-700:#2C2118; --ink-600:#3E2E20;
  --ink-500:#5A4636; --ink-400:#7A6857; --ink-300:#9C9086; --ink-200:#BAB3A8;
  --ink-100:#D8D2C7; --ink-050:#ECE7DD; --paper:#F4F0E8; --bone:#EDE9E0;

  /* Accent — rust */
  --rust-700:#8F2F12; --rust-600:#B23C17; --rust-500:#CC4B1A;
  --rust-400:#E06A34; --rust-300:#EC8A5C;

  /* Semantic */
  --success:#5E6B3E; --warning:#C08A2E; --danger:#A83A28; --info:#4A5A66;
  --success-bg:#5E6B3E1F; --warning-bg:#C08A2E1F;
  --danger-bg:#A83A281F; --info-bg:#4A5A661F;

  /* Special */
  --iridescent:linear-gradient(100deg,#C9B6D6 0%,#A9C3D8 34%,#D8CBB6 66%,#E0B49C 100%);

  /* Type */
  --font-display:"Source Serif 4",Georgia,"Times New Roman",serif;
  --font-sans:"Archivo",system-ui,-apple-system,sans-serif;
  --font-mono:"Space Mono","IBM Plex Mono",ui-monospace,monospace;

  /* Spacing */
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:24px;
  --space-6:32px; --space-7:48px; --space-8:64px; --space-9:96px; --space-10:128px;

  /* Layout */
  --gutter:24px; --container:1280px; --container-wide:1440px;

  /* Shape */
  --radius-0:0; --radius-sm:2px; --radius-pill:999px;
  --rule:1px solid rgba(122,104,87,.4);
  --rule-dark:1px solid rgba(237,233,224,.2);

  /* Elevation */
  --shadow-1:0 1px 2px rgba(20,16,11,.10);
  --shadow-2:0 12px 40px rgba(20,16,11,.22);

  /* Motion */
  --dur-fast:120ms; --dur:200ms; --dur-slow:380ms;
  --ease:cubic-bezier(.2,.6,.2,1); --ease-out:cubic-bezier(0,.7,.2,1);
}
```

---

## 12. Usage do / don't

Do lead the hierarchy with the sentence-case serif at light/regular; keep rust to one or two marks per view; let hairline rules and mono metadata carry the "catalog" feel; keep neutrals warm; square corners by default. Don't set the display serif in all caps, letter-space it, or push it past regular weight; don't use sans bold anywhere but body emphasis; don't introduce cold grays or pure black/white; don't fill large areas with rust or the iridescent gradient; don't let any family leave its lane (serif = headlines, sans = UI/body, mono = metadata); don't round corners except tags and avatars; don't drop the visible grid — the structure *is* the brand.

---

*OBSCURA v1.4 — the design system of Frank Rosignolo.*
