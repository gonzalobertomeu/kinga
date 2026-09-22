import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberStepper } from './NumberStepper';

const meta = {
  title: 'Components/NumberStepper',
  component: NumberStepper,
  tags: ['autodocs'],
  args: {
    defaultValue: 120,
    min: 20,
    max: 300,
    'aria-label': 'Tempo',
  },
} satisfies Meta<typeof NumberStepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AtMinimum: Story = {
  args: { defaultValue: 20 },
};

export const Disabled: Story = {
  args: { disabled: true },
};
