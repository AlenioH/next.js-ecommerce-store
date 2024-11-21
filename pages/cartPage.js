import Head from 'next/head';
import React, { useEffect, useState } from 'react';
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
        <h1>Shopping Cart</h1>
        <Link href="/products">
          <a className="backToShop">Back to shop</a>
        </Link>
        <div className="tableItems">
          <div className="headings">
            <h4>Product</h4>
            <h4>Description</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>&nbsp;</h4>
          </div>
          {itemsInCart.length === 0
            ? 'The cart is empty...'
            : itemsInCart.map((item) => {
                return (
                  <div data-cy={'item-cart'} className="item" key={item.id}>
                    <img src={item.img} alt="item" />
                    <p>{item.name}</p>
                    <span data-cy={'amount-cart'} className="buttonz">
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
                    </span>
                    <p className="total-cart">{item.price}€</p>

                    <RemoveFromCart
                      item={item}
                      itemsInCart={itemsInCart}
                      changeQuantity={changeQuantity}
                    />
                  </div>
                );
              })}
        </div>
        <p className="total">
          Total:
          {totalSum(itemsInCart)}€<br></br>
          {itemsInCart.length === 0 ? (
            ''
          ) : (
            <Link href="/payment">
              <a data-cy="checkout-button">
                <button>Proceed to checkout</button>
              </a>
            </Link>
          )}
        </p>
      </div>
      <Footer />
      <style jsx>{`
        .container {
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

        .container:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        h1 {
          color: #2f3640;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 30px;
          text-align: center;
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

        a:hover {
          color: #2ed573;
          text-decoration: underline;
        }

        .backToShop {
          background-color: #2ed573;
          padding: 10px 20px;
          border-radius: 20px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          color: white;
          display: inline-block;
          transition:
            background-color 0.3s ease,
            transform 0.2s ease;
        }

        .backToShop:hover {
          background-color: #1e7a3b;
          transform: translateY(-3px);
        }

        .tableItems {
          padding: 15px;
          text-align: center;
          border-bottom: 2px solid #ececec;
          background-color: #f9f9f9;
          font-size: 16px;
          color: #333;
        }

        .headings {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 15px;
          align-items: center;
          font-weight: 600;
          text-transform: uppercase;
          color: #2f3640;
        }

        .item {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 15px;
          align-items: center;
          padding: 15px 0;
          border-bottom: 2px solid #f3f3f3;
          font-weight: 500;
          color: #333;
        }

        .buttonz {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
        }

        img {
          height: 80px;
          width: 80px;
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
          margin-top: 30px;
        }

        button {
          align-self: center;
          background-color: #2ed573;
          padding: 15px 30px;
          border-radius: 30px;
          color: white;
          font-family: inherit;
          font-size: 1.2rem;
          font-weight: 600;
          transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        }

        button:hover {
          background-color: #1e7a3b;
          transform: translateY(-2px);
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
