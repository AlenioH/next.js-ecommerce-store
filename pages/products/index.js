import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header.js';

export default function products() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <title>Our rugs</title>
      </Head>
      ;
      <Header />
      <div className="rugtainer">
        <h1>Our rugs</h1>
        <div className="itemContainer">
          <Link href="/products/1">
            <a>
              <img src="/carpet1.png"></img>
              <h3>A very pretty creamy rug</h3>
              <p>199€</p>
            </a>
          </Link>
        </div>
        <div className="itemContainer">
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
      </div>
      <style jsx>{`
        h1 {
          margin-left: 150px;
          text-shadow: 1.5px 1.5px black;
        }

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

        .itemContainer a:hover {
          border: 2px solid #e9f6ee;
          transition: border 0.3s;
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
