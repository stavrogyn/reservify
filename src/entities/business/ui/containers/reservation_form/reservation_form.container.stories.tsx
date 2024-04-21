import type { Meta } from '@storybook/react';

import { ReservationFormContainer } from './reservation_form.container'

export default {
  title: 'Business/ReservationFormContainer',
  component: ReservationFormContainer,
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
          <h1>ReservationFormContainer</h1>
          <p>Демо контейнер</p>
        </>
      ),
    },
  },
} as Meta;

const Template = () => {
  return <ReservationFormContainer />
};

export const Default = Template.bind({});
