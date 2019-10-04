import { giveMeRandom } from '..';

jest.mock('../', () => ({
  giveMeRandom: jest.fn(),
}));

it('should give me five', () => {
  giveMeRandom.mockReturnValueOnce(5);
  const result = giveMeRandom();

  expect(result).toEqual(5);
});

it('should give me six', () => {
  giveMeRandom.mockReturnValueOnce(6);

  const result = giveMeRandom();

  expect(result).toEqual(6);
});
