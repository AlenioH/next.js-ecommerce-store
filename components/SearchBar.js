import React from 'react';

export default function SearchBar(props) {
  return (
    <div>
      <form>
        <label htmlFor="searchBar">
          <input
            type="text"
            placeholder="what are you searching for?"
            onChange={props.searchFunction}
          ></input>
        </label>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        input {
          padding: 12px;
          border-radius: 7px;
          margin: 10px;
          width: 20rem;
          border-color: #e9f6ee;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
