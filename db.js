const products = [
  {
    id: '1',
    name: 'Creamy rug',
    img: '/carpet1.png',
    price: 199,
    info:
      'This rug is super soft and cosy and will make your home the prettiest home in Austria and neighboring countries.',
  },
  {
    id: '2',
    name: 'Jungle rug',
    img: '/carpet2.png',
    price: 240,
    info:
      'This rug will make your home feel like a jungle. Which is not necessarily a good thing but here you go.',
  },
  {
    id: '3',
    name: 'Fluffy rug',
    img: '/carpet3.png',
    price: 329,
    info:
      "This rug is fluffy as a baby kitten, if it doesn't make your heart melt, I don't know what will.",
  },
  {
    id: '4',
    name: 'Marijuana rug',
    img: '/carpet4.png',
    price: 118,
    info:
      "This is Chris's special rug, please check with him if he's okay with you purchasing it.",
  },
  {
    id: '5',
    name: 'Pink one',
    img: '/carpet5.png',
    price: 208,
    info: 'This rug is as pink as a murshmellow. And as mellow as a marsh.',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
