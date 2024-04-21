import { TextField } from "@mui/material"

import styles from './email_input.module.css'

export const EmailInput = (args?: Parameters<typeof TextField>[0]) => {
  return (
    <TextField className={styles['root']} label="Email" focused {...args} />
  )
}
