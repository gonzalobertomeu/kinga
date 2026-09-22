import type { Meta, StoryObj } from '@storybook/react-vite';
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
          <div
            style={{
              marginTop: '0.5rem',
              fontFamily: 'var(--kinga-font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {toCssVar(token).replace('--kinga-', '')}
          </div>
          <div
            style={{
              fontFamily: 'var(--kinga-font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--kinga-muted)',
            }}
          >
            {toCssVar(token)}
          </div>
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
