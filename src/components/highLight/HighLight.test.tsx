import HighLight from './HighLight';
import { render } from '@testing-library/react';

describe.each`
  toHighLight | value                | expected
  ${'mar'}    | ${'test from mark'}  | ${'test from k'}
  ${'test'}   | ${'high light text'} | ${'high light text'}
`('<HighLight />', ({ toHighLight, expected, value }) => {
  it(`should return '${expected}' if argument is '${toHighLight}' and value is '${value}'`, () => {
    const { getByText } = render(
      <HighLight toHighLight={toHighLight}>{value}</HighLight>,
    );
    expect(getByText(expected)).toBeInTheDocument();
  });
});
