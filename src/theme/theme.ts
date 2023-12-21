import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: 4,

  typography: {
    h1: {
      fontSize: "2rem",
      color: "red"
    },

    fontFamily: [
      '"Inter"',
      '"Mulish"',
      '"Space Grotesk"',
      'sans-serif',
    ].join(','),
  },

  palette: {

  }
})
