import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import cookie from 'js-cookie';
import React, { useState } from 'react';
import nextCookies from 'next-cookies';
// import PaymentInputs from '../components/PaymentInputs.js';

export default function Payment() {
  const [input, setInput] = useState('');

  function buy() {
    cookie.remove('cart');
    cookie.remove('total');
  }

  const regexText = /[a-zA-Z]/g;
  const regexNumber = /[0-9/]/g;

  function checksTypeText(e) {
    if (e.target.value.match(regexText)) {
      setInput(e.target.value);
      console.log(input);
    } else {
      e.target.value = '';
    }
  }

  function checksTypeNumber(e) {
    if (e.target.value.match(regexNumber)) {
      setInput(e.target.value);
      console.log(input);
    } else {
      e.target.value = '';
    }
  }

  return (
    <div>
      <Head>
        <title>Bist du Teppich: Payment </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <div className="container">
        <h1>Contact information and payment</h1>
        <div className="wholeBox">
          <div className="contactInfo">
            <h3>Shipping address</h3>
            <span>
              <label htmlFor="name">Full name</label>
              <input
                data-cy="full-name"
                type="text"
                id="name"
                placeholder="Alenio Hasslacherio"
                onChange={checksTypeText}
              ></input>
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="alenio@teppich.com"
              ></input>
            </span>
            <span>
              <label for="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Awesome Str. 1/2/3"
              ></input>
            </span>
            <span>
              <label for="zip">Zip-code</label>
              <input
                id="zip"
                placeholder="2320"
                type="text"
                maxLength="4"
                onChange={checksTypeNumber}
              ></input>
            </span>
            <span>
              <label for="city">City</label>
              <input id="city" placeholder="Raccoon-city" type="text"></input>
            </span>
          </div>
          <div className="payment">
            <h3>Payment info</h3>
            <div className="cards">
              <p>Accepted cards</p>
              <img src="/visa.png" alt="visa"></img>
              <img src="/alenio.png" alt="jaegermeister"></img>
            </div>
            <span>
              <label for="namecard">Name on card</label>
              <input
                id="namecard"
                type="text"
                placeholder="Alenio B. Hasslacherio"
                onChange={checksTypeText}
              ></input>
            </span>
            <span>
              <label for="cardnumber">Credit card number</label>
              <input
                id="cardnumber"
                type="text"
                placeholder="1234-5678-9000-1111"
                maxLength="16"
                onChange={checksTypeNumber}
              ></input>
            </span>
            <span>
              <label htmlFor="expdate">Expiry date</label>
              <input
                id="expdate"
                type="text"
                placeholder="12/20"
                onChange={checksTypeNumber}
                maxLength="5"
              ></input>
            </span>
            <span>
              <label for="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                placeholder="456"
                onChange={checksTypeNumber}
                maxLength="3"
              ></input>
            </span>
            {/* <PaymentInputs /> */}
          </div>
        </div>

        <p className="total">
          Total price of items in cart: {cookie.getJSON('total')}€
        </p>
        {!input ? (
          ''
        ) : (
          <Link href="/thx">
            <a data-cy="buy-button">
              <button onClick={buy}>BUY!</button>
            </a>
          </Link>
        )}
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
          display: flex;
          flex-direction: column;
        }
        .wholeBox {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          margin-top: -20px;
        }

        .contactInfo,
        .payment {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contactInfo > *,
        .payment > * {
          padding: 10px;
        }

        .cards {
          margin-top: -40px;
        }

        input {
          padding: 5px;
          border-radius: 5px;
        }

        input[id='cvv'],
        input[id='zip'],
        input[id='expdate'] {
          width: 70px;
        }
        span {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 15px;
        }
        span label {
          text-align: right;
        }

        img {
          height: 30px;
        }

        img:last-of-type {
          margin-left: 3px;
        }

        a {
          align-self: flex-end;
        }

        .total {
          align-self: flex-end;
        }
        button {
          font-weight: bold;
          text-align: center;
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
}
export async function getServerSideProps(context) {
  const { cart, total } = nextCookies(context);

  console.log(total);
  return {
    props: {
      ...(cart ? { cart: cart } : undefined),
      total,
    },
  };
}
