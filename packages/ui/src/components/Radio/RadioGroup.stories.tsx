import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    label: 'Output',
    children: (
      <>
        <Radio value="mono" label="Mono" defaultChecked />
        <Radio value="stereo" label="Stereo" />
        <Radio value="surround" label="Surround" disabled />
      </>
    ),
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};

export const Horizontal: Story = {
  args: { direction: 'horizontal' },
};
