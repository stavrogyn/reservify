import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { FormHeader } from './form_header'

const meta = {
  title: 'business/FormHeader',
  component: FormHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'Form Header',
    subtitle: 'Subtitle',
  },
} satisfies Meta<typeof FormHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Form Header',
    subtitle: 'Subtitle',
  },
};
