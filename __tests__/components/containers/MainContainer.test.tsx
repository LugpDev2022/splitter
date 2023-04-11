import MainContainer from '@/app/components/containers/MainContainer';
import { render, screen } from '@testing-library/react';

describe('Tests on <GeneralContainer />', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <MainContainer>
        <h2>Example h2</h2>
      </MainContainer>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render the given content', () => {
    const testText = 'Example h2';

    render(
      <MainContainer>
        <h2>{testText}</h2>
      </MainContainer>
    );

    expect(screen.getByText(testText)).toBeTruthy();
  });
});
