/* MUI */
import { Stack, Button, Box } from '@mui/material';

/* Component / Application Modules */
import MenuContent from './MenuContent';

const SideNav = () => {
  return (
    <Stack spacing={50}>
      <Stack spacing={2}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Box width="100%" py={3} textAlign="center" borderRadius={1} bgcolor="white">Customer Logo</Box>
          <Box width="100%" py={2} borderRadius={1} bgcolor="white" textAlign="center">Input</Box>
        </Box>

        <MenuContent />
      </Stack>

      <Stack width="100%">
        <Button fullWidth variant="contained">
          Logout
        </Button>
      </Stack>
    </Stack>
  )
}

export default SideNav;
