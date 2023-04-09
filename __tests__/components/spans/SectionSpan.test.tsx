import SectionSpan from '@/app/components/spans/SectionSpan';
import { render, screen } from '@testing-library/react';

describe('Tests on <SectionSpan />', () => {
  test('should match snapshot', () => {
    const { container } = render(<SectionSpan>Test</SectionSpan>);
    expect(container).toMatchSnapshot();
  });

  test('should show the given quantity correctly', () => {
    render(<SectionSpan>Test</SectionSpan>);
    const span = screen.getByText('Test');
    expect(span).toBeTruthy();
  });
});
