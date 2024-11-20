import Head from 'next/head';
import React, {useEffect, useState} from 'react';
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
  const totalCart = totalSum(itemsInCart);


  useEffect(() => {
    cookie.set('total', totalCart);
  }, [itemsInCart])

  /**
   * Increase or decrease amount of one item in cart
   * @param {string} id if of the product
   * @param {number} action 0 or 1 where 0 stands for decrease and 1 for increase
   */
  const changeQuantity = (id, action) => {
    const productsMap = new Map(products.map((prod) => [prod.id, prod]));

    const updatedCart = itemsInCart.map((item) => {
      if (item.id === id) {
        const prodPrice = productsMap.get(id); // Efficient lookup

        // increase or decrease amount based on action
        let newAmount = item.amount;
        if (action === 1) {
          newAmount++; // Increase amount
        } else if (action === 0) {
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
    // update the local state with the new cart and sync with cookies
    setItemsInCart(updatedCart);
  }

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
                      {item.amount === 1 ? (
                        ''
                      ) : (
                        <QuantityButton
                          action={'decrease'}
                          item={item}
                          cart={cart}
                          products={products}
                          changeQuantity={changeQuantity}
                        />
                      )}

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

                    <RemoveFromCart item={item} itemsInCart={itemsInCart} />
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
          margin-top: 140px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          background-color: white;
          border-radius: 20px;
          padding: 10px;
        }
        h1 {
          margin-left: 15px;
        }
        a {
          text-decoration: none;
          font-size: 17px;
          color: #2f3640;
          margin-left: 20px;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }
        .backToShop {
          background-color: #2ed573;
          padding: 7px;
          border-radius: 7px;
        }
        .backToShop:hover {
          background-color: #2f3640;
          color: white;
          transition: background-color 0.3s;
        }
        .tableItems {
          padding: 10px;

          text-align: center;
          border-bottom: 1px solid #2f3640;
        }

        .headings {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 10px;
          align-items: center;
        }

        .item {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 10px;
          align-items: center;
        }

        .buttonz {
          display: flex;
          flex-direction: row;
          padding: 0px;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        img {
          height: 70px;
          align-self: center;
          margin-left: 30px;
        }
        input {
          padding: 5px;
          border-radius: 5px;
          width: 50px;
          text-align: center;
        }

        .total {
          text-align: right;
          font-size: 20px;
          margin-right: 10px;
        }

        button {
          margin-top: 40px;
          align-self: center;
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
