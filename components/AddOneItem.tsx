import React from 'react';

type Item = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type Cart = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type Products = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type Props = { item: Item; cart: Cart[]; products: Products[], changeQuantity: (id: string, action: number) => void};

export default function AddOneItem(props: Props) {
  return (
    <div>
      <button data-cy="add-button" onClick={() => props.changeQuantity(props.item.id, 1)}>
        +
      </button>
      <style jsx>{`
        button {
          padding: 2px;
          border-radius: 10px;
          color: white;
          font-family: inherit;
          font-size: 120%;
          background-color: #2ed573;
          font-weight: bold;
          margin: auto 5px;
        }

        button:hover {
          background-color: darkgreen;
          transition: background-color 0.3s;
        }
      `}</style>
    </div>
  );
}
