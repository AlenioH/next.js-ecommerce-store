import Head from 'next/head';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import React, { useState } from 'react';
import AddToCart from '../../components/AddToCart';
import Link from 'next/link';

type Item = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type Props = { product: Item };

export function Product(props: Props) {
  if (!props.product) {
    return <div>Item not found...</div>;
  }
  console.log(props.product);
  const [pieces, setPieces] = useState(1);
  const [total, setTotal] = useState(props.product.price);

  function handlePieces(e) {
    setPieces(Number(e.target.value));
    setTotal(pieces * props.product.price);
  }

  return (
    <div className="main">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        />
        <title>{props.product.name || ''}</title>
      </Head>
      <Header />
      <div className="wrapper">
        <img src={props.product.img} alt="" />
        <div className="description">
          <h1>{props.product.name}</h1>
          <p>{props.product.info}</p>
          <hr />
          <p className="info">
            Dispatched in 8-10 weeks.
            <br></br>
            Free shipping within the 3rd district.
          </p>
          <p className="price">{props.product.price}€</p>

          <label htmlFor="productNumber">
            <input
              data-cy={'input-field/' + props.product.name.toLowerCase()}
              type="number"
              min="1"
              placeholder="Qty"
              onChange={handlePieces}
              value={pieces}
            />
          </label>
          <p data-cy={'total-price/' + props.product.name.toLowerCase()}>
            {pieces > 1 ? <p>Total: {total}€</p> : ''}
          </p>
          <AddToCart
            product={props.product}
            pieces={pieces}
            total={total}
            initialPrice={props.product.price}
          />
          <Link href="/products">
            <a className="backToShop">Back to shop</a>
          </Link>
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

        .backToShop {
          text-decoration: none;
          background-color: #2f3640;
          padding: 15px;
          margin-top: 10px;
          border-radius: 10px;
          color: white;
          font-family: inherit;
          font-size: 120%;
        }

        .backToShop:hover {
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
// you can write code here that works with "secret"
// information - eg. passwords, database connection
// information, etc.

export async function getServerSideProps(context) {
  const { getProductById } = await import('../../db.js');

  const product = await getProductById(context.params.id);

  return {
    // will be passed to the page component as props
    props: {
      product: product,
    },
  };
}
