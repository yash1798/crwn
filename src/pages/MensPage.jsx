import React, { Component } from "react"
import ProductPage from "../components/classic/ProductPage"

import SHOP_DATA from "../helpers/SHOP_DATA"

class MensPage extends Component {
  state = {
    hats: SHOP_DATA.filter((data) => data.title === "Mens"),
  }

  render() {
    // console.log(this.state.hats[0].items)
    return (
      <div>
        <ProductPage title={"Mens"} collection={this.state.hats[0].items} />
      </div>
    )
  }
}

export default MensPage
