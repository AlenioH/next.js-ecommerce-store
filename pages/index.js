import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import React from 'react';

export default function Home({ products }) {
  return (
    <div className="main">
      <Head>
        <title>Bist du Teppich</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <h1 className="title">Welcome to Bist du Teppich!</h1>
        <h2>Home of the Most Cosy Interior Decor</h2>

        <div className="categories-wrapper">
          {Object.keys(products).map((cat) => (
            <div key={cat} className="category-card">
              <div className="category-banner">
                <h4>{cat.toUpperCase()}</h4>
              </div>
              <div className="products">
                {products[cat].map((product) => (
                  <div key={product.id} className="product-card">
                    <Link href={'/products/' + product.id}>
                      <a>
                        <img src={product.img} alt={product.name} />
                        <p>{product.name}</p>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .main {
          padding-top: 50px;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }

        .title {
          font-size: 2rem;
          color: #333;
          margin-bottom: 10px;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          color: #666;
          margin-bottom: 30px;
          text-align: center;
        }

        .categories-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .category-card {
          border: 1px solid #d8cfc4;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background: #fff;
        }

        .category-banner {
          background: linear-gradient(
            135deg,
            #2d4f2d,
            #4f704f
          );
          padding: 20px;
          text-align: center;
          color: #f4ede0;
        }

        .category-banner h4 {
          font-size: 1.5rem;
          margin: 0;
          font-weight: bold;
        }

        .products {
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .product-card {
          width: calc(50% - 10px);
          text-align: center;
        }

        .product-card a {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .product-card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 5px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .category-card img:hover {
          transform: translateY(-5px);
        }

        .product-card p {
          margin: 10px 0 0;
          font-size: 0.9rem;
          color: #333;
        }

        @media (max-width: 768px) {
          .product-card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { getProductsSortedByCat } = await import('../db.js');
  const products = await getProductsSortedByCat();

  return {
    props: {
      products,
    },
  };
}
