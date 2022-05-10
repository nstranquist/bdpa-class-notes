import { Box, TextField, Typography } from "@material-ui/core"

export const Profile = ({
  name,
  setName
}) => {

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <Box>
      <Typography variant="h5" component="h2">Profile</Typography>
      <TextField value={name} onChange={(e) => handleChange(e)} fullWidth margin="normal" placeholder="Enter your name" />
    </Box>
  )
}