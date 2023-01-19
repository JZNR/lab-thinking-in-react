import React from 'react'

function SearchBar({details}) {

  return (
    <div className='search-bar'>
        <span>Search</span>
        <input type="text" placeholder="Search.."/>
        <form action="">
            {/* <input type="checkbox" onChange={handleChange}/> */}
            <label htmlFor="">Only show products in stock</label>
        </form>
    </div>
  )
}

export default SearchBar