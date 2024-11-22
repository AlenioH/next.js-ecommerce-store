import Link from 'next/link';
import cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';

export function totalAmount(itemsInCart) {
  return itemsInCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
}

export default function Header() {
  const [itemsInCart, setItemsInCart] = useState(
    () => cookie.getJSON('cart') || []
  );

  useEffect(() => {
    const handleCartUpdate = (event) => {
      setItemsInCart(event.detail);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <header>
      <ul>
        <div className="left-container">
          <Link href={'/index'}>
            <a>
              <li>
                <img src="/favicon.png" alt="logo couch"></img>Bist du Teppich!
                Home
              </li>
            </a>
          </Link>
          <Link href={'/products'}>
            <a>
              <li>Go to shop</li>
            </a>
          </Link>
        </div>
        {totalAmount(itemsInCart) > 0 && (
          <Link className="cart" href={'/cartPage'}>
            <a>
              <li className="cart-li">
                <TiShoppingCart size={45} />
                <span className="cart-amount">{totalAmount(itemsInCart)}</span>
              </li>
            </a>
          </Link>
        )}
      </ul>
      <style jsx>{`
        header {
          width: 100%;
          font-family: 'Roboto', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          background-color: #fff;
          box-shadow:
            0px 10px 20px rgba(0, 0, 0, 0.1),
            0px 4px 15px rgba(0, 0, 0, 0.05);
        }

        header ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          margin: 0;
        }

        .left-container {
          display: flex;
          align-items: baseline;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          font-weight: 600;
          color: #333;
        }

        img {
          height: 40px;
          margin-right: 10px;
          vertical-align: middle;
        }

        li {
          padding: 10px 15px;
          font-size: 1.1rem;
          font-weight: 500;
          text-transform: uppercase;
          color: #333;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        li:hover {
          color: #2ed573;
          transform: translateY(-2px);
        }

        .cart-li {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          gap: 0.5rem;
          position: relative;
        }

        .cart-li span {
          font-size: 0.9rem;
          color: #555;
        }

        .cart-amount {
          border-radius: 50%;
          padding: 5px;
          position: absolute;
          right: 30%;
          bottom: -5px;
          width: 28px;
          display: flex;
          justify-content: center;
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          color: #2ed573;
        }
      `}</style>
    </header>
  );
}
