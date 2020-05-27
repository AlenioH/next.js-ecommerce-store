import Head from 'next/head';
import Header from '../components/Header.js';

import React from 'react';

export default function cartPage() {
  return (
    <div>
      <Head>
        <title>Bist du Teppich: Your Cart </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      These items are in your cart:
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-image: url('/more-leaves.png');
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
