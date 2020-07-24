import React, { useEffect, useState } from 'react';
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

export default function AddOneItem(props: Props) {
  // const [itemsInCart, setItemsInCart] = useState(props.itemsInCart || []);
  // const [pieces, setPieces] = useState(props.item.amount);
  // const [itemTotal, setItemTotal] = useState(props.item.price);

  // useEffect(() => {
  //   cookie.set('cart', props.itemsInCart);
  // }, [props.itemsInCart]);

  function addOne(id) {
    const newCart = props.cart.map((item) => {
      if (item.id === id) {
        const prodPrice = props.products.find((prod) => prod.id === id);

        return {
          ...item,
          amount: +item.amount + 1,
          price: +prodPrice.price * (+item.amount + 1),
        };
      } else {
        return item;
      }
    });
    cookie.set('cart', newCart);

    window.location.reload();
    console.log(newCart);

    console.log(props.item);
  }

  return (
    <div>
      <button data-cy="add-button" onClick={() => addOne(props.item.id)}>
        +
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
