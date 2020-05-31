import Link from 'next/link';
import cookie from 'js-cookie';

// const headerItems = [
//   { name: 'Home', link: '/index' },
//   { name: 'Products', link: '/products' },
//   { name: 'Cart', link: '/cartPage' },
// ];

export default function Header() {
  // let itemsInCart = cookie.get();

  return (
    <div className="wrap">
      <div className="navBar">
        <ul>
          <Link href={'/index'}>
            <a>
              <li>
                <img src="/favicon.png"></img>Bist du Teppich! Home
              </li>
            </a>
          </Link>
          <Link href={'/products'}>
            <a>
              <li>Go to shop</li>
            </a>
          </Link>
          <Link href={'/cartPage'}>
            <a>
              <li>
                <img src="/cart.png"></img>
                Items in cart:
                {cookie.get() ? cookie.get().length : 'empty'}
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <style jsx>{`
        .wrap {
          width: 100%;
          font-weight: bold;
          margin-top: 0;
          margin-left: 0;
        }

        .navBar ul {
          margin-top: 0;
          margin-left: 0;
          flex-direction: row;
          display: flex;
          align-items: center;
          justify-content: space-around;
          position: fixed;
          top: 0;
          list-style-type: none;
          background-color: white;
          width: 100%;
          border-bottom: 2px dotted #062a06;
        }

        img {
          height: 50px;
          vertical-align: middle;
        }
        ul a li {
          padding: 15px;
        }

        a {
          text-decoration: none;
          color: #062a06;
          text-shadow: 1px 1px #2f3640;
          font-size: 20px;
        }

        a:hover {
          color: #636e72;
          transition: color 0.3s;
        }
      `}</style>
    </div>
  );
}
