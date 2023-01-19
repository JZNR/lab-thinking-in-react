import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar/>
        {products.map(product => {
            return (
                 <ProductTable products={product}/>
            )
        })}
      </div>    
  )
}

export default ProductsPage;