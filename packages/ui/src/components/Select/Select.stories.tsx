import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </>
    ),
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ManyOptions: Story = {
  args: {
    defaultValue: 'tape',
    children: (
      <>
        <option value="synth">Synth</option>
        <option value="drum">Drum</option>
        <option value="tape">Tape</option>
        <option value="sampler" disabled>
          Sampler
        </option>
        <option value="mixer">Mixer</option>
      </>
    ),
  },
};
