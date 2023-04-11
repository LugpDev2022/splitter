import ErrorSpan from '@/app/components/spans/ErrorSpan';
import { render, screen } from '@testing-library/react';

describe('Tests on <ErrorSpan />', () => {
  test('should match snapshot', () => {
    const { container } = render(<ErrorSpan>Test Error</ErrorSpan>);

    expect(container).toMatchSnapshot();
  });

  test('should render the given content', () => {
    const error = 'Test Error';
    render(<ErrorSpan>{error}</ErrorSpan>);

    expect(screen.getByText(error)).toBeTruthy();
  });

  test('should have hidden class', () => {
    const error = 'Test Error';
    render(<ErrorSpan show={false}>{error}</ErrorSpan>);

    const span = screen.getByText(error);
    expect(span.getAttribute('class')).toContain('hidden');
    expect(span.getAttribute('class')).not.toContain('block');
  });
});
