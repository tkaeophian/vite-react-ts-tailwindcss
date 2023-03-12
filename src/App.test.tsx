import { render, screen } from '@testing-library/react';

import App from './App';

it('should render landing template', () => {
  render(<App />);
  const buttonElement = screen.getByText(/English/i);
  expect(buttonElement).toBeInTheDocument();
});
