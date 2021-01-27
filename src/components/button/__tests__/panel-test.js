import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../button_panel';

const handleClick = buttonName => {
  setState(state => Calculate(state, buttonName));
}

describe("Button Panel", () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonPanel onClick={handleClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Button Panel component', () => {
    render(<ButtonPanel onClick={handleClick} />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument()
  });
});