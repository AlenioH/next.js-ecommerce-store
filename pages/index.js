import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bist du Teppich </title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>
        <h1 className="title"> Welcome to Bist du Teppich!</h1>
        <img alt="item" src="/favicon.png"></img>
        <h2>Home of most cosy interior decor</h2>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          margin-top: 70px;
          min-height: 100vh;
        }

        img {
          margin-top: -40px;
          height: 300px;
        }

        main {
          padding: 0;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          color: #2f3640;
          text-decoration: none;
          text-shadow: 2px 2px black;
          margin-top: 70px;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        h2 {
          font-size: 2rem;
          text-shadow: 1.5px 1.5px black;
          margin-top: -20px;
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
