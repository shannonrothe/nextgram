import faker from "faker";

const NUM_POSTS = 100;

export default (req, res) => {
  const posts = [];
  for (let i = 0; i < NUM_POSTS; i++) {
    posts.push({
      id: faker.random.uuid(),
      url: faker.image.imageUrl(undefined, undefined, undefined, true),
      user: {
        name: faker.internet.userName(),
        avatarUrl: faker.internet.avatar(),
      },
      location: `${faker.address.city()}, ${faker.address.country()}`,
      caption: faker.lorem.words(Math.floor(Math.random() * 50)),
      posted_at: faker.date.past(),
    });
  }

  res.statusCode = 200;
  res.json(posts);
};
