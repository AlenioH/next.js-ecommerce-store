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

type itemsInCart = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};
type Props = { item: Item; itemsInCart: itemsInCart[] };

export default function RemoveFromCart(props: Props) {
  function removeItem(id) {
    let newCart = props.itemsInCart.filter((item) => {
      return item.id !== id;
    });
    cookie.set('cart', newCart);

    window.location.reload();
    console.log(newCart);
  }
  return (
    <div>
      <button
        data-cy={'remove-button'}
        onClick={() => removeItem(props.item.id)}
      >
        Remove item from cart
      </button>
      <style jsx>{`
        button {
          align-self: center;
          width: 100px;
          font-size: 0.8rem;
          padding: 5px;
          background-color: lightgray;
          border-radius: 10px;
          color: white;
          font-family: inherit;
        }
        button:hover {
          background-color: #636e72;
          transition: background-color 0.3s;
        }
      `}</style>
    </div>
  );
}
