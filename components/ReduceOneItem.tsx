import React from 'react';
import cookie from 'js-cookie';

type Item = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type Cart = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type Products = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};
type Props = { item: Item; cart: Cart[]; products: Products[] };
export default function ReduceOneItem(props: Props) {
  function reduceOne(id) {
    const newCart = props.cart.map((item) => {
      if (item.id === id) {
        const prodPrice = props.products.find((prod) => prod.id === id);
        return {
          ...item,
          amount: item.amount - 1,
          price: prodPrice.price * (item.amount - 1),
        };
      } else {
        return item;
      }
    });

    cookie.set('cart', newCart);
    window.location.reload();
    console.log(newCart);
  }
  return (
    <div>
      <button data-cy="reduce-button" onClick={() => reduceOne(props.item.id)}>
        -
      </button>

      <style jsx>{`
        button {
          padding: 2px;
          border-radius: 10px;
          color: white;
          font-family: inherit;
          font-size: 120%;
          background-color: #2ed573;
          font-weight: bold;
          margin: auto 5px;
        }
        button:hover {
          background-color: darkgreen;
          transition: background-color 0.3s;
        }
      `}</style>
    </div>
  );
}
