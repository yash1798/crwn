import React, { Component } from "react"

import ProductCard from "../functionals/ProductCard"

import "../styles/ProductPage.css"

class ProductPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="product-page">
        <h1>{this.props.title}</h1>
        <div className="product-items">
          {this.props.collection.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductPage
