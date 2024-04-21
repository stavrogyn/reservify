import type { Meta } from '@storybook/react';

import { TextInput } from './text_input'

export default {
  title: 'Shared/TextInput',
  component: TextInput,
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: 770,
          border: '1px solid black',
          borderRadius: '4px',
          padding: '16px',
          backgroundColor: '#f3f6ff',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>TextInput</h1>
          <p>Демо контейнер</p>
        </>
      ),
    },
  },
} as Meta;

const Template = () => {
  return <TextInput label="First name" />
};

export const Default = Template.bind({});
