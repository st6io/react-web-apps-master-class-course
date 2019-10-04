const images = [
  'https://www.maxim.com/.image/t_share/MTYwNjI1MDQ4NTM1NzA0NzQ3/jocko-willink-attack-mondays.png',
  'https://i.ytimg.com/vi/ljqra3BcqWM/maxresdefault.jpg',
  'https://peterattiamd.com/wp-content/uploads/2019/06/jocko-part2-2x1.png',
  'https://i.ytimg.com/vi/Ls5yHTGVzgU/maxresdefault.jpg',
  'https://miro.medium.com/max/3600/0*uvDOX4ea2mGXdAQ9',
];

export const getRandomImage = async () => {
  const response = await fetch(
    'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16',
  );

  const {
    data: [rnd],
  } = await response.json();

  return images[rnd % images.length];
};

export const sum = (a, b) => a + b;
