import React, { Component } from "react"
import { Link } from "react-router-dom"
import { CollectionPreview } from "../components/functionals/CollectionPreview"

import SHOP_DATA from "../helpers/SHOP_DATA"

export default class ShopPage extends Component {
  constructor() {
    super()
    this.state = {
      hats: SHOP_DATA.filter((data) => data.title === "Hats"),
      sneakers: SHOP_DATA.filter((data) => data.title === "Sneakers"),
      jackets: SHOP_DATA.filter((data) => data.title === "Jackets"),
      womens: SHOP_DATA.filter((data) => data.title === "Womens"),
      mens: SHOP_DATA.filter((data) => data.title === "Mens"),
    }
  }
  render() {
    return (
      <div className="shop-page">
        <h1 className="title">Collections</h1>
        <div className="collections">
          <Link to="/hats">
            <h1 className="page-link">Hats</h1>
          </Link>
          <CollectionPreview
            title={this.state.hats[0].title}
            collection={this.state.hats[0].items}
          />
        </div>
        <div className="collections">
          <Link to="/sneakers">
            <h1 className="page-link">Sneakers</h1>
          </Link>
          <CollectionPreview
            title={this.state.sneakers[0].title}
            collection={this.state.sneakers[0].items}
          />
        </div>
        <div className="collections">
          <Link to="/jackets">
            <h1 className="page-link">Jackets</h1>
          </Link>
          <CollectionPreview
            title={this.state.jackets[0].title}
            collection={this.state.jackets[0].items}
          />
        </div>
        <div className="collections">
          <Link to="/womens">
            <h1 className="page-link">Womens</h1>
          </Link>
          <CollectionPreview
            title={this.state.womens[0].title}
            collection={this.state.womens[0].items}
          />
        </div>
        <div className="collections">
          <Link to="/mens">
            <h1 className="page-link">Mens</h1>
          </Link>
          <CollectionPreview
            title={this.state.mens[0].title}
            collection={this.state.mens[0].items}
          />
        </div>
      </div>
    )
  }
}
