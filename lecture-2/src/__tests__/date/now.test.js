it('should return mocked date when now() is mocked', () => {
  const mockFn = jest.spyOn(global.Date, 'now');
  mockFn.mockImplementationOnce(() => 42);

  expect(Date.now()).toEqual(42);
});

it('should not return mocked date when no mock', () => {
  expect(Date.now()).not.toEqual('42');
});
