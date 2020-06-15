import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';

//type Item = item, an object
//type Cart = cookies, array of objects
//type products = db products, array of objects

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

  // useEffect(() => {
  //   cookie.set('cart', props.itemsInCart);
  // }, [props.itemsInCart]);

  function addOne(id) {
    let newCart = props.cart.map((item) => {
      if (item.id === id) {
        let prodPrice = props.products.find((prod) => prod.id === id);

        return {
          ...item,
          amount: +item.amount + 1,
          price: +prodPrice.price * (+item.amount + 1),
        };
      } else {
        return item;
      }
    });
    // setItemsInCart(newCart);
    cookie.set('cart', newCart);

    // window.location.reload();
    console.log(newCart);
    // console.log(itemsInCart);
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
