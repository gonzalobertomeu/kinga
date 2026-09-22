import type { Meta, StoryObj } from '@storybook/react-vite';
import { Knob } from './Knob';

const meta = {
  title: 'Components/Knob',
  component: Knob,
  tags: ['autodocs'],
  args: {
    label: 'Cutoff',
    defaultValue: 65,
  },
} satisfies Meta<typeof Knob>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm', label: 'Res', defaultValue: 20 },
};

export const Disabled: Story = {
  args: { disabled: true },
};
