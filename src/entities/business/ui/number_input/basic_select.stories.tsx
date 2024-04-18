import type { Meta } from '@storybook/react';

import { BasicSelect } from './basic_select'

export default {
  title: 'Shared/BasicSelect',
  component: BasicSelect,
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
          <h1>BasicSelect</h1>
          <p>Демо контейнер</p>
        </>
      ),
    },
  },
} as Meta;

const Template = () => {
  return <BasicSelect />
};

export const Default = Template.bind({});
