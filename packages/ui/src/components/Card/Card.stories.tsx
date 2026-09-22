import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    style: { maxWidth: '20rem' },
    children: (
      <>
        <div
          style={{
            fontFamily: 'var(--kinga-font-mono)',
            fontSize: '0.6875rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--kinga-muted)',
            marginBottom: '0.5rem',
          }}
        >
          01 — Output
        </div>
        <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 500 }}>Card title</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--kinga-muted)' }}>
          Some supporting content goes here.
        </p>
      </>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
