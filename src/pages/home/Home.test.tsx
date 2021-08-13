import { render } from '@testing-library/react';
import Home from './Home';

describe('home', () => {
  test('shoulde render welcome message', async () => {
    const { queryByText } = render(<Home />);

    expect(queryByText(/Welcome/)).toBeInTheDocument();
  });
});
