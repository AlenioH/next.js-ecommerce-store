import Link from 'next/link';
import cookie from 'js-cookie';
import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

export function totalAmount(itemsInCart) {
  return itemsInCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
}

export default function Header() {
  const itemsInCart = cookie.getJSON('cart') || [];

  return (
    <div className="wrap">
      <div className="navBar">
        <ul>
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
          <Link className="cart" href={'/cartPage'}>
            <a>
              <li className="cartItems">
                <TiShoppingCart size={25} />
                {totalAmount(itemsInCart) !== 0
                  ? `Items in cart: ${totalAmount(itemsInCart)}`
                  : ''}
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <style jsx>{`
        .wrap {
          width: 100%;
          font-family: 'Roboto', sans-serif;
        }

        .navBar ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          margin: 0;
          background-color: #fff;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), 0px 4px 15px rgba(0, 0, 0, 0.05);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
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
          transition: color 0.3s ease, transform 0.3s ease;
        }

        li:hover {
          color: #2ed573;
          transform: translateY(-2px);
        }

        .cartItems {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          gap: 0.5rem;
        }

        .cartItems span {
          font-size: 0.9rem;
          color: #555;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          color: #2ed573;
        }
      `}</style>
    </div>
  );
}
