
"use client" 

import React from 'react'
import { MyErrorBoundary } from '../../../helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../tookitRedux/index.ts'
import { ThemeProvider } from '../../../helpers/themeChanger.tsx'
import { App } from '../../../App.tsx'

function HomePage({params}) {
  const numPage = params.numPage[params.numPage.length - 1]
      return (
        <React.StrictMode>
        <MyErrorBoundary>
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <App page={numPage}/>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </MyErrorBoundary>
    </React.StrictMode>
    )
  }
  export default HomePage;