import React from 'react';
import { TiTrash } from 'react-icons/ti';

type Item = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};

type itemsInCart = {
  id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
  info: string;
};
type Props = {
  item: Item;
  itemsInCart: itemsInCart[];
  changeQuantity: (id: string, action: string) => void;
};

export default function RemoveFromCart(props: Props) {
  return (
    <div>
      <button
        data-cy={'remove-button'}
        onClick={() => props.changeQuantity(props.item.id, 'remove')}
      >
        <TiTrash size={25} />
      </button>
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          border: none;
          border-radius: 50%;
          background-color: #f5f5f5;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background-color: #ffcccc;
          color: #c0392b;
          transform: scale(1.1);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
