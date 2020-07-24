const { totalSum } = require('../pages/cartPage.js');

test('should return the total sum in cart', () => {
  const itemsInCart = [
    { name: 'thing', price: 1000 },
    { name: 'more thing', price: 998 },
  ];

  const result = totalSum(itemsInCart);
  expect(result).toEqual(1998);
});

test('should return the total sum in cart', () => {
  const itemsInCart = [];

  const result = totalSum(itemsInCart);
  expect(result).toEqual(0);
});
