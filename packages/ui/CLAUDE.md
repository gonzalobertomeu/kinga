# @kinga/ui — design system

Shared React component library for every product in the kinga monorepo. The
products differ in kind, so components stay generic: no product-specific props.

Pending work lives in [ROADMAP.md](./ROADMAP.md) — check it before building a
new component, and tick items off / add notes there when you finish one.

## Design language

Functional and minimal, after **Dieter Rams (Braun)** and **Teenage Engineering**.

- **Color carries meaning only.** Warm low-chroma neutrals; one signal color,
  orange `--kinga-primary`, for the single primary action on a view. Status
  colors (success/warning/danger) only mark state. No extra accents.
- **Hard physical edges.** 1px borders, radii 2/4/6px. Relief is drawn with
  unblurred lips — `--kinga-key-edge` (raised key, 2px below) and
  `--kinga-recess-edge` (recessed, 2px above). Never blurred drop shadows or
  gradients.
- **Keys vs surfaces.** Things you press (Button, Select, options) look like
  keys: `control` face + key edge, drop 1px on `:active`. Things you type into
  (Input, Textarea) are flat `surface` fields. Open/active containers recess to
  `sunken`; items rising from them use `raised`.
- **Lamps.** Selected state is an orange indicator (Checkbox square, Radio dot,
  Select option marker), not a filled control.
- **Instrument labels.** Captions are mono, uppercase, 11px, `0.06em` tracking
  (`Label`).
- **4px grid.** All spacing via `--kinga-space-0..8` / `Stack gap`.
- **Two themes.** Light is default (`:root`); `data-kinga-theme="dark"` on any
  ancestor swaps every token. Check both themes for every change.

## Code conventions

- One folder per component in `src/components/<Name>/`: `<Name>.tsx`,
  `<Name>.module.css`, `<Name>.stories.tsx`, `index.ts`; export it from
  `src/index.ts`.
- Components are thin wrappers over the native element: spread its props, merge
  `className` after the internal class, no margins on the component itself.
- CSS uses only `var(--kinga-*)` tokens — no hard-coded colors or fallbacks.
  Tokens live in `src/tokens/theme.css`, mirrored in `colors.ts` / `space.ts`;
  tests fail if they drift, so change both.
- Form controls call `useFieldControl(props)` so `Field` can wire id/aria.
- Prefer native platform features over JS (`<dialog>`, Popover API,
  `appearance: base-select`, `<details>`), as progressive enhancement.
- Story titles are `Components/<ExportName>` — design-sync pairs stories to
  exports by that name. Non-component pages go under `Foundations/` and must be
  excluded in `.design-sync/config.json` `titleMap`.

## Commands (from `packages/ui`)

- `bun run storybook` — dev server on :6006 (has a Light/Dark toolbar toggle)
- `bun test` · `bun run typecheck` · `bun run lint` · `bun run build`

## Syncing to Claude Design

The DS is synced to the claude.ai design project "Kinga UI" with `/design-sync`
(config, notes and agent-facing conventions in `/.design-sync/`). When a
component's API or the design rules change, update
`.design-sync/conventions.md` in the same change — it's what the design agent
reads. `.design-sync/NOTES.md` lists the sync's known risks.
