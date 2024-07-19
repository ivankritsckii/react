import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyErrorBoundary } from './helpers/errorHeandlet.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routing.tsx'

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./APIRequests/sliceAPI.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyErrorBoundary>
            < ApiProvider api={apiSlice}>
                 <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ApiProvider>
        </MyErrorBoundary>
    </React.StrictMode>
)
