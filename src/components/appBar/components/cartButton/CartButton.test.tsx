import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { openDrawer } from '../../../../store/drawer';
import store from '../../../../store';
import CartButton from './CartButton';

describe('<CartButton />', () => {
  it('should render component', () => {
    const { getByRole, unmount } = renderComponent();
    const button = getByRole('button');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(store.dispatch(openDrawer())).toEqual({
      payload: undefined,
      type: 'themeMode/openDrawer',
    });

    unmount();

    expect(button).not.toBeInTheDocument();
  });
});

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <CartButton />
    </Provider>,
  );
};
