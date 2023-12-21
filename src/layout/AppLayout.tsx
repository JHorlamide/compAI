/* React */
import React, { Suspense } from 'react'

/* MUI */
import { Stack, Box } from "@mui/material";
import { blue } from '@mui/material/colors';

/* Component / Application Modules */
import SideNav from '../components/layout-components/SideNav';
import AppLoader from '../components/util-components/AppLoader/AppLoader';
import Footer from '../components/util-components/Footer/Footer';


const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const containerStyle = {
    height: { sm: "100vh", md: "100vh" },
    width: { sm: "100%", md: "100%" }
  }

  const mainViewStyle = {
    overflow: "auto",
    paddingY: { sm: 5, md: 4 },
    paddingX: { sm: 5, md: 4 },
    width: { sm: "100vw", md: "100%" },
  }

  return (
    <Stack direction="row" sx={containerStyle}>
      <Stack
        width="25%"
        height="100%"
        overflow="auto"
        paddingX={4}
        paddingY={6}
        bgcolor={blue[500]}
      >
        <SideNav />
      </Stack>

      <Box sx={mainViewStyle}>
        <Suspense fallback={<AppLoader />}>
          {children}
        </Suspense>

        <Footer />
      </Box>
    </Stack>
  )
}

export default AppLayout;
