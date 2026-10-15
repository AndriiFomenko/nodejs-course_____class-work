const { delayedCallback } = require('./index.js');

test('delayedCallback calls the callback after a delay', () => {
  jest.useFakeTimers();
  const callback = jest.fn();

  delayedCallback(callback, 3000);

  expect(callback).not.toHaveBeenCalled();

  jest.advanceTimersByTime(3000);

  expect(callback).toHaveBeenCalled();

  jest.useRealTimers();
});
