import React from 'react'

function ProductRow(props) {
  return (
    <>
    {props.showInStock && props.products.inStock ? (
        <tr key={props.products.id}>
            <td>{props.products.name}</td>
            <td>{props.products.price}</td>
        </tr>
    ) : (
      <>
      <tr key={props.products.id}>
            <td>{props.products.name}</td>
            <td>{props.products.price}</td>
        </tr>
      </>
    )}
    </>
  )
}

export default ProductRow;