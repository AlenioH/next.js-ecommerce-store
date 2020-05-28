import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header.js';
import { getProductById } from '../../db.js';
import Footer from '../../components/Footer.js';
import { useState } from 'react';

export function Product(props) {
  if (!props.product) {
    return <div>Item not found...</div>;
  }

  // const [pieces, setPieces] = useState(0);

  const [total, setTotal] = useState(0);

  function handlePieces(e) {
    //so like this is the initial thing out of scope, must think of smth else.
    const pieces = e.target.value;
    setTotal(pieces * props.product.price);
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <title>{props.product.name}</title>
      </Head>
      <Header />
      <div className="wrapper">
        <img src={props.product.img}></img>
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

          <label for="productNumber">
            <input
              type="number"
              min="1"
              placeholder="0"
              onChange={handlePieces}
            ></input>
          </label>
          <p>Total: {total}€</p>
          <button>Add to the cart</button>
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

//   // if (typeof window !== 'undefined' && props.product) {
//   //   const [pieces, setPieces] = useState(
//   //     JSON.parse(
//   //       // This is the same as:
//   //       // window.localStorage.lastUsersVisited
//   //       window.localStorage.getItem('piecesInLocalStorage'),
//   //     ) || 0,
//   //   );

//   // This is the same as:
//   // window.localStorage.lastUsersVisited = JSON.stringify([...prevLastUsersVisited, props.user.id])
//   //   window.localStorage.setItem(
//   //     'piecesInLocalStorage',
//   //     JSON.stringify([pieces]),
//   //   );
//   // }

//   // if (typeof window !== 'undefined' && props.product) {
//   //   const [pieces, setPieces] = useState(
//   //     JSON.parse(window.localStorage.getItem('piecesInLocalStorage')) || 0,
//   //   );

//   // const [pieces, setPieces] = useState(
//   //   JSON.parse(window.localStorage.getItem('piecesInLocalStorage')) || 0,
//   // );

//   // if (typeof window !== 'undefined' && props.product) {
//   //   JSON.parse(window.localStorage.getItem('piecesInLocalStorage'));

//   //   useEffect(() => {
//   //     window.localStorage.setItem(
//   //       'piecesInLocalStorage',
//   //       JSON.stringify(pieces),
//   //     );
//   //   }, [pieces]);

//   // function countTotal() {
//   //   return pieces * props.product.price;
//   //   setTotal(countTotal());
//   // }
