import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { auth } from "../../firebase/firebase"

import { ReactComponent as Logo } from "../../assets/Logo.svg"
import CartIcon from "../functionals/CartIcon"
import CartDropdown from "../functionals/CartDropdown"

import "../styles/Header.css"

class Header extends Component {
  renderSignIn = () => {
    return this.props.currentUser ? (
      <Fragment>
        <Link to="/" className="nav-link" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      </Fragment>
    ) : (
      <Link to="/signin" className="nav-link">
        SIGN IN
      </Link>
    )
  }
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo"></Logo>
        </Link>
        <div className="nav-items">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {this.renderSignIn()}
          <CartIcon count={this.props.itemCount} />
          {this.props.hidden ? <CartDropdown /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
  itemCount: state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
})

export default connect(mapStateToProps)(Header)
