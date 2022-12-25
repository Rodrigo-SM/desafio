import React from 'react';
import '../styles/style.css'
import { ThemeProvider, DefaultTheme } from 'styled-components';





export default function App({ Component, pageProps }) {

  return (

    <div className='App'>
      <Component {...pageProps} />
    </div>

  )
}