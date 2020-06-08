import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import React from 'react';

export default function Products({ products }) {
  // console.log(products);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <title>Bist du Teppich! Shop</title>
      </Head>
      ;
      <Header />
      {/* <h1></h1> */}
      <div className="rugtainer">
        {products.map((item) => {
          return (
            <div className="itemContainer" key={item.id}>
              <Link href={'/products/' + item.id}>
                <a>
                  <img src={item.img} alt="item"></img>
                  <h3>{item.name}</h3>
                  <p> {item.price}€</p>
                </a>
              </Link>
            </div>
          );
        })}

        {/* <div className="itemContainer">
          <Link href="/products/2">
            <a>
              <img src="/carpet2.png"></img>
              <h3>Jungle rug</h3>
              <p>240€</p>
            </a>
          </Link>
        </div>
        <div className="itemContainer">
          <Link href="/products/3">
            <a>
              <img src="/carpet3.png"></img>
              <h3>Cosy fluffy rug</h3>
              <p>329€</p>
            </a>
          </Link>
        </div>
        <div className="itemContainer">
          <Link href="/products/4">
            <a>
              <img src="/carpet4.png"></img>
              <h3>Marijuana rug</h3>
              <p>118€</p>
            </a>
          </Link>
        </div>
        <div className="itemContainer">
          <Link href="/products/5">
            <a>
              <img src="/carpet5.png"></img>
              <h3>Pink one</h3>
              <p>209€</p>
            </a>
          </Link>
        </div>
        <div className="itemContainer">
          <Link href="/products/6">
            <a>
              <img src="/cushion1.png"></img>
              <h3>Fluffy cushion</h3>
              <p>29€</p>
            </a>
          </Link>
        </div>
        <div className="itemContainer">
          <Link href="/products/7">
            <a>
              <img src="/couch1.png"></img>
              <h3>Lovey Loverson Couch</h3>
              <p>499€</p>
            </a>
          </Link>
        </div> */}
      </div>
      <Footer />
      <style jsx>{`
        .rugtainer {
          border-radius: 20px;
          margin-top: 140px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 30px;
          width: 80%;
          background-color: white;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px;
        }

        img {
          height: 180px;
          width: auto;
        }

        .itemContainer a {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 5px;
          text-decoration: none;
          color: inherit;
        }

        .itemContainer:hover {
          background-color: #e9f6ee;

          transition: background-color 0.3s;
          border-radius: 10px;
        }

        .itemContainer h3 {
          margin-bottom: 0;
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

export async function getServerSideProps(context) {
  const { getProducts } = await import('../../db.js');
  const products = await getProducts(context.params);

  return {
    props: {
      products,
    },
  };
}
