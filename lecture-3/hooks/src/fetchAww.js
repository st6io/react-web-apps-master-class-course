export default async sort => {
  const response = await fetch(
    `https://www.reddit.com/r/aww/${sort.toLowerCase()}.json?limit=21`
  );
  const {
    data: { children }
  } = await response.json();

  const mapped = children.map(child => ({
    thumbnail: child.data.thumbnail
  }));

  return mapped;
};
