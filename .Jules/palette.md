# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-05-18 - Keyboard Scrollability & Copy Affordance for Modal Code Snippets
**Learning:** In project deep-dive modals featuring code snippets (`overflow-x-auto`), keyboard-only users cannot scroll wide lines of code without a focusable container (`tabIndex={0}`). Furthermore, technical visitors inspecting architectural code expect a single-click copy affordance with accessible screen-reader feedback (`aria-live="polite"`).
**Action:** Always ensure code containers with `overflow-x-auto` have `tabIndex={0}` and descriptive `aria-label`, paired with a copy action button that provides immediate visual and screen reader state updates.
