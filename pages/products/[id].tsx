import Head from 'next/head';
import { TiArrowLeft } from 'react-icons/ti';
import React, { useState } from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
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
  const [pieces, setPieces] = useState(1);
  const [total, setTotal] = useState(props.product.price);

  function handlePieces(e) {
    setPieces(Number(e.target.value));
    setTotal(Number(e.target.value) * props.product.price);
  }

  return (
    <div className="main">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>{props.product.name || ''}</title>
      </Head>
      <Header />
      <div className="wrapper">
        <Link href="/products">
          <a className="back-to-shop">
            {' '}
            <TiArrowLeft size={25} />
            Back to shop
          </a>
        </Link>
        <div className="image-container">
          <img src={props.product.img} alt={props.product.name} />
        </div>
        <div className="description">
          <h1>{props.product.name}</h1>
          <p className="info">{props.product.info}</p>
          <hr />
          <p className="price">{props.product.price.toFixed(2)}€</p>
          <p className="dispatch-info">
            Dispatched in 8-10 weeks.
            <br />
            Free shipping within the 3rd district.
          </p>

          <div className="quantity-container">
            <label>
              <span>Quantity:</span>
              <input
                data-cy={`input-field/${props.product.name.toLowerCase()}`}
                type="number"
                min="1"
                placeholder="Qty"
                onChange={handlePieces}
                value={pieces}
              />
            </label>
          </div>

          <p
            className="total-price"
            data-cy={`total-price/${props.product.name.toLowerCase()}`}
          >
            {pieces > 1 && `Total: ${total.toFixed(2)}€`}
          </p>

          <AddToCart
            product={props.product}
            pieces={pieces}
            total={total}
            initialPrice={props.product.price}
          />
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .main {
          padding-top: 50px;
          color: #333;
        }

        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
          max-width: 1200px;
          margin: 50px auto;
          padding: 20px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .image-container img {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          border-radius: 12px;
        }

        .description {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #222;
        }

        .info {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        .dispatch-info {
          font-size: 0.9rem;
          color: #777;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 600;
          color: #27ae60;
        }

        .quantity-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quantity-container input {
          padding: 8px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 60px;
        }

        .total-price {
          font-size: 1rem;
          color: #444;
        }

        .back-to-shop {
          position: absolute;
          top: 15px;
          color: #636e72;
          font-size: 1rem;
          font-weight: 400;
          cursor: pointer;
          display: flex;
          align-items: center;
          width: fit-content;
          margin-left: 0;
        }

        .back-to-shop:hover {
          color: #2ed573;
          text-decoration: none;
        }

        .back-to-shop:active {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 768px) {
          .wrapper {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .image-container img {
            max-height: 300px;
          }

          .price {
            font-size: 1.3rem;
          }

          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Product;

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
