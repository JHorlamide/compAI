/* React */ 
import React from 'react'
import ReactDOM from 'react-dom/client'

/* MUI */
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

/* Application Modules */
import App from './App'
import { theme } from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
