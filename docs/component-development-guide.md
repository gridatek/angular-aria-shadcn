# Component Development Guide

A 3-stage approach for building accessible UI components with Angular ARIA and shadcn styling.

---

## Stage 1: Raw ARIA Example

Start with an example from Angular ARIA documentation.

**Goal:** Make it work with original styling.

- Copy the example exactly as provided
- Understand how the ARIA primitives work together
- Verify accessibility (keyboard navigation, screen reader)
- Keep original CSS/styling untouched

**Location:** `src/app/examples/aria-{component}.ts`

---

## Stage 2: ARIA + shadcn Styles

Create an exact copy of Stage 1, but replace styling with Tailwind/shadcn.

**Goal:** Same code structure, different styles.

- Copy Stage 1 component
- Replace CSS classes with Tailwind utilities
- Use shadcn design tokens (colors, spacing, borders)
- Keep minimal custom CSS only when Tailwind can't handle it
- Behavior must be identical to Stage 1

**Location:** `src/app/examples/aria-styled-{component}.ts`

---

## Stage 3: SC Wrapper Components

Create reusable wrapper components that encapsulate the ARIA complexity.

**Goal:** Clean, simple API for end users.

- Hide ARIA implementation details
- Provide intuitive markup structure
- Encapsulate styles (users don't write classes)
- Split into multiple small components
- Use `sc-` prefix for selectors

**Location:** `src/app/ui/{component}/`

---

## Summary

| Stage            | Purpose               | Styling      | Location                    |
| ---------------- | --------------------- | ------------ | --------------------------- |
| 1. Raw ARIA      | Make it work          | Original     | `examples/aria-*.ts`        |
| 2. ARIA + shadcn | Same code, new styles | Tailwind     | `examples/aria-styled-*.ts` |
| 3. SC Wrappers   | Clean API             | Encapsulated | `ui/{component}/`           |

This approach ensures accessibility is never broken by styling changes.
