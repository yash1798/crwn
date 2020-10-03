import React from "react"
import { withRouter } from "react-router-dom"

import "../styles/MenuItem.css"

const MenuItems = ({ title, imageUrl, linkUrl, size, history, match }) => {
  console.log(match)
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItems)
