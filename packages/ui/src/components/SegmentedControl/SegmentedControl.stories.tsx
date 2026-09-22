import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from './SegmentedControl';

const meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: {
    label: 'Mode',
    defaultValue: 'synth',
    options: [
      { value: 'synth', label: 'Synth' },
      { value: 'drum', label: 'Drum' },
      { value: 'tape', label: 'Tape' },
    ],
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'synth', label: 'Synth' },
      { value: 'drum', label: 'Drum' },
      { value: 'sampler', label: 'Sampler', disabled: true },
    ],
  },
};
