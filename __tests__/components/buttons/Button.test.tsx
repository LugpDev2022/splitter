import { fireEvent, render, screen } from '@testing-library/react';
import Button from '@/app/components/buttons/Button';

describe('Tests on <Button />', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should have normal button styles', () => {
    const { container } = render(
      <Button onClick={onClick}>Test Button</Button>
    );

    const button = screen.getByRole('button');
    const classNames = button.getAttribute('class');

    expect(classNames).toContain('text-white');
    expect(classNames).toContain('bg-cyan-900');
    expect(container).toMatchSnapshot();
  });

  test('should have active button styles', () => {
    const { container } = render(
      <Button onClick={onClick} active>
        Test Button
      </Button>
    );

    const button = screen.getByRole('button');
    const classNames = button.getAttribute('class');

    expect(classNames).toContain('text-cyan-900');
    expect(classNames).toContain('bg-teal-500');
    expect(container).toMatchSnapshot();
  });

  test('should have disabled styles', () => {
    render(<Button onClick={onClick}>Test Button</Button>);

    const button = screen.getByRole('button');
    const classNames = button.getAttribute('class');

    expect(classNames).toContain('disabled:bg-[#0d686d]');
    expect(classNames).toContain('disabled:hover:bg-[#0d686d]');
    expect(classNames).toContain('disabled:hover:text-[#00494d]');
    expect(classNames).toContain('disabled:text-[#00494d]');
  });

  test('should have the given css classes', () => {
    const testClassNames = 'testClass anotherTestClass';

    render(
      <Button onClick={onClick} className={testClassNames}>
        Test Button
      </Button>
    );

    const button = screen.getByRole('button');
    const classNames = button.getAttribute('class');
    expect(classNames).toContain(testClassNames);
  });

  test('should render the children', () => {
    const buttonLabel = 'Test Button Label';

    render(<Button onClick={onClick}>{buttonLabel}</Button>);

    expect(screen.getByText(buttonLabel)).toBeTruthy();
  });

  test('should disable the button', () => {
    render(
      <Button onClick={onClick} disabled>
        Test button
      </Button>
    );

    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button.disabled).toBeTruthy();
  });

  test('should call the onClick function', () => {
    render(<Button onClick={onClick}>Test button</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should not call the onClick function when disabled', () => {
    render(
      <Button onClick={onClick} disabled>
        Test button
      </Button>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});
