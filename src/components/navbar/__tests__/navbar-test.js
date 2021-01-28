import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Navbar from '../navbar';

describe('Quote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Quote component', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const element = screen.getByText('Math-magicians');
    expect(element).toBeInTheDocument();
  });
});
