import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: 60,
    'aria-label': 'Volume',
    style: { maxWidth: '20rem' },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTicks: Story = {
  args: { ticks: 11, step: 10, defaultValue: 40, formatValue: (v: number) => `${v}%` },
};

export const Disabled: Story = {
  args: { disabled: true },
};
