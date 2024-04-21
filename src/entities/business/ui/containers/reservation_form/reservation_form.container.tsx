import { Grid } from '@mui/material';
import { BasicSelect } from '@uikit/basic_select';
import { DatePicker } from '@uikit/date_picker';
import { TimePicker } from '@uikit/time_picker';
import { TextInput } from '@uikit/text_input';
import { EmailInput } from '@uikit/email_input';
import { TextArea } from '@uikit/text_area';

import { FormHeader } from '../../components';

import styles from './reservation_form.container.module.css';

export const ReservationFormContainer = () => {
  return (
    <div className={styles['root']}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormHeader title='TT Bistro' subtitle='19 Цара Уроша, Београд, Стари град' />
        </Grid>
        <Grid item xs={4}>
          <BasicSelect options={[{
            value: 2,
            label: '2',
          }, {
            value: 3,
            label: '3',
          }, {
            value: 4,
            label: '4',
          }]} label="Guests" />
        </Grid>
        <Grid item xs={4}>
          <DatePicker />
        </Grid>
        <Grid item xs={4}>
          <TimePicker />
        </Grid>
        <Grid item xs={6}>
          <TextInput label="First name" />
        </Grid>
        <Grid item xs={6}>
          <TextInput label="Second name" />
        </Grid>
        <Grid item xs={12}>
          <EmailInput />
        </Grid>
        <Grid item xs={6}>
          <BasicSelect options={[{
            value: '+381',
            label: '+381'
          }]} label="Country" />
        </Grid>
        <Grid item xs={6}>
          <TextInput label="Phone" />
        </Grid>
        <Grid item xs={12}>
          <TextArea label="Special requests" />
        </Grid>
      </Grid>
    </div>
  );
}
