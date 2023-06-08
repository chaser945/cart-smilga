import { useGlobalContext } from "../context"

const CartItem = ({ item }) => {
  const { id, title, price, img, amount } = item
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext()
  return (
    <article className="phone-article">
      <img className="phone-img" src={img} alt={title} />
      <div className="phone-article-content">
        <h4 className="phone-title">{title}</h4>
        <p className="phone-price">${price}</p>
        <button className="remove-phone" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>

      <div className="button-wrapper">
        <button className="angle-btn" onClick={() => increaseAmount(id)}>
          <i className="fa-solid fa-angle-up angle-icon"></i>
        </button>
        <p className="phone-amount">{amount}</p>
        <button className="angle-btn" onClick={() => decreaseAmount(id)}>
          <i className="fa-solid fa-angle-down angle-icon"></i>
        </button>
      </div>
    </article>
  )
}
export default CartItem
