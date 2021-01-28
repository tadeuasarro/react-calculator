import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../app';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Home component', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
