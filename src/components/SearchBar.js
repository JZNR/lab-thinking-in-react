import React, { useState } from 'react'

function SearchBar(props) {

  const [keyword, setKeyword] = useState("");
    
    function handleKeywordInput(event) {
        setKeyword(event.target.value);
        props.handleFilterProducts(event.target.value);
    }

    

  return (
    <div className='search-bar'>
        <span>Search</span>
        <input type="text" placeholder="Search.." onChange={handleKeywordInput} value={keyword} id="filter"/>
        <form>
            <input type="checkbox" checked={props.inStock} onChange={props.handleProductsInStock} id="inStock"/>
            <label htmlFor="inStock">Only show products in stock</label>
        </form>
    </div>
  )
}

export default SearchBar