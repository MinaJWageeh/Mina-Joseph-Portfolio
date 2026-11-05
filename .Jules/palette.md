# Palette's Journal - Critical Learnings Only

## 2025-11-05 - Fixed Navigation Overlay & Skip Links
**Learning:** Fixed header navbars with `backdrop-blur` and high `z-index` (e.g. `z-50`) will visually overlap standard top-positioned skip-to-content links if the skip link has low z-index or standard `top-4 left-4` coordinates. Elevating the skip link to `z-[60]` with a pill container (`bg-[#84b8ad] text-slate-950 font-medium rounded-full shadow-lg outline-none ring-2 ring-offset-2 ring-[#84b8ad]`) ensures crisp visibility and clear hierarchy when keyboard users hit Tab.
**Action:** When designing skip links on pages with sticky or floating glassmorphic navbars, verify z-index and use high-contrast pill styling that sits neatly above floating navigation components.
