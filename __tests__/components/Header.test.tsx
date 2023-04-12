import Header from '@/app/components/Header';
import { render } from '@testing-library/react';

describe('Tests on <Header />', () => {
  test('should match snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
