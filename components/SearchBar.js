import React, { useState } from 'react';

//use state to store the input
//return name to lower case that include this target value

//split("") methods makes letters out of words
//with split - no matches
//with .includes = returns true if the entire word is written

export default function SearchBar(props) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('not active');
  //need to put it in parent

  const productNames = props.products.map((item) => item.name.toLowerCase());
  console.log(productNames);

  function searchFunction(e) {
    setSearch(e.target.value);
    setFilter('active');
    let filteredProd = productNames.filter((item) =>
      item.includes(search.toLowerCase()),
    );
    console.log(filteredProd);
  }
  //ok this kinda works
  //need to think how i want to display the items

  return (
    <div>
      <label htmlFor="searchBar">
        <input
          type="text"
          placeholder="what are you searching for?"
          onChange={searchFunction}
        ></input>
      </label>
    </div>
  );
}
