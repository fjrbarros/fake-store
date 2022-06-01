import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Link from './Link';

describe('<Link />', () => {
  it('should change the path when clicking on the link', () => {
    const history = createMemoryHistory();
    const path = '/cart';
    const { getByRole } = render(
      <Router location={history.location} navigator={history}>
        <Link path={path}>test</Link>
      </Router>,
    );

    const link = getByRole('link', { name: /test/i });
    fireEvent.click(link);
    expect(history.location.pathname).toBe(path);
  });
});
