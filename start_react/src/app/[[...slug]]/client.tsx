'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
//import { Router } from '../../routing'
import { MyErrorBoundary } from '../../helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../../routing.tsx'
import { Provider } from 'react-redux'
import { store } from '../../tookitRedux/index.ts'
import { ThemeProvider } from '../../helpers/themeChanger.tsx'
 
//const Router = dynamic(() => import('../../routing'), { ssr: false })
 
export function ClientOnly() {
  return (
    <MyErrorBoundary>
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
</MyErrorBoundary>
  )
}