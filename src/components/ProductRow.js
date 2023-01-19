import React from 'react'

function ProductRow(props) {
  return (
        <tr key={props.products.id}>
            <td>{props.products.name}</td>
            <td>{props.products.price}</td>
        </tr>
  )
}

export default ProductRow;