// import cookie from 'js-cookie';
const { totalAmount } = require('../components/Header');

// import { totalAmount } from '../components/Header';

test('should return the amount of items in cart', () => {
  const itemsInCart = [
    { name: 'thing', amount: 1 },
    { name: 'more thing', amount: 2 },
  ];

  const result = totalAmount(itemsInCart);
  expect(result).toEqual(3);
});

// console.log(totalAmount([{ amount: 1 }, { amount: 2 }]));
