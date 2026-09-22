## Using @kinga/ui components

**Design language.** Functional and minimal, after Dieter Rams (Braun) and Teenage Engineering: warm low-chroma neutrals, 1px borders, small radii, hard unblurred edges, a 4px spacing grid, and **one signal color — orange `--kinga-primary` — reserved for the single primary action on a screen**. Status colors only mark state. Never add blurred shadows, gradients, or extra accent colors.

**Theme root.** Components work without a wrapper (light tokens live on `:root`), but always put `data-kinga-theme` on the app's root element — it sets page background, text color and font. `"light"` is the default; `"dark"` swaps every token.

**Compose with the primitives, not inline styles.** Layout = `Stack`; text = `Heading` / `Text` / `Label`; forms = `Field` around each control. Only reach for `style` for widths or grid layouts, and then use tokens.

```jsx
const { Stack, Card, Label, Heading, Text, Badge, Field, Input, Select, RadioGroup, Radio, Button, Divider } = window.KingaUi;
function App() {
  return (
    <div data-kinga-theme="light" style={{ minHeight: '100vh', padding: 'var(--kinga-space-6)' }}>
      <Card style={{ maxWidth: 400 }}>
        <Stack gap={5}>
          <Stack gap={1}>
            <Label as="span">01 — Output</Label>
            <Stack direction="horizontal" gap={2} align="center">
              <Heading level={2}>Tape recorder</Heading>
              <Badge variant="success">Ready</Badge>
            </Stack>
            <Text tone="muted" size="sm">Records the master bus to disk.</Text>
          </Stack>
          <Field label="File name" hint="Saved to /takes." required>
            <Input placeholder="take-01" />
          </Field>
          <Field label="Format">
            <Select defaultValue="wav"><option value="wav">WAV</option><option value="flac">FLAC</option></Select>
          </Field>
          <RadioGroup label="Channels" direction="horizontal">
            <Radio value="mono" label="Mono" defaultChecked />
            <Radio value="stereo" label="Stereo" />
          </RadioGroup>
          <Divider />
          <Stack direction="horizontal" gap={2} justify="end">
            <Button variant="secondary">Cancel</Button>
            <Button>Record</Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
}
```

**Components.** Thin wrappers over native elements: they accept the element's own props plus `className` (merged; for layout only — color/shape come from tokens). Class names are hashed; never reference them.
- **Layout** — `Stack` (`direction` vertical|horizontal, `gap` 0–8 on the space scale, default 3; `align`, `justify` start|center|end|between, `wrap`). `Divider` (`orientation`).
- **Type** — `Heading` (`level` 1|2|3; `as` to decouple the tag). `Text` (`size` sm|md|lg, `tone` default|muted; renders `p`, `as` span|div). `Label` — mono uppercase caption; `as="span"` for section captions like `01 — Output`. None have margins — space them with `Stack`.
- **Forms** — wrap every `Input` / `Select` / `Textarea` in `Field` (`label`, `hint`, `error`, `required`); it wires id and aria automatically and `error` turns the border red. `Checkbox` and `Radio` take a `label` string; group radios in `RadioGroup` (`label`, `name`, `direction`). `Select` is a dropdown key sized to its content (full width inside a `Field`); its styled open list needs Chromium 135+.
- **Actions & display** — `Button` (`variant` primary|secondary; at most one primary per view). `Badge` (`variant` default|success|warning|danger). `Card` — bordered `surface` container.

**Tokens** (`var(--kinga-*)`). Color, light / dark:

| Token | Use | Light / Dark |
|---|---|---|
| `bg` / `fg` | page background / text | `#f2f1ed`·`#1a1a1a` / `#161615`·`#ecebe6` |
| `surface` | Card, Input, panels | `#fbfaf7` / `#1f1f1d` |
| `control` | secondary Button, Select face | `#e3e1db` / `#2e2e2b` |
| `sunken` / `raised` | recessed trays / keys rising out of them | `#d9d7d0`·`#f7f6f2` / `#232321`·`#3d3d39` |
| `primary` (+`-fg`) | the one primary action | `#ff5a1f` |
| `border` / `muted` | hairlines / secondary text | `#d4d2cb`·`#6e6c66` / `#3a3a36`·`#9a988f` |
| `success` `warning` `danger` (+`-fg`) | state only | see `_ds_bundle.css` |

Space: `--kinga-space-0…8` = 0, 4, 8, 12, 16, 24, 32, 48, 64px (the same steps `Stack gap` takes). Also `--kinga-font-sans`, `--kinga-font-mono`, `--kinga-radius-sm|radius|radius-lg` (2/4/6px), `--kinga-key-edge` / `--kinga-recess-edge` (hard 2px lips as `box-shadow`).

**Where the truth lives.** Link `styles.css` (it `@import`s `_ds_bundle.css` — the compiled CSS and authoritative token list for both themes). Per-component props and examples: `components/<group>/<Name>/<Name>.d.ts` and `<Name>.prompt.md`.
