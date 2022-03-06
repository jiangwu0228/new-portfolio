import React from 'react';
import { render, screen } from '@testing-library/react';
import Works from './Works';

test('render works button',(): void => {
    render(<Works />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});