## Using @kinga/ui components

**No wrapping required.** Components render standalone — there is no ThemeProvider, context, or root wrapper to set up. Mount directly:

```jsx
const { Button } = window.KingaUi;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Button>Save</Button>);
```

**Styling idiom: CSS custom properties, not utility classes.** Components ship with their real class names scoped/hashed at build time (e.g. `_button_ffrn2_1`) — never reference those hashed class names directly, they are implementation detail and change on every rebuild. Instead, style through the component's documented CSS custom properties, set on the component itself or any ancestor (they inherit down the DOM):

| Property | Controls | Default |
|---|---|---|
| `--kinga-fg` | default text color (Card, Input, Select, Checkbox label, default Badge) | `#f5f6f7` |
| `--kinga-surface` | raised surface background (Card, Input, Select) | `#14171b` |
| `--kinga-primary` | Button background, Checkbox accent, focus outline | `#5b8cff` |
| `--kinga-primary-fg` | text on primary (Button) | `#0b0d10` |
| `--kinga-border` | border color; default Badge background | `#2a2e35` |
| `--kinga-muted` | secondary text (Input placeholder) | `#8a9099` |
| `--kinga-success` / `--kinga-success-fg` | success Badge background / text | `#22c55e` / `#0b0d10` |
| `--kinga-warning` / `--kinga-warning-fg` | warning Badge background / text | `#eab308` / `#0b0d10` |
| `--kinga-danger` / `--kinga-danger-fg` | danger Badge background / text | `#ef4444` / `#f5f6f7` |

To re-skin a section of a design, set these on a wrapping element:

```jsx
<div style={{ '--kinga-primary': '#16a34a', '--kinga-primary-fg': '#ffffff' }}>
  <Button>Confirm</Button>
</div>
```

**Layout/spacing via `className`.** Every component accepts a plain `className` (merged alongside its internal scoped class, never replacing it) plus the native element's own attributes (`onClick`, `disabled`, `type`, etc., since components are thin wrappers over their native HTML element). Use `className` for layout/spacing utility classes from the host app; use the `--kinga-*` properties above for on-brand recoloring — don't try to override styling via `className` alone, the internal scoped class always wins for color/border/shape.

**Where the truth lives.** `styles.css` is the single stylesheet to link — it `@import`s `_ds_bundle.css`, which holds every component's real compiled CSS (including the `--kinga-*` custom properties above; grep it for the authoritative, current list, since it's real and will grow as the design system does). Per-component usage examples and prop types live at `components/<group>/<Name>/<Name>.prompt.md` and `<Name>.d.ts`.
