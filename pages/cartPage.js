import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import { useState } from 'react';
// import { getProductById } from '../db.js';

const cartPage = (props) => {
  const [pieces, setPieces] = useState(0);
  const [total, setTotal] = useState(0);

  function handlePieces(e) {
    setPieces(e.target.value);
    let newTotal = total;
    newTotal = pieces * props.product.price;
    setTotal(newTotal);
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

          <img src="/carpet1.png"></img>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum{' '}
          </p>
          <label for="productNumber">
            <input
              type="number"
              min="1"
              placeholder="1"
              onChange={handlePieces}
            ></input>
          </label>
          <p>309€</p>
          <img src="/carpet4.png"></img>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum{' '}
          </p>
          <label for="productNumber">
            <input
              type="number"
              min="1"
              placeholder="1"
              onChange={handlePieces}
            ></input>
          </label>
          <p>100€</p>
        </div>

        <p className="total">
          Total: 409€
          <br></br>
          <button>Proceed to checkout</button>
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
          grid-template-columns: 1fr 2fr 1fr 1fr;
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
};
export default cartPage;

// export function getServerSideProps(context) {
//   const product = getProductById(context.params.id);
//   if (product === undefined) {
//     return { props: {} };
//   }
//   return {
//     // will be passed to the page component as props
//     props: {
//       product,
//     },
//   };
// }
//is this the way it works if i already have it in another file
