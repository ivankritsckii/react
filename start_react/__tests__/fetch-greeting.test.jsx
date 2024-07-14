import React from 'react';
import { render, screen } from '@testing-library/react'
import { App } from '../src/App'
import {expect, jest, test} from '@jest/globals';


test.todo('получение приветствия')
test.todo('получение приветствия2')

test("render learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInDocument()
})