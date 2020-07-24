import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import React from 'react';

export default function thx() {
  return (
    <div>
      <Head>
        <title>Bist du Teppich: Payment </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="container">
        <h1>Thank you for you purchase! </h1>
        <h2>Our team will contact you shortly</h2>
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
