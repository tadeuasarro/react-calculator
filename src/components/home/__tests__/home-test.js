import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../home';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Home component', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const element = screen.getByText('Welcome to Math-magicians!!!');
    expect(element).toBeInTheDocument();
  });
});
