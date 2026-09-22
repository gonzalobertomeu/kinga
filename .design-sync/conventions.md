## Using @kinga/ui components

**Design language.** Functional and minimal, after Dieter Rams (Braun) and Teenage Engineering: warm low-chroma neutrals, 1px borders, small radii, hard unblurred edges, and **one signal color — orange `--kinga-primary` — reserved for the single primary action on a screen**. Status colors (success/warning/danger) only mark state. Never add blurred drop shadows, gradients, or extra accent colors.

**Theme root.** Components work without a wrapper (light tokens live on `:root`), but always put `data-kinga-theme` on the app's root element — it sets page background, text color, and font. `"light"` is the default; `"dark"` swaps every token:

```jsx
const { Button, Card, Badge, Select } = window.KingaUi;
function App() {
  return (
    <div data-kinga-theme="light" style={{ minHeight: '100vh', padding: 24 }}>
      <Card style={{ maxWidth: 360 }}>
        <div style={{ fontFamily: 'var(--kinga-font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--kinga-muted)' }}>
          01 — Output
        </div>
        <h3 style={{ margin: '8px 0 16px', fontWeight: 500 }}>Tape recorder <Badge variant="success">Ready</Badge></h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <Select defaultValue="a"><option value="a">Track A</option><option value="b">Track B</option></Select>
          <Button variant="secondary">Cancel</Button>
          <Button>Record</Button>
        </div>
      </Card>
    </div>
  );
}
```

**Styling idiom: `--kinga-*` CSS custom properties, not classes.** Component class names are hashed (e.g. `_button_ffrn2_1`) — never reference them. For your own layout glue, use the tokens:

| Token | Use | Light / Dark |
|---|---|---|
| `--kinga-bg` | page background | `#f2f1ed` / `#161615` |
| `--kinga-fg` | text, strong borders | `#1a1a1a` / `#ecebe6` |
| `--kinga-surface` | Card, Input, panels | `#fbfaf7` / `#1f1f1d` |
| `--kinga-control` | secondary Button, Select face | `#e3e1db` / `#2e2e2b` |
| `--kinga-sunken` / `--kinga-raised` | recessed trays / keys rising out of them | `#d9d7d0`·`#f7f6f2` / `#232321`·`#3d3d39` |
| `--kinga-primary` / `--kinga-primary-fg` | the one primary action | `#ff5a1f` / text `#1a1a1a` |
| `--kinga-border` | 1px hairlines | `#d4d2cb` / `#3a3a36` |
| `--kinga-muted` | secondary text, labels | `#6e6c66` / `#9a988f` |
| `--kinga-success` `--kinga-warning` `--kinga-danger` (+ `-fg`) | state only | see `_ds_bundle.css` |

Non-color tokens: `--kinga-font-sans` (Helvetica stack, body), `--kinga-font-mono` (labels: uppercase, 11px, `letter-spacing: 0.06em`), `--kinga-radius-sm` 2px / `--kinga-radius` 4px / `--kinga-radius-lg` 6px, `--kinga-key-edge` (a key's hard 2px bottom lip, as `box-shadow`), `--kinga-recess-edge` (same, for recessed surfaces).

**Components.** Thin wrappers over native elements — they accept the element's own props plus `className` (merged, for layout only; color/shape comes from tokens).
- `Button` — `variant="primary"` (default, orange) or `"secondary"`. At most one primary per view.
- `Select` — a native `<select>` styled as a dropdown key; sizes to its content (min 8rem). For a full-width form field pass `style={{ width: '100%' }}`. The styled open list needs Chromium 135+; elsewhere it falls back to the OS list.
- `Input` — full width by default. `Checkbox` — takes a `label` string. `Badge` — mono label, `variant` `default|success|warning|danger`. `Card` — bordered `surface` container.

**Where the truth lives.** Link `styles.css` (it `@import`s `_ds_bundle.css`, the real compiled CSS and the authoritative token list for both themes). Per-component props and examples: `components/<group>/<Name>/<Name>.d.ts` and `<Name>.prompt.md`.
