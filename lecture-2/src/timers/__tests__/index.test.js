import { callAfter1s, runAfterSeveralTimers } from '..';

jest.useFakeTimers();

it('callAfter1s should invoke callback', () => {
  const callback = jest.fn();
  expect(callback).toHaveBeenCalledTimes(0);

  callAfter1s(callback);
  jest.advanceTimersByTime(1000);

  expect(callback).toHaveBeenCalledTimes(1);
});

it('runAfterSeveralTimers should invoke callback', () => {
  const callback = jest.fn();

  runAfterSeveralTimers(callback);

  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalledTimes(1);
});
