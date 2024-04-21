import type { Meta } from '@storybook/react';

import { TimePicker } from './time_picker'

export default {
  title: 'Shared/TimePicker',
  component: TimePicker,
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
          <h1>TimePicker</h1>
          <p>Демо контейнер</p>
        </>
      ),
    },
  },
} as Meta;

const Template = () => {
  return <TimePicker />
};

export const Default = Template.bind({});
