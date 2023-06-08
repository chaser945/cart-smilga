const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] }
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.id),
    }
  }

  if (action.type === "INCREASE_AMOUNT") {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.id) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      }),
    }
  }

  if (action.type === "DECREASE_AMOUNT") {
    return {
      ...state,
      cart: state.cart
        .map((cartItem) => {
          if (cartItem.id === action.id) {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem
        })
        .filter((cartItem) => {
          return cartItem.amount > 0
        }),
    }
  }

  if (action.type === "TOTAL_AMOUNT") {
    let amountSum = state.cart.reduce((acc, curr) => {
      const { amount, price } = curr
      const articlePriceSum = amount * price
      acc = acc + articlePriceSum
      return acc
    }, 0)
    amountSum = amountSum.toFixed(2)
    return {
      ...state,
      totalAmount: amountSum,
    }
  }

  return state
}
export default reducer
