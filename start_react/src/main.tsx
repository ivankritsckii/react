import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { MyErrorBoundary } from './errorHeandlet.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyErrorBoundary>
            <App />
        </MyErrorBoundary>
    </React.StrictMode>
)
