import React, { Component } from "react"

import MenuItem from "../functionals/MenuItem"

import "../styles/DirectoryMenu.css"

export default class DirectoryMenu extends Component {
  constructor() {
    super()
    this.state = {
      section: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "/mens",
        },
      ],
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, size, id, linkUrl }) => (
          <MenuItem
            title={title}
            linkUrl={linkUrl}
            size={size}
            key={id}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    )
  }
}