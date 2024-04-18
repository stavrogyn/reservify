import type { Meta } from '@storybook/react';

import { FormHeader } from './form_header'

export default {
  title: 'Shared/FormHeader',
  component: FormHeader,
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
          <h1>FormHeader</h1>
          <p>Демо контейнер</p>
        </>
      ),
    },
  },
} as Meta;

const Template = () => {
  return <FormHeader title='TT Bistro' subtitle='19 Цара Уроша, Београд, Стари град' />
};

export const Default = Template.bind({});
