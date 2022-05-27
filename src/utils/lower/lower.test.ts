import lower from './lower';

describe('lower function', () => {
  it('shold return value to lower case', () => {
    expect(lower('Test')).toEqual('test');
    expect(lower('')).toEqual('');
  });
});
