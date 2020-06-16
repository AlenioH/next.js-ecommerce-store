import React from 'react';

//use state to store the input
//return name to lower case that include this target value

export default function SearchBar(props) {
  //need to put it in parent

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
        <div className="buttons">
          <button onClick={props.clickSearch}>search!</button>
          <button onClick={props.showAll}>show all</button>
        </div>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px;
        }
        input {
          padding: 12px;
          border-radius: 7px;
          margin: 10px;
          width: 20rem;
          border-color: #e9f6ee;
          font-size: 1.2rem;
        }
        button {
          font-weight: bold;
          text-align: center;
          background-color: #2ed573;
          padding: 5px;
          border-radius: 10px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          margin: 5px;
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
          color: #2f3640;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
