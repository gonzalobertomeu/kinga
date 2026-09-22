import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <h3 style={{ margin: '0 0 0.5rem' }}>Card title</h3>
        <p style={{ margin: 0 }}>Some supporting content goes here.</p>
      </>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
