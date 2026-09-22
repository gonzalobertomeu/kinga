import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Stack } from './Stack';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Button variant="secondary">One</Button>
        <Button variant="secondary">Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { align: 'start' },
};

export const Horizontal: Story = {
  args: { direction: 'horizontal', gap: 2 },
};
