import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ReservationFormContainer } from '@entities/business';

import './app.css'

export const App = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ width: '100%', height: '100%', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReservationFormContainer />
      </div>
    </LocalizationProvider>
  );
}
