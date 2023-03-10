import { render, screen } from '@testing-library/react';

import App from './App';

it('should render landing template', () => {
  render(<App />);
  const todoElement = screen.getByText(/Click on the Vite and React logos to learn more/i);
  expect(todoElement).toBeInTheDocument();
});
