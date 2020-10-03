import React from "react"

import "../styles/Button.css"

export default function Button({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
