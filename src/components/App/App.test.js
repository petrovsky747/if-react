import { render, screen } from '@testing-library/react';

import { App } from './App';

test('the last element of the array is displayed', () => {
  render(<App />);
  const lastCountry = screen.getByText(/Malaysia/);
  expect(lastCountry).toBeInTheDocument();
});
