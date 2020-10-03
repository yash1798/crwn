import React from "react"
import { connect } from "react-redux"

import { ReactComponent as Cart } from "../../assets/Cart.svg"
import { setCartToggle } from "../../redux/actions/cartActions"

import "../styles/CartIcon.css"

const CartIcon = (props) => {
  console.log(props)
  return (
    <div className="cart-icon" onClick={props.setCartToggle}>
      <Cart className="cart"></Cart>
      <span className="cart-number">{props.count}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCartToggle: () => dispatch(setCartToggle()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
