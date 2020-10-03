import React from "react"
import { connect } from "react-redux"

import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../../redux/actions/cartActions"

import "../styles/CheckoutItem.css"

const CheckoutItem = (props) => {
  console.log(props)
  return (
    <div className="checkout-item">
      <img src={props.product.imageUrl} alt="item" />
      <span>{props.product.name}</span>
      <div className="quantity">
        <span
          onClick={() => props.decreaseItemQuantity(props.product)}
          className="inc"
        >
          &lt;{" "}
        </span>
        <span>{props.product.quantity}</span>
        <span
          onClick={() => props.increaseItemQuantity(props.product)}
          className="dec"
        >
          {" "}
          &gt;
        </span>
      </div>
      <span>{props.product.price}</span>
      <span className="remove" onClick={() => props.removeItem(props.product)}>
        X
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  increaseItemQuantity: (item) => dispatch(increaseItemQuantity(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
