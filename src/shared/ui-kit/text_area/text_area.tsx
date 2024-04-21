import { TextField } from "@mui/material"

import styles from './text_area.module.css'

export const TextArea = (args?: Parameters<typeof TextField>[0]) => {
  return (
    <TextField
      className={styles['root']}
      id="outlined-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      {...args}
    />
  )
}
