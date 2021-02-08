import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Quote from '../quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Quote component', () => {
    render(<BrowserRouter><Quote /></BrowserRouter>);
    const element = screen.getByText('BALBOA, Rocky');
    expect(element).toBeInTheDocument();
  });
});
