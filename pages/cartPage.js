import Head from 'next/head';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import { useState } from 'react';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';

function CartPage({ cart, products }) {
  //mb i do like to keep it in order to sum pieces of the same items
  let itemsInCart = cart;
  console.log(itemsInCart);

  // let piecesInit = Number(itemsInCart.map)

  const [pieces, setPieces] = useState(
    Number(itemsInCart.map((item) => item.amount)),
  ); //take it out into a separate var now it says amount is an array
  const [itemTotal, setItemTotal] = useState(
    products.map((item) => item.price),
  );
  // console.log(pieces);
  // console.log(itemTotal);

  const total = itemsInCart
    ? itemsInCart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    : 0;
  cookie.set('total', total);

  // function handlePieces(e, id) {
  //   let newCart = cart.map((item) => {
  //     if (item.id === id) {
  //       //item.id === item.id = ALL items in cart
  //       //product.id also not, cart.id either, itemsInCart either, item.key also not.
  //       return {
  //         ...item,
  //         amount: Number(e.target.value),
  //         price: Number(e.target.value) * item.price,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });

  //   cookie.set('cart', newCart);
  //   // window.location.reload();
  //   console.log(newCart);
  // }

  function addOne(id) {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        let prodPrice = products.find((prod) => prod.id === id);

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
    // window.location.reload();
    console.log(newCart);
  }

  function reduceOne(id) {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        if (pieces === 1) {
          alert('Use remove button!');
          return item;
        } else {
          setPieces(+pieces - 1);

          return {
            ...item,
            amount: pieces,
          };
        }
      } else {
        return item;
      }
    });
    cookie.set('cart', newCart);
    // window.location.reload();
    console.log(newCart);
  }

  function removeItem(id) {
    let newCart = itemsInCart.filter((item) => {
      return item.id !== id;
    });
    cookie.set('cart', newCart);

    window.location.reload();
    console.log(newCart);
  }

  return (
    <div>
      <Head>
        <title>Bist du Teppich: Your Cart </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="container">
        <h1>Shopping Cart</h1>
        <Link href="/products">
          <a> Back to shop</a>
        </Link>
        <div className="tableItems">
          <h4> Product</h4>
          <h4>Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
          <h4>&nbsp;</h4>
          {itemsInCart
            ? itemsInCart.map((item) => {
                return (
                  <li className="item" key={item.id}>
                    <img src={item.img} alt="item" />
                    <p>{item.name}</p>
                    <button onClick={() => reduceOne(item.id)}>-</button>
                    <p>{item.amount}</p>
                    <button onClick={() => addOne(item.id)}>+</button>
                    {/* <label for="productNumber">
                      <input
                        type="number"
                        min="1"
                        placeholder={item.amount}
                        onChange={(e) => handlePieces(e, item.id)}
                      ></input>
                    </label> */}
                    {/* <p>{Number(item.price) * Number(item.amount)}€</p> */}
                    <p>{item.price}€</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="removeButton"
                    >
                      Remove item from cart
                    </button>
                  </li>
                );
              })
            : 'The cart is empty....'}
        </div>
        <p className="total">
          Total:
          {total}€<br></br>
          <Link href="/payment">
            <a>
              <button>Proceed to checkout</button>
            </a>
          </Link>
        </p>
      </div>
      <Footer />
      <style jsx>{`
        .container {
          margin-top: 140px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          background-color: white;
          border-radius: 20px;
          padding: 10px;
        }
        h1 {
          margin-left: 15px;
        }
        a {
          text-decoration: none;
          font-size: 17px;
          color: #2f3640;
          margin-left: 20px;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }

        .tableItems {
          padding: 10px;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 10px;
          text-align: center;
          border-bottom: 1px solid #2f3640;
        }

        img {
          height: 70px;
          align-self: center;
          margin-left: 30px;
        }
        input {
          padding: 5px;
          border-radius: 5px;
          width: 50px;
          text-align: center;
        }

        .removeButton {
          width: 100px;
          font-size: 80%;
          padding: 5px;
          background-color: red;
        }
        .total {
          text-align: right;
          font-size: 20px;
          margin-right: 10px;
        }

        button {
          margin-top: 40px;
          align-self: center;
          background-color: #2ed573;
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
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'DM Mono', monospace;
          background-image: url('/more-leaves.png');
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          color: #2f3640;
          text-shadow: 2px 2px black;
        }
      `}</style>
    </div>
  );
}
export default CartPage;

export async function getServerSideProps(context) {
  const { cart } = await nextCookies(context);
  const { getProducts } = await import('../db.js');
  const products = await getProducts(context.params);

  return {
    // will be passed to the page component as props
    props: {
      ...(cart ? { cart: cart } : undefined),
      products,
    },
  };
}
