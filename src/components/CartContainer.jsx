import { useGlobalContext } from "../context"
import data from "../data"
import CartItem from "./CartItem"

const CartContainer = () => {
  const { cart, clearCart, totalAmount } = useGlobalContext()

  if (cart.length < 1) {
    return (
      <section className="cart-container">
        <h1 className="cart-title">Your bag is empty </h1>
      </section>
    )
  }

  return (
    <section className="cart-container">
      <h1 className="cart-title">your bag</h1>
      <div className="cart-item-container">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <hr />
      <div className="total-container">
        <p>total</p>
        <p>${totalAmount}</p>
      </div>

      <button className="clear-cart-btn" onClick={clearCart}>
        clear cart
      </button>
    </section>
  )
}
export default CartContainer
