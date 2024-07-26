import { render, screen, act, fireEvent } from '@testing-library/react'
export * from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { store } from '../tookitRedux/index.ts'
import { App } from '../App'
import { vi } from 'vitest'
import { Page404 } from '../Page_404/page_404'
import { MyErrorBoundary } from '../helpers/errorHeandlet.tsx'

const setup = async (LSvalue: string | null = null) => {
    if (LSvalue !== null) {
        localStorage.setItem('searchValue', LSvalue)
    } else {
        localStorage.removeItem('searchValue')
    }

    await act(async () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
    })
}

describe('App component', () => {
    let originalConsoleError: (...data: unknown[]) => void

    beforeEach(() => {
        originalConsoleError = console.error
        console.error = vi.fn()
    })

    afterEach(() => {
        vi.resetAllMocks()
        localStorage.clear()
        console.error = originalConsoleError
    })

    test('renders search input and buttons', async () => {
        await setup()

        const searchInput = screen.getByRole('textbox')
        const searchButton = screen.getByText(/search/i)
        const throwErrorButton = screen.getByText(/throw an error/i)

        expect(searchInput).toBeInTheDocument()
        expect(searchButton).toBeInTheDocument()
        expect(throwErrorButton).toBeInTheDocument()
    })

    test('saves and retrieves search term from local storage', async () => {
        const testTerm = 'test term'
        await setup(testTerm)

        const searchInput = screen.getByRole('textbox')
        expect(searchInput).toHaveValue(testTerm)
    })

    test('handles successful fetch and displays results', async () => {
        await setup('R2')
        expect(await screen.findByText(/R2-D2/i)).toBeInTheDocument()
    })

    test('setch window', async () => {
        await setup()
        const searchInput = screen.getByRole('textbox')
        fireEvent.change(searchInput, { target: { value: 'test value' } })

        expect(screen.getByDisplayValue(/test value/i)).toBeInTheDocument()
    })
    test('click on search', async () => {
        await setup()
        const searchInput = screen.getByRole('textbox')
        const searchBtn = screen.getByText(/Search/i)
        fireEvent.change(searchInput, { target: { value: 'test value' } })
        fireEvent.click(searchBtn)
        expect(searchInput).toHaveValue('test value')
    })

    test('click on checkbox', async () => {
        await setup('r2')
        const checkbox = await screen.findByRole('checkbox')
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
        const download = await screen.findByText(/download/i)
        fireEvent.click(download)
    })

    test('error page', async () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <Page404 />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
        expect(screen.getByText(/Page not found/i)).toBeInTheDocument()
        screen.debug()
    })

    const ProblematicComponent = () => {
        throw new Error('Test error')
    }
    it('renders children when no error occurs', () => {
        render(
            <MyErrorBoundary>
                <div>Child component</div>
            </MyErrorBoundary>
        )
        expect(screen.getByText('Child component')).toBeInTheDocument()
    })

    test('displays fallback UI when an error is caught', () => {
        render(
            <MyErrorBoundary>
                <ProblematicComponent />
            </MyErrorBoundary>
        )
        expect(
            screen.getByText(
                'Something went wrong. Please reload the page or contact support'
            )
        ).toBeInTheDocument()
    })

    test('change theme', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
        const switchBtn = container.querySelector('.switch-btn')
        if (switchBtn) fireEvent.click(switchBtn)
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })
})
