import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { Field } from './Field';

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    style: { maxWidth: '20rem' },
    children: <Input type="email" placeholder="you@example.com" />,
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: 'Used for sign-in only.' },
};

export const WithError: Story = {
  args: { error: 'Enter a valid email address.', required: true },
};

export const WithSelect: Story = {
  args: {
    label: 'Track',
    children: (
      <Select defaultValue="a">
        <option value="a">Track A</option>
        <option value="b">Track B</option>
      </Select>
    ),
  },
};

export const WithTextarea: Story = {
  args: {
    label: 'Notes',
    hint: 'Markdown is not supported.',
    children: <Textarea placeholder="Write something…" />,
  },
};
