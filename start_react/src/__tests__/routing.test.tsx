import React from 'react'
import { App } from '../App.tsx'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { store } from '../tookitRedux/index.ts'
export * from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { MyErrorBoundary } from '../helpers/errorHeandlet.tsx'

describe('Routing test', () => {
    test('Routing test', () => {
        render(
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
        expect(screen.getByText(/Search/i)).toBeInTheDocument()
        screen.debug()
    })
})
