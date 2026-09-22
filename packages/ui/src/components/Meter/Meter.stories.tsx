import type { Meta, StoryObj } from '@storybook/react-vite';
import { Meter } from './Meter';

const meta = {
  title: 'Components/Meter',
  component: Meter,
  tags: ['autodocs'],
  args: {
    value: 55,
    label: 'Input level',
    showValue: true,
    style: { maxWidth: '20rem' },
  },
} satisfies Meta<typeof Meter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Zones: Story = {
  args: {
    value: 88,
    warning: 70,
    danger: 85,
    formatValue: (v: number) => `${Math.round((v / 100) * 60 - 60)} dB`,
  },
};
