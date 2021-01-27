import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../button';

const handleClick = buttonName => {
  setState(state => Calculate(state, buttonName));
}

describe("Button", () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button name="0" onClick={handleClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Button component', () => {
    render(<Button name="0" onClick={handleClick} />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument()
  });
});