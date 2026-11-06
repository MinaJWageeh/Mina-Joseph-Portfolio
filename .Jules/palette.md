# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-03-30 - Form Field Associations & Live Status Feedback in Dark/Light Portfolios
**Learning:** In portfolio contact forms, having unassociated labels prevents assistive technology users from understanding input context on focus, and clicking labels fails to focus the inputs. Furthermore, clipboard copy actions and mailto dispatch notifications require `role="status"` and `aria-live="polite"` so screen reader users receive immediate feedback without interrupting focus.
**Action:** Always link form labels explicitly using `htmlFor` and `id`, provide dynamic `aria-label` feedback on copy actions, and wrap asynchronous notifications in an accessible live region.
