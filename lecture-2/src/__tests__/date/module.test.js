const toLocaleDateStringSpy = jest.spyOn(
  global.Date.prototype,
  'toLocaleDateString',
);

beforeEach(() => {
  toLocaleDateStringSpy.mockReset();
});

it('mock date with jest.spyOn', () => {
  toLocaleDateStringSpy.mockImplementation(() => '2010-1-1');

  expect(new Date().toLocaleDateString()).toEqual('2010-1-1');
});

it('no date mock', () => {
  expect(new Date().toLocaleDateString()).not.toEqual('2010-1-1');
});
