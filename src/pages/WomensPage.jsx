import React, { Component } from "react"
import ProductPage from "../components/classic/ProductPage"

import SHOP_DATA from "../helpers/SHOP_DATA"

class WomensPage extends Component {
  state = {
    hats: SHOP_DATA.filter((data) => data.title === "Womens"),
  }

  render() {
    // console.log(this.state.hats[0].items)
    return (
      <div>
        <ProductPage title={"Womens"} collection={this.state.hats[0].items} />
      </div>
    )
  }
}

export default WomensPage
