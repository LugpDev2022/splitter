import GeneralContainer from '@/app/components/containers/GeneralContainer';
import { render, screen } from '@testing-library/react';

describe('Tests on <GeneralContainer />', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <GeneralContainer>
        <h2>Example h2</h2>
      </GeneralContainer>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render the given content', () => {
    const testText = 'Example h2';

    render(
      <GeneralContainer>
        <h2>{testText}</h2>
      </GeneralContainer>
    );

    expect(screen.getByText(testText)).toBeTruthy();
  });
});
