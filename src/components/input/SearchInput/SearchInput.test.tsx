import { fireEvent, render } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('<SearchInput />', () => {
  it('should change value', () => {
    const { getByRole } = render(<SearchInput />);
    const input = getByRole('textbox', { name: /search/i }) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 123 } });
    expect(input.value).toBe('123');
  });

  it('should not called function change input', () => {
    const spy = jest.fn();
    const { getByRole } = render(<SearchInput />);
    const input = getByRole('textbox', { name: /search/i });

    fireEvent.change(input, { target: { value: 444 } });

    expect(spy).not.toBeCalled();
  });

  it('should called function change input', () => {
    const spy = jest.fn();
    const { getByRole } = render(<SearchInput afterChangeSearchInput={spy} />);
    const input = getByRole('textbox', { name: /search/i }) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 123 } });

    expect(spy).toBeCalled();
  });

  it('should remove value on button click', () => {
    const { getByRole } = render(<SearchInput />);
    const input = getByRole('textbox', { name: /search/i }) as HTMLInputElement;
    const button = getByRole('button') as HTMLButtonElement;

    fireEvent.change(input, { target: { value: 123 } });

    fireEvent.click(button);
    expect(input.value).toBe('');
  });
});
