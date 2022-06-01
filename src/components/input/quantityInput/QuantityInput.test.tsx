import { render, fireEvent } from '@testing-library/react';
import QuantityInput from './QuantityInput';

describe('<QuantityInput />', () => {
  it('should change value and execute onChange', () => {
    const spy = jest.fn();

    const { container } = render(<QuantityInput value={2} onChange={spy} />);

    const input = container.querySelector(
      'div > div > div > input',
    ) as HTMLInputElement;

    expect(input.value).toEqual('2');

    fireEvent.change(input, {
      target: { value: 123 },
    });

    expect(spy).toBeCalled();
  });
});
