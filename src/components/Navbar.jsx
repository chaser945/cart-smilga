import { useEffect, useState } from "react"
import { useGlobalContext } from "../context"

const Navbar = () => {
  const { cart } = useGlobalContext()

  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const totalItemsArr = cart.map((cartItem) => {
      return cartItem.amount
    })
    let count = 0
    for (let i = 0; i < totalItemsArr.length; i++) {
      count = count + totalItemsArr[i]
    }
    setTotalItems(count)
  }, [cart])
  return (
    <nav className="nav-bar">
      <h3 className="logo">phone cart</h3>
      <div className="cart-icon-container">
        <span className="cart-items-num">{totalItems}</span>
        <i className="fa-solid fa-cart-shopping cart-icon "></i>
      </div>
    </nav>
  )
}
export default Navbar
