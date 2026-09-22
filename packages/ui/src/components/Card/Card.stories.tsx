import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '../Heading';
import { Label } from '../Label';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    style: { maxWidth: '20rem' },
    children: (
      <Stack gap={1}>
        <Label as="span">01 — Output</Label>
        <Heading level={3}>Card title</Heading>
        <Text size="sm" tone="muted">
          Some supporting content goes here.
        </Text>
      </Stack>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
