export const setCartToggle = () => ({
  type: "SET_CART_TOGGLE",
})

export const addCartItem = (item) => ({
  type: "ADD_CART_ITEM",
  payload: item,
})

export const increaseItemQuantity = (item) => ({
  type: "INCREASE_ITEM_QUANTITY",
  payload: item,
})

export const decreaseItemQuantity = (item) => ({
  type: "DECREASE_ITEM_QUANTITY",
  payload: item,
})

export const removeItem = (item) => ({
  type: "DELETE_ITEM_FROM_CART",
  payload: item,
})
