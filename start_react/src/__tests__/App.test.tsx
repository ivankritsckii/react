import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
export * from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../helpers/themeChanger.tsx'
import { store } from '../tookitRedux/index.ts'
import { App } from '../App';
import { vi } from 'vitest';


const mockFetch = (
  response: {
    results: Array<{name: string; height: string; mass: string }>;
  },
  reject: boolean = false,
) => {
  global.fetch = vi.fn(() =>
    reject
      ? Promise.reject(new Error('Fetch error'))
      : Promise.resolve({
          json: () => Promise.resolve(response),
        } as Response),
  );
};

const setup = async (initialLocalStorageTerm: string | null = null) => {
  if (initialLocalStorageTerm !== null) {
    localStorage.setItem('searchValue', initialLocalStorageTerm);
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

  /*test('displays error message when fetch fails', async () => {
    mockFetch({ results: [] }, true);

    await setup();

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByText(/search/i);

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(searchButton);
    });

    await waitFor(() => expect(screen.getByText(/error: fetch error/i)).toBeInTheDocument());
  });*/

  test('handles successful fetch and displays results', async () => {
    const mockData = {
      results: [
        { name: "First name", height: "175", mass: "55" },
        { name: "Second name", height: "75", mass: "5"  },
      ],
    };
    mockFetch(mockData);

    await setup();

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByText(/Search/i);
    console.log(searchButton, "ghjghjfjtuityuiuyjhj")

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(searchButton);
    });

    await waitFor(() => {
      expect(screen.getByText('First name')).toBeInTheDocument();
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
  });
});
