// import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header.js';
import { getProductById } from '../../db.js';
import Footer from '../../components/Footer.js';
import { useState } from 'react';
import cookie from 'js-cookie';

export function Product({ product }) {
  if (!product) {
    return <div>Item not found...</div>;
  }

  const [pieces, setPieces] = useState(0);
  const [total, setTotal] = useState(product.price);
  // const [cart, setCart] = useState([]);

  function handlePieces(e) {
    setPieces(Number(e.target.value));
    setTotal(e.target.value * product.price);
  }

  function addToCart() {
    let itemsInCart = cookie.getJSON('cart') || [];

    product = {
      name: product.name,
      price: total,
      id: product.id,
      amount: pieces,
      img: product.img,
      info: product.info,
    };

    itemsInCart.push(product);
    cookie.set('cart', itemsInCart);

    let itemFilter = itemsStored.find((item) => item.id === product.id);
    if (itemFilter) {
      itemsInCart = itemsStored.map((item, id) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + pieces };
        } else {
          return item;
        }
      });
      cookie.set('cart', itemsInCart);
    }

    // if (itemsStored) {
    //   let itemsInCart = [
    //     ...itemsStored,
    //     { ...product, price: total, amount: pieces },
    //   ];
    //   cookie.set('cart', itemsInCart);

    // } else {
    //   let itemsInCart = [{ ...product, price: total, amount: pieces }];
    //   cookie.set('cart', itemsInCart);
    // }

    alert('The item has been successfully added to the cart!');
    window.location.reload();
  }
  //Local storage thing works but I'm going to get some cookies...
  // function addToCart() {
  //   if (typeof window !== 'undefined') {
  //     window.localStorage.itemsInCartLocStorage = JSON.stringify([
  //       props.product, //PIECES shall go there too AAAAND total
  //     ]);
  //     setCart(window.localStorage.itemsInCartLocStorage);
  //     console.log(cart);
  //   } else {
  //     alert('Something went wrong...');
  //   }
  // }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <title>{product.name}</title>
      </Head>
      <Header />
      <div className="wrapper">
        <img src={product.img}></img>
        <div className="description">
          <h1>{product.name}</h1>
          <p>{product.info}</p>
          <hr />
          <p className="info">
            Dispatched in 8-10 weeks.
            <br></br>
            Free shipping within the 3rd district.
          </p>
          <p className="price">{product.price}€</p>

          <label for="productNumber">
            <input
              type="number"
              min="1"
              placeholder="0"
              onChange={handlePieces}
            ></input>
          </label>
          <p>Total: {total}€</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .wrapper {
          border-radius: 20px;
          margin-top: 140px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          padding: 20px;
          background-color: white;
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-gap: 20px;
        }
        img {
          height: 400px;
          margin-left: -80px;
        }
        h1 {
          margin-bottom: 40px;
        }
        .description {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .price {
          font-size: 130%;
          text-shadow: 1.5px 1.5px black;
        }
        .info {
          font-size: 90%;
          color: #636e72;
          margin-top: 0;
          letter-spacing: 0.01px;
        }
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
        input {
          padding: 5px;
          border-radius: 5px;
          width: 50px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'DM Mono', monospace;
          background-image: url('/more-leaves.png');
          color: #2f3640;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
export default Product;

// getServerSideProps will ONLY be run on the server, so
// you can write code here that is "secret" - eg. passwords,
// database connection information, etc.

export function getServerSideProps(context) {
  const product = getProductById(context.params.id);
  if (product === undefined) {
    return { props: {} };
  }
  return {
    // will be passed to the page component as props
    props: {
      product,
    },
  };
}
