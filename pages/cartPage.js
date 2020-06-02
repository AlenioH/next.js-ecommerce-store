import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import { useState } from 'react';
// import { getProductById } from '../db.js';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import products from './products/index.js';

function cartPage(props) {
  // const [pieces, setPieces] = useState(0);  //mb i do like to keep it in order to sum pieces of the same items
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  function handlePieces(e) {
    //so like this is the initial thing out of scope, must think of smth else.
    e.target.value * props.cart.price;
  }

  // const itemsInCart = props.cart;

  function removeItem(id) {
    cookie.remove(
      props.cart.id.find((item) => {
        return item.id !== item.id;
      }),
    );
    //product must be defined
    window.location.reload();
  }
  //removes all the cookies, how to remove one!

  let itemsInCart = props.cart;
  console.log(itemsInCart);

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
          <h4></h4>
          {/* <p>{props.cart.name || 'The cart is empty...'}</p> */}
          {itemsInCart
            ? itemsInCart.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <img src={item.img}></img>
                    <p>{item.name}</p>
                    <label for="productNumber">
                      <input
                        type="number"
                        min="1"
                        placeholder={item.amount}
                        onChange={handlePieces}
                      ></input>
                    </label>
                    <p>{item.price}€</p>
                    <button onClick={removeItem} className="removeButton">
                      Remove item from cart
                    </button>
                  </div>
                );
              })
            : 'The cart is empty....'}
        </div>
        <p className="total">
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
export default cartPage;

export function getServerSideProps(context) {
  const { cart } = nextCookies(context);

  return {
    // will be passed to the page component as props
    props: {
      ...(cart ? { cart: cart } : undefined),
    },
  };
}
// ...(cart ? { cart: cart } : undefined),
//first "cart" is the constant so if the cart is defined not empty, return cart object with the value of cart
//otherwise: undefined
