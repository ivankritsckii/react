"use client" 

import React from 'react'
import { MyErrorBoundary } from '../helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../tookitRedux/index.ts'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { App } from '../App.tsx'

function HomePage() {
      return (
        <React.StrictMode>
        <MyErrorBoundary>
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </MyErrorBoundary>
    </React.StrictMode>
    )
  }
  export default HomePage;