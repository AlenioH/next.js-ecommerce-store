import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar.js';

export default function Products({ products }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  function searchFunction(e) {
    setSearch(e.target.value);
    setFilter('active');
  }

  return (
    <div className="main">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Bist du Teppich! Shop</title>
      </Head>

      <Header />
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a product..."
            value={search}
            onChange={searchFunction}
          />
        </div>
        <div className="products-grid">
          {products
            .filter((item) => {
              if (filter === 'active') {
                return item.name.toLowerCase().includes(search.toLowerCase());
              } else {
                return true;
              }
            })
            .map((item) => (
              <div className="product-card" key={item.id}>
                <Link href={'/products/' + item.id}>
                  <a>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.price}€</p>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .container {
          margin: 80px auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .search-bar {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .search-bar input {
          width: 100%;
          max-width: 400px;
          padding: 10px 15px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.3s;
        }

        .search-bar input:focus {
          border-color: #4caf50;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .product-card {
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          transition:
            box-shadow 0.3s,
            transform 0.3s;
        }

        .product-card:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }

        .product-card img {
          max-height: 180px;
          width: 100%;
          object-fit: contain;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .product-card h3 {
          font-size: 1.1rem;
          font-weight: 500;
          color: #333;
          margin: 0 0 5px;
        }

        .product-card p {
          font-size: 1rem;
          font-weight: bold;
          color: #4caf50;
          margin: 0;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .search-bar input {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../../db.js');
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
