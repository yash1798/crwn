import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import Button from "../functionals/Button"
import { CartItem } from "../functionals/CartItem"

import "../styles/CartDropdown.css"

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.length ? (
          props.cartItems.map((item) => <CartItem product={item} />)
        ) : (
          <h1 style={{ textAlign: "center" }}>No items in cart yet.</h1>
        )}
      </div>
      <Link className="go-to-checkout" to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
