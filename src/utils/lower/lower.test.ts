import lower from './lower';

describe('lower function', () => {
  it('should return value to lower case', () => {
    expect(lower('Test')).toEqual('test');
    expect(lower('')).toEqual('');
  });
});
