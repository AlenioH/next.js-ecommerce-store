const { totalAmount } = require('../components/Header');

test('should return the amount of items in cart', () => {
  const itemsInCart = [
    { name: 'thing', amount: 1 },
    { name: 'more thing', amount: 2 },
  ];

  const result = totalAmount(itemsInCart);
  expect(result).toEqual(3);
});

test('should return the amount of items in cart', () => {
  const itemsInCart = [
    { name: 'thing', amount: 5 },
    { name: 'more thing', amount: 1 },
  ];

  const result = totalAmount(itemsInCart);
  expect(result).toEqual(6);
});

test('should return the amount of items in cart', () => {
  const itemsInCart = [];

  const result = totalAmount(itemsInCart);
  expect(result).toEqual(0);
});
