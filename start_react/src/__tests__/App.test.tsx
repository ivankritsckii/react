import { render, screen,  act, fireEvent } from '@testing-library/react';
export * from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { store } from '../tookitRedux/index.ts'
import { App } from '../App';
import { vi } from 'vitest';
import {  delay } from 'msw'


const setup = async (LSvalue: string | null = null) => {
  if (LSvalue !== null) {
    localStorage.setItem('searchValue', LSvalue);
  } else {
    localStorage.removeItem('searchValue');
  }

  await act(async () => {
    render(
      < Provider store={store}>
                 <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeProvider>
      </Provider>,
    );
  });
};

describe('App component', () => {
  let originalConsoleError: (...data: unknown[]) => void;

  beforeEach(() => {
    originalConsoleError = console.error;
    console.error = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
    localStorage.clear();
    console.error = originalConsoleError;
  });

  test('renders search input and buttons', async () => {
    await setup();

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByText(/search/i);
    const throwErrorButton = screen.getByText(/throw an error/i);

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(throwErrorButton).toBeInTheDocument();
  });

  test('saves and retrieves search term from local storage', async () => {
    const testTerm = 'test term';
    await setup(testTerm);

    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toHaveValue(testTerm);
  });

  test('handles successful fetch and displays results', async () => {
    await setup("R2");

    await delay(1000)

      expect(screen.getByText(/R2-D2/i)).toBeInTheDocument();
  });
  test('setch window', async () => {
    await setup();
    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, {target: { value: "test value"}})

      expect(screen.getByText(/test value/i)).toBeInTheDocument();
  });
});
