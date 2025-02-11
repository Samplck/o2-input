import type { Meta, StoryObj } from '@storybook/react';

import O2Input from './O2Input';

const meta = {
  title: 'Molecules/O2Input',
  component: O2Input,
  tags: ['autodocs'],
  args: { 
    label: {
      text: 'Input',
      description: 'Optional'
    },
    disabled: false,
    placeholder: 'Placeholder'
  },
} satisfies Meta<typeof O2Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OK: Story = {
  args: {
    defaultStatus: 'ok'
  }
};

export const Warning: Story = {
  args: {
    defaultStatus: 'warning'
  }
};

export const Error: Story = {
  args: {
    defaultStatus: 'error'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
