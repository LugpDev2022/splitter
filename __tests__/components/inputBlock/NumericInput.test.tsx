import { fireEvent, render, screen } from '@testing-library/react';
import NumericInput from '@/app/components/inputBlock/NumericInput';
import { useNumericInput } from '../../../app/components/inputBlock/useNumericInput';

jest.mock('../../../app/components/inputBlock/useNumericInput');

describe('tests on <NumericInput />', () => {
  const onInputChange = jest.fn();
  const onBlur = jest.fn();

  useNumericInput.mockReturnValue({
    onInputChange,
    onBlur,
    value: 0,
  });

  beforeEach(() => jest.clearAllMocks());

  test('should match snapshot', () => {
    const { container } = render(<NumericInput inputType='bill' value={0} />);

    expect(container).toMatchSnapshot();
  });

  test('should have a border when has error', () => {
    render(<NumericInput inputType='bill' hasError value={0} />);

    const input = screen.getByRole('textbox');
    expect(input.getAttribute('class')).toContain('border-red-500');
    expect(input.getAttribute('class')).not.toContain('border-transparent');
  });

  test('should not have a border when has error', () => {
    render(<NumericInput inputType='bill' value={0} />);

    const input = screen.getByRole('textbox');
    expect(input.getAttribute('class')).not.toContain('border-red-500');
    expect(input.getAttribute('class')).toContain('border-transparent');
  });

  test('should call the onChange function', () => {
    render(<NumericInput inputType='bill' value={0} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '7' } });
    expect(onInputChange).toHaveBeenCalledTimes(1);
  });

  test('should call the onBlur function', () => {
    render(<NumericInput inputType='bill' value={0} />);

    const input = screen.getByRole('textbox');

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('custom hook should be called with the input type value', () => {
    const inputType = 'bill';
    render(<NumericInput inputType={inputType} value={0} />);

    expect(useNumericInput).toHaveBeenCalledWith(inputType);
  });
});
