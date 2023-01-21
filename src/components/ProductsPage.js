import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);
  const [inStock, setInStock] = useState(false);

  function handleFilterProducts(keyword) {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilteredProducts(filteredProducts);
  }

  function handleProductsInStock() {
    setInStock(!inStock);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        inStock={inStock}
        handleProductsInStock={handleProductsInStock}
        handleFilterProducts={handleFilterProducts}
      />
      {filteredProducts.map((product) => {
        return (
          <ProductTable
            handleProductsInStock={handleProductsInStock}
            products={product}
          />
        );
      })}
    </div>
  );
}

export default ProductsPage;
