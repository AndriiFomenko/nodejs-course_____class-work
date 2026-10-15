const getData = require('./index.js');

const expectedUser = { name: 'John', age: 25, sex: 'male' };

test('getData returns correct user data after delay', async () => {
  jest.useFakeTimers();

  const promise = getData();

  jest.runAllTimers();

  const data = await promise;

  expect(data).toEqual(expectedUser);

  jest.useRealTimers();
});

test('getData resolves to correct data using .resolves matcher', async () => {
  await expect(getData()).resolves.toEqual(expectedUser);
});
