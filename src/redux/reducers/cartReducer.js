import { addItem, decreaseItemQuantity } from "../../helpers/cartHelpers"

const initialState = {
  hidden: false,
  cartItems: [],
}

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "SET_CART_TOGGLE": {
      return {
        ...state,
        hidden: !state.hidden,
      }
    }
    case "ADD_CART_ITEM": {
      return {
        ...state,
        cartItems: addItem(state.cartItems, payload),
      }
    }
    case "DELETE_ITEM_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      }
    }

    case "INCREASE_ITEM_QUANTITY": {
      return {
        ...state,
        cartItems: addItem(state.cartItems, payload),
      }
    }

    case "DECREASE_ITEM_QUANTITY": {
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, payload),
      }
    }

    default: {
      return state
    }
  }
}

export default cartReducer
