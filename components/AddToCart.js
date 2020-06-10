import cookie from 'js-cookie';
import React from 'react';

export default function AddToCart(props) {
  function makeCookies() {
    let itemsInCart = cookie.getJSON('cart') || [];
    console.log('jonas', itemsInCart);

    let product = {
      name: props.product.name,
      price: props.total,
      id: props.product.id,
      amount: props.pieces,
      img: props.product.img,
      info: props.product.info,
    };

    let itemFilter = itemsInCart.find((item) => item.id === product.id);

    //this part checks if there is an item with the id already present in the array of items in cart
    if (itemFilter) {
      let itemsDouble = itemsInCart.map((item) => {
        if (item.id === props.product.id) {
          //this condition makes sure the map only adjusts the current item
          return {
            ...item,
            amount: item.amount + props.pieces,
            price: (item.amount + props.pieces) * item.price,
          };
        } else {
          return item;
        }
      });
      cookie.set('cart', itemsDouble);
    } else {
      itemsInCart.push(product);
      cookie.set('cart', itemsInCart);
    }
    alert('The item has been successfully added to the cart!');
    window.location.reload();
  }

  return (
    <div>
      <button onClick={makeCookies}>Add to cart</button>
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
