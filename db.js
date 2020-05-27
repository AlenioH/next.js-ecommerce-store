const products = [
  { id: '1', name: 'Creamy rug', img: '/carpet1.png', price: '199€' },
  { id: '2', name: 'Jungle rug', img: '/carpet2.png', price: '240€' },
  { id: '3', name: 'Fluffy rug', img: '/carpet3.png', price: '329€' },
  { id: '4', name: 'Marijuana rug', img: '/carpet4.png', price: '118€' },
  { id: '5', name: 'Pink one', img: '/carpet5.png', price: '208€' },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
