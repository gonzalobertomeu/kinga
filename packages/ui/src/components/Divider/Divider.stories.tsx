import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <Stack gap={3} style={{ maxWidth: '20rem' }}>
      <Text>Above</Text>
      <Divider {...args} />
      <Text>Below</Text>
    </Stack>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <Stack direction="horizontal" gap={3}>
      <Text>Left</Text>
      <Divider {...args} />
      <Text>Right</Text>
    </Stack>
  ),
};
