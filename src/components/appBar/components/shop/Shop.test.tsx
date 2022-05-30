import { render } from '@testing-library/react';
import Shop from './Shop';

describe('<Shop />', () => {
  it('should render/unrender component', () => {
    const { getByRole, unmount } = render(<Shop />);
    const button = getByRole('button', { name: /shop/i });
    expect(button).toBeInTheDocument();
    unmount();
    expect(button).not.toBeInTheDocument();
  });
});
