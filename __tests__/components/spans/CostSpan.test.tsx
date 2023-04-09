import CostSpan from '@/app/components/spans/CostSpan';
import { render, screen } from '@testing-library/react';

describe('Tests on <CostSpan />', () => {
  test('should match snapshot', () => {
    const { container } = render(<CostSpan quantity={3.33} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the given quantity correctly', () => {
    render(<CostSpan quantity={3.33} />);
    const span = screen.getByText('$3.33');
    expect(span).toBeTruthy();
  });

  test('should show $0.00 when quantity is 0', () => {
    render(<CostSpan quantity={0} />);
    const span = screen.getByText('$0.00');
    expect(span).toBeTruthy();
  });
});
