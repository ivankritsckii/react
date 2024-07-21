import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyErrorBoundary } from './helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routing.tsx'

/*import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./APIRequests/sliceAPI.ts";*/
import { Provider } from 'react-redux'
import { store } from './tookitRedux/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyErrorBoundary>
            < Provider store={store}>
                 <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </Provider>
        </MyErrorBoundary>
    </React.StrictMode>
)
