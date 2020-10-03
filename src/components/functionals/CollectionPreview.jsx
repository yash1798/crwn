import React from "react"

import ProductCard from "./ProductCard"

export const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
      {props.collection
        .filter((product, id) => id < 3)
        .map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
    </div>
  )
}
