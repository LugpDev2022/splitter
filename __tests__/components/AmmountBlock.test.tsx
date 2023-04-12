import AmmountBlock from '@/app/components/AmmountBlock';
import { render, screen } from '@testing-library/react';

describe('Tests on <AmmountBlock />', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <AmmountBlock ammount={0} label='Tip Ammount' />
    );
    expect(container).toMatchSnapshot();
  });

  test('should have the given ammount', () => {
    const ammount = 1057;

    render(<AmmountBlock ammount={ammount} label='Tip Ammount' />);
    expect(screen.getByText('$' + ammount)).toBeTruthy();
  });

  test('should have the given label', () => {
    const label = 'Tip Ammount';

    render(<AmmountBlock ammount={0} label={label} />);
    expect(screen.getByText(label)).toBeTruthy();
  });
});
