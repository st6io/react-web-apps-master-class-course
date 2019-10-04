export const starWarsCharacters = [
  { id: '1', name: 'Anakin Skywalker' },
  { id: '2', name: 'Obi-Wan Kenobi' },
  { id: '3', name: 'Luke Skywalker' },
  { id: '4', name: 'Yoda' },
  { id: '5', name: 'Han Solo' },
];

const delay = (result, timeout = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(result), timeout));

export const fetchStarWarsCharacters = () => delay(starWarsCharacters);
