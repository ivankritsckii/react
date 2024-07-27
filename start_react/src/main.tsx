import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyErrorBoundary } from './helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routing.tsx'
import { Provider } from 'react-redux'
import { store } from './tookitRedux/index.ts'
import { ThemeProvider } from './helpers/themeChanger.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyErrorBoundary>
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </MyErrorBoundary>
    </React.StrictMode>
)
