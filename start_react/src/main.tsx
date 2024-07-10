import React from 'react'
import ReactDOM from 'react-dom/client'
//import { App } from './App.tsx'
import { MyErrorBoundary } from './errorHeandlet.tsx'
import { Page404 } from './Page_404/page_404.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyErrorBoundary>
            <Page404 />
        </MyErrorBoundary>
    </React.StrictMode>
)
