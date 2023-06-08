import { createContext, useContext, useReducer } from "react"
import reducer from "./reducer"
import data from "./data"
import { useEffect } from "react"

const initialState = {
  isLoading: true,
  cart: data,
  totalAmount: 0,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id })
  }

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", id })
  }

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", id })
  }

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { useGlobalContext, AppProvider }
