import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('<Img />', () => {
  it('should render/unrender component', () => {
    const { unmount } = render(<Img src="test.com" alt="Image to test" />);
    const img = screen.getByRole('img', { name: /image to test/i });
    expect(img).toBeInTheDocument();
    unmount();
    expect(img).not.toBeInTheDocument();
  });
});
