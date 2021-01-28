import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../display';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Display component', () => {
    render(<Display result="0" />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
