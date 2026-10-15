const getData = require('./index');

jest.mock('fs');

const expectedValue = 'success';

describe('Test promise function with Mock FS:', () => {
  test('getData returns expected value from manual mock', async () => {
    await expect(getData()).resolves.toEqual(expectedValue);
  });
});
