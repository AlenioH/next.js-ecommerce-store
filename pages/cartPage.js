import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import RemoveFromCart from '../components/RemoveFromCart.tsx';
import QuantityButton from '../components/QuantityButton.tsx';

export function totalSum(itemsInCart) {
  return itemsInCart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
}
function CartPage({ cart, products }) {
  const [itemsInCart, setItemsInCart] = useState(cart || []);

  useEffect(() => {
    const totalCart = totalSum(itemsInCart);
    cookie.set('cart', itemsInCart);
    cookie.set('total', totalCart);

    // dispatch a custom event so that the Header would know to update the value too
    const event = new CustomEvent('cartUpdated', { detail: itemsInCart });
    window.dispatchEvent(event);
  }, [itemsInCart]);

  /**
   * Increase or decrease amount of one item in cart
   * @param {string} id if of the product
   * @param {string} action "increase", "decrease", "remove"
   */
  const changeQuantity = (id, action) => {
    let updatedCart;
    if (action === 'remove') {
      updatedCart = itemsInCart.filter((item) => {
        return item.id !== id;
      });
    } else {
      const productsMap = new Map(products.map((prod) => [prod.id, prod]));
      updatedCart = itemsInCart.map((item) => {
        if (item.id === id) {
          const prodPrice = productsMap.get(id); // Efficient lookup

          // increase or decrease amount based on action
          let newAmount = item.amount;
          if (action === 'increase') {
            newAmount++; // Increase amount
          } else if (action === 'decrease') {
            newAmount--; // Decrease amount
          }
          const newPrice = prodPrice ? prodPrice.price * newAmount : item.price;

          return {
            ...item,
            amount: newAmount,
            price: newPrice,
          };
        }
        return item;
      });
    }
    // update the local state with the new cart and sync with cookies
    setItemsInCart(updatedCart);
  };

  return (
    <div>
      <Head>
        <title>Bist du Teppich: Your Cart </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="container">
        <div className="products-container">
          <h1>Shopping Cart</h1>
          <Link href="/products">
            <a className="back-to-shop">
              {' '}
              <TiArrowLeft size={25} />
              Back to shop
            </a>
          </Link>
          <div className="tableItems">
            {itemsInCart.length === 0
              ? 'The cart is empty...'
              : itemsInCart.map((item) => {
                  return (
                    <div data-cy={'item-cart'} className="item" key={item.id}>
                      <div>
                        <img src={item.img} alt="item" />
                        <p>{item.name}</p>
                      </div>
                      <div data-cy={'amount-cart'} className="quantity-buttons">
                        <QuantityButton
                          action={'decrease'}
                          item={item}
                          cart={cart}
                          products={products}
                          changeQuantity={changeQuantity}
                        />

                        <p className="amount-cart">{item.amount}</p>

                        <QuantityButton
                          action={'increase'}
                          item={item}
                          cart={cart}
                          products={products}
                          itemsInCart={itemsInCart}
                          changeQuantity={changeQuantity}
                        />
                        <RemoveFromCart
                          item={item}
                          itemsInCart={itemsInCart}
                          changeQuantity={changeQuantity}
                        />
                      </div>
                      <p>Price: {item.price}€</p>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="total">
          Total:
          {totalSum(itemsInCart)}€<br></br>
          {itemsInCart.length === 0 ? (
            ''
          ) : (
            <Link href="/payment">
              <a data-cy="checkout-button">
                <button className="checkout-button">
                  Proceed to checkout <TiArrowRight size={30} />
                </button>
              </a>
            </Link>
          )}
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 90px;
          width: 90%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          background-color: #ffffff;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        @media (max-width: 860px) {
          .container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }

        h1 {
          color: #2f3640;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 30px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        }

        a {
          text-decoration: none;
          font-size: 16px;
          color: #2f3640;
          margin-left: 20px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        p {
          font-size: 0.8rem;
        }

        a:hover {
          color: #2ed573;
        }

        .tableItems {
          /* padding: 15px; */
          text-align: center;
          color: #333;
        }

        .item {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          grid-gap: 15px;
          align-items: center;
          border-bottom: 2px solid #f3f3f3;
          font-weight: 500;
          color: #333;
          justify-items: center;
        }

        @media (max-width: 430px) {
          .item {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
        }

        .quantity-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        img {
          height: 80px;
          border-radius: 10px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        img:hover {
          transform: scale(1.05);
        }

        input {
          padding: 8px;
          border-radius: 5px;
          width: 60px;
          text-align: center;
          font-size: 16px;
          border: 1px solid #ddd;
          transition: border 0.2s ease;
        }

        input:focus {
          border: 1px solid #2ed573;
          outline: none;
        }

        .total {
          text-align: right;
          font-size: 22px;
          font-weight: 600;
          color: #2f3640;
          margin-right: 10px;
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .checkout-button {
          display: flex;
          align-items: center;
          margin-left: auto;
          background-color: white;
          color: #2f3640;
          padding: 12px 36px;
          border-radius: 5px;
          font-family: inherit;
          font-size: 1rem;
          border: 2px solid #dcdcdc;
          cursor: pointer;
          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .checkout-button:hover {
          color: #2ed573;
          border-color: #2ed573;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .checkout-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .back-to-shop {
          color: #636e72;
          font-size: 0.9rem;
          font-weight: 400;
          cursor: pointer;
          display: flex;
          align-items: center;
          width: fit-content;
          gap: 5px;
        }

        .back-to-shop:hover {
          color: #2ed573;
          text-decoration: none;
        }

        .back-to-shop:active {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #ffffff; /* Solid white */
          background: linear-gradient(
            45deg,
            #a3d9a5,
            #b2e8d1
          ); /* Softer, lighter green tones */
          background-size: 200% 200%;
          animation: gradientAnimation 10s ease infinite;
          font-family: 'DM Mono', monospace;
          color: #2f3640;
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          color: #2f3640;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
export default CartPage;

export async function getServerSideProps(context) {
  const { cart } = await nextCookies(context);
  const { getProducts } = await import('../db.js');
  const products = await getProducts();

  return {
    // will be passed to the page component as props
    props: {
      ...(cart ? { cart: cart } : undefined),
      products,
    },
  };
}
