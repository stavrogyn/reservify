import { TextField } from '@mui/material';

import styles from './text_input.module.css';

export const TextInput = (args?: Parameters<typeof TextField>[0]) => {
  return <TextField className={styles['root']} id="outlined-basic" label="Outlined" variant="outlined" {...args} />
}

