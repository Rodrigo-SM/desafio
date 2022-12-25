import React from 'react';
import '../styles/style.css'
import ligth from '../styles/theme/ligth.js'
import dark from '../styles/theme/dark.js'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePeristedState.js';




export default function App({ Component, pageProps }) {

  return (

    <div className='App'>
      <Component {...pageProps} />
    </div>

  )
}