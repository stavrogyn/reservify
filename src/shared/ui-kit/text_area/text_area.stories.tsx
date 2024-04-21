import type { Meta } from '@storybook/react';

import { TextArea } from './text_area'

export default {
  title: 'Shared/TextArea',
  component: TextArea,
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
          <h1>TextArea</h1>
          <p>Демо контейнер</p>
        </>
      ),
    },
  },
} as Meta;

const Template = () => {
  return <TextArea label="Special requests" defaultValue="" />
};

export const Default = Template.bind({});
