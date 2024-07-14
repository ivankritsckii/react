import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyErrorBoundary } from './helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routing.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyErrorBoundary>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </MyErrorBoundary>
    </React.StrictMode>
)
