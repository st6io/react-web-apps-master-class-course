export let isAuthenticated = false;

export const authenticate = onDone => {
  isAuthenticated = true;
  setTimeout(onDone, 100);
};

export const signout = onDone => {
  isAuthenticated = false;
  setTimeout(onDone, 100);
};
