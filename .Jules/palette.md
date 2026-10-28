# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-02-18 - Form Label Association & Live Region Feedback
**Learning:** In React form components, omitting explicit `htmlFor` and `id` linkage on labels and input fields prevents screen readers from properly identifying form control context during keyboard navigation. Additionally, feedback elements updated asynchronously (like copy confirmations or mailto dispatch statuses) require `role="status"` and `aria-live="polite"` to be announced without shifting focus.
**Action:** Always link form labels to controls using matching `htmlFor` and `id` pairs, add `focus-visible:ring-2` focus rings, and wrap dynamic message feedback in `role="status" aria-live="polite"` containers.
