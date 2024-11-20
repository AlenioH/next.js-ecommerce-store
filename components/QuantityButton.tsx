import React from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";

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

type Props = { action: string, item: Item; cart: Cart[]; products: Products[], changeQuantity: (id: string, action: number) => void};

export default function AddOneItem(props: Props) {
  return (
    <div>
      <button data-cy={props.action === 'increase' ? 'add-button' : 'reduce-button'} onClick={() => props.changeQuantity(props.item.id, props.action === 'increase' ? 1 : 0)}>
        { props.action === 'increase' ? <TiPlus size={25}/> : <TiMinus size={25}/>}
      </button>
      <style jsx>{`
        button {
          all: unset;
          display: flex;
          align-items: center;
          margin: auto 5px;
          cursor: pointer;
        }

        button:hover {
          transition: transform 0.3s;
          transform: translateY(2px);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}
