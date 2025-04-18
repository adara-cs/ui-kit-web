import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover.tsx';
import { Button } from '../Button';
import { Text } from '../Text';

const meta = {
  title: 'UI-Core/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerSlot: (ref, props) => <Button ref={ref} {...props}>Popover</Button>,
    children: (
      <>
        <Text size={3}>Привет! Я - Popover</Text>
        <Button variant='secondary' appearance='transparent'>Кнопка</Button>
      </>
    )
  },
};