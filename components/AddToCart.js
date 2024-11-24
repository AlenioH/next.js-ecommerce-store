import cookie from 'js-cookie';
import React, { useState, useEffect } from 'react';

export default function AddToCart(props) {
  const [itemsInCart, setItemsInCart] = useState(cookie.getJSON('cart') || []);

  useEffect(() => {
    cookie.set('cart', itemsInCart);
    // dispatch a custom event so that the Header would know to update the value too
    const event = new CustomEvent('cartUpdated', { detail: itemsInCart });
    window.dispatchEvent(event);
  }, [itemsInCart]);

  function MakeCookies() {
    const product = {
      name: props.product.name,
      price: props.total,
      id: props.product.id,
      amount: props.pieces,
      img: props.product.img,
      info: props.product.info,
    };

    const itemFilter = itemsInCart.find((item) => item.id === product.id);
    let itemsInCartUpd;

    //this part checks if there is an item with the id already present in the array of items in cart
    if (itemFilter) {
      itemsInCartUpd = itemsInCart.map((item) => {
        if (item.id === props.product.id) {
          //this condition makes sure the map only adjusts the current item
          return {
            ...item,
            amount: item.amount + props.pieces, //ok the amount is correct
            price: (item.amount + props.pieces) * props.initialPrice,
          };
        } else {
          return item;
        }
      });
    } else {
      itemsInCartUpd = [...itemsInCart, product];
    }
    setItemsInCart(itemsInCartUpd);
    alert('The item has been successfully added to the cart!');
  }

  return (
    <div>
      <button data-cy="add-cart-button" onClick={MakeCookies}>
        Add to cart
      </button>
      <style jsx>{`
        button {
          margin-top: 40px;
          align-self: center;
          background-color: #2f3640;
          padding: 15px;
          border-radius: 10px;
          color: white;
          font-family: inherit;
          font-size: 120%;
        }
        button:hover {
          background-color: #636e72;
          transition: background-color 0.3s;
        }
      `}</style>
    </div>
  );
}
