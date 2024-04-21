import { TextField } from '@mui/material';

export const TextInput = (args?: Parameters<typeof TextField>[0]) => {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" {...args} />
}

