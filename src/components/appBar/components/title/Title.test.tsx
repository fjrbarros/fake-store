import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('<Title />', () => {
  it('should render/unrender component', () => {
    const { getByRole, unmount } = render(<Title />);
    const h1 = getByRole('heading', { level: 1 });

    expect(h1).toBeInTheDocument();
    expect(screen.getByText(/Fake Store/i)).toBeInTheDocument();

    unmount();
    expect(h1).not.toBeInTheDocument();
  });
});
