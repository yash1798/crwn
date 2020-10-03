import React from "react"

import "../styles/CartItem.css"

export const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={`${props.product.imageUrl}`} alt="item" />
      <div className="item-content">
        <h1>{props.product.name}</h1>
        <div className="price">
          <span>{props.product.quantity}</span>
          <span>X ${props.product.price}</span>
        </div>
      </div>
    </div>
  )
}
