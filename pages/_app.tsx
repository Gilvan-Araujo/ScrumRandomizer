import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledProvider>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
