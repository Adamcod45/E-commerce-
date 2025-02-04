import CartItem from './cartItem.jsx'
import CheckOut from './CheckOut.jsx'
import './Cart.css'

const Cart = ( { products, setCartArray, removeItemFromCart, addItemFromCart, subItemFromCart, count, setCount} ) => {
  return <div className="Cart-container">
    <CartItem products={products} setCartArray={setCartArray} removeItemFromCart={removeItemFromCart} count={count} setCount={setCount} addItemFromCart={addItemFromCart} subItemFromCart={subItemFromCart}/>
    <CheckOut setCartArray={setCartArray} products={products} />
  </div>
}

export default Cart