export const addItem = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrease.id
  )

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToDecrease.id)
  }
  return cartItems.map((item) =>
    item.id === cartItemToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}
