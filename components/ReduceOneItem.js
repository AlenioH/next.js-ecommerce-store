import React from 'react';
import cookie from 'js-cookie';

export default function ReduceOneItem(props) {
  function reduceOne(id) {
    let newCart = props.cart.map((item) => {
      if (item.id === id) {
        if (item.amount === 1) {
          alert('Use remove button!');
          return item;
        } else {
          let prodPrice = props.products.find((prod) => prod.id === id);
          return {
            ...item,
            amount: +item.amount - 1,
            price: +prodPrice.price * (+item.amount - 1),
          };
        }
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
