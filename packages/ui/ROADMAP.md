# @kinga/ui — Roadmap

What's left to build, in rough priority order. Every item follows the design
language in [CLAUDE.md](./CLAUDE.md): functional, Braun/Teenage Engineering,
one signal color, hard edges, 4px grid.

**Built:** Badge, Button, Card, Checkbox, Divider, Field, Heading, Input, Label,
Radio, RadioGroup, Select, Stack, Text, Textarea.

---

## 1. Identity controls

The physical-instrument vocabulary. Cheap to build, and the pieces that most
reinforce the system's character.

- [ ] **Switch** — two-position toggle read as a physical switch; "on" lights the
  orange lamp. Native `<input type="checkbox" role="switch">`.
- [ ] **SegmentedControl** — a row of keys; the active one latches down (same
  sunken/raised metaphor as the open Select). Radio-group semantics.
- [ ] **Slider** — fader with tick marks and a mono numeric readout. Native
  `<input type="range">` styled.
- [ ] **NumberStepper** — mono value display between − / + keys.
- [ ] **Meter / Progress** — segmented bar (VU-meter style), not a smooth fill.
  Native `<meter>` / `<progress>` semantics.
- [ ] **Knob** — rotary control, the most TE piece. Needs `role="slider"`,
  keyboard (arrows / PageUp / Home / End) and drag; hardest to make accessible,
  so build after Slider.

## 2. Feedback and overlays

Needed by almost every product. More a11y work: focus, Escape, portals/top layer.

- [ ] **Dialog** — on native `<dialog>` (top layer, focus trap, Escape for free).
  Surface + 1px border, no blurred shadow; backdrop in `bg` at partial opacity.
- [ ] **Popover** — on the Popover API + CSS anchor positioning (same
  technique as Select's picker).
- [ ] **Tooltip** — small mono label, hard edge, no arrow unless needed.
- [ ] **Menu / DropdownMenu** — action list reusing the Select tray: sunken
  panel, raised-key hover, keyboard roving focus.
- [ ] **Toast** — transient message stack; status via a lamp dot, not a full
  colored background.
- [ ] **Alert** — inline, persistent message (info / success / warning / danger).
- [ ] **Spinner / Activity** — blinking lamp or stepped segments rather than a
  spinning ring; respects `prefers-reduced-motion`.

## 3. Navigation

- [ ] **Tabs** — keys that latch (shares visuals with SegmentedControl, but with
  tab/tabpanel semantics).
- [ ] **Link** — underline-on-hover text link; `as` for router links.
- [ ] **Breadcrumbs** — mono separators.
- [ ] **Pagination** — numbered keys + prev/next.
- [ ] **NavList / Sidebar** — vertical nav with an active-lamp indicator.
- [ ] **Toolbar** — horizontal group of keys with roving tabindex.

## 4. Data display

- [ ] **Table** — hairline rows, mono column headers (Label style), numeric
  columns right-aligned in tabular mono figures; sortable header keys.
- [ ] **List / ListItem** — plain and interactive variants.
- [ ] **DataList (key–value)** — Label + value pairs, for detail panels.
- [ ] **Readout / Stat** — large mono number, LCD-display feel, with unit and
  optional delta.
- [ ] **Tag / Chip** — like Badge but removable/selectable.
- [ ] **Avatar** — initials fallback, square with small radius (not a circle by
  default — to discuss).
- [ ] **Kbd** — keyboard key glyph, uses `--kinga-key-edge`.
- [ ] **EmptyState** — Label + Heading + Text + action, composed from primitives.

## 5. Complex inputs

- [ ] **SearchInput** — Input with icon and clear key.
- [ ] **Combobox / Autocomplete** — filterable list in the Select tray style;
  ARIA combobox pattern.
- [ ] **TagInput / MultiSelect** — chips inside a field.
- [ ] **FileDrop** — dashed recess (`sunken`) that raises on drag-over.
- [ ] **DatePicker** — calendar grid as a key matrix; large build, do last.
- [ ] **OTP / CodeInput** — segmented mono cells.

## 6. Layout and app shell

- [ ] **Container** — max-width + gutters on the space scale.
- [ ] **Grid** — CSS grid helper with `columns` and `gap` on the space scale.
- [ ] **Panel** — `sunken` recessed region (the tray metaphor as a layout
  surface).
- [ ] **Disclosure / Accordion** — on native `<details>/<summary>`.
- [ ] **AppShell** — header / sidebar / content slots.
- [ ] **ScrollArea** — thin, hard-edged scrollbars.

---

## Foundations still missing

- [ ] **Icon set** — line icons on a 16/24px grid, 1.5px stroke, square caps;
  shipped as React components. Many items above depend on it.
- [ ] **Type tokens** — font sizes/line heights as `--kinga-text-*` vars
  (today they live only inside Text/Heading CSS).
- [ ] **Motion tokens** — `--kinga-duration-fast` (60ms, key press) and
  `--kinga-duration` (120ms, state change); one easing.
- [ ] **Layering tokens** — z-index scale for dropdown / popover / dialog / toast.
- [ ] **Focus token** — shared focus-ring definition (today repeated per
  component: fg ring for keys, primary ring for fields).
- [ ] **`--kinga-key-edge-on-sunken`** — the stronger key lip used inside the
  Select tray, promoted to a token once a second use appears (Menu, Toolbar).
- [ ] **Foundations pages** in Storybook — Spacing and Typography next to Colors
  (excluded from design-sync via `titleMap`).

## Known debt

- Select's styled dropdown needs Chromium 135+ (`appearance: base-select`);
  other browsers fall back to the OS list.
- `danger` text on the light `bg` is ~4.3:1 — just under WCAG AA for small text.
  Darken `danger` slightly or reserve it for borders/badges.
- Checkbox is not wired into `Field` (it carries its own label). Decide whether
  a `CheckboxGroup` (fieldset, like RadioGroup) is needed.
- No JSDoc on most components → design-sync reports `docs: 0/15`; the agent's
  `.prompt.md` files would be richer with prop docs.
- No visual regression tests; design-sync's compare harness is the only visual
  check, and it can't see open states (Select tray, hover keys).
