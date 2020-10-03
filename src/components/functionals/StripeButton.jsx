import React from "react"
import StripeCheckout from "react-stripe-checkout"

import Logo from "../../assets/Logo.svg"

const StripeButton = (props) => {
  const priceInCents = props.price * 100
  const onToken = (token) => console.log(token)
  const publicKey =
    "pk_test_51HKqhXJy6hsb4M3kgedfVyc7smamSNneNKwMuzXq16o4hJM01rLGSWqYdKjxbWb9Ik3Iq6E9nHNJ5l3O3wpIYskh00AnKK1jNO"
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your cart total is ${props.price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  )
}

export default StripeButton
