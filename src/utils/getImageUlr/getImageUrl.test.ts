import getImageUrl, { imageUrl } from './getImageUrl';

describe.each`
  description          | value                | expected
  ${'Electronics'}     | ${'electronics'}     | ${imageUrl.eletronics}
  ${'Jewelery'}        | ${'jewelery'}        | ${imageUrl.jewelery}
  ${'Text Upper'}      | ${'MENS CLOTHING'}   | ${imageUrl.mensClothing}
  ${'Womens clothing'} | ${'womens clothing'} | ${imageUrl.womensClothing}
  ${'Any argument'}    | ${'.....'}           | ${imageUrl.default}
  ${'No argument'}     | ${undefined}         | ${imageUrl.default}
`('getImageUrl', ({ description, value, expected }) => {
  it(`${description} - should return ${expected} if argument is ${value}`, () => {
    expect(getImageUrl(value)).toEqual(expected);
  });
});
