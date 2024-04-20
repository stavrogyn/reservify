import { memo, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type BasicSelectProps = {
  options: Array<{
    value: string | number;
    label: string;
  }>;
  label: string;
};

export const BasicSelect = memo(({ options, label }: BasicSelectProps) => {
  const [value, setValue] = useState('');

  if (options.length === 0) {
    return null;
  }

  /**
   * typing bug in material-ui
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">{label}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
})

BasicSelect.displayName = 'BasicSelect';
