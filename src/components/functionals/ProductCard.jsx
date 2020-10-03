import React from "react"
import { connect } from "react-redux"
import { addCartItem } from "../../redux/actions/cartActions"

import "../styles/ProductCard.css"
import Button from "./Button"

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.product.imageUrl})` }}
      >
        <div className="add" onClick={() => props.addCartItem(props.product)}>
          <Button>ADD TO CART</Button>
        </div>
      </div>

      <div className="product-content">
        <span className="name">{props.product.name}</span>
        <span className="price">{`$${props.product.price}`}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
})

export default connect(null, mapDispatchToProps)(ProductCard)
