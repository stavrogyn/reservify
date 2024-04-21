import { TextField } from "@mui/material"

export const TextArea = (args?: Parameters<typeof TextField>[0]) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      defaultValue="Default Value"
      {...args}
    />
  )
}
