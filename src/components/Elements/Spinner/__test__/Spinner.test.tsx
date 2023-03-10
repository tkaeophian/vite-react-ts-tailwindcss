import { render, screen } from '@testing-library/react';

import { Spinner } from '../Spinner';

describe('Spinner component tests', () => {
  it('should render the loading spinner', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByTestId('loading');
    expect(spinnerElement).toBeVisible();
  });
});
