import NumericInput from '@/app/components/inputBlock/NumericInput';
import { fireEvent, render, screen } from '@testing-library/react';

describe('tests on <NumericInput />', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(
      <NumericInput onBlur={onBlur} onChange={onChange} value={0} />
    );

    expect(container).toMatchSnapshot();
  });

  test('should have a border when has error', () => {
    render(
      <NumericInput onBlur={onBlur} onChange={onChange} hasError value={0} />
    );

    const input = screen.getByRole('textbox');
    expect(input.getAttribute('class')).toContain('border-red-500');
    expect(input.getAttribute('class')).not.toContain('border-transparent');
  });

  test('should not have a border when has error', () => {
    render(<NumericInput onBlur={onBlur} onChange={onChange} value={0} />);

    const input = screen.getByRole('textbox');
    expect(input.getAttribute('class')).not.toContain('border-red-500');
    expect(input.getAttribute('class')).toContain('border-transparent');
  });

  test('should call the onChange function', () => {
    render(<NumericInput onBlur={onBlur} onChange={onChange} value={0} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '7' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should call the onBlur function', () => {
    render(<NumericInput onBlur={onBlur} onChange={onChange} value={0} />);

    const input = screen.getByRole('textbox');

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
