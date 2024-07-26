import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { store } from '../tookitRedux/index.ts'
export * from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen} from '@testing-library/react'
import { MyErrorBoundary } from '../helpers/errorHeandlet.tsx'
import { Pagination } from '../pagination.tsx'

describe('Routing test', () => {
    const testingValue = { results: [], count: 55, next: 'string' }
    
    
    
    test('Routing test', () => {
        render(
            <React.StrictMode>
            <MyErrorBoundary>
                <Provider store={store}>
                    <ThemeProvider>
                        <BrowserRouter>
                            <Pagination serchResult={JSON.parse(JSON.stringify(testingValue))} />
                        </BrowserRouter>
                    </ThemeProvider>
                </Provider>
            </MyErrorBoundary>
        </React.StrictMode>
        )
        expect(screen.getByText(/6/i)).toBeInTheDocument()
        screen.debug()
    })
  });