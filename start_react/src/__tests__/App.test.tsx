import React from 'react';
import { render, act, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
/*import { Router } from '../routing.tsx'*/
import { App } from '../App.tsx'


test('demo', () => {
    expect(true).toBe(true)
})


const setup = async (initialLocalStorageTerm: string | null = null) => {
    if (initialLocalStorageTerm !== null) {
      localStorage.setItem('searchTerm', initialLocalStorageTerm);
    } else {
      localStorage.removeItem('searchTerm');
    }
  
    await act(async () => {
      render(
        <BrowserRouter>
        <App />
        </BrowserRouter>
        
      );
    });
  };

  test('renders search input and buttons', async () => {
    await setup();
    const searchButton = screen.getByText(/search/i);
    const throwErrorButton = screen.getByText(/error/i);

    expect(searchButton).toBeInTheDocument();
    expect(throwErrorButton).toBeInTheDocument();
  });