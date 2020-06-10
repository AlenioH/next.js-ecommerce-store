import Link from 'next/link';
import cookie from 'js-cookie';
// import nextCookies from 'next-cookies';
import React from 'react';

export default function Header() {
  let itemsInCart = cookie.getJSON('cart');
  // let amountInCart = itemsInCart.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue.amount;
  // }, 0);  if i do it like this = undefined

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
              <li>
                <img src="/cart.png" alt=""></img>
                {itemsInCart
                  ? `Items in cart: ${itemsInCart.reduce(
                      (accumulator, currentValue) => {
                        return accumulator + currentValue.amount;
                      },
                      0,
                    )}`
                  : 'Your cart is empty'}
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <style jsx>{`
        .wrap {
          width: 100%;
          font-weight: bold;
          margin-top: 0;
          margin-left: 0;
        }

        .navBar ul {
          margin-top: 0;
          margin-left: 0;
          flex-direction: row;
          display: flex;
          align-items: center;
          justify-content: space-around;
          position: fixed;
          top: 0;
          list-style-type: none;
          background-color: white;
          width: 100%;
          border-bottom: 2px dotted #062a06;
        }

        img {
          height: 50px;
          vertical-align: middle;
        }
        ul a li {
          padding: 15px;
        }

        a {
          text-decoration: none;
          color: #062a06;
          text-shadow: 1px 1px #2f3640;
          font-size: 1.5rem;
        }

        a:hover {
          color: #636e72;
          transition: color 0.3s;
        }
      `}</style>
    </div>
  );
}
