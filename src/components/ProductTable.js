import React from 'react'
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
                <ProductRow products={props.products}/>
        </table>
    </div>
  )
}

export default ProductTable;