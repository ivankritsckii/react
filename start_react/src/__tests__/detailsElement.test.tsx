import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { store } from '../tookitRedux/index.ts'
export * from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { MyErrorBoundary } from '../helpers/errorHeandlet.tsx'
import { DatailsElement } from '../detailsElement.tsx'

describe('DatailsElement test', () => {
    test('DatailsElement test', () => {
        render(
            <React.StrictMode>
                <MyErrorBoundary>
                    <Provider store={store}>
                        <ThemeProvider>
                            <BrowserRouter>
                                <DatailsElement />
                            </BrowserRouter>
                        </ThemeProvider>
                    </Provider>
                </MyErrorBoundary>
            </React.StrictMode>
        )
        expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
        screen.debug()
    })
})
