import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { muiTheme } from "../src/muiTheme";
import { createEmotionCache } from '../src/createEmotionCache';

const EMOTION_CLIENT_SIDE_CACHE = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache,
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = EMOTION_CLIENT_SIDE_CACHE, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
