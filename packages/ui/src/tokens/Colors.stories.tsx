import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../components/Label';
import { Stack } from '../components/Stack';
import { type ColorToken, lightColors } from './colors';

const toCssVar = (token: string) =>
  `--kinga-${token.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;

function Palette() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(9rem, 1fr))',
        gap: '1rem',
      }}
    >
      {(Object.keys(lightColors) as ColorToken[]).map((token) => (
        <div key={token}>
          <div
            style={{
              height: '4rem',
              borderRadius: 'var(--kinga-radius)',
              border: '1px solid var(--kinga-border)',
              background: `var(${toCssVar(token)})`,
            }}
          />
          <Stack gap={0} style={{ marginTop: 'var(--kinga-space-2)' }}>
            <Label as="span" style={{ color: 'var(--kinga-fg)' }}>
              {toCssVar(token).replace('--kinga-', '')}
            </Label>
            <Label as="span" style={{ textTransform: 'none' }}>
              {toCssVar(token)}
            </Label>
          </Stack>
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: 'Foundations/Colors',
  component: Palette,
} satisfies Meta<typeof Palette>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
