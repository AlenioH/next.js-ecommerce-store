import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import nextCookies from 'next-cookies';
import cookie from 'js-cookie';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Payment() {
  const router = useRouter();
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    cookie.remove('cart');
    cookie.remove('total');
    router.replace('/thx');
  }

  const regexText = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
  const regexNumber = /^[0-9/]+$/; // Allow only numbers and slashes

  function checksTypeText(e) {
    if (regexText.test(e.target.value) || e.target.value === '') {
      setInput(e.target.value);
    }
  }

  function checksTypeNumber(e) {
    if (regexNumber.test(e.target.value) || e.target.value === '') {
      setInput(e.target.value);
    }
  }

  return (
    <div className="main">
      <Head>
        <title>Bist du Teppich: Payment</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <div className="container">
        <h1>Payment Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-section">
              <h2>Shipping Address</h2>
              <label htmlFor="name">Full Name</label>
              <input
                data-cy="full-name"
                type="text"
                id="name"
                placeholder="Alenio Hasslacherio"
                onChange={checksTypeText}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="alenio@teppich.com"
                required
              />
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Awesome Str. 1/2/3"
                required
              />
              <label htmlFor="zip">Zip Code</label>
              <input
                id="zip"
                type="text"
                maxLength="4"
                placeholder="2320"
                onChange={checksTypeNumber}
                required
              />
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                placeholder="Raccoon City"
                required
              />
            </div>

            <div className="form-section">
              <h2>Payment Details</h2>
              <p>Accepted Cards</p>
              <div className="cards">
                <img src="/visa.png" alt="Visa" />
                <img src="/alenio.png" alt="Jaegermeister" />
              </div>
              <label htmlFor="namecard">Name on Card</label>
              <input
                id="namecard"
                type="text"
                placeholder="Alenio B. Hasslacherio"
                onChange={checksTypeText}
                required
              />
              <label htmlFor="cardnumber">Card Number</label>
              <input
                id="cardnumber"
                type="text"
                placeholder="1234-5678-9000-1111"
                maxLength="16"
                onChange={checksTypeNumber}
                required
              />
              <label htmlFor="expdate">Expiry Date</label>
              <input
                id="expdate"
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                onChange={checksTypeNumber}
                required
              />
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                placeholder="456"
                maxLength="3"
                onChange={checksTypeNumber}
                required
              />
            </div>
          </div>

          <p className="total">
            Total: <strong>{cookie.getJSON('total')}€</strong>
          </p>
          <div className="button-container">
            <button type="submit">Complete Purchase</button>
          </div>
        </form>
      </div>
      <Footer />

      <style jsx>{`
        .main {
          padding: 50px 20px;
        }

        .container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 30px;
          color: #333;
        }

        .form-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        h2 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: #555;
        }

        label {
          font-size: 0.9rem;
          color: #777;
        }

        input {
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 100%;
        }

        .cards {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cards img {
          height: 40px;
        }

        .total {
          font-size: 1.2rem;
          margin: 20px 0;
          text-align: center;
          color: #222;
        }

        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        button {
          padding: 15px 30px;
          font-size: 1rem;
          background-color: #27ae60;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #218c53;
        }

        @media (max-width: 768px) {
          .form-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { cart, total } = nextCookies(context);

  return {
    props: {
      ...(cart ? { cart: cart } : undefined),
      total,
    },
  };
}
