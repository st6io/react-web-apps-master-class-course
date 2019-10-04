export const callAfter1s = callback => {
  setTimeout(callback, 1000);
};

export const runAfterSeveralTimers = callback => {
  const runTimer = () =>
    setTimeout(() => {
      runAfterSeveralTimers(callback);
      callback();
    }, 1000);

  setTimeout(runTimer, 0);
};
