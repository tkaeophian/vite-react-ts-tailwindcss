import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button component tests', () => {
  it('should render same text passed into prop', () => {
    render(<Button>Hello World</Button>);
    const buttonElement = screen.getByText(/Hello World/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
