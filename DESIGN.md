# Design System Specification — Mina Joseph Portfolio

## 1. Brand Identity & Creative Direction
- **Identity:** Creative Systems Developer & High-Performance Full-Stack Architect
- **Atmosphere:** Deep architectural slate, warm ivory editorial typography, and calming organic sage-teal accent.
- **Design Philosophy:** Calm luxury, mathematical rigor, eye-comfort during extended viewing, zero visual noise or neon glare.

---

## 2. Design Tokens

### Color Palette (Dark Mode - Primary)
Extracted directly from the user's design reference:
- **Background (Canvas):** `#11151B` — Soft charcoal-slate (eliminates eye-straining pitch black `#010102`).
- **Surface (Card & Panels):** `#1D242D` — Deep slate-charcoal elevated card surface.
- **Surface Hover / Sub-panel:** `#252E3A` — Lifted interactive state.
- **Text (Primary Ink):** `#E9E7E1` — Warm eggshell / soft ivory cream (eliminates harsh `#FFFFFF` glare).
- **Muted (Secondary & Metadata):** `#AAB5C2` — Muted soft slate-silver for captions, labels, and secondary details.
- **Accent (Creative Signature):** `#84B8AD` — Calm sage-teal / mint jade (interactive CTAs, active highlights, key metrics).
- **Accent Hover:** `#98C8BE` — Soft luminous sage.
- **Hairline Borders:** `#27313D` — Subtle 1px structural hairline (low-contrast, structured).
- **Hairline Strong:** `#354353` — Focus and active borders.
- **Glow / Shadow:** `rgba(132, 184, 173, 0.12)` — Calm diffuse ambient glow.

### Color Palette (Light Mode - Harmonious Sister)
Designed to preserve the exact same tranquil, premium character without blinding white glare:
- **Background (Canvas):** `#F4F6F8` — Soothing warm paper-slate (replaces bright blinding `#FFFFFF`).
- **Surface (Card & Panels):** `#FFFFFF` — Crisp elevated card surface with soft diffuse shadow.
- **Surface Hover / Sub-panel:** `#EBF0F5` — Soft neutral gray.
- **Text (Primary Ink):** `#11151B` — Deep ink slate for crisp legibility (WCAG AAA compliant).
- **Muted (Secondary & Metadata):** `#556475` — Slate secondary for comfortable reading.
- **Accent (Creative Signature):** `#2A7366` — High-contrast deep jade sage (WCAG AA accessible against light canvas).
- **Accent Hover:** `#205C52` — Rich deep teal.
- **Hairline Borders:** `#D9E1EA` — Soft, crisp 1px border.
- **Hairline Strong:** `#C5D0DC` — Elevated boundary.
- **Glow / Shadow:** `rgba(42, 115, 102, 0.08)` — Subtle, warm ambient shadow.

---

## 3. Typography Hierarchy
- **Display XL (Hero):** 56px–72px, font-bold, tracking: `-0.035em`, line-height: `1.08`
- **Display LG (Section Headings):** 36px–44px, font-bold, tracking: `-0.025em`, line-height: `1.15`
- **Display MD (Card Titles):** 20px–24px, font-semibold, tracking: `-0.015em`, line-height: `1.25`
- **Body LG (Intro & Subhead):** 18px–20px, font-normal, line-height: `1.6`, text: Muted / Eggshell
- **Body (Default):** 15px–16px, font-normal, line-height: `1.6`
- **Caption & Labels:** 12px–13px, font-mono, tracking: `0.04em`, uppercase
- **Mono:** JetBrains / SF Mono fallback for code, terminal, and technical metrics

---

## 4. Spacing, Borders & Radius Scale
- **Radius:**
  - `rounded-full` (9999px): Interactive CTA pills, filter tags, status pills, floating badges.
  - `rounded-2xl` (16px): Content containers, featured project cards, bento boxes.
  - `rounded-xl` (12px): Inner metric tiles, inputs, modal dialogs.
  - `rounded-lg` (8px): Code snippets, small badges.
- **Spacing Scale:**
  - Section vertical rhythm: `py-20` to `py-24` (80px to 96px)
  - Card inner padding: `p-6` to `p-8` (24px to 32px)
  - Grid gutters: `gap-6` (24px)
- **Container Max-Width:** `max-w-6xl` (1152px) centered with responsive padding `px-4 sm:px-6 lg:px-8`

---

## 5. Micro-Interactions & Animation Standards
- **Duration:** 200ms–300ms cubic-bezier(0.16, 1, 0.3, 1)
- **Hover Lift:** `translate-y-[-2px]` to `[-3px]` with subtle ambient shadow.
- **Floating Badges:** Smooth 5s–6s floating ease without jerky oscillation.
- **Buttons:** Smooth accent hover with text color inversion (`bg-[#84B8AD]` with `text-[#11151B]`).
