import React, { Component, Fragment } from "react"
import { connect } from "react-redux"

import CheckoutItem from "../components/functionals/CheckoutItem"
import StripeButton from "../components/functionals/StripeButton"

import "../components/styles/Checkout.css"

class Checkout extends Component {
  calculateTotal = () => {
    const { cartItems } = this.props
    if (cartItems.length) {
      var total = cartItems.reduce(
        (accumulatedValue, item) => accumulatedValue + item.price,
        0
      )
      return (
        <Fragment>
          <h1 style={{ fontSize: "5rem" }}>Total: ${total} </h1>
          <StripeButton price={total} />{" "}
        </Fragment>
      )
    }

    return null
  }
  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        <div className="checkout-items">
          {this.props.cartItems.length ? (
            this.props.cartItems.map((item) => <CheckoutItem product={item} />)
          ) : (
            <h1
              style={{
                textAlign: "center",
                fontSize: "5rem",
                marginTop: "5rem",
              }}
            >
              Add Items in your cart.
            </h1>
          )}
        </div>
        {this.calculateTotal()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(Checkout)
