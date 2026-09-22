import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Tape recorder',
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Levels: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--kinga-space-3)' }}>
      <Heading {...args} level={1} />
      <Heading {...args} level={2} />
      <Heading {...args} level={3} />
    </div>
  ),
};
